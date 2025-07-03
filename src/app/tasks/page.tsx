import NewTaskForm from "@/components/NewTaskForm";
import prisma from "@/db.config";
import Link from "next/link";

export default async function Task() {
  const tasks = await prisma.todo.findMany();
  return (
    <div className="mt-4">
      <h1 className="text-2xl mb-5">All Tasks</h1>
      <div className="flex gap-x-4">
        <div className="flex-1">
          <NewTaskForm />
        </div>
        <ul className="flex-1">
          {tasks.map((task) => (
            <li key={task.id} className="border mb-3 p-2 rounded-md">
              <h2 className="text-xl font-medium">
                <Link href={`/tasks/${task.id}`}>{task.task}</Link>
              </h2>
              <p>{task.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
