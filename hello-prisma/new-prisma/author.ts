import { PrismaClient } from "@prisma/client";
import { title } from "process";

const prisma = new PrismaClient();

async function main() {
  const author = await prisma.author.create({
    data: { firstname : `Enid`,
            lastname :  `Blyton`

    }
   })
}
   

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });