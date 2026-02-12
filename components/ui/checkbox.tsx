"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CheckboxProps {
  id: string;
  checked: boolean;
  onCheckedChange: () => void;
  "aria-label": string;
}

export function Checkbox({ id, checked, onCheckedChange, "aria-label": ariaLabel }: CheckboxProps) {
  return (
    <button
      type="button"
      role="checkbox"
      id={id}
      aria-label={ariaLabel}
      aria-checked={checked}
      onClick={onCheckedChange}
      className={cn(
        "peer flex h-5 w-5 items-center justify-center rounded-sm border border-primary",
        "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        checked ? "bg-primary text-primary-foreground" : "bg-background text-transparent",
      )}
    >
      <Check className="h-4 w-4" />
    </button>
  );
}
