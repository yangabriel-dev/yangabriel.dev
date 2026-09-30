import { socialLinks } from "@/content/site";
import { cn } from "@/lib/utils";

export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul
      className={cn(
        "flex flex-wrap justify-center gap-x-[26px] gap-y-3.5 font-mono text-[13px] font-medium",
        className,
      )}
    >
      {socialLinks.map(({ label, href }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b-2 border-primary pb-0.5 text-foreground transition-colors duration-200 hover:text-primary"
          >
            {label} <span aria-hidden>↗</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
