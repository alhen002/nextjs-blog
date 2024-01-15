import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

const imageBuilder = createImageUrlBuilder({
  projectId: process.env.SANITY_PROJECT_ID as string,
  dataset: process.env.SANITY_DATASET as string,
});

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto("format").fit("max").url();
};
