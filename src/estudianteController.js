import pool from "./db.js";

// Obtener todos los estudiantes
export const listarEstudiantes = async () => {
  try {
    const [rows] = await pool.query("SELECT * FROM estudiantes");
    return rows;
  } catch (error) {
    throw { status: 500, message: "Error al obtener estudiantes" };
  }
};

// Obtener todas las materias inscritas junto con los nombres de los estudiantes
export const listarMateriasInscritas = async () => {
  try {
    const [rows] = await pool.query(
  `SELECT md.nombre AS materia_nombre, md.codigo AS materia_codigo,
        md.descripcion AS materia_descripcion,
        md.creditos AS materia_creditos,
        mi.fecha_inscripcion,
        e.nombre_alumno AS nombre_alumno
    FROM
    materias_inscritas mi
    JOIN
    materias_disponibles md ON mi.materia_id = md.id
    JOIN
    estudiantes e ON mi.estudiante_id = e.id_estudiante
  `);
    return rows;
  } catch (error) {
    throw { status: 500, message: "Error al obtener materias inscritas" };
  }
};

// Obtener todas las materias disponibles
export const listarMateriasDisponibles = async () => {
  try {
    const [rows] = await pool.query(`
      SELECT 
        id,
        nombre,
        codigo,
        descripcion,
        creditos,
        horario
      FROM 
        materias_disponibles
    `);
    return rows;
  } catch (error) {
    throw { status: 500, message: "Error al obtener materias disponibles" };
  }
};

// Insertar nuevas materias disponibles
export const insertarMateriasDisponibles = async (nombre, codigo, descripcion, creditos, horario) => {
  try {
    const [result] = await pool.query(
      `INSERT INTO materias_disponibles (nombre, codigo, descripcion, creditos, horario) VALUES (?, ?, ?, ?, ?)`,
      [nombre, codigo, descripcion, creditos, horario]
    );
    return { id: result.insertId, message: "Materia insertada correctamente." };
  } catch (error) {
    throw { status: 500, message: "Error al insertar materias disponibles." };
  }
};








 
 
 
 
 
