import { UserRound } from "lucide-react";
import { Section } from "./Section";
import { aboutCards, profile } from "@/data/portfolio";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A student focused on defensive security">
      <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
        <div className="mx-auto w-full max-w-xs lg:mx-0">
          <div className="glass-panel grid aspect-[4/5] place-items-center overflow-hidden rounded-3xl">
            {profile.photoUrl ? (
              <img
                src={profile.photoUrl}
                alt={profile.name}
                loading="lazy"
                className="size-full object-cover"
              />
            ) : (
              <div className="flex flex-col items-center gap-3 px-6 text-center">
                <span className="grid size-20 place-items-center rounded-full border border-glass-border bg-secondary text-primary">
                  <UserRound className="size-9" />
                </span>
                <p className="text-sm font-medium">Profile photo placeholder</p>
                <p className="text-xs text-muted-foreground">
                  Replace this with your professional photograph.
                </p>
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="space-y-4">
            {profile.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {aboutCards.map((card) => (
              <li
                key={card.label}
                className="glass-panel rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
                  {card.label}
                </p>
                <p className="mt-2 font-display text-base font-semibold">{card.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{card.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
