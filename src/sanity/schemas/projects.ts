import { defineType } from "sanity";
import { CubeIcon } from "@sanity/icons";
export default defineType({
  name: "projects",
  title: "Projects",
  type: "document",
  icon: CubeIcon,
  groups: [
    {
      name: "project_information",
      title: "Project Information",
    },
    {
      name: "repository",
      title: "Repository",
    },
  ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      group: "project_information",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      group: "project_information",
    },
    {
      name: "github_uri",
      title: "GitHub URL",
      type: "string",
      validation: (rule: any) => rule.required(),
      group: "repository",
    },
  ],
});
