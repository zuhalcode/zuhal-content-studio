import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import ProjectSection from "./project-section";

const PAIN_POINTS = [
  "Too much theory",
  "Hard to know best practice",
  "Confusing architecture",
] as const;

export default function AudienceProfile() {
  return (
    <ProjectSection title="Audience profile">
      <div className="flex flex-col gap-4 p-5 text-xs">
        <div>
          <span className="text-muted-foreground">Pain points</span>

          <div className="mt-2 flex flex-wrap gap-2">
            {PAIN_POINTS.map((painPoint) => (
              <Badge key={painPoint}>{painPoint}</Badge>
            ))}
          </div>
        </div>

        <div>
          <span className="text-muted-foreground">Knowledge level</span>

          <strong className="mt-1 block">Intermediate → advanced</strong>
        </div>

        <Button>Add audience detail</Button>
      </div>
    </ProjectSection>
  );
}
