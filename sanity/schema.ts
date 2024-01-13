import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import post from "./schemas/post";
import author from "./schemas/author";
import general from "./schemas/general";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [general, post, author, category, blockContent],
};
