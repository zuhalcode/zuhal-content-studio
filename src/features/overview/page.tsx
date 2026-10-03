import { PageHeader } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { ChevronDown, Plus } from "lucide-react";

export default function OverviewPage() {
  return (
    <>
      <PageHeader
        eyebrow="Operational command center"
        title="Good morning, Alex"
        description="Here's what is moving through your content system."
        action={
          <div className="flex gap-2">
            <Button variant="outline">
              <span className="size-1.5 rounded-full bg-slate-400" />
              Header
              <ChevronDown className="size-3.5" />
            </Button>

            <Button>
              <Plus className="size-3.5" />
              New idea
            </Button>
          </div>
        }
      />

      {/* dashboard content */}
    </>
  );
}
