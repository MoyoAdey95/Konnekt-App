import { PrismaClient } from "@prisma/client";
import sampleData from "./sample-data";

async function main() {
  const prisma = new PrismaClient();
  await prisma.product.deleteMany(); // Deletes the previous db content.

  await prisma.product.createMany({ data: sampleData.products }); // Recreates the db.

  console.log("Database seeded sucessfully!");
}

main();
