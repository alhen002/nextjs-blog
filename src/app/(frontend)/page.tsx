import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Socials from "@/components/footer/Socials";
import Card from "@/components/ui/Card";
import ImageSlider from "@/components/ui/ImageSlider";
import { ArrowUpRight, Instagram } from "lucide-react";
import CardWrapper from "@/components/ui/CardWrapper";
import { GENERAL_QUERY } from "@/lib/sanity.queries";
import { General } from "@/lib/types";
import { CustomPortableText } from "@/components/backend/CustomPortableText";
import { sanityFetch } from "@/lib/sanity.fetch";

export default async function Home() {
  const general: General = await sanityFetch({
    query: GENERAL_QUERY,
    tags: ["general"],
  });

  return (
    <>
      <section
        className={"animate-fade-in-top flex flex-col gap-6 max-w-lg mx-auto"}
      >
        <Heading>{general.title}</Heading>
        <CustomPortableText value={general.description} />
        <Card
          title="avoconnect"
          href="https://github.com/alhen002/avoconnect"
          subtitle="NEXT.JS"
          className={"group"}
          icon={<ArrowUpRight className="group-hover:animate-rotate" />}
        />
        <ImageSlider images={["me.webp", "crash.jpeg", "dackel.jpeg"]} />
        <Paragraph>
          Although it&apos;s been decades since i was actively posting on social
          media, i spend most of my time on the ones below. I would love to get
          in touch.
        </Paragraph>
        <CardWrapper />
        <Socials />
      </section>
    </>
  );
}
