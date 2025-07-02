import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({});

async function seed() {
  await prisma.todo.deleteMany({});
  await prisma.todo.createMany({
    data: [
      {
        task: "Clean the car",
        description: "go to supermarket get stuff to clean your car",
        priority: "High",
      },
      {
        task: "Place order for the new Play Station",
        description: "gamming yeah!!",
        priority: "Low",
      },
      {
        task: "Take girlfriend for anniversary ",
        description: "damn i almost forgot",
        priority: "High",
      },
    ],
  });
}

seed().then(() => prisma.$disconnect());
