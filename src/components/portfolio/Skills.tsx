import { KeyRound, ShieldCheck, TerminalSquare } from "lucide-react";
import { Section } from "./Section";
import { skillGroups } from "@/data/portfolio";

const icons = {
  shield: ShieldCheck,
  key: KeyRound,
  terminal: TerminalSquare,
} as const;

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Cybersecurity Skills"
      subtitle="Areas I am actively learning and applying through labs and personal projects."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {skillGroups.map((group) => {
          const Icon = icons[group.icon as keyof typeof icons];
          return (
            <article
              key={group.title}
              className="glass-panel rounded-3xl p-6 transition-shadow duration-300 hover:glow-ring"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl border border-glass-border bg-secondary text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="font-display text-lg font-semibold">{group.title}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-xs text-foreground/85 transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
