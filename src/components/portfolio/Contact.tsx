import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Section } from "./Section";
import { profile } from "@/data/portfolio";

type Errors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (name.length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid email.";
    if (subject.length < 3) next.subject = "Please add a subject.";
    if (message.length < 10) next.message = "Please write at least 10 characters.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    if (!profile.email) {
      toast("Message not sent", {
        description:
          "No email address is configured yet. Please reach out on LinkedIn in the meantime.",
      });
      return;
    }

    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    toast("Opening your email app", {
      description: "Your message will be sent from your own mail client.",
    });
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's Connect"
      subtitle="I am open to entry-level cybersecurity opportunities, internships, and professional networking."
    >
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-4">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="glass-panel flex items-center gap-4 rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1"
          >
            <span className="grid size-10 place-items-center rounded-xl border border-glass-border bg-secondary text-primary">
              <Linkedin className="size-4" />
            </span>
            <span>
              <span className="block text-sm font-semibold">LinkedIn</span>
              <span className="block text-xs text-muted-foreground">
                linkedin.com/in/abhishek-yadav-619852381
              </span>
            </span>
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            className="glass-panel flex items-center gap-4 rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1"
          >
            <span className="grid size-10 place-items-center rounded-xl border border-glass-border bg-secondary text-primary">
              <Github className="size-4" />
            </span>
            <span>
              <span className="block text-sm font-semibold">GitHub</span>
              <span className="block text-xs text-muted-foreground">
                github.com/abhisheksinghyadav0004-ux
              </span>
            </span>
          </a>

          <div className="glass-panel flex items-center gap-4 rounded-2xl p-5">
            <span className="grid size-10 place-items-center rounded-xl border border-glass-border bg-secondary text-primary">
              <Mail className="size-4" />
            </span>
            <span>
              <span className="block text-sm font-semibold">Email</span>
              {profile.email ? (
                <a
                  href={`mailto:${profile.email}`}
                  className="block text-xs text-primary underline-offset-4 hover:underline"
                >
                  {profile.email}
                </a>
              ) : (
                <span className="block text-xs text-muted-foreground">
                  Email address to be added
                </span>
              )}
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate className="glass-panel rounded-3xl p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" autoComplete="name" placeholder="Your name" />
              {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
              />
              {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
            </div>
          </div>

          <div className="mt-5 space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" name="subject" placeholder="Opportunity, question, feedback" />
            {errors.subject && <p className="text-xs text-destructive">{errors.subject}</p>}
          </div>

          <div className="mt-5 space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" rows={6} placeholder="Write your message..." />
            {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
          </div>

          <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
            <Send className="size-4" />
            Send Message
          </Button>

          {!profile.email && (
            <p className="mt-4 text-xs text-muted-foreground">
              Note: no email address is configured yet, so this form cannot deliver messages. Use
              the LinkedIn link until it is added.
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}
