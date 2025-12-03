import { PrismaClient } from "@prisma/client";
import sampleData from "./sample-data";

async function main() {
  const prisma = new PrismaClient();
  await prisma.product.deleteMany(); // Deletes the previous db content.
  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.verificationToken.deleteMany();
  await prisma.user.deleteMany();

  await prisma.product.createMany({ data: sampleData.products }); // Recreates the db.
  await prisma.user.createMany({ data: sampleData.users });

  console.log("Database seeded sucessfully!");
}

main();
