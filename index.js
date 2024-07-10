const express = require("express");
const mysql = require("mysql2");
const path = require("path");

const app = express();

// // Configuración de la conexión a la base de datos
// const conexion = mysql.createConnection({
//     host: "localhost",
//     database: "compusiete",
//     user: "root",
//     password: "Luiscarlos180503.",
//     port: '3306'
// });

// Configurar el motor de plantillas y las vistas
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para procesar datos JSON y URL codificados
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Ruta principal para renderizar la vista "reportes"
app.get("/", function (req, res) {
    res.render("reportes");
});

// // Ruta para manejar la validación del formulario
// app.post("/validar", function (req, res) {
//     const datos = req.body;
//     console.log(datos);
//     let name = datos.nombre;
//     let lastname = datos.apellido;
//     let message = datos.mensaje;

//     let registrar = "INSERT INTO almacen (nombre, apellido, mensaje) VALUES (?, ?, ?)";

//     // Usar consultas parametrizadas para prevenir inyección SQL
//     conexion.query(registrar, [name, lastname, message], function (error) {
//         if (error) {
//             throw error;
//         } else {
//             console.log("Datos almacenados correctamente");
//             res.redirect('/');
//         }
//     });
// });

// Iniciar el servidor
app.listen(3000, function () {
    console.log("Servidor creado http://localhost:3000");
});
