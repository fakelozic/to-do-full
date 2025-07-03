import { notFound } from "next/navigation";
import EditTaskForm from "@/components/EditTaskForm";
import prisma from "@/db.config";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function EditTaskPage({
  params,
}: {
  params: Promise<{ taskID: string }>;
}) {
  const { taskID } = await params;
  const taskID_num = parseInt(taskID, 10);
  const task = await prisma.todo.findUnique({
    where: { id: taskID_num },
  });
  if (!task) {
    notFound();
  }

  return (
    <div className="mt-4">
      <Button className="text-xl mb-4" asChild>
        <Link href={"/tasks"}>All Tasks</Link>
      </Button>
      <EditTaskForm task={task} />
    </div>
  );
}
