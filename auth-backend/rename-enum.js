const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function main() {
    await prisma.$executeRawUnsafe(`ALTER TYPE "BookingTrigger" RENAME VALUE 'CAPACITY_BASED' TO 'FLEXIBLE';`);
    console.log('Done');
}
main().catch(console.error).finally(() => prisma.$disconnect());
