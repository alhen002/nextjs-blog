import { DocumentIcon } from "@sanity/icons";
import { defineType } from "sanity";

export default defineType({
  name: "contact",
  title: "Contact",
  type: "document",
  icon: DocumentIcon,
  groups: [
    {
      name: "info",
      title: "Information",
    },
    {
      name: "seo",
      title: "SEO",
    },
    {
      name: "media",
      title: "Media",
    },
  ],
  fields: [
    {
      name: "title",
      description: "This field is the title of your personal website.",
      title: "Title",
      type: "string",
      group: "info",
      validation: (rule: any) => rule.required(),
    },
    {
      name: "description",
      description: "Used for the personal website subheader.",
      title: "Description",
      type: "blockContent",
      group: "info",
    },
    {
      name: "seo_title",
      description: "SEO title",
      title: "Title",
      type: "string",
      group: "seo",
      validation: (rule: any) =>
        rule.max(60).warning("Max Length 60 characters."),
    },
    {
      name: "seo_description",
      description: "SEO meta description",
      title: "Description",
      type: "string",
      group: "seo",
      validation: (rule: any) =>
        rule.max(300).warning("Max Length 300 characters."),
    },
  ],
});
