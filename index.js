const express = require("express");

const mysql = require("mysql2");

const app = express();

    let conexion = mysql.createConnection({
        host: "localhost",
        database: "compusiete",
        user: "root",
        password: "Luiscarlos180503.",
        port: '3306'
    })

    app.set("view engine", "ejs");

//
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/", function(req,res){
    res.render("reportes");
});

    app.post("/validar", function(req,res){
        const datos = req.body;
        console.log(datos);
        let name = datos.nombre;
        let lastname = datos.apellido;
        let message = datos.mensaje;

        let registrar = "INSERT INTO almacen (nombre,apellido,mensaje) VALUES ('"+name+"','"+lastname+"','"+message+"')"; 

            

        conexion.query(registrar, function(error){
            if(error){
                throw error;
            }else{
                console.log("Datos almacenados correctamente");
            }
    });
});
    app.listen(3000, function(){
        console.log("Servidor creado http://localhost:3000");
    });
