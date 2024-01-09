import React from "react";

interface ParagraphProps {
  children: React.ReactNode;
}

function Paragraph({ children }: ParagraphProps) {
  return <p className={"prose prose-neutral dark:prose-invert"}>{children}</p>;
}

export default Paragraph;
