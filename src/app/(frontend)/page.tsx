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
import { client } from "@/lib/sanity.client";

//TODO: WORK ON PROPER REVALIDATION
export const revalidate = 0;

export default async function Home() {
  const general = await client.fetch<General>(GENERAL_QUERY);

  return (
    <>
      <section
        className={"animate-fade-in-top flex flex-col gap-6 max-w-lg mx-auto"}
      >
        <Heading>{general.title}</Heading>
        <CustomPortableText value={general.description} />
        <Card
          title={general.showcase_project.title}
          href={general.showcase_project.github_uri}
          tags={general.showcase_project.tags}
          className={"group"}
          icon={<ArrowUpRight className="group-hover:animate-rotate" />}
        />
        <ImageSlider images={general?.media} auto />
        <CustomPortableText value={general.caption} />
        <CardWrapper />
        <Socials />
      </section>
    </>
  );
}
