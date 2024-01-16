import Paragraph from "@/components/ui/Paragraph";
import Heading from "@/components/ui/Heading";
import Form from "@/components/body/Form";
import { client } from "@/lib/sanity.client";
import { CONTACT_QUERY, GENERAL_QUERY } from "@/lib/sanity.queries";
import { CustomPortableText } from "@/components/backend/CustomPortableText";
import { Contact } from "@/lib/types";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const contact = await client.fetch<Contact>(CONTACT_QUERY);

  return {
    title: contact.seo_title,
    description: contact.seo_description,
  };
}

export default async function ContactPage() {
  const contact: Contact = await client.fetch(CONTACT_QUERY);

  return (
    <section
      className={"animate-fade-in-top max-w-lg mx-auto flex flex-col gap-6"}
    >
      <Heading>{contact.title}</Heading>
      <CustomPortableText value={contact.description} />
      <Form />
    </section>
  );
}
