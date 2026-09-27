const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const ADMIN_PASSCODE = process.env.ADMIN_PASSCODE || "1032004";
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/infotera_db";

// Middlewares
app.use(cors({ origin: "*" }));
app.use(express.json());

// Fallback Local Storage Data File (ensures 100% uptime if MongoDB is unavailable)
const DB_BACKUP_FILE = path.join(__dirname, "local_data.json");

let localData = {
  leads: [
    {
      _id: "demo-lead-1",
      name: "Rajesh Patil",
      email: "rajesh@patilconstructions.com",
      phone: "+91 9823412345",
      company: "Patil Civil Projects",
      interest: "CivilFlow — Construction & Labour SaaS Demo",
      source: "Website Form",
      status: "New",
      dealValue: "₹45,000",
      notes: [{ note: "Has 4 active building sites and 120 daily labour.", date: new Date().toISOString() }],
      createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
    },
    {
      _id: "demo-lead-2",
      name: "Amitabh Sen",
      email: "amitabh@senhospitality.in",
      phone: "+91 9732109876",
      company: "Sen Grand Palace & Banquets",
      interest: "OneCRM AI — Automated Sales CRM Beta",
      source: "WhatsApp Click",
      status: "Demo Scheduled",
      dealValue: "₹60,000",
      notes: [{ note: "Interested in WhatsApp automated inquiry replies for wedding banquet bookings.", date: new Date().toISOString() }],
      createdAt: new Date(Date.now() - 3600000 * 8).toISOString(),
    },
    {
      _id: "demo-lead-3",
      name: "Vikram Mehta",
      email: "vikram@mehtabuilders.com",
      phone: "+91 9811223344",
      company: "Mehta Infra & Developers",
      interest: "CivilFlow — Construction & Labour SaaS Demo",
      source: "CivilFlow Landing Page",
      status: "Converted Customer",
      dealValue: "₹30,000",
      notes: [{ note: "Onboarded for 3 sites. Licence activated.", date: new Date().toISOString() }],
      createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
    },
  ],
  analytics: [
    { path: "/products/civilflow", type: "pageview", referrer: "direct", timestamp: new Date().toISOString() },
    { path: "/products/onecrm", type: "pageview", referrer: "google", timestamp: new Date().toISOString() },
    { path: "/", type: "pageview", referrer: "direct", timestamp: new Date().toISOString() },
    { path: "/contact", type: "pageview", referrer: "direct", timestamp: new Date().toISOString() },
    { path: "/products/civilflow", type: "whatsapp_click", details: "CivilFlow Demo CTA", timestamp: new Date().toISOString() },
  ],
};

if (fs.existsSync(DB_BACKUP_FILE)) {
  try {
    const raw = fs.readFileSync(DB_BACKUP_FILE, "utf-8");
    localData = JSON.parse(raw);
  } catch (err) {
    console.error("Could not parse local_data.json, using defaults.");
  }
}

const saveLocalData = () => {
  try {
    fs.writeFileSync(DB_BACKUP_FILE, JSON.stringify(localData, null, 2));
  } catch (err) {
    console.error("Failed to save local_data.json:", err);
  }
};

let isMongoConnected = false;

// Mongoose Models
const LeadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  company: { type: String, default: "" },
  interest: { type: String, default: "General Inquiry" },
  message: { type: String, default: "" },
  source: { type: String, default: "Website" },
  status: {
    type: String,
    enum: ["New", "Contacted", "Demo Scheduled", "Converted Customer", "Lost"],
    default: "New",
  },
  dealValue: { type: String, default: "" },
  notes: [
    {
      note: String,
      date: { type: Date, default: Date.now },
    },
  ],
  followUpDate: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now },
});

const AnalyticsSchema = new mongoose.Schema({
  path: { type: String, required: true },
  type: { type: String, default: "pageview" },
  referrer: { type: String, default: "" },
  userAgent: { type: String, default: "" },
  details: { type: String, default: "" },
  timestamp: { type: Date, default: Date.now },
});

let LeadModel;
let AnalyticsModel;

mongoose
  .connect(MONGODB_URI, { serverSelectionTimeoutMS: 3000 })
  .then(() => {
    console.log("✅ MongoDB connected successfully to:", MONGODB_URI);
    isMongoConnected = true;
    LeadModel = mongoose.model("Lead", LeadSchema);
    AnalyticsModel = mongoose.model("Analytics", AnalyticsSchema);
  })
  .catch((err) => {
    console.warn("⚠️ MongoDB connection not available. Using embedded JSON fallback storage:", err.message);
    isMongoConnected = false;
  });

