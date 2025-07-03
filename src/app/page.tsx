import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-evenly items-center">
      <h1 className="text-2xl">Home</h1>
      <Button className="text-xl" asChild>
        <Link href={"/tasks"}>All Tasks</Link>
      </Button>
    </div>
  );
}
