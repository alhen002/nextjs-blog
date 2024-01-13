import { groq } from "next-sanity";
export const generalQuery = groq`
  *[_type == "general"][0]{
    title,
    description,
  }
`;