// Auth Middleware / Passcode Validation
const verifyAdminPasscode = (req, res, next) => {
  const passcode = req.headers["x-admin-passcode"] || req.query.passcode || req.body.passcode;
  if (passcode === ADMIN_PASSCODE) {
    return next();
  }
  return res.status(401).json({ success: false, message: "Invalid Admin Passcode" });
};

// ----------------------------------------------------
// ROUTES
// ----------------------------------------------------

// 1. Health & Server Status
app.get("/api/health", (req, res) => {
  res.json({
    status: "online",
    database: isMongoConnected ? "MongoDB Atlas / Server" : "Local Embedded Storage",
    timestamp: new Date().toISOString(),
  });
});

// 2. Admin Passcode Login
app.post("/api/auth/login", (req, res) => {
  const { passcode } = req.body;
  if (passcode === ADMIN_PASSCODE) {
    res.json({
      success: true,
      message: "Admin authenticated successfully",
      token: "infotera_admin_session_" + Date.now(),
    });
  } else {
    res.status(401).json({
      success: false,
      message: "Incorrect passcode. Please enter the valid admin passcode.",
    });
  }
});

// 3. Form Submission & Lead Ingestion (Public)
app.post("/api/leads", async (req, res) => {
  try {
    const { name, email, phone, company, interest, message, source, dealValue } = req.body;
    if (!name || !phone) {
      return res.status(400).json({ success: false, message: "Name and Phone are required" });
    }

    const leadData = {
      name,
      email: email || "N/A",
      phone,
      company: company || "",
      interest: interest || "CivilFlow Demo",
      message: message || "",
      source: source || "Website Form",
      status: "New",
      dealValue: dealValue || "",
      notes: message ? [{ note: `Initial Message: ${message}`, date: new Date().toISOString() }] : [],
      createdAt: new Date().toISOString(),
    };

    if (isMongoConnected && LeadModel) {
      const savedLead = await LeadModel.create(leadData);
      return res.status(201).json({ success: true, lead: savedLead });
    } else {
      const newLead = { ...leadData, _id: "lead_" + Date.now() };
      localData.leads.unshift(newLead);
      saveLocalData();
      return res.status(201).json({ success: true, lead: newLead });
    }
  } catch (error) {
    console.error("Error creating lead:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// 4. Get Leads (Admin only)
app.get("/api/leads", verifyAdminPasscode, async (req, res) => {
  try {
    const { status, search } = req.query;

    if (isMongoConnected && LeadModel) {
      let query = {};
      if (status && status !== "All") {
        query.status = status;
      }
      if (search) {
        query.$or = [
          { name: { $regex: search, $options: "i" } },
          { email: { $regex: search, $options: "i" } },
          { phone: { $regex: search, $options: "i" } },
          { company: { $regex: search, $options: "i" } },
        ];
      }
      const leads = await LeadModel.find(query).sort({ createdAt: -1 });
      return res.json({ success: true, leads });
    } else {
      let leads = [...localData.leads];
      if (status && status !== "All") {
        leads = leads.filter((l) => l.status === status);
      }
      if (search) {
        const s = search.toLowerCase();
        leads = leads.filter(
          (l) =>
            l.name.toLowerCase().includes(s) ||
            l.email.toLowerCase().includes(s) ||
            l.phone.toLowerCase().includes(s) ||
            (l.company && l.company.toLowerCase().includes(s))
        );
      }
      return res.json({ success: true, leads });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// 5. Update Lead Status & Notes (Admin)
app.patch("/api/leads/:id", verifyAdminPasscode, async (req, res) => {
  try {
    const { id } = req.params;
    const { status, note, dealValue, followUpDate } = req.body;

    if (isMongoConnected && LeadModel) {
      const lead = await LeadModel.findById(id);
      if (!lead) return res.status(404).json({ success: false, message: "Lead not found" });

      if (status) lead.status = status;
      if (dealValue !== undefined) lead.dealValue = dealValue;
      if (followUpDate !== undefined) lead.followUpDate = followUpDate;
      if (note) {
        lead.notes.push({ note, date: new Date() });
      }

      await lead.save();
      return res.json({ success: true, lead });
    } else {
      const idx = localData.leads.findIndex((l) => l._id === id);
      if (idx === -1) return res.status(404).json({ success: false, message: "Lead not found" });

      if (status) localData.leads[idx].status = status;
      if (dealValue !== undefined) localData.leads[idx].dealValue = dealValue;
      if (followUpDate !== undefined) localData.leads[idx].followUpDate = followUpDate;
      if (note) {
        if (!localData.leads[idx].notes) localData.leads[idx].notes = [];
        localData.leads[idx].notes.push({ note, date: new Date().toISOString() });
      }

      saveLocalData();
      return res.json({ success: true, lead: localData.leads[idx] });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// 6. Convert Lead to Customer (Admin)
app.post("/api/leads/:id/convert", verifyAdminPasscode, async (req, res) => {
  try {
    const { id } = req.params;
    const { note, dealValue } = req.body;

    if (isMongoConnected && LeadModel) {
      const lead = await LeadModel.findById(id);
      if (!lead) return res.status(404).json({ success: false, message: "Lead not found" });

      lead.status = "Converted Customer";
      if (dealValue) lead.dealValue = dealValue;
      lead.notes.push({
        note: `🎉 CONVERTED TO CUSTOMER! ${note || ""}`,
        date: new Date(),
      });

      await lead.save();
      return res.json({ success: true, lead });
    } else {
      const idx = localData.leads.findIndex((l) => l._id === id);
      if (idx === -1) return res.status(404).json({ success: false, message: "Lead not found" });

      localData.leads[idx].status = "Converted Customer";
      if (dealValue) localData.leads[idx].dealValue = dealValue;
      if (!localData.leads[idx].notes) localData.leads[idx].notes = [];
      localData.leads[idx].notes.push({
        note: `🎉 CONVERTED TO CUSTOMER! ${note || ""}`,
        date: new Date().toISOString(),
      });

      saveLocalData();
      return res.json({ success: true, lead: localData.leads[idx] });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// 7. Delete Lead (Admin)
app.delete("/api/leads/:id", verifyAdminPasscode, async (req, res) => {
  try {
    const { id } = req.params;
    if (isMongoConnected && LeadModel) {
      await LeadModel.findByIdAndDelete(id);
      return res.json({ success: true, message: "Lead deleted" });
    } else {
      localData.leads = localData.leads.filter((l) => l._id !== id);
      saveLocalData();
      return res.json({ success: true, message: "Lead deleted" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// 8. Analytics Event Ingestion (Public)
app.post("/api/analytics/track", async (req, res) => {
  try {
    const { path, type, referrer, userAgent, details } = req.body;
    const item = {
      path: path || "/",
      type: type || "pageview",
      referrer: referrer || "",
      userAgent: userAgent || "",
      details: details || "",
      timestamp: new Date().toISOString(),
    };

    if (isMongoConnected && AnalyticsModel) {
      await AnalyticsModel.create(item);
    } else {
      localData.analytics.unshift(item);
      if (localData.analytics.length > 500) localData.analytics.pop();
      saveLocalData();
    }

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

// 9. Analytics Overview & CRM Stats (Admin)
app.get("/api/analytics/overview", verifyAdminPasscode, async (req, res) => {
  try {
    let leadsList = [];
    let analyticsList = [];

    if (isMongoConnected && LeadModel && AnalyticsModel) {
      leadsList = await LeadModel.find({});
      analyticsList = await AnalyticsModel.find({}).sort({ timestamp: -1 }).limit(300);
    } else {
      leadsList = localData.leads;
      analyticsList = localData.analytics;
    }

    const totalVisits = analyticsList.length || 1;
    const pageviews = analyticsList.filter((a) => a.type === "pageview");
    const whatsappClicks = analyticsList.filter((a) => a.type === "whatsapp_click").length;
    const demoClicks = analyticsList.filter((a) => a.type === "demo_click").length;

    // Route Breakdown
    const routeCounts = {};
    pageviews.forEach((p) => {
      routeCounts[p.path] = (routeCounts[p.path] || 0) + 1;
    });

    // CRM Metrics
    const totalLeads = leadsList.length;
    const newLeads = leadsList.filter((l) => l.status === "New").length;
    const demosScheduled = leadsList.filter((l) => l.status === "Demo Scheduled").length;
    const convertedCustomers = leadsList.filter((l) => l.status === "Converted Customer").length;
    const conversionRate = totalLeads > 0 ? ((convertedCustomers / totalLeads) * 100).toFixed(1) : "0";

    res.json({
      success: true,
      stats: {
        totalVisits: pageviews.length,
        totalLeads,
        newLeads,
        demosScheduled,
        convertedCustomers,
        conversionRate: `${conversionRate}%`,
        whatsappClicks,
        demoClicks,
      },
      topPages: Object.entries(routeCounts).map(([route, count]) => ({
        route,
        count,
      })),
      recentActivity: analyticsList.slice(0, 15),
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Infotera Server running on http://localhost:${PORT}`);
});
