"use client";

import { useState } from "react";
import { BookOpen, ExternalLink, Plus, Users } from "lucide-react";
import { PageHeader } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  researchMetrics,
  trackedAccounts,
  referenceItems,
} from "./research.data";

const tabs = ["Overview", "Accounts", "References"] as const;
type ResearchTab = (typeof tabs)[number];

export default function ResearchPage() {
  const [tab, setTab] = useState<ResearchTab>("Overview");

  return (
    <div className="py-5">
      <PageHeader
        eyebrow="Research laboratory"
        title="Research"
        description="Find, sort, and recreate useful external references."
        action={
          <Button>
            <Plus className="size-3.5" />
            Add reference
          </Button>
        }
      />

      {/* Navigation tabs */}
      <div className="mb-6 flex gap-1 border-b border-border">
        {tabs.map((item) => (
          <button
            key={item}
            onClick={() => setTab(item)}
            className={`border-b-2 px-4 py-3 text-xs font-medium transition-colors ${
              tab === item
                ? "border-primary font-semibold text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {tab === "Overview" && (
        <div className="flex flex-col gap-6">
          {/* Top metrics */}
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
            {researchMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-border bg-card p-4 shadow-sm"
              >
                <div className="text-xs text-muted-foreground">{metric.label}</div>
                <div className="mt-3 text-2xl font-semibold">{metric.value}</div>
              </div>
            ))}
          </div>

          {/* Quick preview of references */}
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-xl border border-border bg-card shadow-sm">
              <div className="border-b border-border px-5 py-4">
                <h2 className="text-sm font-semibold">High performing references</h2>
                <p className="mt-1 text-xs text-muted-foreground">
                  Signals showing &gt;2x account baseline
                </p>
              </div>
              <div className="divide-y divide-border">
                {referenceItems.map((ref) => (
                  <div key={ref.id} className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xs font-semibold leading-5 text-card-foreground">
                        {ref.title}
                      </h3>
                      <Badge variant="secondary" className="shrink-0">
                        {ref.performanceRatio}
                      </Badge>
                    </div>
                    <div className="mt-3 flex items-center gap-3 text-[11px] text-muted-foreground">
                      <span>{ref.creator}</span>
                      <span>·</span>
                      <span>{ref.format}</span>
                      <span>·</span>
                      <span className="text-primary font-medium">{ref.hookType}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card shadow-sm">
              <div className="border-b border-border px-5 py-4">
                <h2 className="text-sm font-semibold">Monitored creators</h2>
                <p className="mt-1 text-xs text-muted-foreground">
                  Active benchmark accounts
                </p>
              </div>
              <div className="divide-y divide-border">
                {trackedAccounts.map((acc) => (
                  <div key={acc.id} className="flex items-center justify-between p-5">
                    <div>
                      <h3 className="text-xs font-semibold text-card-foreground">
                        {acc.name}
                      </h3>
                      <p className="text-[11px] text-muted-foreground">
                        {acc.handle} · {acc.niche}
                      </p>
                    </div>
                    <div className="text-right text-xs">
                      <span className="font-semibold">{acc.referenceCount}</span>
                      <span className="text-muted-foreground"> references</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {tab === "Accounts" && (
        <div className="grid gap-4 md:grid-cols-3">
          {trackedAccounts.map((acc) => (
            <div
              key={acc.id}
              className="rounded-xl border border-border bg-card p-5 shadow-sm"
            >
              <div className="flex size-9 items-center justify-center rounded-lg bg-muted text-primary">
                <Users className="size-4" />
              </div>
              <h2 className="mt-4 text-sm font-semibold">{acc.name}</h2>
              <p className="text-xs text-muted-foreground">{acc.handle}</p>
              <div className="mt-4 border-t border-border pt-4 text-xs">
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Niche</span>
                  <span className="font-medium">{acc.niche}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Logged refs</span>
                  <span className="font-medium">{acc.referenceCount}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Avg views</span>
                  <span className="font-medium">{acc.averageViews}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === "References" && (
        <div className="rounded-xl border border-border bg-card shadow-sm">
          <div className="border-b border-border px-5 py-4">
            <h2 className="text-sm font-semibold">Reference library</h2>
            <p className="mt-1 text-xs text-muted-foreground">
              External content analyzed for hook architecture and format
            </p>
          </div>
          <div className="divide-y divide-border">
            {referenceItems.map((ref) => (
              <div key={ref.id} className="flex items-center justify-between p-5">
                <div className="min-w-0 flex-1">
                  <h3 className="text-xs font-semibold leading-5 text-card-foreground">
                    {ref.title}
                  </h3>
                  <div className="mt-1 flex items-center gap-3 text-[11px] text-muted-foreground">
                    <span>{ref.creator}</span>
                    <span>·</span>
                    <span>{ref.format}</span>
                    <span>·</span>
                    <span>{ref.hookType}</span>
                  </div>
                </div>
                <Badge variant="secondary" className="ml-4 shrink-0">
                  {ref.performanceRatio}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

