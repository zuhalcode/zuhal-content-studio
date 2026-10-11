import { ArrowRight, X } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { IdeaItem } from "../ideas.data";

interface IdeaDetailProps {
  idea: IdeaItem | null;
  onClose: () => void;
}

export default function IdeaDetail({ idea, onClose }: IdeaDetailProps) {
  if (!idea) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Idea details"
      className="fixed inset-0 z-40 flex justify-end bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <aside
        onClick={(e) => e.stopPropagation()}
        className="h-full w-full max-w-md overflow-y-auto border-l border-border bg-background p-6 shadow-2xl"
      >
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
              Idea detail
            </div>
            <h2 className="mt-2 text-lg font-semibold">{idea.title}</h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close detail"
            className="rounded-md p-1.5 hover:bg-muted"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="mt-7 flex flex-col gap-5">
          <div>
            <label className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Problem
            </label>
            <p className="mt-2 text-sm leading-6">
              {idea.problem ?? "Opportunity observed in real workflows."}
            </p>
          </div>

          <div>
            <label className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Angle
            </label>
            <p className="mt-2 text-sm leading-6">
              {idea.angle ?? "A practical point of view supported by clear examples."}
            </p>
          </div>

          <div>
            <label className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Core idea
            </label>
            <p className="mt-2 text-sm leading-6">
              {idea.coreIdea ?? "Synthesize into a direct, actionable concept."}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">{idea.project}</Badge>
            <Badge variant="secondary">{idea.topic}</Badge>
            <Badge
              variant={idea.priority === "High" ? "destructive" : "secondary"}
            >
              {idea.priority} priority
            </Badge>
          </div>

          <div className="flex flex-wrap gap-2 border-t border-border pt-5">
            <Button variant="outline">Edit</Button>
            <Button asChild>
              <Link href="/dashboard/briefs">
                Create Brief <ArrowRight className="size-3.5" />
              </Link>
            </Button>
            <Button variant="ghost">Archive</Button>
          </div>
        </div>
      </aside>
    </div>
  );
}

