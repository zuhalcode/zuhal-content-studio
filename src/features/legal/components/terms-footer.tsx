"use client";

import { TermsMetadata } from "../types/terms.types";
import { ArrowUp, Mail, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TermsFooterProps {
  metadata: TermsMetadata;
}

export function TermsFooter({ metadata }: TermsFooterProps) {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="mt-16 border-t border-border/80 pt-10 text-xs text-muted-foreground print:mt-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 font-medium text-foreground">
            <ShieldCheck className="size-4 text-primary" aria-hidden="true" />
            <span>{metadata.companyName} Legal Governance</span>
          </div>
          <p>
            Entity: {metadata.legalEntity} • Jurisdiction: {metadata.jurisdiction}
          </p>
          <p className="flex items-center gap-1 text-muted-foreground/80">
            <Mail className="size-3" aria-hidden="true" />
            Inquiries:{" "}
            <a
              href={`mailto:${metadata.contactEmail}`}
              className="text-foreground underline underline-offset-4 hover:text-primary"
            >
              {metadata.contactEmail}
            </a>
          </p>
        </div>

        <div className="flex items-center gap-3 print:hidden">
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="h-8 gap-1.5 text-xs text-muted-foreground hover:text-foreground"
            aria-label="Scroll back to top of the document"
          >
            <ArrowUp className="size-3.5" />
            <span>Back to top</span>
          </Button>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-6 text-[11px] text-muted-foreground/70 sm:flex-row">
        <span>© {new Date().getFullYear()} {metadata.companyName}. All rights reserved.</span>
        <span>Version {metadata.version} • Effective {metadata.effectiveDate}</span>
      </div>
    </footer>
  );
}
