import { defineField, defineType } from "sanity";
import { CogIcon } from "@sanity/icons";

export default defineType({
  name: "settings",
  title: "Settings",
  type: "document",
  icon: CogIcon,
  groups: [
    {
      name: "general",
      title: "General",
    },
    {
      name: "pages",
      title: "Pages",
    },
  ],
  fields: [
    {
      name: "pages",
      title: "Pages",
      type: "array",
      of: [
        {
          name: "Page",
          title: "page",
          type: "object",
          groups: [
            {
              name: "general",
              title: "General",
            },
            {
              name: "seo",
              title: "SEO",
            },
          ],

          fields: [
            {
              name: "p_name",
              title: "Page Name",
              type: "string",
              group: "general",
            },
            {
              name: "p_slug",
              title: "Page Slug",
              type: "slug",
              group: "general",
            },
          ],
        },
      ],
      group: "general",
    },
  ],
});
