"use client";

import { SubmitEvent, useState } from "react";
import { useTaskStore } from "@/store/task-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function TaskForm() {
  const [title, setTitle] = useState("");
  const addTask = useTaskStore((state) => state.addTask);

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTask(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row" aria-label="Add a new task">
      <Input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Add a new task..."
        aria-label="Task title"
        className="sm:flex-1"
      />
      <Button type="submit">Add Task</Button>
    </form>
  );
}
