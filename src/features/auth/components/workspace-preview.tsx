export default function WorkspacePreview() {
  return (
    <div
      aria-hidden="true"
      className="relative mt-14 h-[270px] w-full max-w-[500px] overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.035] p-3 shadow-2xl shadow-black/30 backdrop-blur-sm"
    >
      <div className="flex h-7 items-center gap-1.5 border-b border-white/[0.07] px-2 pb-3">
        <span className="size-1.5 rounded-full bg-white/25" />
        <span className="size-1.5 rounded-full bg-white/25" />
        <span className="size-1.5 rounded-full bg-white/25" />
      </div>

      <div className="flex gap-3 pt-3">
        <div className="w-[30%] space-y-2 border-r border-white/[0.07] pr-3">
          <div className="h-2 w-14 rounded-full bg-white/20" />
          <div className="h-7 rounded-lg bg-white/[0.08]" />
          <div className="h-2 w-20 rounded-full bg-white/[0.08]" />
          <div className="h-2 w-16 rounded-full bg-white/[0.08]" />
          <div className="h-2 w-24 rounded-full bg-white/[0.08]" />
        </div>

        <div className="flex-1 space-y-4 px-1">
          <div className="flex items-center justify-between">
            <div className="h-3 w-28 rounded-full bg-white/25" />
            <div className="size-5 rounded-full bg-[#b9a7ff]/60" />
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="h-20 rounded-xl bg-white/[0.07]" />
            <div className="h-20 rounded-xl bg-white/[0.07]" />
            <div className="h-20 rounded-xl bg-[#b9a7ff]/15" />
          </div>

          <div className="h-24 rounded-xl border border-white/[0.07] bg-white/[0.025]" />
        </div>
      </div>
    </div>
  );
}
