import { FileText } from "lucide-react";
import { ResumeButton } from "./ResumeButton";
import { profile } from "@/data/portfolio";

export function ResumeCTA() {
  return (
    <section className="py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="resume-band relative overflow-hidden border-y border-glass-border px-6 py-12 text-center sm:px-12">
          <span className="mx-auto grid size-12 place-items-center rounded-2xl border border-glass-border bg-secondary text-primary">
            <FileText className="size-5" />
          </span>
          <h2 className="mt-5 text-2xl font-bold sm:text-3xl">Interested in My Profile?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Explore my education, cybersecurity projects, technical skills, certifications, and
            practical learning experience.
          </p>
          <div className="mt-7 flex justify-center">
            <ResumeButton size="lg" />
          </div>
          {!profile.resumeUrl && (
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
              Resume PDF placeholder — add your file to enable the download
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
