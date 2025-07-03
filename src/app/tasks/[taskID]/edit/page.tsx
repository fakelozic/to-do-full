import { notFound } from "next/navigation";
import EditTaskForm from "@/components/EditTaskForm";
import prisma from "@/db.config";

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

  return <EditTaskForm task={task} />;
}
