import { HomeIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "general",
  title: "General",
  type: "document",
  icon: HomeIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: "title",
      description: "This field is the title of your personal website.",
      title: "Title",
      type: "string",
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: "description",
      description: "Used for the personal website subheader.",
      title: "Description",
      type: "blockContent",
    }),
  ],
});
