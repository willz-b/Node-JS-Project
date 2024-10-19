import express from "express";

import {
    listarEstudiantes,
    listarMateriasInscritas,
    listarMateriasDisponibles, insertarMateriasDisponibles,
} from "./estudianteController.js";


const router = express.Router();

router.get("/Crud-Completo-con-NodeJS-Express-y-MySQL", async (req, res) => {
  try {
    const estudiantes = await listarEstudiantes();
    res.render("pages/estudiantes", { estudiantes });
  } catch (error) {
    const { status, message } = error;
    res.status(status || 500).json({ error: message });
  }
});


// Ruta para mostrar las materias del estudiante
router.get('/materias', async (req, res) => {
    try {
        const materiasInscritas = await listarMateriasInscritas();
        res.render('pages/materias', { materiasInscritas }); // Asegúrate de pasar la variable aquí
    } catch (error) {
        res.status(500).send("Error al obtener materias inscritas");
    }
});

router.get('/materias-disponibles', async (req, res) => {
  try {
    const materiasDisponibles = await listarMateriasDisponibles();
    res.render('pages/anadirMaterias', { materiasDisponibles });
  } catch (error) {
    res.status(500).send("Error al obtener materias disponibles");
  }
});

// Ruta para añadir una nueva materia
router.post('/materias-disponibles', async (req, res) => {
    const { nombre, codigo, descripcion, creditos, horario } = req.body;
    try {
        const insertarMateriaDisponibles = await insertarMateriasDisponibles(nombre, codigo, descripcion, creditos, horario);
        res.redirect('/materias-disponibles');
    } catch (error) {
        console.error(error); // Para ver el error en la consola
        res.status(500).send("Error al añadir materia");
    }
});



export default router;
