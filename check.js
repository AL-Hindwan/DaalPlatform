const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const rooms = await prisma.room.findMany();
    for (const room of rooms) {
        console.log('Room:', room.id, 'Avail:', JSON.stringify(room.availability));
    }
}

main().finally(() => prisma.$disconnect());
