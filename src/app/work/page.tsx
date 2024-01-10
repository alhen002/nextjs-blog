import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Card from "@/components/Card";

function WorkPage() {
  return (
    <section
      className={"animate-fade-in-top max-w-lg lg:mx-auto flex flex-col gap-6"}
    >
      <Heading>projects i worked on in the past</Heading>

      <Paragraph>maybe just a small intro text here</Paragraph>
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  );
}

export default WorkPage;
