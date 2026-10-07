import { Sparkles } from "lucide-react";

export default function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <span
        className={`grid size-8 place-items-center rounded-lg ${
          inverse ? "bg-white text-zinc-950" : "bg-white text-zinc-950"
        }`}
      >
        <Sparkles aria-hidden="true" className="size-4" strokeWidth={2.2} />
      </span>

      <span
        className={`text-[15px] font-semibold tracking-[-0.02em] ${
          inverse ? "text-white" : "text-zinc-100"
        }`}
      >
        Orbit
      </span>
    </div>
  );
}
