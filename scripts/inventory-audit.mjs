import { createClient } from "@sanity/client";

const projectId = "0ahnrkj4";

async function auditDataset(dataset) {
  const client = createClient({
    projectId,
    dataset,
    apiVersion: "2024-01-01",
    useCdn: false,
  });

  try {
    const allDocs = await client.fetch('*[!(_id in path("_.**"))]');
    console.log(`\n========================================`);
    console.log(`DATASET: ${dataset.toUpperCase()} (Total Documents: ${allDocs.length})`);
    console.log(`========================================`);

    const summary = allDocs.map((doc) => {
      const isDraft = doc._id.startsWith("drafts.");
      return {
        dataset,
        id: doc._id,
        type: doc._type,
        title: doc.title || "(no title)",
        slug: doc.slug?.current || "(no slug)",
        contentStatus: doc.contentStatus || "(none)",
        publishState: isDraft ? "DRAFT (Unpublished)" : "PUBLISHED",
        clientPermissionReleased: doc._type === "portfolio" ? doc.clientPermissionReleased : "N/A",
        createdAt: doc._createdAt,
        updatedAt: doc._updatedAt,
      };
    });

    console.table(summary);
    return summary;
  } catch (err) {
    console.error(`Failed to audit dataset '${dataset}':`, err.message);
    return [];
  }
}

async function main() {
  console.log("Starting Sanity Production & Staging Safety Audit...");
  await auditDataset("staging");
  await auditDataset("production");
}

main();
