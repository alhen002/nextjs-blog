import { HomeIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "general",
  title: "General",
  type: "document",
  icon: HomeIcon,
  groups: [
    {
      name: "header",
      title: "Header",
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
      group: "header",
      validation: (rule: any) => rule.required(),
    },
    {
      name: "description",
      description: "Used for the personal website subheader.",
      title: "Description",
      type: "blockContent",
      group: "header",
    },
    {
      name: "showcase_project",
      description:
        "Select a Project, referenced as a showcase project underneath the header.",
      title: "Showcase Project",
      type: "reference",
      to: [{ type: "projects" }],
      group: "header",
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
    {
      name: "media",
      description: "Select the images shown on the homepage slider.",
      type: "array",
      group: "media",
      of: [
        {
          name: "image",
          type: "image",
          title: "Image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
          ],
        },
      ],
      options: {
        layout: "grid",
      },
    },
    {
      name: "caption",
      title: "Caption",
      description: "Caption shown underneath the Image Slider.",
      type: "blockContent",
      group: "media",
    },
  ],
});
