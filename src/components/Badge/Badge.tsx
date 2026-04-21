interface BadgeProps {
  label: string;
  variant?: "live" | "in-dev" | "neutral";
}

const VARIANTS: Record<NonNullable<BadgeProps["variant"]>, string> = {
  live: "bg-mint-green/20 text-mint-green border-mint-green/40",
  "in-dev": "bg-yellow/20 text-yellow border-yellow/40",
  neutral: "bg-white/10 text-white/70 border-white/30",
};

const Badge: React.FC<BadgeProps> = ({ label, variant = "neutral" }) => (
  <span
    className={`inline-flex items-center px-2 py-0.5 rounded-full border text-[0.65rem] sm:text-xs 2xl:text-base font-semibold tracking-wide uppercase ${VARIANTS[variant]}`}
  >
    {label}
  </span>
);

export default Badge;
