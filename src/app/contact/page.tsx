import Paragraph from "@/components/Paragraph";
import Heading from "@/components/Heading";
import Form from "@/components/Form";
import Image from "next/image";

function ContactPage() {
  return (
    <section className={"animate-fade-in-top max-w-lg mx-auto"}>
      <Heading>let&apos;s sit for a quick coffee</Heading>

      <Paragraph>
        i&apos;m already curious to hear about your plans, doesn&apos;t matter
        if it&apos;s an online store, physical retail or a new digital strategy.
        i am sure i can give support.
      </Paragraph>
      <Form />
    </section>
  );
}

export default ContactPage;
