import logo from "../assets/logo.png";

export default function Logo({ className = "" }) {
  return (
    <a href="#top" className={`flex items-center gap-2 ${className}`}>
      <img src={logo} alt="Blacaple" className="h-8 w-8 rounded-xl object-cover" />
      <span className="text-lg font-semibold tracking-tight text-bone">
        Blacaple
      </span>
    </a>
  );
}
