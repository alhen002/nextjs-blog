import Image from "next/image";
import Heading from "@/components/Heading";
import Link from "next/link";
import Paragraph from "@/components/Paragraph";

export default function Home() {
  return (
    <>
      <section className={"animate-fade-in"}>
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
      </section>
    </>
  );
}
