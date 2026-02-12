"use client"

import { useTaskStore } from "@/store/task-store"
import { TaskItem } from "@/components/task/task-item"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function TaskList() {
  const tasks = useTaskStore((state) => state.tasks)
  const toggleTask = useTaskStore((state) => state.toggleTask)
  const deleteTask = useTaskStore((state) => state.deleteTask)

  const hasHydrated = useTaskStore.persist?.hasHydrated?.() ?? true

  if (!hasHydrated) {
    return (
      <Card>
        <CardContent className="p-6 text-sm text-muted-foreground">
          Loading tasks...
        </CardContent>
      </Card>
    )
  }

  if (tasks.length === 0) {
    return (
      <Card>
        <CardContent className="space-y-2 p-6 text-center">
          <p className="font-medium">No tasks yet</p>
          <p className="text-sm text-muted-foreground">
            Create your first task to get started.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <section aria-label="Task list" className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Tasks
        </h2>
        <p className="text-sm text-muted-foreground">{tasks.length} total</p>
      </div>
      <Separator />
      <ul className="space-y-3">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))}
      </ul>
    </section>
  )
}
