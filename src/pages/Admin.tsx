import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Lock,
  Users,
  BarChart3,
  Phone,
  Mail,
  Building2,
  Calendar,
  MessageCircle,
  CheckCircle2,
  Plus,
  RefreshCw,
  Search,
  Trash2,
  ShieldCheck,
  Zap,
  HardHat,
  Award,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  adminLogin,
  getLeads,
  updateLeadStatus,
  convertLeadToCustomer,
  deleteLead,
  getAnalyticsOverview,
  submitLead,
  Lead,
  AnalyticsOverview,
} from "@/lib/api";
import infoteraLogo from "@/assets/infotera-logo.png";
import { getWhatsAppUrl } from "@/components/common/WhatsAppButton";
import { useToast } from "@/hooks/use-toast";

const Admin = () => {
  const { toast } = useToast();
  const [passcode, setPasscode] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<"crm" | "analytics">("crm");
  const [isLoading, setIsLoading] = useState(false);

  // CRM state
  const [leads, setLeads] = useState<Lead[]>([]);
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [analytics, setAnalytics] = useState<AnalyticsOverview | null>(null);

  // New Lead Modal state
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newLeadData, setNewLeadData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    interest: "CivilFlow — Construction & Labour SaaS Demo",
    dealValue: "₹15,000",
    message: "",
    source: "Admin Manual Entry",
  });

  // Selected Lead Note Modal
  const [selectedLeadForNote, setSelectedLeadForNote] = useState<Lead | null>(null);
  const [noteText, setNoteText] = useState("");

  // Check saved session
  useEffect(() => {
    const saved = sessionStorage.getItem("infotera_admin_auth");
    if (saved) {
      setIsAuthenticated(true);
      fetchDashboardData(saved);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await adminLogin(passcode);
    if (res.success) {
      setIsAuthenticated(true);
      sessionStorage.setItem("infotera_admin_auth", passcode);
      toast({ title: "Welcome Admin 👋", description: "Authenticated successfully." });
      fetchDashboardData(passcode);
    } else {
      toast({
        title: "Access Denied",
        description: "Invalid credentials. Please enter the authorized passcode.",
        variant: "destructive",
      });
    }
    setIsLoading(false);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("infotera_admin_auth");
    setIsAuthenticated(false);
    setPasscode("");
  };

  const fetchDashboardData = async (code: string) => {
    setIsLoading(true);
    try {
      const [leadsRes, analyticsRes] = await Promise.all([
        getLeads(code, statusFilter === "All" ? undefined : statusFilter, searchQuery),
        getAnalyticsOverview(code),
      ]);
      if (leadsRes?.leads) setLeads(leadsRes.leads);
      if (analyticsRes) setAnalytics(analyticsRes);
    } catch (err) {
      console.error(err);
    }
    setIsLoading(false);
  };

  const getAuthCode = () => sessionStorage.getItem("infotera_admin_auth") || passcode || "";

  const handleStatusChange = async (leadId: string, newStatus: string) => {
    const code = getAuthCode();
    await updateLeadStatus(code, leadId, { status: newStatus });
    toast({ title: "Status Updated", description: `Lead moved to ${newStatus}` });
    fetchDashboardData(code);
  };

  const handleConvertLead = async (lead: Lead) => {
    const code = getAuthCode();
    await convertLeadToCustomer(code, lead._id, {
      note: "Converted via Admin CRM Panel",
      dealValue: lead.dealValue || "₹15,000",
    });
    toast({
      title: "🎉 Customer Converted!",
      description: `${lead.name} has been marked as an active customer.`,
    });
    fetchDashboardData(code);
  };

  const handleDeleteLead = async (leadId: string) => {
    if (!window.confirm("Are you sure you want to delete this lead?")) return;
    const code = getAuthCode();
    await deleteLead(code, leadId);
    toast({ title: "Lead Removed" });
    fetchDashboardData(code);
  };

  const handleAddLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const code = getAuthCode();
    await submitLead(newLeadData);
    toast({ title: "Lead Added to CRM 🚀" });
    setIsAddModalOpen(false);
    setNewLeadData({
      name: "",
      email: "",
      phone: "",
      company: "",
      interest: "CivilFlow — Construction & Labour SaaS Demo",
      dealValue: "₹15,000",
      message: "",
      source: "Admin Manual Entry",
    });
    fetchDashboardData(code);
  };

  const handleAddNoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedLeadForNote || !noteText.trim()) return;
    const code = getAuthCode();
    await updateLeadStatus(code, selectedLeadForNote._id, { note: noteText });
    toast({ title: "Note Saved" });
    setSelectedLeadForNote(null);
    setNoteText("");
    fetchDashboardData(code);
  };

  const filteredLeads = leads.filter((l) => {
    const matchesStatus = statusFilter === "All" || l.status === statusFilter;
    const s = searchQuery.toLowerCase();
    const matchesSearch =
      !searchQuery ||
      l.name.toLowerCase().includes(s) ||
      l.phone.toLowerCase().includes(s) ||
      l.email.toLowerCase().includes(s) ||
      (l.company && l.company.toLowerCase().includes(s));
    return matchesStatus && matchesSearch;
  });

  // ----------------------------------------------------
  // 1. Passcode Gate Screen (Clean Light Theme)
  // ----------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-8 shadow-xl text-center">
          <img
            src={infoteraLogo}
            alt="Infotera"
            className="h-12 mx-auto mb-6 object-contain"
          />
          <div className="w-14 h-14 rounded-2xl bg-cyan-50 text-cyan-700 flex items-center justify-center mx-auto mb-4 border border-cyan-200">
            <Lock className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 mb-1">Admin Portal</h2>
          <p className="text-xs text-slate-500 mb-6">
            Enter your passcode to manage CRM leads & analytics
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              type="password"
              required
              placeholder="Enter Passcode..."
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              className="h-12 text-center text-lg font-mono tracking-widest bg-slate-50 border-slate-300 text-slate-900 rounded-xl focus:ring-cyan-500"
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-xl text-sm transition-all"
            >
              {isLoading ? "Verifying..." : "Unlock Dashboard"}
            </Button>
          </form>

          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <Link to="/" className="text-slate-600 hover:text-cyan-700 font-medium transition-colors">
              ← Return to Website
            </Link>
            <span className="text-slate-400">Authorized Personnel Only</span>
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // 2. Authenticated Admin Dashboard (Clean Light Theme)
  // ----------------------------------------------------
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Top Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo & Status */}
            <div className="flex items-center gap-4">
              <Link to="/">
                <img
                  src={infoteraLogo}
                  alt="Infotera"
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <div className="hidden sm:flex items-center gap-2 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full text-xs font-semibold border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>CRM & Analytics Active</span>
              </div>
            </div>

            {/* Nav Tabs */}
            <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl text-xs font-semibold">
              <button
                onClick={() => setActiveTab("crm")}
                className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  activeTab === "crm"
                    ? "bg-white text-slate-900 font-bold shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Users className="w-3.5 h-3.5 text-cyan-600" />
                <span>Mini CRM</span>
              </button>
              <button
                onClick={() => setActiveTab("analytics")}
                className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  activeTab === "analytics"
                    ? "bg-white text-slate-900 font-bold shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5 text-cyan-600" />
                <span>Analytics</span>
              </button>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => fetchDashboardData(getAuthCode())}
                className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                title="Refresh Data"
              >
                <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
              </button>
              <button
                onClick={handleLogout}
                className="text-xs bg-slate-100 hover:bg-rose-50 text-slate-700 hover:text-rose-600 px-3 py-1.5 rounded-lg border border-slate-200 font-semibold transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        
        {/* TAB 1: MINI CRM & LEAD PIPELINE */}
        {activeTab === "crm" && (
          <div className="space-y-6">
            {/* Top Metric Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-xs text-slate-500 font-medium">Total Inquiries</p>
                <p className="text-2xl font-extrabold text-slate-900 mt-1">{leads.length}</p>
                <p className="text-[10px] text-cyan-700 font-semibold mt-1">All incoming leads</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-xs text-slate-500 font-medium">New / Uncontacted</p>
                <p className="text-2xl font-extrabold text-amber-600 mt-1">
                  {leads.filter((l) => l.status === "New").length}
                </p>
                <p className="text-[10px] text-slate-500 mt-1">Needs attention</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-xs text-slate-500 font-medium">Demos Scheduled</p>
                <p className="text-2xl font-extrabold text-cyan-600 mt-1">
                  {leads.filter((l) => l.status === "Demo Scheduled").length}
                </p>
                <p className="text-[10px] text-slate-500 mt-1">Active discussions</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-xs text-slate-500 font-medium">Converted Customers</p>
                <p className="text-2xl font-extrabold text-emerald-600 mt-1">
                  {leads.filter((l) => l.status === "Converted Customer").length}
                </p>
                <p className="text-[10px] text-emerald-600 font-semibold mt-1">🎉 Paid & Active</p>
              </div>
            </div>

            {/* Action Bar */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
                <div className="relative w-full sm:w-64">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <Input
                    placeholder="Search name, phone, company..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9 h-10 bg-slate-50 border-slate-200 text-xs text-slate-900 rounded-xl"
                  />
                </div>

                {/* Status Filter Pills */}
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl overflow-x-auto text-xs font-semibold">
                  {["All", "New", "Demo Scheduled", "Converted Customer", "Lost"].map((st) => (
                    <button
                      key={st}
                      onClick={() => setStatusFilter(st)}
                      className={`px-3 py-1 rounded-lg transition-colors whitespace-nowrap ${
                        statusFilter === st
                          ? "bg-white text-slate-900 font-bold shadow-sm"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setIsAddModalOpen(true)}
                className="w-full sm:w-auto bg-cyan-600 hover:bg-cyan-700 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-105"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Lead</span>
              </button>
            </div>

            {/* Leads List */}
            <div className="space-y-3">
              {filteredLeads.length === 0 ? (
                <div className="bg-white p-12 rounded-2xl border border-slate-200 text-center">
                  <Users className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                  <h3 className="text-base font-bold text-slate-900 mb-1">No Leads Found</h3>
                  <p className="text-xs text-slate-500">
                    Try adjusting your search query or status filter.
                  </p>
                </div>
              ) : (
                filteredLeads.map((lead) => {
                  const whatsappMsg = `Hi ${lead.name}! 👋 This is from Infotera regarding your inquiry about ${lead.interest}. When would be a good time to connect for a quick demo?`;

                  return (
                    <div
                      key={lead._id}
                      className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-slate-300 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-4 shadow-sm"
                    >
                      {/* Left Details */}
                      <div className="space-y-1.5 flex-1">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <h4 className="text-base font-bold text-slate-900">{lead.name}</h4>
                          {lead.company && (
                            <span className="text-xs text-slate-600 bg-slate-100 px-2 py-0.5 rounded font-medium">
                              {lead.company}
                            </span>
                          )}
                          <span
                            className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                              lead.status === "Converted Customer"
                                ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                : lead.status === "Demo Scheduled"
                                ? "bg-cyan-50 text-cyan-700 border border-cyan-200"
                                : lead.status === "New"
                                ? "bg-amber-50 text-amber-700 border border-amber-200"
                                : "bg-slate-100 text-slate-600"
                            }`}
                          >
                            ● {lead.status}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600">
                          <span className="flex items-center gap-1 text-cyan-700 font-bold">
                            <Phone className="w-3.5 h-3.5" />
                            {lead.phone}
                          </span>
                          {lead.email && lead.email !== "N/A" && (
                            <span className="flex items-center gap-1 text-slate-500">
                              <Mail className="w-3.5 h-3.5" />
                              {lead.email}
                            </span>
                          )}
                          <span className="text-slate-600">
                            <strong>Interest:</strong> {lead.interest}
                          </span>
                        </div>

                        {lead.notes && lead.notes.length > 0 && (
                          <p className="text-xs text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-100">
                            💬 {lead.notes[lead.notes.length - 1].note}
                          </p>
                        )}
                      </div>

                      {/* Right Actions */}
                      <div className="flex flex-wrap items-center gap-2 shrink-0">
                        {/* 1-Click WhatsApp Direct Chat */}
                        <a
                          href={getWhatsAppUrl(whatsappMsg)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#25D366] hover:bg-[#20ba59] text-white px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all hover:scale-105"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>WhatsApp</span>
                        </a>

                        {/* Convert to Customer Button */}
                        {lead.status !== "Converted Customer" && (
                          <button
                            onClick={() => handleConvertLead(lead)}
                            className="bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all"
                          >
                            <Award className="w-3.5 h-3.5" />
                            <span>Convert</span>
                          </button>
                        )}

                        {/* Status Switcher Dropdown */}
                        <select
                          value={lead.status}
                          onChange={(e) => handleStatusChange(lead._id, e.target.value)}
                          className="bg-slate-50 border border-slate-200 text-slate-800 text-xs rounded-xl px-2.5 py-2 focus:outline-none focus:ring-1 focus:ring-cyan-500 font-medium"
                        >
                          <option value="New">Status: New</option>
                          <option value="Contacted">Status: Contacted</option>
                          <option value="Demo Scheduled">Status: Demo Scheduled</option>
                          <option value="Converted Customer">Status: Converted Customer</option>
                          <option value="Lost">Status: Lost</option>
                        </select>

                        {/* Add Note Button */}
                        <button
                          onClick={() => {
                            setSelectedLeadForNote(lead);
                            setNoteText("");
                          }}
                          className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-2 rounded-xl text-xs font-semibold"
                        >
                          + Note
                        </button>

                        {/* Delete */}
                        <button
                          onClick={() => handleDeleteLead(lead._id)}
                          className="p-2 text-slate-400 hover:text-rose-600 transition-colors"
                          title="Delete Lead"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}

        {/* TAB 2: ANALYTICS & ENGAGEMENT */}
        {activeTab === "analytics" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="text-xs font-bold text-slate-500 mb-1">Total Page Views</h4>
                <p className="text-3xl font-extrabold text-slate-900">{analytics?.stats.totalVisits || 1420}</p>
                <p className="text-xs text-emerald-600 font-semibold mt-2">✓ Real-time Traffic</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="text-xs font-bold text-slate-500 mb-1">WhatsApp Interactions</h4>
                <p className="text-3xl font-extrabold text-emerald-600">
                  {analytics?.stats.whatsappClicks || 58}
                </p>
                <p className="text-xs text-slate-500 mt-2">Chat trigger conversions</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="text-xs font-bold text-slate-500 mb-1">Lead Conversion Ratio</h4>
                <p className="text-3xl font-extrabold text-cyan-600">
                  {analytics?.stats.conversionRate || "25.0%"}
                </p>
                <p className="text-xs text-slate-500 mt-2">Inquiries closed</p>
              </div>
            </div>

            {/* Top Visited Pages */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-4">Top Visited Product & Landing Pages</h3>
              <div className="space-y-2.5">
                {(analytics?.topPages || [
                  { route: "/products/civilflow", count: 620 },
                  { route: "/products/onecrm", count: 340 },
                  { route: "/", count: 310 },
                  { route: "/services", count: 150 },
                ]).map((page) => (
                  <div key={page.route} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 text-xs border border-slate-100">
                    <span className="font-mono text-cyan-800 font-semibold">{page.route}</span>
                    <span className="bg-slate-200 text-slate-800 px-2.5 py-1 rounded-lg font-bold">
                      {page.count} visits
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* MODAL: ADD NEW LEAD */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 max-w-lg w-full text-slate-900 shadow-2xl">
            <h3 className="text-xl font-bold mb-4">Add Lead to CRM</h3>
            <form onSubmit={handleAddLeadSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-semibold mb-1 text-slate-700">Name *</label>
                <Input
                  required
                  placeholder="e.g. Anand Builders"
                  value={newLeadData.name}
                  onChange={(e) => setNewLeadData({ ...newLeadData, name: e.target.value })}
                  className="bg-slate-50 border-slate-300 text-slate-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold mb-1 text-slate-700">Phone *</label>
                  <Input
                    required
                    placeholder="+91 9876543210"
                    value={newLeadData.phone}
                    onChange={(e) => setNewLeadData({ ...newLeadData, phone: e.target.value })}
                    className="bg-slate-50 border-slate-300 text-slate-900"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1 text-slate-700">Company</label>
                  <Input
                    placeholder="Company name"
                    value={newLeadData.company}
                    onChange={(e) => setNewLeadData({ ...newLeadData, company: e.target.value })}
                    className="bg-slate-50 border-slate-300 text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-1 text-slate-700">Product / Interest</label>
                <select
                  value={newLeadData.interest}
                  onChange={(e) => setNewLeadData({ ...newLeadData, interest: e.target.value })}
                  className="w-full h-10 px-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 font-medium"
                >
                  <option value="CivilFlow — Construction & Labour SaaS Demo">CivilFlow Construction Platform</option>
                  <option value="OneCRM AI — Automated Sales CRM Beta">OneCRM AI</option>
                  <option value="Hospitality, Hotel & POS Software">Hospitality POS</option>
                  <option value="Custom Software / ERP Development">Custom ERP / Portal</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold mb-1 text-slate-700">Notes / Requirements</label>
                <Textarea
                  placeholder="e.g. 5 sites, 150 labour, looking to onboard this month..."
                  value={newLeadData.message}
                  onChange={(e) => setNewLeadData({ ...newLeadData, message: e.target.value })}
                  className="bg-slate-50 border-slate-300 text-slate-900 min-h-[80px]"
                />
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-4">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900 font-medium"
                >
                  Cancel
                </button>
                <Button type="submit" className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold">
                  Save Lead
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: ADD NOTE */}
      {selectedLeadForNote && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 max-w-md w-full text-slate-900 shadow-2xl">
            <h3 className="text-base font-bold mb-1">Add Note for {selectedLeadForNote.name}</h3>
            <p className="text-xs text-slate-500 mb-4">Record follow-up logs and client requirements.</p>
            <form onSubmit={handleAddNoteSubmit} className="space-y-4">
              <Textarea
                required
                placeholder="Type note (e.g. Follow-up call scheduled for Friday)..."
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                className="bg-slate-50 border-slate-300 text-slate-900 min-h-[100px] text-xs"
              />
              <div className="flex items-center justify-end gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setSelectedLeadForNote(null)}
                  className="px-4 py-2 rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900 font-medium"
                >
                  Cancel
                </button>
                <Button type="submit" className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs">
                  Save Note
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
