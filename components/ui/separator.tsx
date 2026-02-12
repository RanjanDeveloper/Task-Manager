import { cn } from "@/lib/utils";

interface SeparatorProps {
  className?: string;
}

export function Separator({ className }: SeparatorProps) {
  return <div role="separator" className={cn("h-px w-full bg-border", className)} />;
}
