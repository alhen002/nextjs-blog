import { groq } from "next-sanity";
export const GENERAL_QUERY = groq`
*[_type == "general"][0]{
...,
showcase_project->
}
`;

export const MEDIA_QUERY = groq`
*[_type == "general"][0]{
      media,
}
`;
export const CONTACT_QUERY = groq`
*[_type == "contact"][0]
`;
