"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function handleSubmit(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  await sendMail(name, email, message);

  revalidatePath("/contact");
  redirect("/confirm");
}

export async function sendMail(name: string, email: string, message: string) {
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["a.henting@posteo.de"],
    subject: `Contact Form | ${name}`,
    react: EmailTemplate({ email, name, message }),
  });
}
