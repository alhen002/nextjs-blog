import Image from "next/image";
import Heading from "@/components/Heading";
import Link from "next/link";
import Paragraph from "@/components/Paragraph";
import Socials from "@/components/Socials";
import Card from "@/components/Card";
import ImageSlider from "@/components/ImageSlider";
import { ArrowUpRight, Instagram } from "lucide-react";

export default function Home() {
  return (
    <>
      <section
        className={"animate-fade-in-top flex flex-col gap-6 max-w-lg mx-auto"}
      >
        <Heading>hello, i&apos;m alhen002 👋</Heading>
        <Paragraph>
          i&apos;m a software developer and ecommerce enthusiast based in
          vienna. I&apos;m obsessed with any tech related stuff, mangas & lps. i
          currently work on a small saas that will help people managing their
          orders from the fair-fashion marketplace{" "}
          <Link className={"underline"} href={"https://avocadostore.de"}>
            avocadostore
          </Link>
          . If you want to follow along, checkout the github repo below.
        </Paragraph>
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
        <Card
          image={"/dackel.jpeg"}
          href="https://instagram.com/alhen002"
          title="@alhen002"
          icon={<Instagram strokeWidth={1.25} />}
        />
        <Socials />
      </section>
    </>
  );
}
