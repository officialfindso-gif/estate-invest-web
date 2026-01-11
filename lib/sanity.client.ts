import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "lger7pur",
  dataset: "production",
  apiVersion: "2026-01-10",
  useCdn: true,
});
