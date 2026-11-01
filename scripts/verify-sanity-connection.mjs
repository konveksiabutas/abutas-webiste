import { createClient } from "@sanity/client";
import dotenv from "node:fs";

// Load .env.local if present
const envLocalPath = "./.env.local";
let projectId = "0ahnrkj4";
let dataset = "production";

try {
  const content = dotenv.readFileSync(envLocalPath, "utf-8");
  for (const line of content.split("\n")) {
    const [k, v] = line.trim().split("=");
    if (k === "NEXT_PUBLIC_SANITY_PROJECT_ID") projectId = v;
    if (k === "NEXT_PUBLIC_SANITY_DATASET") dataset = v;
  }
} catch {
  // ignore
}

console.log(`Connecting to Sanity: Project ID=${projectId}, Dataset=${dataset}`);

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  useCdn: false,
});

async function main() {
  try {
    const articles = await client.fetch('*[_type == "article"]');
    const portfolios = await client.fetch('*[_type == "portfolio"]');
    console.log(`Articles in ${dataset}: ${articles.length}`);
    console.log(`Portfolios in ${dataset}: ${portfolios.length}`);
    if (articles.length > 0) {
      console.log('Sample article:', articles[0].title, 'status:', articles[0].contentStatus);
    }
    if (portfolios.length > 0) {
      console.log('Sample portfolio:', portfolios[0].title, 'status:', portfolios[0].contentStatus, 'clientPermission:', portfolios[0].clientPermissionReleased);
    }
  } catch (error) {
    console.error("Fetch failed:", error.message);
  }
}

main();
