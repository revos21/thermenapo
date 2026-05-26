import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const REDIRECTS_PATH = path.join(ROOT, "_redirects");
const WEBSHOP_HTML_PATH = path.join(ROOT, "webshop", "index.html");

const SHOP_LINK_FILES = [
  "index.html",
  "ueber-uns/index.html",
  "leistungen/index.html",
  "team/index.html",
  "kontakt/index.html",
  "produkte/index.html",
  "produkte/kosmetik/index.html",
  "produkte/aromatherapie/index.html",
  "produkte/naturprodukte/index.html",
  "produkte/homoeopathie/index.html",
  "produkte/immunsystemstaerkung/index.html",
];

const WEBSHOP_HREF = 'href="/webshop/"';
const META_REFRESH_RE = /<meta http-equiv="refresh" content="[^"]*">/;
const LOCATION_SCRIPT_RE =
  /\s*<script>window\.location\.replace\([^)]*\);<\/script>\n?/;

function buildRedirects(partnerShopUrl) {
  const target = partnerShopUrl || "/kontakt/";
  // 302! = force redirect even when webshop/index.html exists (Netlify serves static files first by default)
  return [
    `/webshop    ${target}    302!`,
    `/webshop/   ${target}    302!`,
    "",
  ].join("\n");
}

async function updateWebshopPage(partnerShopUrl) {
  let html = await readFile(WEBSHOP_HTML_PATH, "utf8");

  if (partnerShopUrl) {
    html = html.replace(
      META_REFRESH_RE,
      `<meta http-equiv="refresh" content="0;url=${partnerShopUrl}">`,
    );
    const script = `<script>window.location.replace(${JSON.stringify(partnerShopUrl)});</script>`;
    if (LOCATION_SCRIPT_RE.test(html)) {
      html = html.replace(LOCATION_SCRIPT_RE, `\n  ${script}\n`);
    } else {
      html = html.replace("</head>", `  ${script}\n</head>`);
    }
  } else {
    html = html.replace(
      META_REFRESH_RE,
      '<meta http-equiv="refresh" content="0;url=../kontakt/">',
    );
    html = html.replace(LOCATION_SCRIPT_RE, "\n");
  }

  await writeFile(WEBSHOP_HTML_PATH, html, "utf8");
}

async function updateShopLinks(partnerShopUrl) {
  if (!partnerShopUrl) return;

  const partnerHref = `href="${partnerShopUrl}"`;
  for (const relativePath of SHOP_LINK_FILES) {
    const filePath = path.join(ROOT, relativePath);
    let html = await readFile(filePath, "utf8");
    if (html.includes(WEBSHOP_HREF)) {
      html = html.replaceAll(WEBSHOP_HREF, partnerHref);
      await writeFile(filePath, html, "utf8");
    }
  }
}

async function main() {
  const partnerShopUrl = (process.env.PARTNER_SHOP_URL || "").trim();

  await writeFile(REDIRECTS_PATH, buildRedirects(partnerShopUrl), "utf8");
  await updateWebshopPage(partnerShopUrl);
  await updateShopLinks(partnerShopUrl);

  const mode = partnerShopUrl ? "enabled" : "fallback to /kontakt/";
  const linkMode = partnerShopUrl
    ? `direct links in ${SHOP_LINK_FILES.length} pages`
    : "shop links unchanged (/webshop/)";
  console.log(`inject-env: partner shop ${mode}; wrote _redirects.`);
  console.log(`inject-env: ${linkMode}; updated webshop/index.html.`);
}

main().catch((error) => {
  console.error("inject-env failed:", error);
  process.exit(1);
});
