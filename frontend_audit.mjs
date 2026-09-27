// frontend_audit.js - Security & Quality Audit for Frontend
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = __dirname;
let passed = 0;
let failed = 0;

const assert = (condition, testName) => {
  if (condition) {
    console.log(`✅ PASS: ${testName}`);
    passed++;
  } else {
    console.error(`❌ FAIL: ${testName}`);
    failed++;
  }
};

console.log("🔍 Running Frontend Security & Quality Audit...\n");

// 1. Check Footer.tsx does NOT have admin link or passcode
const footerContent = fs.readFileSync(path.join(rootDir, "src/components/layout/Footer.tsx"), "utf-8");
assert(!footerContent.includes("/admin") && !footerContent.includes("1032004"), "Footer does NOT expose /admin link or Passcode");

// 2. Check Navbar.tsx does NOT expose admin links
const navbarContent = fs.readFileSync(path.join(rootDir, "src/components/layout/Navbar.tsx"), "utf-8");
assert(!navbarContent.includes("/admin") && !navbarContent.includes("1032004"), "Navbar does NOT expose /admin link or Passcode");

// 3. Check ScrollToTop is imported in App.tsx
const appContent = fs.readFileSync(path.join(rootDir, "src/App.tsx"), "utf-8");
assert(appContent.includes("ScrollToTop"), "App.tsx includes ScrollToTop on route changes");

// 4. Check routes exist in App.tsx
assert(appContent.includes('path="/"') &&
       appContent.includes('path="/products"') &&
       appContent.includes('path="/products/civilflow"') &&
       appContent.includes('path="/products/onecrm"') &&
       appContent.includes('path="/admin"'), "App.tsx defines all required routes (Home, Products, CivilFlow, OneCRM, Admin)");

// 5. Check CivilFlow page does NOT have hardcoded price numbers
const civilflowContent = fs.readFileSync(path.join(rootDir, "src/pages/CivilFlow.tsx"), "utf-8");
assert(!civilflowContent.includes("₹10,000") && !civilflowContent.includes("₹25,000"), "CivilFlow page has no hardcoded pricing numbers");

// 6. Check vercel.json rewrite configuration
const vercelConfig = JSON.parse(fs.readFileSync(path.join(rootDir, "vercel.json"), "utf-8"));
assert(vercelConfig.rewrites && vercelConfig.rewrites[0].destination === "/index.html", "vercel.json has SPA rewrite rule configured for Vercel deployment");

// 7. Check Admin page does not display plaintext passcode
const adminContent = fs.readFileSync(path.join(rootDir, "src/pages/Admin.tsx"), "utf-8");
assert(!adminContent.includes("Passcode: 1032004"), "Admin.tsx does not display visible passcode label to visitors");

console.log("\n==========================================");
console.log(`🎉 Frontend Audit Results: ${passed} PASSED, ${failed} FAILED`);
console.log("==========================================\n");

process.exit(failed === 0 ? 0 : 1);
