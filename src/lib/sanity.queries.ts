import { groq } from "next-sanity";
export const GENERAL_QUERY = groq`
*[_type == "general"][0]{
    title,
    description,
    caption,
    media,
    showcase_project->
}
`;
