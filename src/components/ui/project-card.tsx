import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export function ProjectCard({
  number,
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
  sourceLabel,
  liveLabel,
  className,
}: {
  number: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  sourceLabel: string;
  liveLabel: string;
  className?: string;
}) {
  const primaryUrl = liveUrl ?? githubUrl;

  return (
    <article
      className={cn(
        "group relative flex flex-col rounded-card border border-border bg-card px-7 py-[26px] transition-[border-color,background-color,transform] duration-300 hover:border-primary hover:bg-hover motion-safe:hover:-translate-y-0.5",
        className,
      )}
    >
      <div className="mb-3.5 flex items-center justify-between">
        <span className="font-mono text-xs font-semibold text-primary">{number}</span>
        <div className="flex items-center gap-3.5 text-faint">
          {liveUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} — ${sourceLabel}`}
              title={sourceLabel}
              className="relative z-10 inline-flex transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <GithubIcon />
            </a>
          )}
          <ArrowUpRight
            size={16}
            aria-hidden
            className="transition-colors group-hover:text-primary"
          />
        </div>
      </div>

      <h3 className="mb-2.5 font-mono text-[17px] font-semibold tracking-[-0.01em] break-words text-foreground">
        <a
          href={primaryUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title} — ${liveUrl ? liveLabel : sourceLabel}`}
          className="outline-none after:absolute after:inset-0 after:rounded-card focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-ring"
        >
          {title}
        </a>
      </h3>

      <p className="mb-4 text-[14.5px] leading-[1.6] text-muted-foreground">{description}</p>

      <ul className="mt-auto flex flex-wrap gap-[7px]">
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded-[6px] border border-line px-[9px] py-[3px] font-mono text-[11px] text-faint"
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}
