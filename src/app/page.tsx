import Image from "next/image";
import Heading from "@/components/Heading";
import Link from "next/link";
import Paragraph from "@/components/Paragraph";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <>
      <section className={"animate-fade-in flex flex-col gap-6"}>
        <Heading>hello, i&apos;m alhen002 👋</Heading>
        <Paragraph>
          i&apos;m a software developer and ecommerce enthusiast based in
          vienna. I&apos;m obsessed with any tech related stuff, mangas & lps. i
          currently{" "}
          <Link className={"underline"} href={"/work"}>
            work
          </Link>{" "}
          on a small saas that will help people managing their orders from the
          fair-fashion marketplace{" "}
          <Link className={"underline"} href={"https://avocadostore.de"}>
            avocadostore
          </Link>
          .
        </Paragraph>

        <Image
          src={"/me.webp"}
          alt="this is me"
          width={765}
          height={765}
          className="grayscale rounded-lg"
        />
        <Socials />
      </section>
    </>
  );
}
