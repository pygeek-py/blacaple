export default function Eyebrow({ children }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-ember-400">
      <span className="h-1.5 w-1.5 rounded-full bg-ember-400" />
      {children}
    </div>
  );
}
