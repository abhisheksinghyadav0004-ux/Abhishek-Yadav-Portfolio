import { useState } from "react";
import { ExternalLink, Github, ImageOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { projects, type Project } from "@/data/portfolio";

function ProjectCard({ project }: { project: Project }) {
  const pending = project.status === "details-pending";

  return (
    <article className="project-card glass-panel flex h-full flex-col overflow-hidden rounded-lg transition-transform duration-300 hover:-translate-y-1">
      <div className="relative aspect-[16/9] border-b border-glass-border bg-secondary/40">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.name} screenshot`}
            loading="lazy"
            className="size-full object-contain"
          />
        ) : (
          <div className="grid size-full place-items-center gap-2 text-center">
            <div className="flex flex-col items-center gap-2 px-6">
              <ImageOff className="size-6 text-muted-foreground" />
              <p className="text-xs text-muted-foreground">Screenshot to be added</p>
            </div>
          </div>
        )}
        {pending && (
          <span className="absolute right-3 top-3 rounded-full border border-glass-border bg-background/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
            Details pending
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
          {project.category}
        </p>
        <h3 className="mt-2 font-display text-lg font-semibold">{project.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

        {project.features.length > 0 && (
          <ul className="mt-4 space-y-1.5">
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-2 text-sm text-foreground/80">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        {project.tech.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-border bg-secondary/50 px-2 py-1 font-mono text-[11px] text-muted-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 flex flex-wrap gap-2 pt-1">
          {project.github ? (
            <Button asChild size="sm" variant="outline">
              <a href={project.github} target="_blank" rel="noreferrer noopener">
                <Github className="size-4" />
                GitHub
              </a>
            </Button>
          ) : (
            <span className="inline-flex items-center rounded-md border border-dashed border-border px-3 py-1.5 text-xs text-muted-foreground">
              Repository link coming soon
            </span>
          )}
          {project.demo && (
            <Button asChild size="sm" variant="ghost">
              <a href={project.demo} target="_blank" rel="noreferrer noopener">
                <ExternalLink className="size-4" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, 4);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Cybersecurity Project Showcase"
      subtitle="Practical projects built while learning SOC operations, identity security and digital forensics."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {visible.map((project, index) => (
          <Reveal key={project.name} className="h-full" delay={(index % 2) * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      {projects.length > 4 && (
        <div className="mt-10 flex justify-center">
          <Button variant="outline" size="lg" onClick={() => setShowAll((v) => !v)}>
            {showAll ? "Show Fewer Projects" : "View All Projects"}
          </Button>
        </div>
      )}
    </Section>
  );
}
