import { cn } from "@/lib/utils";

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto max-w-[980px] px-[22px]", className)}>{children}</div>;
}

export function Section({
  id,
  as: Tag = "section",
  bordered = true,
  className,
  children,
}: {
  id?: string;
  as?: "section" | "footer";
  bordered?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Tag
      id={id}
      className={cn(
        "scroll-mt-[60px] py-[100px] max-[820px]:py-[72px]",
        bordered && "border-t border-line",
        className,
      )}
    >
      <Container>{children}</Container>
    </Tag>
  );
}

export function Eyebrow({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <p className={cn("m-0 font-mono text-xs tracking-[0.16em] text-balance text-primary uppercase", className)}>
      {children}
    </p>
  );
}

export function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mx-auto mt-4 text-[40px] leading-[1.1] font-semibold tracking-[-0.021em] text-foreground max-[820px]:text-[32px]">
        {title}
      </h2>
    </div>
  );
}

export function AccentRule({ className }: { className?: string }) {
  return <div aria-hidden className={cn("mx-auto h-1 w-[46px] rounded-full bg-primary", className)} />;
}
