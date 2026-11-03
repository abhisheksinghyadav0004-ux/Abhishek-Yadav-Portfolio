import { Download } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type Props = {
  size?: "sm" | "default" | "lg";
  variant?: "default" | "outline" | "secondary" | "ghost";
  className?: string;
};

export function ResumeButton({ size = "default", variant = "default", className }: Props) {
  if (profile.resumeUrl) {
    return (
      <Button asChild size={size} variant={variant} className={cn(className)}>
        <a href={profile.resumeUrl} download>
          <Download className="size-4" />
          Download Resume
        </a>
      </Button>
    );
  }

  return (
    <Button
      size={size}
      variant={variant}
      className={cn(className)}
      onClick={() =>
        toast("Resume file not added yet", {
          description: "Add your PDF to the site and this button will download it.",
        })
      }
    >
      <Download className="size-4" />
      Download Resume
    </Button>
  );
}
