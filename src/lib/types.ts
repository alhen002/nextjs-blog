import type { Image } from "sanity";

interface Base {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}

export interface General extends Base {
  title: string;
  showcase_project: Project;
  description: Block[];
  caption: Block[];
  media: Image[];
  seo_title: string;
  seo_description: string;
}

export interface Contact extends Base {
  title: string;
  description: Block[];
  seo_title: string;
  seo_description: string;
}
export interface Project extends Base {
  title: string;
  tags: string[];
  github_uri: string;
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
