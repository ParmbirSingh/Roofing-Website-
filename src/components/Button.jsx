import { ArrowRight, Phone } from "lucide-react";

const variants = {
  primary: "bg-roof-copper text-white hover:bg-roof-copperDark shadow-lg shadow-roof-copper/20",
  secondary: "bg-white text-roof-navy hover:bg-roof-mist border border-white/70",
  outline: "border border-roof-copper/30 bg-white text-roof-copper hover:border-roof-copper hover:bg-roof-copper hover:text-white",
};

export default function Button({ children, href, variant = "primary", icon = "arrow", className = "" }) {
  const Icon = icon === "phone" ? Phone : ArrowRight;

  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-roof-copper/25 ${variants[variant]} ${className}`}
    >
      {children}
      <Icon className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}
