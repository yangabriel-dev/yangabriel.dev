import { cn } from "@/lib/utils";

const variants = {
  fill: "border-primary bg-primary text-primary-foreground hover:opacity-[0.88]",
  outline: "border-control-border bg-transparent text-foreground hover:border-primary hover:text-primary",
};

export function PillButton({
  href,
  variant = "fill",
  external = false,
  className,
  children,
}: {
  href: string;
  variant?: keyof typeof variants;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-[22px] py-[11px] text-[15px] font-medium tracking-[-0.01em] transition-[opacity,background-color,border-color,color] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        variants[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}
