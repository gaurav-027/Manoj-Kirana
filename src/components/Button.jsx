export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  target,
}) {
  const styles =
    variant === "primary"
      ? "bg-forest text-cream border-forest hover:bg-leaf"
      : "bg-transparent text-forest border-forest/22 hover:border-forest/45 hover:bg-white/35";

  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noreferrer" : undefined}
      className={`focus-ring group inline-flex min-h-12 items-center justify-center rounded-xl border px-5 py-3 text-sm font-extrabold transition duration-300 hover:-translate-y-0.5 sm:text-base ${styles} ${className}`}
    >
      <span>{children}</span>
      <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
        →
      </span>
    </a>
  );
}
