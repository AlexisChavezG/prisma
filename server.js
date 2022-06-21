const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const cors =require("cors")
const corsOptions={
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});
app.get('/explorers', async (req, res) => {
    const allExplorers =  await prisma.explorer.findMany({});
    res.json(allExplorers);
});
app.get('/explorers/:id', async (req, res) => {
  const id = req.params.id;
  const explorer = await prisma.explorer.findUnique({where: {id: parseInt(id)}});
  res.json(explorer);
});

app.post('/explorers', async (req, res) => {
  const explorer = {
    name: req.body.name,
    username: req.body.username,
    mission: req.body.mission
   };
  const message = 'Explorer creado.';
  await prisma.explorer.create({data: explorer});
  return res.json({message});
});
app.put('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.explorer.update({
		where: {
			id: id
		},
		data: {
			mission: req.body.mission
		}
	})

	return res.json({message: "Actualizado correctamente"});
});
app.delete('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.explorer.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});



app.get('/mission', async (req, res) => {
  const allExplorers =  await prisma.mission.findMany({});
  res.json(allExplorers);
});
app.get('/mission/:id', async (req, res) => {
  const id = req.params.id;
  const explorer = await prisma.mission.findUnique({where: {id: parseInt(id)}});
  res.json(explorer);
});

app.post('/mission', async (req, res) => {
  const mision = {
    name: req.body.name,
    lang: req.body.lang,
    missionCommander: req.body.missionCommander,
    enrollments: req.body.enrollments,
    hasCertification: req.body.hasCertification,
   };
  const message = 'Explorer creado.';
  await prisma.mission.create({data: mision});
  return res.json({message});
});

app.put('/mission/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.mission.update({
		where: {
			id: id
		},
		data: {
			lang: req.body.lang
		}
	})

	return res.json({message: "Actualizado correctamente"});
});
app.delete('/mission/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.mission.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});

// Cors
app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});