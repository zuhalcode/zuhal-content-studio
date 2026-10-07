"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Activity,
  Archive,
  ArrowRight,
  Beaker,
  BookOpen,
  Bot,
  Check,
  ChevronDown,
  CircleHelp,
  Command,
  FileText,
  FlaskConical,
  FolderKanban,
  GitBranch,
  Inbox,
  LayoutDashboard,
  Lightbulb,
  Menu,
  Moon,
  MoreHorizontal,
  PanelLeftClose,
  PanelLeftOpen,
  Plus,
  Search,
  Settings,
  Sparkles,
  Sun,
  Target,
  TrendingUp,
  Users,
  X,
  Zap,
} from "lucide-react";

const navGroups = [
  {
    label: "WORKSPACE",
    items: [
      ["Overview", LayoutDashboard],
      ["Ideas", Lightbulb],
      ["Briefs", FileText],
      ["Content", Archive],
      ["Research", BookOpen],
    ],
  },
  {
    label: "ANALYSIS",
    items: [
      ["Experiments", FlaskConical],
      ["Learnings", Sparkles],
      ["Patterns", GitBranch],
    ],
  },
  {
    label: "SYSTEM",
    items: [
      ["Projects", FolderKanban],
      ["Settings", Settings],
    ],
  },
] as const;

const projects = ["All projects", "Coding", "Books", "Coffee Brewing"];
const ideas = [
  {
    title: "Why supplier_id should not live inside products",
    project: "Coding",
    topic: "Database Architecture",
    source: "Experience",
    priority: "High",
    status: "Inbox",
  },
  {
    title: "The overlooked variable in pour-over recipes",
    project: "Coffee Brewing",
    topic: "Extraction",
    source: "Reference",
    priority: "Medium",
    status: "Selected",
  },
  {
    title: "What The Mom Test gets right about feedback",
    project: "Books",
    topic: "Product Thinking",
    source: "Reading",
    priority: "Low",
    status: "Briefing",
  },
  {
    title: "Stop putting business logic in components",
    project: "Coding",
    topic: "TypeScript",
    source: "Experience",
    priority: "High",
    status: "Inbox",
  },
];

const content = [
  [
    "Why I don't put supplier_id inside products",
    "Coding",
    "Talking head",
    "12.4k",
    "46%",
    "Above baseline",
  ],
  [
    "The 4-minute pour over that changed my morning",
    "Coffee Brewing",
    "Demonstration",
    "8.8k",
    "38%",
    "Above baseline",
  ],
  [
    "What The Mom Test gets right about feedback",
    "Books",
    "Voiceover",
    "5.2k",
    "31%",
    "Near baseline",
  ],
  [
    "Stop putting business logic in your components",
    "Coding",
    "Screen recording",
    "2.1k",
    "19%",
    "Below baseline",
  ],
];

function Badge({
  children,
  tone = "muted",
}: {
  children: React.ReactNode;
  tone?: string;
}) {
  const styles: Record<string, string> = {
    muted: "bg-muted text-muted-foreground",
    positive:
      "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-300",
    negative: "bg-rose-50 text-rose-700 dark:bg-rose-950/70 dark:text-rose-300",
    warning:
      "bg-amber-50 text-amber-700 dark:bg-amber-950/70 dark:text-amber-300",
    violet:
      "bg-violet-50 text-violet-700 dark:bg-violet-950/70 dark:text-violet-300",
  };
  return (
    <span
      className={`inline-flex rounded-md px-2 py-1 text-[11px] font-medium ${styles[tone] ?? styles.muted}`}
    >
      {children}
    </span>
  );
}

function Button({
  children,
  onClick,
  primary = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  primary?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex h-9 items-center gap-2 rounded-md px-3 text-xs font-medium transition-colors ${primary ? "bg-primary text-primary-foreground hover:bg-primary/90" : "border border-border hover:bg-muted"}`}
    >
      {children}
    </button>
  );
}

function Section({
  title,
  description,
  children,
  action,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <section className="rounded-xl border border-border bg-card shadow-sm">
      <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-4">
        <div>
          <h2 className="text-sm font-semibold">{title}</h2>
          {description && (
            <p className="mt-1 text-xs text-muted-foreground">{description}</p>
          )}
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}

function PageHeader({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-7 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
      <div>
        {eyebrow && (
          <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {eyebrow}
          </div>
        )}
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {title}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
      {action}
    </div>
  );
}

function Overview({
  navigate,
  project,
}: {
  navigate: (page: string) => void;
  project: string;
}) {
  const stats = [
    ["Active experiments", "04", "Experiments", FlaskConical],
    ["Unanalyzed content", "07", "Content", Activity],
    ["Pending learnings", "03", "Learnings", Lightbulb],
    ["Emerging patterns", "06", "Patterns", GitBranch],
  ] as const;
  return (
    <>
      <PageHeader
        eyebrow="Operational command center"
        title="Good morning, Alex"
        description="Here's what is moving through your content system."
        action={
          <div className="flex gap-2">
            <Button>
              <span className="size-1.5 rounded-full bg-slate-400" />
              {project}
              <ChevronDown className="size-3.5" />
            </Button>
            <Button primary onClick={() => navigate("Ideas")}>
              <Plus className="size-3.5" />
              New idea
            </Button>
          </div>
        }
      />
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(([label, value, page, Icon]) => (
          <button
            key={label}
            onClick={() => navigate(page)}
            className="rounded-xl border border-border bg-card p-4 text-left shadow-sm hover:border-foreground/30"
          >
            <div className="mb-4 flex justify-between text-xs font-medium text-muted-foreground">
              <span>{label}</span>
              <Icon className="size-4 text-primary" />
            </div>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-semibold">{value}</span>
              <ArrowRight className="size-4 text-muted-foreground" />
            </div>
          </button>
        ))}
      </div>
      <div className="mt-6 grid gap-5 xl:grid-cols-[1.4fr_1fr]">
        <Section
          title="Performance overview"
          description="Published content compared to account baseline"
        >
          <div className="px-5 py-5">
            <div className="grid grid-cols-3 gap-4 text-xs">
              <div>
                <div className="text-muted-foreground">Published</div>
                <strong className="mt-2 block text-xl">24</strong>
              </div>
              <div>
                <div className="text-muted-foreground">Above baseline</div>
                <strong className="mt-2 block text-xl text-emerald-600">
                  14
                </strong>
              </div>
              <div>
                <div className="text-muted-foreground">Below baseline</div>
                <strong className="mt-2 block text-xl text-rose-600">05</strong>
              </div>
            </div>
            <div className="mt-6 flex h-28 items-end gap-1 border-b border-border">
              {[
                42, 56, 48, 70, 62, 76, 58, 84, 68, 92, 78, 88, 96, 72, 86, 100,
              ].map((height, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t-sm ${i === 10 || i === 15 ? "bg-emerald-500" : "bg-muted-foreground/20"}`}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </Section>
        <Section
          title="Next test queue"
          description="Experiments waiting to be run"
        >
          <div className="divide-y divide-border">
            {[
              "Curiosity hook",
              "Concrete demonstration",
              "Contrarian opener",
            ].map((item, i) => (
              <button
                key={item}
                onClick={() => navigate("Experiments")}
                className="flex w-full items-center gap-3 px-5 py-4 text-left hover:bg-muted/40"
              >
                <span className="font-mono text-[10px] text-muted-foreground">
                  0{i + 1}
                </span>
                <span className="flex-1 text-xs font-medium">
                  {item}
                  <span className="mt-1 block text-[11px] text-muted-foreground">
                    {
                      [
                        "Supabase RPC",
                        "TypeScript architecture",
                        "Coffee extraction",
                      ][i]
                    }
                  </span>
                </span>
                <Badge tone={i === 0 ? "warning" : "muted"}>
                  {i === 0 ? "High" : "Medium"}
                </Badge>
              </button>
            ))}
          </div>
        </Section>
      </div>
    </>
  );
}

