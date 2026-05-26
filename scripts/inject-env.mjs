import { writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const REDIRECTS_PATH = path.join(ROOT, "_redirects");

function buildRedirects(partnerShopUrl) {
  const target = partnerShopUrl || "/kontakt/";
  return [
    `/webshop    ${target}    302`,
    `/webshop/   ${target}    302`,
    "",
  ].join("\n");
}

async function main() {
  const partnerShopUrl = (process.env.PARTNER_SHOP_URL || "").trim();

  await writeFile(REDIRECTS_PATH, buildRedirects(partnerShopUrl), "utf8");

  const mode = partnerShopUrl ? "enabled" : "fallback to /kontakt/";
  console.log(`inject-env: partner shop ${mode}; wrote _redirects.`);
}

main().catch((error) => {
  console.error("inject-env failed:", error);
  process.exit(1);
});
