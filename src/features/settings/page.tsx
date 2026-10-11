"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { PageHeader } from "@/components/layout";
import { Button } from "@/components/ui/button";

const sections = ["Appearance", "Workspace", "Interface", "Data"] as const;
type SettingsSection = (typeof sections)[number];

export default function SettingsPage() {
  const [section, setSection] = useState<SettingsSection>("Appearance");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [accent, setAccent] = useState("slate");

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="py-5">
      <PageHeader
        eyebrow="Application configuration"
        title="Settings"
        description="Control how Content OS feels and behaves."
      />

      <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
        {/* Settings categories navigation */}
        <nav className="flex gap-1 overflow-x-auto lg:flex-col">
          {sections.map((item) => (
            <button
              key={item}
              onClick={() => setSection(item)}
              className={`whitespace-nowrap rounded-md px-3 py-2 text-left text-xs transition-colors ${
                section === item
                  ? "bg-muted font-semibold text-foreground"
                  : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Active Section Panel */}
        <div className="rounded-xl border border-border bg-card shadow-sm">
          <div className="border-b border-border px-5 py-4">
            <h2 className="text-sm font-semibold">{section}</h2>
            <p className="mt-1 text-xs text-muted-foreground">
              {section === "Appearance"
                ? "Choose the visual system for your workspace."
                : `Configure ${section.toLowerCase()} defaults and preferences.`}
            </p>
          </div>

          <div className="flex max-w-2xl flex-col gap-6 p-5">
            {section === "Appearance" ? (
              <>
                {/* Theme Selector */}
                <div>
                  <h3 className="text-xs font-semibold">Theme</h3>
                  <div className="mt-3 grid gap-3 sm:grid-cols-3">
                    {(["light", "dark", "system"] as const).map((mode) => (
                      <button
                        key={mode}
                        onClick={() => setTheme(mode)}
                        className={`rounded-lg border p-4 text-left transition-all ${
                          mounted && theme === mode
                            ? "border-primary ring-1 ring-primary"
                            : "border-border hover:border-foreground/30"
                        }`}
                      >
                        <div
                          className={`h-10 rounded-md border border-border ${
                            mode === "dark"
                              ? "bg-zinc-900"
                              : mode === "light"
                              ? "bg-zinc-100"
                              : "bg-gradient-to-r from-zinc-100 to-zinc-900"
                          }`}
                        />
                        <span className="mt-3 block text-xs font-medium capitalize">
                          {mode}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Accent Color */}
                <div className="border-t border-border pt-5">
                  <h3 className="text-xs font-semibold">Accent color</h3>
                  <div className="mt-3 flex gap-3">
                    <button
                      onClick={() => setAccent("slate")}
                      className={`size-7 rounded-full bg-slate-900 dark:bg-white transition-transform ${
                        accent === "slate" ? "ring-2 ring-primary ring-offset-2 scale-110" : ""
                      }`}
                      aria-label="Slate accent"
                    />
                    <button
                      onClick={() => setAccent("violet")}
                      className={`size-7 rounded-full bg-violet-500 transition-transform ${
                        accent === "violet" ? "ring-2 ring-primary ring-offset-2 scale-110" : ""
                      }`}
                      aria-label="Violet accent"
                    />
                    <button
                      onClick={() => setAccent("emerald")}
                      className={`size-7 rounded-full bg-emerald-500 transition-transform ${
                        accent === "emerald" ? "ring-2 ring-primary ring-offset-2 scale-110" : ""
                      }`}
                      aria-label="Emerald accent"
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h3 className="text-xs font-medium">{section} defaults</h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    These preferences apply across every workspace and can be changed at any time.
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
                    <span className="font-medium">{item}</span>
                    <select className="rounded-md border border-border bg-background px-3 py-1.5 text-xs outline-none">
                      <option>System default</option>
                      <option>Content OS</option>
                    </select>
                  </label>
                ))}
                {section === "Data" && (
                  <div className="pt-2">
                    <Button variant="outline">Export workspace data</Button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

