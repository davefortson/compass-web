"use client";

import {
  BarChart3,
  FileText,
  Shield,
  Globe,
  Search,
  Upload,
  Layers,
  TrendingUp,
  Anchor,
  MapPin,
  CheckCircle2,
  AlertTriangle,
  ArrowUpRight,
  Cpu,
} from "lucide-react";

/* ────────────────────────────────────────────
   Each module gets a unique static mockup that
   illustrates its functionality — no client brands,
   no login screens, no real data.
   ──────────────────────────────────────────── */

function MockHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
      <div>
        <span className="font-heading font-bold text-sm text-brand-dark">
          {title}
        </span>
        {subtitle && (
          <span className="text-xs text-brand-muted ml-2">{subtitle}</span>
        )}
      </div>
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
      </div>
    </div>
  );
}

function MetricCard({
  label,
  value,
  change,
  positive = true,
}: {
  label: string;
  value: string;
  change?: string;
  positive?: boolean;
}) {
  return (
    <div className="bg-white rounded-[4px] border border-gray-100 p-3">
      <p className="text-[10px] font-mono uppercase text-brand-muted tracking-wide">
        {label}
      </p>
      <div className="flex items-end gap-2 mt-1">
        <span className="font-heading font-bold text-lg text-brand-dark leading-none">
          {value}
        </span>
        {change && (
          <span
            className={`text-[10px] font-mono ${
              positive ? "text-green-600" : "text-red-500"
            }`}
          >
            {positive ? "↑" : "↓"} {change}
          </span>
        )}
      </div>
    </div>
  );
}

