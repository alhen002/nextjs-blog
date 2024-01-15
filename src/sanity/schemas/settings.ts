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
  ],
  fields: [
    { name: "asdf", title: "Title", type: "string", group: "general" },
    { name: "asdf2", title: "Title", type: "string", group: "general" },
  ],
});
