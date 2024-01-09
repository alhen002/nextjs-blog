import React from "react";
import Paragraph from "@/components/Paragraph";
import Link from "next/link";

function Page() {
  return (
    <section className={"animate-fade-in text-center flex flex-col gap-4"}>
      <Paragraph>
        Your Email has been sent successfully.✨
        <br />I will get in contact soon.
      </Paragraph>
      <Link className="underline" href="/">
        Back Home
      </Link>
    </section>
  );
}

export default Page;