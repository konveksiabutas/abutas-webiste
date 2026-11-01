import { getSanityClient } from "../src/lib/sanity/client.ts";
import { publishedArticlesQuery, publishedPortfolioQuery } from "../src/lib/sanity/queries.ts";

async function check() {
  const client = getSanityClient();
  if (!client) {
    console.error("Sanity client is null.");
    process.exit(1);
  }

  const queryAll = `*[_id in [
    "42e7e3b1-ea38-4242-a504-fe7e4df27977",
    "drafts.42e7e3b1-ea38-4242-a504-fe7e4df27977",
    "1332b1df-51c0-4998-9d56-428b36f787cb",
    "drafts.1332b1df-51c0-4998-9d56-428b36f787cb"
  ]]{ _id, _type, title, contentStatus, _createdAt, _updatedAt }`;

  const docs = await client.fetch(queryAll);
  console.log("Documents found by ID match:");
  console.log(JSON.stringify(docs, null, 2));

  const publishedArticles = await client.fetch(publishedArticlesQuery);
  const publishedPortfolios = await client.fetch(publishedPortfolioQuery);

  console.log("\nPublished Articles matching query:", publishedArticles.length);
  console.log("Published Portfolios matching query:", publishedPortfolios.length);
}

check().catch(console.error);
