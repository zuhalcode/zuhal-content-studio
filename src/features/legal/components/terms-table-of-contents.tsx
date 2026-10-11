"use client";

import { useEffect, useState } from "react";
import { TocItem } from "../types/terms.types";
import { ChevronDown, ListFilter } from "lucide-react";
import { cn } from "@/lib/utils";

interface TermsTableOfContentsProps {
  items: TocItem[];
}

export function TermsTableOfContents({ items }: TermsTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || "");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Set up IntersectionObserver for scroll spy
  useEffect(() => {
    if (typeof window === "undefined" || items.length === 0) return;

    const observerCallback: IntersectionObserverCallback = (entries) => {
      // Find the entry closest to top that is intersecting
      const visibleEntries = entries.filter((e) => e.isIntersecting);
      if (visibleEntries.length > 0) {
        // Pick the top-most visible one
        const sorted = visibleEntries.sort(
          (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
        );
        setActiveId(sorted[0].target.id);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-80px 0px -60% 0px",
      threshold: [0, 0.25, 0.5, 1],
    });

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [items]);

  const handleLinkClick = (id: string) => {
    setActiveId(id);
    setMobileOpen(false);

    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const activeItem = items.find((item) => item.id === activeId) || items[0];

  return (
    <>
      {/* Mobile Collapsible Navigation (shown only on mobile/tablet screens < lg) */}
      <div className="sticky top-14 z-30 mb-8 border-b border-border/80 bg-background/95 pb-3 pt-3 backdrop-blur lg:hidden print:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="flex w-full items-center justify-between rounded-lg border border-border bg-card px-3.5 py-2.5 text-left text-xs font-medium text-foreground shadow-sm transition hover:bg-accent"
          aria-expanded={mobileOpen}
          aria-controls="mobile-toc-list"
        >
          <div className="flex min-w-0 items-center gap-2">
            <ListFilter className="size-3.5 text-muted-foreground" aria-hidden="true" />
            <span className="text-muted-foreground">Contents:</span>
            <span className="truncate font-semibold text-foreground">
              {activeItem ? `${activeItem.number}. ${activeItem.title}` : "Sections"}
            </span>
          </div>

          <ChevronDown
            className={cn(
              "size-4 text-muted-foreground transition-transform duration-200",
              mobileOpen && "rotate-180"
            )}
            aria-hidden="true"
          />
        </button>

        {mobileOpen && (
          <nav
            id="mobile-toc-list"
            aria-label="Mobile table of contents"
            className="mt-2 max-h-72 overflow-y-auto rounded-lg border border-border bg-card p-2 shadow-lg"
          >
            <ul className="space-y-1">
              {items.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => handleLinkClick(item.id)}
                      className={cn(
                        "flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-left text-xs transition",
                        item.level === 2 && "pl-5 text-[11px]",
                        isActive
                          ? "bg-primary/10 font-semibold text-primary"
                          : "text-muted-foreground hover:bg-accent hover:text-foreground"
                      )}
                    >
                      <span className="font-mono text-muted-foreground/80">{item.number}</span>
                      <span className="truncate">{item.title}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>

      {/* Desktop Sticky Table of Contents Sidebar */}
      <aside className="hidden lg:block print:hidden">
        <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-4">
          <nav aria-label="Table of contents" className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <ListFilter className="size-3.5" aria-hidden="true" />
              <span>Table of Contents</span>
            </div>

            <div className="h-px w-full bg-border/60" aria-hidden="true" />

            <ul className="space-y-1 text-xs">
              {items.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(item.id);
                      }}
                      className={cn(
                        "group flex items-start gap-2 rounded-md px-2 py-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                        item.level === 2 && "ml-3 text-[11px]",
                        isActive
                          ? "bg-muted font-medium text-foreground"
                          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                      )}
                    >
                      <span
                        className={cn(
                          "mt-0.5 shrink-0 font-mono text-[10px] transition-colors",
                          isActive
                            ? "font-semibold text-foreground"
                            : "text-muted-foreground/70 group-hover:text-foreground"
                        )}
                      >
                        {item.number}
                      </span>
                      <span className="leading-snug">{item.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
