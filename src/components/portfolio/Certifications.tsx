import { useState } from "react";
import { Award, BadgeCheck, Briefcase, FileImage } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "./Section";
import {
  certificationCategories,
  certifications,
  jobSimulations,
  type Certification,
} from "@/data/portfolio";
import { cn } from "@/lib/utils";

function CertCard({ cert }: { cert: Certification }) {
  return (
    <article className="glass-panel flex flex-col overflow-hidden rounded-3xl transition-transform duration-300 hover:-translate-y-1">
      <div className="aspect-[16/10] border-b border-glass-border bg-secondary/40 p-3">
        {cert.image ? (
          <img
            src={cert.image}
            alt={`${cert.title} certificate`}
            loading="lazy"
            className="size-full rounded-xl border border-glass-border object-contain shadow-lg"
          />
        ) : (
          <div className="grid size-full place-items-center">
            <div className="flex flex-col items-center gap-2 px-6 text-center">
              <FileImage className="size-6 text-muted-foreground" />
              <p className="text-xs text-muted-foreground">Certificate image to be added</p>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-glass-border bg-secondary/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-primary">
          <Award className="size-3" />
          {cert.category}
        </span>
        <h3 className="mt-3 font-display text-base font-semibold leading-snug">{cert.title}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground">{cert.issuer}</p>

        <dl className="mt-4 space-y-1 text-xs text-muted-foreground">
          {cert.issueDate && (
            <div className="flex gap-2">
              <dt className="font-mono uppercase tracking-wider">Issued</dt>
              <dd>{cert.issueDate}</dd>
            </div>
          )}
          {cert.credentialId && (
            <div className="flex gap-2">
              <dt className="font-mono uppercase tracking-wider">ID</dt>
              <dd>{cert.credentialId}</dd>
            </div>
          )}
        </dl>

        <div className="mt-auto pt-6">
          {cert.verifyUrl ? (
            <Button asChild size="sm" variant="outline" className="w-full">
              <a href={cert.verifyUrl} target="_blank" rel="noreferrer noopener">
                <BadgeCheck className="size-4" />
                View Certificate
              </a>
            </Button>
          ) : (
            <p className="rounded-lg border border-dashed border-border px-3 py-2 text-center text-xs text-muted-foreground">
              Verification Link Coming Soon
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

export function Certifications() {
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All" ? certifications : certifications.filter((c) => c.filters.includes(active));

  return (
    <Section
      id="certifications"
      eyebrow="Credentials"
      title="Certifications & Professional Learning"
      subtitle="Continuous Learning. Practical Skills. Cybersecurity Growth."
    >
      <div className="flex flex-wrap gap-2">
        {certificationCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            aria-pressed={active === category}
            className={cn(
              "rounded-full border px-4 py-2 text-xs transition-colors",
              active === category
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-secondary/50 text-muted-foreground hover:border-primary/50 hover:text-primary",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((cert) => (
          <CertCard key={cert.title} cert={cert} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-8 text-sm text-muted-foreground">No credentials in this category yet.</p>
      )}

      <div className="mt-20">
        <h3 className="font-display text-2xl font-semibold">Industry Job Simulations</h3>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Practical virtual experience programmes. These are job simulations, not employment or
          internships.
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {jobSimulations.map((sim) => (
            <article key={sim.organization} className="glass-panel rounded-3xl p-6">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-glass-border bg-secondary/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-primary">
                <Briefcase className="size-3" />
                {sim.category}
              </span>
              <h4 className="mt-3 font-display text-lg font-semibold">{sim.organization}</h4>
              <p className="mt-1 text-sm text-foreground/85">{sim.title}</p>
              <p className="mt-3 font-mono text-xs text-muted-foreground">
                Platform: {sim.platform}
              </p>
              {sim.certificateUrl ? (
                <Button asChild size="sm" variant="outline" className="mt-5">
                  <a href={sim.certificateUrl} target="_blank" rel="noreferrer noopener">
                    <BadgeCheck className="size-4" />
                    View Certificate
                  </a>
                </Button>
              ) : (
                <p className="mt-5 rounded-lg border border-dashed border-border px-3 py-2 text-xs text-muted-foreground">
                  Verification Link Coming Soon
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
