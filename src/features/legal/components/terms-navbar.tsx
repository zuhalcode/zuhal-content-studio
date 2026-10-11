"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ArrowLeft, Moon, Printer, Sparkles, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TermsNavbarProps {
  currentDoc?: "terms" | "privacy";
}

export function TermsNavbar({ currentDoc }: TermsNavbarProps) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur-md transition-colors print:hidden">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Brand & navigation tabs */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2.5 transition hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Zuhal Content Studio Home"
          >
            <span className="grid size-7 place-items-center rounded-md bg-primary text-primary-foreground shadow-sm">
              <Sparkles aria-hidden="true" className="size-3.5" />
            </span>
            <span className="text-sm font-semibold tracking-tight text-foreground">
              Zuhal Content Studio
            </span>
          </Link>

          <span className="hidden text-xs text-muted-foreground/60 sm:inline" aria-hidden="true">
            /
          </span>

          {/* Legal document tabs */}
          <nav aria-label="Legal documents" className="flex items-center gap-1">
            <Link
              href="/terms"
              className={cn(
                "rounded-md px-2.5 py-1 text-xs font-medium transition",
                currentDoc === "terms"
                  ? "bg-muted font-semibold text-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
            >
              Terms of Service
            </Link>

            <Link
              href="/privacy"
              className={cn(
                "rounded-md px-2.5 py-1 text-xs font-medium transition",
                currentDoc === "privacy"
                  ? "bg-muted font-semibold text-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
            >
              Privacy Policy
            </Link>
          </nav>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="hidden h-8 gap-1.5 text-xs text-muted-foreground hover:text-foreground sm:inline-flex"
          >
            <Link href="/">
              <ArrowLeft className="size-3.5" />
              <span>Workspace</span>
            </Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrint}
            className="size-8 text-muted-foreground hover:text-foreground"
            title="Print or export as PDF"
            aria-label="Print or export as PDF"
          >
            <Printer className="size-4" />
          </Button>

          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="size-8 text-muted-foreground hover:text-foreground"
              aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} theme`}
              title={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} theme`}
            >
              {resolvedTheme === "dark" ? (
                <Sun className="size-4" />
              ) : (
                <Moon className="size-4" />
              )}
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
