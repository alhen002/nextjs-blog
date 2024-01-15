import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";

import general from "./schemas/general";
import settings from "@/sanity/schemas/settings";
import projects from "@/sanity/schemas/projects";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [general, projects, settings, blockContent],
};
