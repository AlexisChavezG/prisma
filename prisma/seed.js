const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const missionCommander = await prisma.missionCommander.upsert({
      where:{ name : 'Alexis'},
      update:{},
      create:{
        name:"Alexis",
        username:"alexx",
        mainStack:"Datos",
        currentEnrollment:true,
        hasAzureCertification:false
      },
});

/*const missionCommander1 = await prisma.missionCommander.upsert({
  where:{ name : 'Jose'},
  update:{},
  insert:{
    name:"Jose",
    username:"jsss",
    mainStack:"Datos",
    currentEnrollment:false,
    hasAzureCertification:true
  },
});*/
    /*const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
				username: 'ajolonauta',
				mission: 'Node'
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
				username: 'ajolonauta1',
				mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
				username: 'ajolonauta2',
				mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
				username: 'ajolonauta3',
				mission: 'Node'
      },
    });*/

    console.log('Create 3 explorers');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();