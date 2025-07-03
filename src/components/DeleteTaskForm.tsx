import { Button } from "./ui/button";
import { deleteTask } from "@/app/actions";

export default function DeleteTaskForm({ taskID }: { taskID: number }) {
  const deleteTaskWithId = deleteTask.bind(null, taskID);
  return (
    <form action={deleteTaskWithId}>
      <Button variant={"destructive"} type="submit">
        Delete
      </Button>
    </form>
  );
}
