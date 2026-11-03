import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("portfolio-section scroll-mt-24 py-20 sm:py-24", className)}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="section-heading max-w-3xl">
          {eyebrow && (
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
          )}
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
          {subtitle && <p className="mt-3 text-base text-muted-foreground">{subtitle}</p>}
          <div className="section-rule mt-6 h-px w-24 bg-primary" />
        </header>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
