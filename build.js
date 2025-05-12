const fs = require("fs");

const templatePath = "index.template.html";
const outputPath = "index.html";

const GITHUB_BASE_URL = process.env.GITHUB_BASE_URL;
const CUTY_API_TOKEN = process.env.CUTY_API_TOKEN;

if (!GITHUB_BASE_URL || !CUTY_API_TOKEN) {
  console.error("❌ Missing environment variables. Set them in Netlify.");
  process.exit(1);
}

let html = fs.readFileSync(templatePath, "utf8");
html = html.replace(/__GITHUB_BASE_URL__/g, GITHUB_BASE_URL);
html = html.replace(/__CUTY_API_TOKEN__/g, CUTY_API_TOKEN);

fs.writeFileSync(outputPath, html);
console.log("✅ index.html built with environment variables.");
