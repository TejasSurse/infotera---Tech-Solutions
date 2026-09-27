// server_test.js - Comprehensive test script for Infotera Backend API
const http = require("http");
const { spawn } = require("child_process");
const path = require("path");

const PORT = 5055;
const ADMIN_PASSCODE = "1032004";

// Launch server on test port
const env = { ...process.env, PORT: String(PORT), ADMIN_PASSCODE };
const serverProcess = spawn("node", ["server.js"], {
  cwd: path.join(__dirname),
  env,
  stdio: ["ignore", "pipe", "pipe"],
});

let output = "";
serverProcess.stdout.on("data", (data) => (output += data.toString()));
serverProcess.stderr.on("data", (data) => (output += data.toString()));

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const request = (method, path, body = null, headers = {}) => {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: "127.0.0.1",
      port: PORT,
      path,
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    };

    const req = http.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          resolve({ status: res.statusCode, body: JSON.parse(data) });
        } catch {
          resolve({ status: res.statusCode, body: data });
        }
      });
    });

    req.on("error", (err) => reject(err));
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
};

async function runTests() {
  console.log("⏳ Starting test backend server on port " + PORT + "...");
  await sleep(1500);

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

  try {
    // 1. Health check test
    const health = await request("GET", "/api/health");
    assert(health.status === 200 && health.body.status === "online", "GET /api/health returns 200 online");

    // 2. Auth Test - Invalid Passcode
    const invalidAuth = await request("POST", "/api/auth/login", { passcode: "wrongcode" });
    assert(invalidAuth.status === 401 && invalidAuth.body.success === false, "POST /api/auth/login denies wrong passcode");

    // 3. Auth Test - Correct Passcode
    const validAuth = await request("POST", "/api/auth/login", { passcode: ADMIN_PASSCODE });
    assert(validAuth.status === 200 && validAuth.body.success === true, "POST /api/auth/login accepts correct passcode");

    // 4. Public Form Lead Ingestion
    const leadPayload = {
      name: "Test Contractor",
      email: "contractor@test.com",
      phone: "+91 9999888877",
      company: "Test Infra Build",
      interest: "CivilFlow — Construction & Labour SaaS Demo",
      message: "Looking for site management software for 5 projects.",
      source: "Automated Security Test",
    };
    const leadRes = await request("POST", "/api/leads", leadPayload);
    assert(leadRes.status === 201 && leadRes.body.success === true, "POST /api/leads creates lead successfully");
    const createdId = leadRes.body.lead._id;

    // 5. Protected Route Without Passcode
    const unauthLeads = await request("GET", "/api/leads");
    assert(unauthLeads.status === 401, "GET /api/leads blocks unauthenticated access without passcode header");

    // 6. Protected Route With Passcode Header
    const authLeads = await request("GET", "/api/leads", null, { "x-admin-passcode": ADMIN_PASSCODE });
    assert(authLeads.status === 200 && Array.isArray(authLeads.body.leads), "GET /api/leads returns leads with valid passcode header");

    // 7. Update Lead Status
    const updateRes = await request(
      "PATCH",
      `/api/leads/${createdId}`,
      { status: "Demo Scheduled", note: "Demo fixed for tomorrow 11 AM." },
      { "x-admin-passcode": ADMIN_PASSCODE }
    );
    assert(updateRes.status === 200 && updateRes.body.success === true, "PATCH /api/leads/:id updates status and adds note");

    // 8. Convert Lead to Customer
    const convertRes = await request(
      "POST",
      `/api/leads/${createdId}/convert`,
      { dealValue: "₹45,000", note: "Annual subscription payment received" },
      { "x-admin-passcode": ADMIN_PASSCODE }
    );
    assert(convertRes.status === 200 && convertRes.body.success === true, "POST /api/leads/:id/convert marks lead as Converted Customer");

    // 9. Analytics Ingestion
    const trackRes = await request("POST", "/api/analytics/track", {
      path: "/products/civilflow",
      type: "pageview",
      referrer: "test-runner",
    });
    assert(trackRes.status === 200 && trackRes.body.success === true, "POST /api/analytics/track logs pageview");

    // 10. Admin Analytics Overview
    const analyticsRes = await request("GET", "/api/analytics/overview", null, { "x-admin-passcode": ADMIN_PASSCODE });
    assert(analyticsRes.status === 200 && analyticsRes.body.stats && analyticsRes.body.stats.totalVisits !== undefined, "GET /api/analytics/overview returns analytics stats and conversion metrics");

    // 11. Lead Deletion (Cleanup)
    const deleteRes = await request("DELETE", `/api/leads/${createdId}`, null, { "x-admin-passcode": ADMIN_PASSCODE });
    assert(deleteRes.status === 200 && deleteRes.body.success === true, "DELETE /api/leads/:id deletes lead successfully");

    console.log("\n==========================================");
    console.log(`🎉 Backend Security & Endpoint Tests: ${passed} PASSED, ${failed} FAILED`);
    console.log("==========================================\n");
  } catch (err) {
    console.error("Test execution error:", err);
  } finally {
    serverProcess.kill();
    process.exit(failed === 0 ? 0 : 1);
  }
}

runTests();
