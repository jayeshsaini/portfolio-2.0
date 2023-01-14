import { defineCliConfig } from "sanity/cli";

// let projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
// let dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineCliConfig({
  api: {
    projectId: "ircnbyxj",
    dataset: "production",
  },
});
