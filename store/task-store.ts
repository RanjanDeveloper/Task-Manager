"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { Task } from "@/types/task";

interface TaskState {
  tasks: Task[];
  addTask: (title: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

function buildTask(title: string): Task {
  return {
    id: crypto.randomUUID(),
    title,
    status: "todo",
    createdAt: Date.now(),
  };
}

export const useTaskStore = create<TaskState>()(
  persist(
    (set) => ({
      tasks: [],
      addTask: (title) => {
        const normalizedTitle = title.trim();
        if (!normalizedTitle) return;

        set((state) => ({
          tasks: [buildTask(normalizedTitle), ...state.tasks],
        }));
      },
      toggleTask: (id) => {
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, status: task.status === "done" ? "todo" : "done" } : task,
          ),
        }));
      },
      deleteTask: (id) => {
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        }));
      },
    }),
    {
      name: "task-manager-store",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ tasks: state.tasks }),
    },
  ),
);
