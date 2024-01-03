import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
import { table } from "@sanity/table";

const config = defineConfig({
  projectId: "v1ithwqy",
  dataset: "production",
  title: "Admin Panel",
  apiVersion: "2023-03-04",
  basePath: "/admin",
  plugins: [deskTool(), table()],
  schema: { types: schemas },
});
export default config;
