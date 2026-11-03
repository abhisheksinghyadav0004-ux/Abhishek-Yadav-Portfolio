import { ArrowUp, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 py-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="font-display text-lg font-semibold">{profile.name}</p>
          <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Cybersecurity | SOC | IAM | Blue Team
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Designed and developed by Abhishek Yadav.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
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
          <Button asChild variant="ghost" size="sm">
            <a href="#home">
              <ArrowUp className="size-4" />
              Back to Top
            </a>
          </Button>
        </div>
      </div>

      <div className="mx-auto mt-8 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="border-t border-border/60 pt-6 text-xs text-muted-foreground">
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
