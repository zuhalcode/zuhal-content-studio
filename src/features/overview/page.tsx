import { PageHeader } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Plus } from "lucide-react";
import { stats } from "./data";
import OverviewSection from "./components/overview-section";

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

export default function OverviewPage() {
  return (
    <div className="py-5">
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

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4 ">
        {stats.map(([label, value, page, Icon]) => (
          <button
            key={label}
            // onClick={() => navigate(page)}
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
        <OverviewSection
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
        </OverviewSection>

        <OverviewSection
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
        </OverviewSection>

        <OverviewSection
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
                // onClick={() => navigate("Experiments")}
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
        </OverviewSection>
      </div>
    </div>
  );
}
