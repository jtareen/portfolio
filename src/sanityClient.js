import { createClient } from "@sanity/client";

export default createClient({
  projectId: "vs50pzf8",
  dataset: "production",
  useCdn: true, // true for fast response, false for freshest data
  apiVersion: "2024-01-01",
});