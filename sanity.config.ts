import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: "Jayesh_Content_Studio",
  title: "Jayesh Content Studio",
  projectId: "ircnbyxj",
  dataset: "production",

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