function Ideas({ navigate }: { navigate: (page: string) => void }) {
  const [view, setView] = useState<"board" | "list">("board");
  const [selected, setSelected] = useState<(typeof ideas)[number] | null>(null);
  const [query, setQuery] = useState("");
  const filtered = ideas.filter((idea) =>
    idea.title.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <>
      <PageHeader
        eyebrow="Capture → triage → develop → convert"
        title="Ideas"
        description="An inbox for opportunities before they become briefs."
        action={
          <Button primary>
            <Plus className="size-3.5" />
            New idea
          </Button>
        }
      />
      <div className="mb-5 flex flex-wrap gap-2">
        <div className="flex h-9 min-w-[220px] flex-1 items-center gap-2 rounded-md border border-border px-3">
          <Search className="size-3.5 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search ideas..."
            className="w-full bg-transparent text-xs outline-none"
          />
        </div>
        <Button>
          Project <ChevronDown className="size-3.5" />
        </Button>
        <Button>
          Topic <ChevronDown className="size-3.5" />
        </Button>
        <div className="flex rounded-md border border-border p-0.5">
          <button
            onClick={() => setView("board")}
            className={`rounded px-3 py-1.5 text-xs ${view === "board" ? "bg-muted font-medium" : "text-muted-foreground"}`}
          >
            Board
          </button>
          <button
            onClick={() => setView("list")}
            className={`rounded px-3 py-1.5 text-xs ${view === "list" ? "bg-muted font-medium" : "text-muted-foreground"}`}
          >
            List
          </button>
        </div>
      </div>
      {view === "board" ? (
        <div className="grid gap-4 lg:grid-cols-3">
          {["Inbox", "Selected", "Briefing"].map((status) => (
            <div
              key={status}
              className="rounded-xl border border-border bg-muted/30 p-3"
            >
              <div className="mb-3 flex items-center justify-between px-1">
                <h2 className="text-[11px] font-semibold uppercase tracking-wider">
                  {status}
                </h2>
                <span className="text-[11px] text-muted-foreground">
                  {filtered.filter((idea) => idea.status === status).length}
                </span>
              </div>
              <div className="flex flex-col gap-3">
                {filtered
                  .filter((idea) => idea.status === status)
                  .map((idea) => (
                    <button
                      key={idea.title}
                      onClick={() => setSelected(idea)}
                      className="rounded-lg border border-border bg-card p-4 text-left shadow-sm hover:border-primary/50"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-xs font-semibold leading-5">
                          {idea.title}
                        </h3>
                        <Badge
                          tone={idea.priority === "High" ? "warning" : "muted"}
                        >
                          {idea.priority}
                        </Badge>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        <Badge>{idea.project}</Badge>
                        <Badge>{idea.topic}</Badge>
                      </div>
                      <p className="mt-3 text-[10px] text-muted-foreground">
                        Source: {idea.source} · Added today
                      </p>
                    </button>
                  ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Section
          title="Idea inventory"
          description={`${filtered.length} opportunities in your inbox`}
        >
          <div className="divide-y divide-border">
            {filtered.map((idea) => (
              <button
                key={idea.title}
                onClick={() => setSelected(idea)}
                className="flex w-full items-center gap-4 px-5 py-4 text-left hover:bg-muted/40"
              >
                <Inbox className="size-4 text-muted-foreground" />
                <span className="min-w-0 flex-1">
                  <strong className="block truncate text-xs">
                    {idea.title}
                  </strong>
                  <span className="mt-1 block text-[11px] text-muted-foreground">
                    {idea.project} · {idea.topic} · {idea.source}
                  </span>
                </span>
                <Badge tone={idea.priority === "High" ? "warning" : "muted"}>
                  {idea.priority}
                </Badge>
                <Badge>{idea.status}</Badge>
              </button>
            ))}
          </div>
        </Section>
      )}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/20"
          onClick={() => setSelected(null)}
        >
          <aside
            onClick={(e) => e.stopPropagation()}
            className="absolute right-0 top-0 h-full w-full max-w-md overflow-y-auto border-l border-border bg-background p-6 shadow-xl"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  Idea detail
                </div>
                <h2 className="mt-2 text-lg font-semibold">{selected.title}</h2>
              </div>
              <button
                onClick={() => setSelected(null)}
                aria-label="Close detail"
              >
                <X className="size-4" />
              </button>
            </div>
            <div className="mt-7 flex flex-col gap-5">
              <div>
                <label className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Problem
                </label>
                <p className="mt-2 text-sm">
                  Developers often model ownership relationships in the wrong
                  layer.
                </p>
              </div>
              <div>
                <label className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Angle
                </label>
                <p className="mt-2 text-sm">
                  A practical architecture decision with a concrete schema
                  example.
                </p>
              </div>
              <div>
                <label className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Core idea
                </label>
                <p className="mt-2 text-sm">
                  Keep product identity separate from supplier relationships.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge>{selected.project}</Badge>
                <Badge>{selected.topic}</Badge>
                <Badge tone="warning">{selected.priority} priority</Badge>
              </div>
              <div className="flex flex-wrap gap-2 border-t border-border pt-5">
                <Button>Edit</Button>
                <Button primary onClick={() => navigate("Briefs")}>
                  Create Brief <ArrowRight className="size-3.5" />
                </Button>
                <Button>Archive</Button>
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

function Briefs({ navigate }: { navigate: (page: string) => void }) {
  const [status, setStatus] = useState("All");
  const briefs = [
    [
      "Supplier relationships without leaky models",
      "Coding",
      "Database Architecture",
      "Authority",
      "Video",
      "Draft",
    ],
    [
      "The tasting variable nobody tracks",
      "Coffee Brewing",
      "Extraction",
      "Education",
      "Carousel",
      "Ready",
    ],
    [
      "A better way to interview users",
      "Books",
      "Product Thinking",
      "Awareness",
      "Voiceover",
      "Production",
    ],
  ];
  return (
    <>
      <PageHeader
        eyebrow="Pre-production workspace"
        title="Briefs"
        description="Turn selected opportunities into structured execution plans."
        action={
          <Button primary>
            <Plus className="size-3.5" />
            New brief
          </Button>
        }
      />
      <div className="mb-5 flex flex-wrap gap-2">
        {["All", "Draft", "Ready", "Production", "Published", "Archived"].map(
          (item) => (
            <button
              key={item}
              onClick={() => setStatus(item)}
              className={`rounded-md px-3 py-2 text-xs ${status === item ? "bg-primary text-primary-foreground" : "border border-border hover:bg-muted"}`}
            >
              {item}
            </button>
          ),
        )}
      </div>
      <Section
        title="Brief pipeline"
        description="Draft → ready → production → published"
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left">
            <thead className="border-b border-border text-[10px] uppercase tracking-wider text-muted-foreground">
              <tr>
                {[
                  "Brief",
                  "Project",
                  "Topic",
                  "Audience",
                  "Funnel",
                  "Format",
                  "Readiness",
                  "Updated",
                ].map((h) => (
                  <th key={h} className="px-5 py-3 font-medium">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {briefs
                .filter((row) => status === "All" || row[5] === status)
                .map((row) => (
                  <tr key={row[0]} className="hover:bg-muted/40">
                    <td className="px-5 py-4 text-xs font-medium">{row[0]}</td>
                    <td className="px-5 py-4 text-xs text-muted-foreground">
                      {row[1]}
                    </td>
                    <td className="px-5 py-4 text-xs text-muted-foreground">
                      {row[2]}
                    </td>
                    <td className="px-5 py-4 text-xs">Developers</td>
                    <td className="px-5 py-4">
                      <Badge>{row[3]}</Badge>
                    </td>
                    <td className="px-5 py-4 text-xs">{row[4]}</td>
                    <td className="px-5 py-4">
                      <span className="text-xs font-medium">
                        {row[5] === "Draft" ? "8 / 10" : "10 / 10"}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-xs text-muted-foreground">
                      Today
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </Section>
      <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_320px]">
        <Section
          title="Editorial workspace"
          description="The selected brief is ready for structured editing"
        >
          <div className="grid gap-3 p-5 sm:grid-cols-2">
            {[
              "Context",
              "Audience",
              "Objective",
              "Core Idea",
              "Hypothesis",
              "Hook",
              "Tension",
              "Payoff",
              "CTV",
              "Format",
              "Research",
              "Measurement",
            ].map((item, i) => (
              <button
                key={item}
                className="flex items-center gap-3 rounded-lg border border-border p-3 text-left text-xs hover:bg-muted"
              >
                <span
                  className={`flex size-5 items-center justify-center rounded-full ${i < 8 ? "bg-emerald-100 text-emerald-700" : "bg-muted text-muted-foreground"}`}
                >
                  {i < 8 ? <Check className="size-3" /> : i + 1}
                </span>
                {item}
                <ArrowRight className="ml-auto size-3 text-muted-foreground" />
              </button>
            ))}
          </div>
        </Section>
        <Section title="Brief readiness">
          <div className="p-5">
            <div className="text-3xl font-semibold">
              8{" "}
              <span className="text-sm font-normal text-muted-foreground">
                / 10
              </span>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Add a primary metric and baseline before production.
            </p>
            <Button primary onClick={() => navigate("Content")}>
              <Plus className="size-3.5" />
              Create Content
            </Button>
          </div>
        </Section>
      </div>
    </>
  );
}

function ContentPage() {
  const [grid, setGrid] = useState(false);
  return (
    <>
      <PageHeader
        eyebrow="Published library"
        title="Content"
        description="Review the work that shipped and the signals it is generating."
        action={
          <div className="flex gap-2">
            <Button onClick={() => setGrid(!grid)}>
              {grid ? "Table view" : "Grid view"}
            </Button>
            <Button primary>
              <Plus className="size-3.5" />
              New content
            </Button>
          </div>
        }
      />
      <div className="mb-5 flex flex-wrap gap-2">
        <div className="flex h-9 min-w-[220px] flex-1 items-center gap-2 rounded-md border border-border px-3">
          <Search className="size-3.5 text-muted-foreground" />
          <input
            placeholder="Search content..."
            className="w-full bg-transparent text-xs outline-none"
          />
        </div>
        {["Project", "Platform", "Status", "Topic", "Performance", "Date"].map(
          (item) => (
            <Button key={item}>
              {item}
              <ChevronDown className="size-3.5" />
            </Button>
          ),
        )}
      </div>
      {grid ? (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {content.map((row) => (
            <article
              key={row[0]}
              className="overflow-hidden rounded-xl border border-border bg-card"
            >
              <div className="flex h-28 items-end bg-muted p-4">
                <div className="h-1/2 w-full rounded bg-muted-foreground/20" />
              </div>
              <div className="p-4">
                <h2 className="text-xs font-semibold leading-5">{row[0]}</h2>
                <p className="mt-1 text-[11px] text-muted-foreground">
                  {row[1]} · {row[2]}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-medium">{row[3]} views</span>
                  <Badge
                    tone={
                      row[5] === "Above baseline"
                        ? "positive"
                        : row[5] === "Below baseline"
                          ? "negative"
                          : "muted"
                    }
                  >
                    {row[5]}
                  </Badge>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <Section
          title="Content library"
          description="Sorted by recently published"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left">
              <thead className="border-b border-border text-[10px] uppercase tracking-wider text-muted-foreground">
                <tr>
                  {[
                    "Content",
                    "Project",
                    "Format",
                    "Published",
                    "Views",
                    "Retention",
                    "Performance",
                  ].map((h) => (
                    <th key={h} className="px-5 py-3 font-medium">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {content.map((row) => (
                  <tr key={row[0]} className="hover:bg-muted/40">
                    <td className="max-w-[280px] px-5 py-4 text-xs font-medium">
                      {row[0]}
                    </td>
                    <td className="px-5 py-4 text-xs text-muted-foreground">
                      {row[1]}
                    </td>
                    <td className="px-5 py-4 text-xs">{row[2]}</td>
                    <td className="px-5 py-4 text-xs text-muted-foreground">
                      Sep 24
                    </td>
                    <td className="px-5 py-4 text-xs font-medium">{row[3]}</td>
                    <td className="px-5 py-4 text-xs font-medium">{row[4]}</td>
                    <td className="px-5 py-4">
                      <Badge
                        tone={
                          row[5] === "Above baseline"
                            ? "positive"
                            : row[5] === "Below baseline"
                              ? "negative"
                              : "muted"
                        }
                      >
                        {row[5]}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      )}
    </>
  );
}

function Research() {
  const [tab, setTab] = useState("Overview");
  return (
    <>
      <PageHeader
        eyebrow="Research laboratory"
        title="Research"
        description="Find, sort, and recreate useful external references."
      />
      <div className="mb-6 flex gap-1 border-b border-border">
        {["Overview", "Accounts", "References"].map((item) => (
          <button
            key={item}
            onClick={() => setTab(item)}
            className={`border-b-2 px-4 py-3 text-xs font-medium ${tab === item ? "border-primary text-foreground" : "border-transparent text-muted-foreground"}`}
          >
            {item}
          </button>
        ))}
      </div>
      {tab === "Overview" ? (
        <>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
            {[
              ["Tracked accounts", "18"],
              ["References collected", "142"],
              ["Local references", "86"],
              ["Global references", "56"],
              ["High performance", "27"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-xl border border-border bg-card p-4"
              >
                <div className="text-xs text-muted-foreground">{label}</div>
                <div className="mt-3 text-2xl font-semibold">{value}</div>
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-5 lg:grid-cols-3">
            <Section title="Top performance multiples">
              <div className="flex flex-col gap-4 p-5">
                {[
                  "Curiosity hook · 4.2x",
                  "Concrete demo · 3.8x",
                  "Contrarian opener · 3.1x",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-xs">
                    <TrendingUp className="size-4 text-emerald-600" />
                    {item}
                  </div>
                ))}
              </div>
            </Section>
            <Section title="Top topics">
              <div className="flex flex-wrap gap-2 p-5">
                <Badge>Coding</Badge>
                <Badge>Architecture</Badge>
                <Badge>Extraction</Badge>
                <Badge>Feedback</Badge>
              </div>
            </Section>
            <Section title="Top hook types">
              <div className="flex flex-col gap-3 p-5 text-xs">
                <span>
                  Problem-first <strong className="float-right">42%</strong>
                </span>
                <span>
                  Curiosity <strong className="float-right">31%</strong>
                </span>
                <span>
                  Contrarian <strong className="float-right">18%</strong>
                </span>
              </div>
            </Section>
          </div>
        </>
      ) : tab === "Accounts" ? (
        <Section
          title="Account directory"
          description="Tracked creators and publications"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px] text-left">
              <thead className="border-b border-border text-[10px] uppercase tracking-wider text-muted-foreground">
                <tr>
                  {[
                    "Account",
                    "Platform",
                    "Scope",
                    "Followers",
                    "Average views",
                    "References",
                    "Status",
                  ].map((h) => (
                    <th key={h} className="px-5 py-3 font-medium">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Theo - t3.gg", "YouTube", "Global", "1.2m", "84k", "24"],
                  ["Lee Robinson", "YouTube", "Global", "180k", "22k", "18"],
                  ["Database Builders", "TikTok", "Local", "42k", "9k", "12"],
                ].map((row) => (
                  <tr key={row[0]}>
                    <td className="px-5 py-4 text-xs font-medium">{row[0]}</td>
                    {row.slice(1).map((cell) => (
                      <td
                        key={cell}
                        className="px-5 py-4 text-xs text-muted-foreground"
                      >
                        {cell}
                      </td>
                    ))}
                    <td className="px-5 py-4">
                      <Badge tone="positive">Tracking</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      ) : (
        <Section
          title="Reference decomposition queue"
          description="Sorted by performance multiple"
        >
          <div className="divide-y divide-border">
            {[
              [
                "The database mistake everyone makes",
                "Theo - t3.gg",
                "4.2x",
                "Coding",
              ],
              [
                "Your coffee grinder is lying to you",
                "Coffee Lab",
                "3.8x",
                "Coffee Brewing",
              ],
              [
                "Ask this before you build",
                "Lee Robinson",
                "3.1x",
                "Product Thinking",
              ],
            ].map((row) => (
              <button
                key={row[0]}
                className="flex w-full items-center gap-4 px-5 py-4 text-left hover:bg-muted/40"
              >
                <div className="flex size-9 items-center justify-center rounded-lg bg-violet-100 text-violet-700">
                  <BookOpen className="size-4" />
                </div>
                <span className="flex-1">
                  <strong className="block text-xs">{row[0]}</strong>
                  <span className="mt-1 block text-[11px] text-muted-foreground">
                    {row[1]} · {row[3]}
                  </span>
                </span>
                <strong className="text-sm text-emerald-600">{row[2]}</strong>
                <ArrowRight className="size-4 text-muted-foreground" />
              </button>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}

function Experiments() {
  const [selected, setSelected] = useState(
    "Curiosity hook vs direct explanation",
  );
  return (
    <>
      <PageHeader
        eyebrow="Scientific testing workspace"
        title="Experiments"
        description="Question → hypothesis → variable → measurement → decision."
        action={
          <Button primary>
            <Plus className="size-3.5" />
            New experiment
          </Button>
        }
      />
      <div className="grid gap-5 xl:grid-cols-[340px_1fr]">
        <Section title="Experiment log" description="4 active tests">
          <div className="divide-y divide-border">
            {[
              "Curiosity hook vs direct explanation",
              "Demo first vs context first",
              "Short-form vs long-form tutorial",
            ].map((item, i) => (
              <button
                key={item}
                onClick={() => setSelected(item)}
                className={`w-full border-l-2 px-5 py-4 text-left ${selected === item ? "border-primary bg-muted/50" : "border-transparent hover:bg-muted/30"}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <strong className="text-xs">{item}</strong>
                  <Badge tone={i === 0 ? "positive" : "muted"}>
                    {i === 0 ? "Active" : "Draft"}
                  </Badge>
                </div>
                <p className="mt-2 text-[11px] text-muted-foreground">
                  {
                    [
                      "Retention · Hook · 2 variants",
                      "Save rate · Format · 2 variants",
                      "Completion · Duration · 3 variants",
                    ][i]
                  }
                </p>
              </button>
            ))}
          </div>
        </Section>
        <div className="flex flex-col gap-5">
          <Section title="EXP-023 · Active" description={selected}>
            <div className="grid gap-4 p-5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg bg-muted p-4 sm:col-span-2">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Question
                </div>
                <p className="mt-2 text-sm font-medium">
                  Does curiosity hook improve retention?
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Variable
                </div>
                <p className="mt-2 text-sm font-medium">Hook</p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Metric
                </div>
                <p className="mt-2 text-sm font-medium">Retention</p>
              </div>
            </div>
            <div className="px-5 pb-5">
              <div className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Hypothesis
              </div>
              <p className="text-sm">
                A curiosity-based opening will improve retention compared with
                direct explanation.
              </p>
            </div>
          </Section>
          <Section
            title="Control versus variant"
            description="Percentage points and percentage change are reported separately"
          >
            <div className="grid gap-4 p-5 md:grid-cols-2">
              <div className="rounded-lg border border-border p-4">
                <div className="flex justify-between">
                  <Badge>Control</Badge>
                  <span className="text-xs text-muted-foreground">
                    Content #041
                  </span>
                </div>
                <div className="mt-6 text-3xl font-semibold">32%</div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Retention · 8,100 views
                </p>
              </div>
              <div className="rounded-lg border-2 border-emerald-500/50 bg-emerald-50/40 p-4 dark:bg-emerald-950/20">
                <div className="flex justify-between">
                  <Badge tone="positive">Variant B</Badge>
                  <span className="text-xs text-muted-foreground">
                    Content #042
                  </span>
                </div>
                <div className="mt-6 text-3xl font-semibold">46%</div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Retention · 11,400 views
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 border-t border-border px-5 py-4 text-xs">
              <div>
                <span className="text-muted-foreground">Absolute delta</span>
                <strong className="ml-2 text-emerald-600">+14 pp</strong>
              </div>
              <div>
                <span className="text-muted-foreground">Relative delta</span>
                <strong className="ml-2 text-emerald-600">+43.75%</strong>
              </div>
            </div>
          </Section>
          <Section
            title="Decision"
            description="Evidence is promising, but sample size is not conclusive"
          >
            <div className="p-5">
              <div className="flex flex-wrap gap-2">
                {[
                  "Continue testing",
                  "Run another test",
                  "Adopt pattern",
                  "Invalidate",
                  "Insufficient evidence",
                ].map((item) => (
                  <Button key={item}>{item}</Button>
                ))}
              </div>
              <textarea
                placeholder="Decision rationale"
                className="mt-4 min-h-20 w-full resize-y rounded-md border border-border bg-background p-3 text-xs outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </Section>
        </div>
      </div>
    </>
  );
}

function Learnings() {
  const [confidence, setConfidence] = useState("Medium");
  return (
    <>
      <PageHeader
        eyebrow="Evidence knowledge base"
        title="Learnings"
        description="Browse observations, evidence, and decisions you can reuse."
        action={
          <Button primary>
            <Plus className="size-3.5" />
            Capture learning
          </Button>
        }
      />
      <div className="mb-5 flex gap-2">
        <div className="flex h-9 min-w-[240px] flex-1 items-center gap-2 rounded-md border border-border px-3">
          <Search className="size-3.5 text-muted-foreground" />
          <input
            placeholder="Search observations, learning, evidence..."
            className="w-full bg-transparent text-xs outline-none"
          />
        </div>
        <Button>Project</Button>
        <Button>Type</Button>
        <Button>Date</Button>
      </div>
      <div className="grid gap-5 lg:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-4">
          {[
            [
              "Talking-head coding content generated higher saves.",
              "3 of 5 comparable contents exceeded baseline.",
              "Concrete demonstrations may perform better for this audience.",
              "Test a different topic with the same format.",
            ],
            [
              "Shorter coffee intros improved completion.",
              "4 of 6 references crossed the account average.",
              "Lead with the sensory payoff before process detail.",
              "Repeat with a darker roast next.",
            ],
          ].map((row) => (
            <article
              key={row[0]}
              className="rounded-xl border border-border bg-card p-5 shadow-sm"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Observation
                  </div>
                  <p className="mt-2 text-sm font-medium">{row[0]}</p>
                  <div className="mt-5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Evidence
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">{row[1]}</p>
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Learning
                  </div>
                  <p className="mt-2 text-sm">{row[2]}</p>
                  <div className="mt-5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Next action
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">{row[3]}</p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-border pt-4">
                <span className="text-[11px] text-muted-foreground">
                  Confidence:
                </span>
                {["Low", "Medium", "High"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setConfidence(item)}
                    className={`rounded-md px-2 py-1 text-[11px] ${confidence === item ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
                  >
                    {item}
                  </button>
                ))}
                <span className="ml-auto text-[11px] text-muted-foreground">
                  Sources: 3 contents · 1 experiment
                </span>
              </div>
            </article>
          ))}
        </div>
        <Section title="Evidence traceability">
          <div className="flex flex-col gap-4 p-5 text-xs">
            <div>
              <span className="text-muted-foreground">Source content</span>
              <strong className="mt-1 block">3 related contents</strong>
            </div>
            <div>
              <span className="text-muted-foreground">Source experiment</span>
              <strong className="mt-1 block">EXP-023 · Curiosity hook</strong>
            </div>
            <div>
              <span className="text-muted-foreground">Related pattern</span>
              <strong className="mt-1 block">Curiosity + Demonstration</strong>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}

function Patterns() {
  return (
    <>
      <PageHeader
        eyebrow="Strategic knowledge layer"
        title="Patterns"
        description="A library of repeatable signals synthesized from evidence."
        action={
          <Button primary>
            <Plus className="size-3.5" />
            New pattern
          </Button>
        }
      />
      <div className="mb-5 flex gap-2">
        {["Project", "Pattern type", "Status", "Confidence"].map((item) => (
          <Button key={item}>
            {item}
            <ChevronDown className="size-3.5" />
          </Button>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {[
          [
            "Curiosity + Demonstration",
            "Coding · Authority",
            "7 contents",
            "5 positive",
            "High",
            "Validated",
          ],
          [
            "Problem-first + Concrete proof",
            "Coding · Education",
            "5 contents",
            "4 positive",
            "Medium",
            "Emerging",
          ],
          [
            "Sensory payoff before process",
            "Coffee · Awareness",
            "6 contents",
            "4 positive",
            "Medium",
            "Emerging",
          ],
          [
            "Reader tension + contrarian close",
            "Books · Consideration",
            "4 contents",
            "3 positive",
            "Low",
            "Hypothesis",
          ],
        ].map((row) => (
          <article
            key={row[0]}
            className="rounded-xl border border-border bg-card p-5 shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <GitBranch className="size-5 text-primary" />
              <Badge tone={row[5] === "Validated" ? "positive" : "muted"}>
                {row[5]}
              </Badge>
            </div>
            <h2 className="mt-5 text-base font-semibold">{row[0]}</h2>
            <p className="mt-1 text-xs text-muted-foreground">{row[1]}</p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-muted-foreground">Evidence</span>
                <strong className="mt-1 block">{row[2]}</strong>
              </div>
              <div>
                <span className="text-muted-foreground">Positive</span>
                <strong className="mt-1 block">{row[3]}</strong>
              </div>
              <div>
                <span className="text-muted-foreground">Confidence</span>
                <strong className="mt-1 block">{row[4]}</strong>
              </div>
              <div>
                <span className="text-muted-foreground">Experiments</span>
                <strong className="mt-1 block">2</strong>
              </div>
            </div>
            <Button primary>
              <ArrowRight className="size-3.5" />
              View pattern
            </Button>
          </article>
        ))}
      </div>
    </>
  );
}

function Projects() {
  const [tab, setTab] = useState("Overview");
  return (
    <>
      <PageHeader
        eyebrow="Workspace configuration"
        title="Projects"
        description="Define the strategic foundation your content system operates on."
        action={
          <Button primary>
            <Plus className="size-3.5" />
            New project
          </Button>
        }
      />
      <div className="grid gap-4 md:grid-cols-3">
        {[
          [
            "Coding",
            "Practical software architecture for senior developers",
            "12 topics",
            "28 ideas",
            "18 content",
          ],
          [
            "Books",
            "Ideas from books turned into useful mental models",
            "8 topics",
            "9 ideas",
            "11 content",
          ],
          [
            "Coffee Brewing",
            "A practical lab for better home coffee",
            "6 topics",
            "7 ideas",
            "9 content",
          ],
        ].map((row, i) => (
          <button
            key={row[0]}
            onClick={() => setTab(row[0])}
            className={`rounded-xl border p-5 text-left shadow-sm ${tab === row[0] ? "border-primary bg-primary/5" : "border-border bg-card hover:border-foreground/30"}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex size-9 items-center justify-center rounded-lg bg-muted">
                <FolderKanban className="size-4" />
              </div>
              <Badge tone={i === 0 ? "positive" : "muted"}>
                {i === 0 ? "Active" : "Active"}
              </Badge>
            </div>
            <h2 className="mt-5 text-base font-semibold">{row[0]}</h2>
            <p className="mt-1 text-xs leading-5 text-muted-foreground">
              {row[1]}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Badge>{row[2]}</Badge>
              <Badge>{row[3]}</Badge>
              <Badge>{row[4]}</Badge>
            </div>
          </button>
        ))}
      </div>
      <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_320px]">
        <Section
          title={`${tab} workspace`}
          description="Overview · Audience · Topics · Keywords · Content · Experiments · Patterns"
        >
          <div className="flex flex-wrap gap-1 border-b border-border px-5 pt-3">
            {[
              "Overview",
              "Audience",
              "Topics",
              "Keywords",
              "Content",
              "Experiments",
              "Patterns",
              "Settings",
            ].map((item) => (
              <button
                key={item}
                className="rounded-t px-3 py-2 text-xs text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="grid gap-5 p-5 sm:grid-cols-2">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Project identity
              </div>
              <h3 className="mt-2 text-lg font-semibold">{tab}</h3>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">
                {tab === "Coding"
                  ? "Make complex technical decisions easier to understand through concrete examples."
                  : "A focused system for collecting and testing useful ideas."}
              </p>
            </div>
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Primary audience
              </div>
              <p className="mt-2 text-sm">
                Practitioners who want less theory and more durable decisions.
              </p>
            </div>
          </div>
        </Section>
        <Section title="Audience profile">
          <div className="flex flex-col gap-4 p-5 text-xs">
            <div>
              <span className="text-muted-foreground">Pain points</span>
              <div className="mt-2 flex flex-wrap gap-2">
                <Badge>Too much theory</Badge>
                <Badge>Hard to know best practice</Badge>
                <Badge>Confusing architecture</Badge>
              </div>
            </div>
            <div>
              <span className="text-muted-foreground">Knowledge level</span>
              <strong className="mt-1 block">Intermediate → advanced</strong>
            </div>
            <Button>Add audience detail</Button>
          </div>
        </Section>
      </div>
    </>
  );
}

function SettingsPage({
  theme,
  setTheme,
}: {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}) {
  const [section, setSection] = useState("Appearance");
  return (
    <>
      <PageHeader
        eyebrow="Application configuration"
        title="Settings"
        description="Control how Content OS feels and behaves."
      />
      <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
        <nav className="flex gap-1 overflow-x-auto lg:flex-col">
          {["Appearance", "Workspace", "Interface", "Data"].map((item) => (
            <button
              key={item}
              onClick={() => setSection(item)}
              className={`whitespace-nowrap rounded-md px-3 py-2 text-left text-xs ${section === item ? "bg-muted font-medium" : "text-muted-foreground hover:bg-muted/60"}`}
            >
              {item}
            </button>
          ))}
        </nav>
        <Section
          title={section}
          description={
            section === "Appearance"
              ? "Choose the visual system for your workspace."
              : `Configure ${section.toLowerCase()} defaults.`
          }
        >
          <div className="flex max-w-2xl flex-col gap-6 p-5">
            {section === "Appearance" ? (
              <>
                <div>
                  <h3 className="text-xs font-medium">Theme</h3>
                  <div className="mt-3 grid gap-3 sm:grid-cols-3">
                    {(["light", "dark", "system"] as const).map((item) => (
                      <button
                        key={item}
                        onClick={() => item !== "system" && setTheme(item)}
                        className={`rounded-lg border p-4 text-left ${theme === item ? "border-primary ring-1 ring-primary" : "border-border"}`}
                      >
                        <div
                          className={`h-10 rounded-md ${item === "dark" ? "bg-slate-800" : "bg-slate-100"}`}
                        />
                        <span className="mt-3 block text-xs font-medium capitalize">
                          {item}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="border-t border-border pt-5">
                  <h3 className="text-xs font-medium">Accent color</h3>
                  <div className="mt-3 flex gap-2">
                    <button
                      className="size-7 rounded-full bg-slate-900 ring-2 ring-offset-2 ring-slate-900 dark:bg-white dark:ring-white"
                      aria-label="Slate accent"
                    />
                    <button
                      className="size-7 rounded-full bg-violet-500"
                      aria-label="Violet accent"
                    />
                    <button
                      className="size-7 rounded-full bg-emerald-500"
                      aria-label="Emerald accent"
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h3 className="text-xs font-medium">{section} defaults</h3>
                  <p className="mt-2 text-xs text-muted-foreground">
                    These preferences apply across every workspace and can be
                    changed at any time.
                  </p>
                </div>
                {[
                  "Default project",
                  "Default landing page",
                  "Sidebar behavior",
                  "Default table view",
                ].map((item) => (
                  <label
                    key={item}
                    className="flex items-center justify-between border-b border-border pb-4 text-xs"
                  >
                    <span>{item}</span>
                    <select className="rounded-md border border-border bg-background px-3 py-2 text-xs">
                      <option>System default</option>
                      <option>Content OS</option>
                    </select>
                  </label>
                ))}
                {section === "Data" && <Button>Export data</Button>}
              </>
            )}
          </div>
        </Section>
      </div>
    </>
  );
}

export function ContentOsDashboard() {
  const [active, setActive] = useState("Overview");
  const [project, setProject] = useState("All projects");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileNav, setMobileNav] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [theme, setThemeState] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = window.localStorage.getItem("content-os-theme") as
      | "light"
      | "dark"
      | null;
    const preferred =
      saved ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    setThemeState(preferred);
    document.documentElement.classList.toggle("dark", preferred === "dark");
  }, []);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
      }
      if (event.key === "Escape") {
        setSearchOpen(false);
        setCreateOpen(false);
        setMobileNav(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const setTheme = (next: "light" | "dark") => {
    setThemeState(next);
    window.localStorage.setItem("content-os-theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  const navigate = (page: string) => {
    setActive(page);
    setMobileNav(false);
  };

  const body = useMemo(() => {
    if (active === "Overview")
      return <Overview navigate={navigate} project={project} />;
    if (active === "Ideas") return <Ideas navigate={navigate} />;
    if (active === "Briefs") return <Briefs navigate={navigate} />;
    if (active === "Content") return <ContentPage />;
    if (active === "Research") return <Research />;
    if (active === "Experiments") return <Experiments />;
    if (active === "Learnings") return <Learnings />;
    if (active === "Patterns") return <Patterns />;
    if (active === "Projects") return <Projects />;
    return <SettingsPage theme={theme} setTheme={setTheme} />;
  }, [active, project, theme]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-[248px] flex-col border-r border-border bg-sidebar transition-transform duration-200 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="flex h-[72px] items-center justify-between border-b border-sidebar-border px-5">
          <div className="flex items-center gap-3">
            <div className="flex size-8 items-center justify-center rounded-lg bg-foreground text-background">
              <Zap className="size-4" />
            </div>
            <div>
              <div className="text-sm font-semibold tracking-tight">
                Content OS
              </div>
              <div className="text-[11px] text-muted-foreground">
                Personal workspace
              </div>
            </div>
          </div>
          <button
            aria-label="Collapse sidebar"
            onClick={() => setSidebarOpen(false)}
            className="hidden rounded-md p-1.5 text-muted-foreground hover:bg-sidebar-accent md:block"
          >
            <PanelLeftClose className="size-4" />
          </button>
        </div>
        <div className="p-3">
          <button
            onClick={() =>
              setProject(project === "All projects" ? "Coding" : "All projects")
            }
            className="flex w-full items-center gap-3 rounded-lg border border-sidebar-border bg-sidebar-accent/50 p-2.5 text-left hover:bg-sidebar-accent"
          >
            <div className="flex size-7 items-center justify-center rounded-md bg-muted">
              <FolderKanban className="size-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-xs font-medium">{project}</div>
              <div className="text-[10px] text-muted-foreground">
                Project scope
              </div>
            </div>
            <ChevronDown className="size-3.5 text-muted-foreground" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-3 py-2">
          {navGroups.map((group) => (
            <div key={group.label} className="mb-6">
              <div className="mb-2 px-2 text-[10px] font-semibold tracking-[0.16em] text-muted-foreground">
                {group.label}
              </div>
              <div className="flex flex-col gap-0.5">
                {group.items.map(([label, Icon]) => (
                  <button
                    key={label}
                    onClick={() => navigate(label)}
                    className={`flex items-center gap-3 rounded-md px-2.5 py-2 text-sm ${active === label ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm" : "text-sidebar-foreground/70 hover:bg-sidebar-accent"}`}
                  >
                    <Icon className="size-4" />
                    {label}
                    {label === "Ideas" && (
                      <span className="ml-auto rounded bg-sidebar-accent px-1.5 py-0.5 text-[10px] text-muted-foreground">
                        12
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>
        <div className="border-t border-sidebar-border p-3">
          <button className="flex w-full items-center gap-3 rounded-md px-2.5 py-2 text-sm text-muted-foreground hover:bg-sidebar-accent">
            <CircleHelp className="size-4" />
            Keyboard shortcuts<span className="ml-auto text-[10px]">?</span>
          </button>
          <div className="mt-3 flex items-center gap-2 border-t border-sidebar-border px-2.5 pt-3">
            <div className="flex size-7 items-center justify-center rounded-full bg-foreground text-[10px] font-semibold text-background">
              AM
            </div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-xs font-medium">Alex Morgan</div>
              <div className="text-[10px] text-muted-foreground">Owner</div>
            </div>
            <MoreHorizontal className="size-4 text-muted-foreground" />
          </div>
        </div>
      </aside>
      {!sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          aria-label="Open sidebar"
          className="fixed left-4 top-4 z-30 hidden rounded-md border border-border bg-background p-2 shadow-sm md:block"
        >
          <PanelLeftOpen className="size-4" />
        </button>
      )}
      {mobileNav && (
        <div
          onClick={() => setMobileNav(false)}
          className="fixed inset-0 z-30 bg-black/30 md:hidden"
        />
      )}
      <div className="md:pl-[248px]">
        <header className="sticky top-0 z-20 flex h-[72px] items-center justify-between border-b border-border bg-background/95 px-4 backdrop-blur md:px-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileNav(true)}
              aria-label="Open navigation"
              className="rounded-md p-2 hover:bg-muted md:hidden"
            >
              <Menu className="size-5" />
            </button>
            <div className="hidden items-center gap-2 text-sm text-muted-foreground sm:flex">
              <span>Workspace</span>
              <span>/</span>
              <span className="text-foreground">{active}</span>
            </div>
            <div className="text-sm font-semibold sm:hidden">{active}</div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              className="hidden h-9 items-center gap-2 rounded-md border border-border px-3 text-xs text-muted-foreground hover:bg-muted sm:flex"
            >
              <Search className="size-3.5" />
              Search anything
              <span className="ml-4 rounded border border-border px-1.5 py-0.5 text-[10px]">
                <Command className="mr-0.5 inline size-2.5" />K
              </span>
            </button>
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="rounded-md p-2 text-muted-foreground hover:bg-muted sm:hidden"
            >
              <Search className="size-4" />
            </button>
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              aria-label="Toggle theme"
              className="rounded-md p-2 text-muted-foreground hover:bg-muted"
            >
              {theme === "light" ? (
                <Moon className="size-4" />
              ) : (
                <Sun className="size-4" />
              )}
            </button>
            <Button primary onClick={() => setCreateOpen(true)}>
              <Plus className="size-3.5" />
              <span className="hidden sm:inline">Create</span>
            </Button>
          </div>
        </header>

        <main className="mx-auto max-w-[1440px] px-4 py-7 md:px-8 md:py-9">
          {body}
        </main>
      </div>
      {(searchOpen || createOpen) && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/20 p-4 pt-24"
          onClick={() => {
            setSearchOpen(false);
            setCreateOpen(false);
          }}
        >
          <div
            className="w-full max-w-lg rounded-xl border border-border bg-background p-5 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold">
                {searchOpen ? "Search your workspace" : "Create something new"}
              </h2>
              <button
                onClick={() => {
                  setSearchOpen(false);
                  setCreateOpen(false);
                }}
                aria-label="Close"
              >
                <X className="size-4" />
              </button>
            </div>
            <div className="mt-5 rounded-lg border border-border p-3 text-xs text-muted-foreground">
              {searchOpen
                ? "Search ideas, briefs, content, experiments, learnings, and patterns."
                : "Choose a starting point: Idea, Brief, Content, Experiment, or Learning."}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Ideas", "Briefs", "Content", "Experiments", "Learnings"].map(
                (item) => (
                  <Button
                    key={item}
                    onClick={() => {
                      navigate(item);
                      setSearchOpen(false);
                      setCreateOpen(false);
                    }}
                  >
                    {item}
                  </Button>
                ),
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
