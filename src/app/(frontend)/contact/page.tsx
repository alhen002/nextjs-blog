import Paragraph from "@/components/ui/Paragraph";
import Heading from "@/components/ui/Heading";
import Form from "@/components/body/Form";
import Image from "next/image";

export default function ContactPage() {
  return (
    <section
      className={"animate-fade-in-top max-w-lg mx-auto flex flex-col gap-6"}
    >
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
