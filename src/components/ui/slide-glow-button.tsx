import { cn } from "@/lib/utils";

// Efeito "slide glow" (21st.dev / Uiverse): texto vazado que é preenchido da
// esquerda para a direita, com brilho, no hover, foco ou toque do elemento
// que tem a classe `group/glow`.
const strokes = {
  default: "[-webkit-text-stroke:1px_color-mix(in_oklab,var(--foreground)_60%,transparent)]",
  primary: "[-webkit-text-stroke:1px_var(--primary)]",
};

export type SlideGlowVariant = keyof typeof strokes;

export const slideGlowHost = "group/glow font-mono font-bold tracking-[0.1em] uppercase";

const interactiveHost = cn(
  slideGlowHost,
  "cursor-pointer rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring",
);

export function SlideGlowText({
  text,
  variant = "default",
  active = false,
}: {
  text: string;
  variant?: SlideGlowVariant;
  active?: boolean;
}) {
  const content = ` ${text} `;

  return (
    <span className={cn("relative inline-block whitespace-nowrap text-transparent", strokes[variant])}>
      {content}
      <span
        aria-hidden
        className={cn(
          "absolute inset-0 w-0 overflow-hidden border-r-[0.18em] border-primary text-primary [-webkit-text-stroke:1px_var(--primary)] transition-[width,filter] duration-500 motion-reduce:transition-none",
          "group-hover/glow:w-full group-hover/glow:[filter:drop-shadow(0_0_0.7em_var(--primary))] group-focus-visible/glow:w-full group-active/glow:w-full",
          active && "w-full [filter:drop-shadow(0_0_0.7em_var(--primary))]",
        )}
      >
        {content}
      </span>
    </span>
  );
}

export function SlideGlowButton({
  text,
  variant,
  active,
  className,
  ...props
}: Omit<React.ComponentProps<"button">, "children"> & {
  text: string;
  variant?: SlideGlowVariant;
  active?: boolean;
}) {
  return (
    <button type="button" className={cn(interactiveHost, className)} {...props}>
      <SlideGlowText text={text} variant={variant} active={active} />
    </button>
  );
}

export function SlideGlowLink({
  text,
  variant,
  external = false,
  className,
  ...props
}: Omit<React.ComponentProps<"a">, "children"> & {
  text: string;
  variant?: SlideGlowVariant;
  external?: boolean;
}) {
  return (
    <a
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={cn(interactiveHost, className)}
      {...props}
    >
      <SlideGlowText text={text} variant={variant} />
    </a>
  );
}
