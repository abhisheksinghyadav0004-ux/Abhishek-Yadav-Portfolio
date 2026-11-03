import { CheckCircle2, CircleDashed, FlaskConical } from "lucide-react";
import { Section } from "./Section";
import { learningPlatforms, learningTimeline, tryHackMeRooms } from "@/data/portfolio";

export function Learning() {
  return (
    <Section
      id="learning"
      eyebrow="Labs"
      title="Hands-on Cybersecurity Learning"
      subtitle="Completed Learning Labs and the topics I am currently working through."
    >
      <div className="mb-12">
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
          Learning Platforms I Use
        </h3>
        <ul className="mt-5 flex flex-wrap gap-3">
          {learningPlatforms.map((p) => (
            <li key={p.name}>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer noopener"
                className="glass-panel inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
              >
                {p.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Completed Learning Labs
          </h3>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {tryHackMeRooms.map((room, index) => (
              <li
                key={`${room.name}-${index}`}
                className="glass-panel rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg border border-glass-border bg-secondary text-primary">
                    <FlaskConical className="size-4" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold">{room.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">TryHackMe room</p>
                    {room.summary && (
                      <p className="mt-2 text-xs text-muted-foreground">{room.summary}</p>
                    )}
                    {room.completedOn && (
                      <p className="mt-2 font-mono text-[11px] text-muted-foreground">
                        Completed {room.completedOn}
                      </p>
                    )}
                    {room.url && (
                      <a
                        href={room.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="mt-2 inline-block text-xs text-primary underline-offset-4 hover:underline"
                      >
                        Open room
                      </a>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Learning Timeline
          </h3>
          <ol className="relative mt-5 space-y-5 border-l border-border pl-6">
            {learningTimeline.map((item) => (
              <li key={item.topic} className="relative">
                <span className="absolute -left-[31px] top-1 grid size-5 place-items-center rounded-full border border-glass-border bg-background text-primary">
                  {item.state === "completed" ? (
                    <CheckCircle2 className="size-3.5" />
                  ) : (
                    <CircleDashed className="size-3.5 text-muted-foreground" />
                  )}
                </span>
                <p className="text-sm font-medium">{item.topic}</p>
                <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                  {item.state === "completed" ? "Completed" : "Ongoing"}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