/* ─── AI Hub & Portfolio ─── */
function AIHubPreview() {
  const projects = [
    { name: "Coastal Restoration", region: "SE Asia", credits: "12,400", status: "Active" },
    { name: "Agroforestry Program", region: "E. Africa", credits: "8,750", status: "Active" },
    { name: "Mangrove Conservation", region: "Caribbean", credits: "15,200", status: "Verified" },
    { name: "Soil Carbon Initiative", region: "S. America", credits: "6,320", status: "Review" },
  ];

  return (
    <div className="bg-[#FAFAFA] h-full flex flex-col">
      <MockHeader title="Portfolio Dashboard" subtitle="AI Hub" />
      <div className="p-4 flex-1 space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <MetricCard label="Total Projects" value="24" change="3 new" />
          <MetricCard label="Verified Credits" value="42.6K" change="12%" />
          <MetricCard label="AI Stories Generated" value="156" change="28%" />
        </div>
        {/* Mini bar chart */}
        <div className="bg-white rounded-[4px] border border-gray-100 p-3">
          <p className="text-[10px] font-mono uppercase text-brand-muted tracking-wide mb-3">
            Credits by Category
          </p>
          <div className="flex items-end gap-2 h-16">
            {[65, 45, 80, 35, 55].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full rounded-t-[2px]"
                  style={{
                    height: `${h}%`,
                    background:
                      i % 2 === 0
                        ? "linear-gradient(180deg, #4FB573, #79C6AA)"
                        : "linear-gradient(180deg, #527984, #79C6AA)",
                  }}
                />
                <span className="text-[8px] font-mono text-brand-muted">
                  {["CO₂", "BIO", "H₂O", "SOC", "NDC"][i]}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Project table */}
        <div className="bg-white rounded-[4px] border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-4 px-3 py-2 border-b border-gray-50 text-[9px] font-mono uppercase text-brand-muted tracking-wide">
            <span>Project</span><span>Region</span><span>Credits</span><span>Status</span>
          </div>
          {projects.map((p) => (
            <div key={p.name} className="grid grid-cols-4 px-3 py-2 border-b border-gray-50 text-[11px]">
              <span className="font-body text-brand-dark truncate">{p.name}</span>
              <span className="font-body text-brand-muted">{p.region}</span>
              <span className="font-mono text-brand-dark">{p.credits}</span>
              <span className={`font-mono text-[10px] ${p.status === "Verified" ? "text-green-600" : p.status === "Review" ? "text-amber-600" : "text-brand-muted"}`}>
                {p.status === "Verified" && "✓ "}{p.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Claims Engine ─── */
function ClaimsEnginePreview() {
  const claims = [
    { type: "Carbon", tag: "CO₂e", confidence: 94, source: "Field Report Q3", color: "#4FB573" },
    { type: "Biodiversity", tag: "BIO", confidence: 87, source: "Monitoring Data", color: "#527984" },
    { type: "Water", tag: "H₂O", confidence: 91, source: "Sensor Array", color: "#79C6AA" },
    { type: "Social", tag: "SOC", confidence: 82, source: "Survey Results", color: "#E9C46A" },
  ];

  return (
    <div className="bg-[#FAFAFA] h-full flex flex-col">
      <MockHeader title="Claims Engine" subtitle="AI Processing" />
      <div className="p-4 flex-1 space-y-3">
        {/* Upload zone */}
        <div className="border-2 border-dashed border-brand-green/30 rounded-[4px] p-3 bg-white flex items-center gap-3">
          <Upload size={18} className="text-brand-green" />
          <div>
            <p className="text-xs font-heading font-bold text-brand-dark">
              3 documents processed
            </p>
            <p className="text-[10px] text-brand-muted font-body">
              field_report.pdf, monitoring_q3.csv, survey_results.xlsx
            </p>
          </div>
          <div className="ml-auto">
            <CheckCircle2 size={16} className="text-brand-green" />
          </div>
        </div>
        {/* Processing pipeline */}
        <div className="bg-white rounded-[4px] border border-gray-100 p-3">
          <div className="flex items-center gap-2 mb-3">
            <Cpu size={14} className="text-brand-green" />
            <span className="text-[10px] font-mono uppercase text-brand-muted tracking-wide">
              AI Extraction Pipeline
            </span>
          </div>
          <div className="space-y-2">
            {["Document Parsing", "Entity Extraction", "Claim Structuring", "Confidence Scoring"].map(
              (step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-brand-green/10 flex items-center justify-center">
                    <CheckCircle2 size={10} className="text-brand-green" />
                  </div>
                  <span className="text-[11px] font-body text-brand-dark flex-1">{step}</span>
                  <span className="text-[9px] font-mono text-brand-green">Done</span>
                </div>
              )
            )}
          </div>
        </div>
        {/* Extracted claims */}
        <div className="space-y-2">
          {claims.map((c) => (
            <div
              key={c.type}
              className="bg-white rounded-[4px] border border-gray-100 p-3 flex items-center gap-3"
            >
              <span
                className="text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded-[2px] text-white"
                style={{ background: c.color }}
              >
                {c.tag}
              </span>
              <div className="flex-1">
                <p className="text-[11px] font-heading font-bold text-brand-dark">
                  {c.type} Reduction Claim
                </p>
                <p className="text-[9px] font-body text-brand-muted">
                  Source: {c.source}
                </p>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono font-bold text-brand-dark">
                  {c.confidence}%
                </span>
                <p className="text-[8px] text-brand-muted">confidence</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Fund Intelligence ─── */
function FundIntelligencePreview() {
  return (
    <div className="bg-[#FAFAFA] h-full flex flex-col">
      <MockHeader title="Fund Intelligence" subtitle="Portfolio Analytics" />
      <div className="p-4 flex-1 space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <MetricCard label="Portfolio Companies" value="18" />
          <MetricCard label="Claims Verified" value="2,340" change="18%" />
          <MetricCard label="Risk Flags" value="3" positive={false} change="–2" />
        </div>
        <div className="bg-white rounded-[4px] border border-gray-100 p-3">
          <p className="text-[10px] font-mono uppercase text-brand-muted tracking-wide mb-3">
            Portfolio Diligence Status
          </p>
          {[
            { name: "Company A", score: 92, status: "Verified" },
            { name: "Company B", score: 85, status: "Verified" },
            { name: "Company C", score: 78, status: "In Review" },
            { name: "Company D", score: 71, status: "Flagged" },
          ].map((c) => (
            <div key={c.name} className="flex items-center gap-3 py-2 border-b border-gray-50 last:border-0">
              <span className="text-[11px] font-body text-brand-dark w-24">{c.name}</span>
              <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${c.score}%`,
                    background: c.score > 80 ? "#4FB573" : c.score > 70 ? "#E9C46A" : "#e74c3c",
                  }}
                />
              </div>
              <span className="text-[10px] font-mono text-brand-dark w-8">{c.score}</span>
              <span className={`text-[9px] font-mono ${c.status === "Flagged" ? "text-red-500" : c.status === "In Review" ? "text-amber-500" : "text-green-600"}`}>
                {c.status}
              </span>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-[4px] border border-gray-100 p-3 flex items-center gap-3">
          <AlertTriangle size={16} className="text-amber-500 shrink-0" />
          <div>
            <p className="text-[11px] font-heading font-bold text-brand-dark">3 Risk Flags Detected</p>
            <p className="text-[9px] text-brand-muted font-body">Missing biodiversity baseline in 2 companies · Expired MRV certificate</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Supply Chain ─── */
function SupplyChainPreview() {
  return (
    <div className="bg-[#FAFAFA] h-full flex flex-col">
      <MockHeader title="Supply Chain" subtitle="Traceability" />
      <div className="p-4 flex-1 space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <MetricCard label="Suppliers Tracked" value="47" />
          <MetricCard label="Claims Verified" value="892" change="15%" />
          <MetricCard label="Audit Score" value="94%" change="3%" />
        </div>
        {/* Supply chain flow */}
        <div className="bg-white rounded-[4px] border border-gray-100 p-3">
          <p className="text-[10px] font-mono uppercase text-brand-muted tracking-wide mb-3">
            Supply Chain Claims Flow
          </p>
          <div className="flex items-center justify-between">
            {["Raw Material", "Processing", "Distribution", "Retail"].map((stage, i) => (
              <div key={stage} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-[10px] font-mono font-bold"
                    style={{
                      background: `linear-gradient(180deg, ${i < 3 ? "#4FB573" : "#527984"}, ${i < 3 ? "#79C6AA" : "#4FB573"})`,
                    }}
                  >
                    {[12, 8, 6, 4][i]}
                  </div>
                  <span className="text-[8px] font-body text-brand-muted mt-1 text-center leading-tight w-16">
                    {stage}
                  </span>
                </div>
                {i < 3 && (
                  <div className="w-6 h-[1px] bg-brand-green/40 mx-1 mb-4" />
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Risk items */}
        {[
          { supplier: "Supplier #12", claim: "Organic Certification", status: "Verified", risk: "Low" },
          { supplier: "Supplier #23", claim: "Fair Trade Compliance", status: "Pending", risk: "Medium" },
          { supplier: "Supplier #07", claim: "Deforestation-Free", status: "Verified", risk: "Low" },
        ].map((item) => (
          <div key={item.supplier} className="bg-white rounded-[4px] border border-gray-100 p-3 flex items-center gap-3">
            <div className="flex-1">
              <p className="text-[11px] font-heading font-bold text-brand-dark">{item.supplier}</p>
              <p className="text-[9px] font-body text-brand-muted">{item.claim}</p>
            </div>
            <span className={`text-[9px] font-mono px-2 py-0.5 rounded-[2px] ${item.status === "Verified" ? "bg-green-50 text-green-600" : "bg-amber-50 text-amber-600"}`}>
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Marine Portfolio ─── */
function MarinePortfolioPreview() {
  return (
    <div className="bg-[#FAFAFA] h-full flex flex-col">
      <MockHeader title="Marine Portfolio" subtitle="Conservation Intelligence" />
      <div className="p-4 flex-1 space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <MetricCard label="Marine Projects" value="12" change="2 new" />
          <MetricCard label="Hectares Protected" value="48.2K" change="8%" />
          <MetricCard label="Credits Retired" value="9,840" change="22%" />
        </div>
        {/* Map placeholder */}
        <div className="bg-white rounded-[4px] border border-gray-100 p-3 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ background: "linear-gradient(135deg, #527984, #79C6AA)" }} />
          <div className="relative">
            <div className="flex items-center gap-2 mb-2">
              <Globe size={14} className="text-brand-green" />
              <span className="text-[10px] font-mono uppercase text-brand-muted tracking-wide">
                Project Locations
              </span>
            </div>
            <div className="h-24 flex items-center justify-center gap-6">
              {[
                { name: "Coral Reef", lat: "8°N" },
                { name: "Mangrove", lat: "12°S" },
                { name: "Kelp Forest", lat: "34°N" },
              ].map((loc) => (
                <div key={loc.name} className="flex flex-col items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-brand-green shadow-[0_0_8px_rgba(79,181,115,0.5)]" />
                  <span className="text-[9px] font-body text-brand-dark">{loc.name}</span>
                  <span className="text-[8px] font-mono text-brand-muted">{loc.lat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Biodiversity metrics */}
        <div className="bg-white rounded-[4px] border border-gray-100 p-3">
          <p className="text-[10px] font-mono uppercase text-brand-muted tracking-wide mb-2">
            Biodiversity Impact
          </p>
          <div className="grid grid-cols-2 gap-2">
            {[
              { label: "Species Monitored", value: "342" },
              { label: "Reef Health Index", value: "7.8/10" },
              { label: "Mangrove Restored", value: "1,240 ha" },
              { label: "Blue Carbon", value: "4,600 tCO₂e" },
            ].map((m) => (
              <div key={m.label} className="flex items-center gap-2 py-1">
                <Anchor size={10} className="text-brand-green shrink-0" />
                <div>
                  <span className="text-[9px] text-brand-muted font-body block">{m.label}</span>
                  <span className="text-[11px] font-mono font-bold text-brand-dark">{m.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── MRV Platform ─── */
function MRVPlatformPreview() {
  return (
    <div className="bg-[#FAFAFA] h-full flex flex-col">
      <MockHeader title="MRV Platform" subtitle="Measurement · Reporting · Verification" />
      <div className="p-4 flex-1 space-y-3">
        {/* MRV Pipeline */}
        <div className="bg-white rounded-[4px] border border-gray-100 p-3">
          <p className="text-[10px] font-mono uppercase text-brand-muted tracking-wide mb-3">
            MRV Workflow Status
          </p>
          <div className="space-y-2">
            {[
              { stage: "Measurement", items: 24, status: "Complete", pct: 100 },
              { stage: "Reporting", items: 18, status: "In Progress", pct: 75 },
              { stage: "Verification", items: 12, status: "Queued", pct: 50 },
            ].map((s) => (
              <div key={s.stage} className="flex items-center gap-3">
                <span className="text-[11px] font-heading font-bold text-brand-dark w-24">{s.stage}</span>
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${s.pct}%`,
                      background: "linear-gradient(90deg, #4FB573, #79C6AA)",
                    }}
                  />
                </div>
                <span className="text-[9px] font-mono text-brand-muted w-8">{s.items}</span>
                <span className={`text-[9px] font-mono w-16 text-right ${s.status === "Complete" ? "text-green-600" : "text-amber-500"}`}>
                  {s.status}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <MetricCard label="Attribution Models" value="6" />
          <MetricCard label="Funder Reports" value="14" change="5 new" />
        </div>
        {/* Data sources */}
        <div className="bg-white rounded-[4px] border border-gray-100 p-3">
          <p className="text-[10px] font-mono uppercase text-brand-muted tracking-wide mb-2">
            Connected Data Sources
          </p>
          <div className="space-y-1.5">
            {["Field Sensors (IoT)", "Satellite Imagery", "Manual Surveys", "Weather Station API"].map(
              (source) => (
                <div key={source} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                  <span className="text-[10px] font-body text-brand-dark">{source}</span>
                  <span className="text-[8px] font-mono text-green-600 ml-auto">Connected</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Lands & Credits ─── */
function LandsCreditsPreview() {
  return (
    <div className="bg-[#FAFAFA] h-full flex flex-col">
      <MockHeader title="Lands & Credits" subtitle="Geospatial Intelligence" />
      <div className="p-4 flex-1 space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <MetricCard label="Projects Mapped" value="86" />
          <MetricCard label="Total Hectares" value="2.4M" change="12%" />
          <MetricCard label="Credits Listed" value="340K" change="8%" />
        </div>
        {/* Map view mockup */}
        <div className="bg-white rounded-[4px] border border-gray-100 p-3 relative">
          <div className="flex items-center gap-2 mb-2">
            <MapPin size={14} className="text-brand-green" />
            <span className="text-[10px] font-mono uppercase text-brand-muted tracking-wide">
              Live Project Map
            </span>
          </div>
          <div className="h-28 bg-gradient-to-br from-[#527984]/10 via-[#79C6AA]/10 to-[#C4DAB5]/10 rounded-[4px] relative overflow-hidden border border-gray-100">
            {/* Grid lines */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-4">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="border border-gray-100/50" />
              ))}
            </div>
            {/* Project dots */}
            {[
              { x: "15%", y: "30%", size: 12 },
              { x: "35%", y: "55%", size: 8 },
              { x: "55%", y: "25%", size: 14 },
              { x: "70%", y: "60%", size: 10 },
              { x: "85%", y: "40%", size: 6 },
            ].map((dot, i) => (
              <div
                key={i}
                className="absolute rounded-full shadow-[0_0_6px_rgba(79,181,115,0.4)]"
                style={{
                  left: dot.x,
                  top: dot.y,
                  width: dot.size,
                  height: dot.size,
                  background: "linear-gradient(180deg, #4FB573, #79C6AA)",
                }}
              />
            ))}
          </div>
        </div>
        {/* Credit supply table */}
        <div className="bg-white rounded-[4px] border border-gray-100 p-3">
          <p className="text-[10px] font-mono uppercase text-brand-muted tracking-wide mb-2">
            Credit Supply
          </p>
          {[
            { type: "Carbon", issued: "120K", retired: "84K", available: "36K" },
            { type: "Biodiversity", issued: "85K", retired: "52K", available: "33K" },
            { type: "Water", issued: "45K", retired: "28K", available: "17K" },
          ].map((c) => (
            <div key={c.type} className="flex items-center gap-2 py-1.5 border-b border-gray-50 last:border-0 text-[10px]">
              <span className="font-body text-brand-dark w-20">{c.type}</span>
              <span className="font-mono text-brand-muted flex-1">Issued: {c.issued}</span>
              <span className="font-mono text-red-400 flex-1">Retired: {c.retired}</span>
              <span className="font-mono text-green-600">Avail: {c.available}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Module Preview Router ─── */
const PREVIEW_MAP: Record<string, React.FC> = {
  "ai-hub": AIHubPreview,
  "claims-engine": ClaimsEnginePreview,
  "fund-intelligence": FundIntelligencePreview,
  "supply-chain": SupplyChainPreview,
  "marine-portfolio": MarinePortfolioPreview,
  "mrv-platform": MRVPlatformPreview,
  "lands-credits": LandsCreditsPreview,
};

export function ModulePreview({ moduleId }: { moduleId: string }) {
  const Preview = PREVIEW_MAP[moduleId];

  if (!Preview) {
    return (
      <div className="h-full flex items-center justify-center bg-brand-surface text-brand-muted font-body text-sm">
        Preview coming soon
      </div>
    );
  }

  return <Preview />;
}
