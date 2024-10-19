
DROP TABLE IF EXISTS `estudiantes`;

CREATE TABLE `estudiantes` (
  `id_estudiante` int NOT NULL AUTO_INCREMENT,
  `nombre_alumno` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email_alumno` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `curso_alumno` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  PRIMARY KEY (`id_estudiante`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


INSERT INTO `estudiantes` VALUES (35,'Hola','53453go@gmail.com','PHP','2023-12-07'),(36,'Carlos x','667567@gmail.com','Python','2023-12-07'),(37,'nuevo','n@gmail.com','Python','2023-12-07'),(39,'nuevooo','n@gmail.com','PHP','2023-12-07'),(40,'nuevodsadasd','1eqwe12311@gmail.com','NodeJS','2023-12-07');

CREATE TABLE materias_disponibles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    codigo VARCHAR(20) UNIQUE NOT NULL,
    descripcion TEXT,
    creditos INT NOT NULL,
    horario VARCHAR(50)
);

CREATE TABLE materias_inscritas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    estudiante_id INT,
    materia_id INT,
    fecha_inscripcion DATE NOT NULL,
    FOREIGN KEY (estudiante_id) REFERENCES estudiantes(id_estudiante),
    FOREIGN KEY (materia_id) REFERENCES materias_disponibles(id),
    UNIQUE (estudiante_id, materia_id)
);

-- Insertar materias disponibles
INSERT INTO materias_disponibles (nombre, codigo, descripcion, creditos, horario) VALUES
('Matemáticas', 'MAT101', 'Fundamentos de Matemáticas', 3, 'Lunes y Miércoles 10:00-12:00'),
('Historia', 'HIS202', 'Historia Universal', 3, 'Martes y Jueves 14:00-16:00'),
('Química', 'QUI303', 'Química General', 4, 'Lunes y Miércoles 12:00-14:00');

-- Suponiendo que tienes un estudiante con ID 1
-- Insertar materias inscritas
INSERT INTO materias_inscritas (estudiante_id, materia_id, fecha_inscripcion) VALUES
(36, 1, CURDATE()), -- Inscribir al estudiante en Matemáticas
(37, 2, CURDATE()); -- Inscribir al estudiante en Historia

