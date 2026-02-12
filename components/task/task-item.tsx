"use client";

import { Trash2 } from "lucide-react";
import { Task } from "@/types/task";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

function formatCreatedAt(timestamp: number): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(timestamp);
}

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  const isDone = task.status === "done";
  const titleClassName = isDone ? "text-muted-foreground line-through" : "text-foreground";
  const statusLabel = isDone ? "done" : "todo";

  return (
    <li className="flex items-start gap-3 rounded-lg border p-3">
      <Checkbox
        id={`task-${task.id}`}
        checked={isDone}
        onCheckedChange={() => onToggle(task.id)}
        aria-label={`Mark ${task.title} as ${isDone ? "todo" : "done"}`}
      />

      <div className="min-w-0 flex-1 space-y-1">
        <p className={`wrap-break-word text-sm font-medium ${titleClassName}`}>{task.title}</p>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Badge variant={isDone ? "secondary" : "default"}>{statusLabel}</Badge>
          <span>{formatCreatedAt(task.createdAt)}</span>
        </div>
      </div>

      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={() => onDelete(task.id)}
        aria-label={`Delete ${task.title}`}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </li>
  );
}
