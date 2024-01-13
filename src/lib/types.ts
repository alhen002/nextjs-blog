interface Base {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}

export interface General extends Base {
  title: string;
  description: Block[];
}

export interface Block extends Base {
  _type: "block";
  style: "normal" | "h1" | "h2" | "h3" | "h4";
  children: Span[];
  _key: string;
  markDefs: any[];
}

export interface Span extends Base {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
}
