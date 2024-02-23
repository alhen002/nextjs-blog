import Heading from "@/components/ui/Heading";
import Socials from "@/components/footer/Socials";
import Card from "@/components/ui/Card";
import ImageSlider from "@/components/ui/ImageSlider";
import { ArrowUpRight, Instagram } from "lucide-react";
import CardWrapper from "@/components/ui/CardWrapper";
import { GENERAL_QUERY, MEDIA_QUERY } from "@/lib/sanity.queries";
import { General } from "@/lib/types";
import { CustomPortableText } from "@/components/backend/CustomPortableText";
import { client } from "@/lib/sanity.client";
import { Suspense } from "react";
import Loading from "@/app/(frontend)/loading";
import { Metadata } from "next";
//TODO: WORK ON PROPER REVALIDATION
export const revalidate = 0;

async function Images() {
  const { media } = await client.fetch(MEDIA_QUERY);
  return <ImageSlider images={media} />;
}

export async function generateMetadata(): Promise<Metadata> {
  const general = await client.fetch<General>(GENERAL_QUERY);

  return {
    title: general.seo_title,
    description: general.seo_description,
  };
}

export default async function Home() {
  const general = await client.fetch<General>(GENERAL_QUERY);

  return (
    <>
      <section
        className={
          "animate-fade-in-top flex flex-col gap-6 max-w-lg mx-auto z-20"
        }
      >
        <Heading>{general.title}</Heading>
        <CustomPortableText value={general.description} />
        {general.showcase_project ? (
          <Card
            title={general.showcase_project.title}
            href={general.showcase_project.github_uri}
            tags={general.showcase_project.tags}
            className={"group"}
            icon={<ArrowUpRight className="group-hover:animate-rotate" />}
          />
        ) : null}
        <Suspense fallback={<Loading />}>
          <Images />
        </Suspense>
        <CustomPortableText value={general.caption} />
        <Socials />
      </section>
    </>
  );
}
