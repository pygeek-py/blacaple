export default function Logo({ className = "" }) {
  return (
    <a href="#top" className={`flex items-center gap-2 ${className}`}>
      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-ember-500 to-ember-300 text-sm font-bold text-ink">
        B
      </span>
      <span className="text-lg font-semibold tracking-tight text-bone">
        Blacaple
      </span>
    </a>
  );
}
