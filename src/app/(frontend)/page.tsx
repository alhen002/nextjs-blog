import Image from "next/image";
import Heading from "@/components/Heading";
import Link from "next/link";
import Paragraph from "@/components/Paragraph";
import Socials from "@/components/Socials";
import Card from "@/components/Card";
import ImageSlider from "@/components/ImageSlider";
import { ArrowUpRight, Instagram } from "lucide-react";
import CardWrapper from "@/components/CardWrapper";
import { client } from "../../../sanity/lib/client";
import { generalQuery } from "../../../sanity/lib/queries";
import { General } from "@/lib/types";
import { CustomPortableText } from "@/components/CustomPortableText";
export const revalidate = 30;
export default async function Home() {
  const general: General = await client.fetch(generalQuery);

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
