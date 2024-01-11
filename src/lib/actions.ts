"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";
import { MessageSchema } from "@/lib/definitions";

const resend = new Resend(process.env.RESEND_API_KEY);

export type State = {
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
};

export async function sendMessage(
  prevState: State,
  formData: FormData,
): Promise<State> {
  const validatedFields = MessageSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    const errors = validatedFields.error.flatten().fieldErrors;
    return {
      errors: errors,
    };
  }

  const { message, email, name } = validatedFields.data;
  // async operation here
  await sendMail(name, email, message);

  // Revalidate the cache for contact page and redirect the user to the confirm page.
  revalidatePath("/contact");
  redirect("/confirm");
}

export async function sendMail(
  name: string,
  email: string,
  message: string,
  to: string = "hi@alexanderhenting.info",
) {
  const { data, error } = await resend.emails.send({
    from: "ALEX <hi@alexanderhenting.info>",
    to: [to],
    subject: `Contact Form | ${name}`,
    react: EmailTemplate({ email, name, message }),
  });
}
