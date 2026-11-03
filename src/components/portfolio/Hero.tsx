import { ArrowDown, ArrowUpRight, Linkedin, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile, focusAreas } from "@/data/portfolio";
import { ResumeButton } from "./ResumeButton";
import heroImage from "@/assets/hero-cyber.jpg";

export function Hero() {
  return (
    <section id="home" className="portfolio-hero relative isolate overflow-hidden">
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        className="hero-backdrop pointer-events-none absolute inset-0 -z-20 size-full object-cover"
      />
      <div className="hero-shade pointer-events-none absolute inset-0 -z-10" />
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="hero-copy animate-rise">
          <span className="inline-flex items-center gap-2.5 font-mono text-xs uppercase text-primary">
            <ShieldCheck className="size-3.5" />
            {focusAreas[2]}
          </span>
          <h1 className="hero-name mt-6 font-bold">
            {profile.name.split(" ").map((name, index) => (
              <span key={name} className={index === 1 ? "block text-primary" : "block"}>
                {name}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-lg font-display text-xl font-medium text-foreground sm:text-2xl">
            {profile.tagline}
          </p>
          <p className="mt-4 max-w-lg font-mono text-xs leading-relaxed text-primary/90">
            {profile.subtitle}
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            {profile.heroDescription}
          </p>
          <div className="hero-actions mt-7 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="h-12">
              <a href="#projects">
                Explore My Projects
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
            <ResumeButton size="lg" variant="outline" className="h-12" />
            <Button
              asChild
              size="icon"
              variant="ghost"
              aria-label="Connect on LinkedIn"
              title="Connect on LinkedIn"
            >
              <a href={profile.linkedin} target="_blank" rel="noreferrer noopener">
                <Linkedin className="size-4" />
              </a>
            </Button>
          </div>
        </div>
        <div className="hero-bottom mt-12 flex items-center justify-between gap-6 border-t border-glass-border py-5">
          <ul className="flex flex-wrap gap-x-7 gap-y-3">
            {focusAreas
              .filter((_, index) => [0, 2, 4].includes(index))
              .map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-2 font-mono text-xs text-muted-foreground"
                >
                  <span className="size-1 bg-primary" />
                  {area}
                </li>
              ))}
          </ul>
          <Button
            asChild
            size="icon"
            variant="ghost"
            title="About Abhishek"
            aria-label="About Abhishek"
          >
            <a href="#about">
              <ArrowDown />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
