import DeleteTaskForm from "@/components/DeleteTaskForm";
import { Button } from "@/components/ui/button";
import prisma from "@/db.config";
import Link from "next/link";

export default async function TaskPage({
  params,
}: {
  params: Promise<{ taskID: string }>;
}) {
  const { taskID } = await params;
  const taskID_num = parseInt(taskID, 10)
  const task = await prisma.todo.findUnique({
    where: { id: Number(taskID) },
  });
  return (
    <div className="mt-4">
      <div className="flex justify-between">
        <h1 className="text-2xl mb-5">All Tasks</h1>
        <Button className="text-xl" variant={"outline"} asChild>
          <Link href={"/tasks"}>All Tasks</Link>
        </Button>
      </div>
      <div>task for id {taskID}</div>
      <h3>{task?.task}</h3>
      <h4>{task?.priority}</h4>
      <p>{task?.description}</p>
      <div className="flex gap-x-5 mt-5">
        <Button asChild>
          <Link href={`/tasks/${taskID}/edit`}>Edit</Link>
        </Button>
        <DeleteTaskForm taskID={taskID_num} />
      </div>
    </div>
  );
}
