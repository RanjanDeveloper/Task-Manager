import { TaskForm } from "@/components/task/task-form";
import { TaskList } from "@/components/task/task-list";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-2xl px-4 py-10 sm:px-6">
      <Card>
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl font-semibold tracking-tight">Task Manager</CardTitle>
          <CardDescription>
            Keep your day focused with a lightweight task list that stays saved in your browser.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <TaskForm />
          <TaskList />
        </CardContent>
      </Card>
    </main>
  );
}
