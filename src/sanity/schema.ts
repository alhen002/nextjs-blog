import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";

import home from "./schemas/home";
import settings from "@/sanity/schemas/settings";
import projects from "@/sanity/schemas/projects";
import contact from "@/sanity/schemas/contact";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [home, contact, projects, settings, blockContent],
};
