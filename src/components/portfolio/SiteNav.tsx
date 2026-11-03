import { useEffect, useState } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks, profile } from "@/data/portfolio";
import { ResumeButton } from "./ResumeButton";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "glass-panel border-b" : "bg-transparent",
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
      >
        <a href="#home" className="flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-xl border border-glass-border bg-secondary font-display text-sm font-bold tracking-tight text-primary glow-ring">
            {profile.initials}
          </span>
          <span className="hidden font-display text-sm font-semibold sm:block">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild size="icon" variant="ghost" aria-label="LinkedIn profile">
            <a href={profile.linkedin} target="_blank" rel="noreferrer noopener">
              <Linkedin className="size-4" />
            </a>
          </Button>
          <Button asChild size="icon" variant="ghost" aria-label="GitHub profile">
            <a href={profile.github} target="_blank" rel="noreferrer noopener">
              <Github className="size-4" />
            </a>
          </Button>
          <ResumeButton size="sm" />
        </div>

        <Button
          size="icon"
          variant="ghost"
          className="lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </nav>

      {open && (
        <div className="glass-panel border-t lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-sm text-foreground/90 transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-3 flex items-center gap-2 border-t pt-4">
              <Button asChild size="icon" variant="outline" aria-label="LinkedIn profile">
                <a href={profile.linkedin} target="_blank" rel="noreferrer noopener">
                  <Linkedin className="size-4" />
                </a>
              </Button>
              <Button asChild size="icon" variant="outline" aria-label="GitHub profile">
                <a href={profile.github} target="_blank" rel="noreferrer noopener">
                  <Github className="size-4" />
                </a>
              </Button>
              <ResumeButton size="sm" className="flex-1" />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
