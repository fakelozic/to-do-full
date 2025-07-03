"use server";
import prisma from "@/db.config";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createTask(formData: FormData) {
  // 1. Get the data from the form
  const task = formData.get("task") as string;
  const description = formData.get("description") as string;
  const priority = formData.get("priority") as "High" | "Medium" | "Low";

  // Basic validation
  if (!task || !priority) {
    throw new Error("Task and priority are required.");
  }

  // 2. Create the new task in the database
  await prisma.todo.create({
    data: {
      task: task,
      description: description,
      priority: priority,
    },
  });

  // 3. Invalidate the cache for the home page
  // This tells Next.js to refetch the data on the home page
  revalidatePath("/tasks");

  // 4. Redirect the user back to the home page
  redirect("/tasks");
}

export async function updateTask(id: number, formData: FormData) {
  const task = formData.get("task") as string;
  const description = formData.get("description") as string;
  const priority = formData.get("priority") as "High" | "Medium" | "Low";

  if (!task || !priority) {
    throw new Error("Task and priority are required.");
  }
  await prisma.todo.update({
    where: {
      id: id,
    },
    data: {
      task: task,
      description: description,
      priority: priority,
    },
  });

  revalidatePath(`/tasks/${id}`);
  redirect(`/tasks/${id}`);
}

export async function deleteTask(id: number) {
  console.log("id:", id);
  await prisma.todo.delete({ where: { id: id } });

  revalidatePath("/tasks");
  redirect("/tasks");
}
