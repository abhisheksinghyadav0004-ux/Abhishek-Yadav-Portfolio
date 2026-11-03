import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Learning } from "@/components/portfolio/Learning";
import { ResumeCTA } from "@/components/portfolio/ResumeCTA";
import { Contact } from "@/components/portfolio/Contact";
import { SiteFooter } from "@/components/portfolio/SiteFooter";

const title = "Abhishek Yadav — Aspiring SOC Analyst | IAM & Blue Team";
const description =
  "Cybersecurity portfolio of Abhishek Yadav, MCA student focused on SOC operations, Identity and Access Management, and Blue Team security. Projects, certifications and hands-on labs.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Learning />
        <ResumeCTA />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
