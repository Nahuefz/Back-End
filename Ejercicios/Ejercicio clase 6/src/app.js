import express from "express";
import { builtinModules } from "module";

const app = express();

const server = app.listen(8080, () => console.log("Listening on express"));

app.get("/", (req, res) => {
    let titulo = "<h1 style="font-color:blue">Bienvenidos al servidor express</h1>"
    res.send()
})

// app.get("/visitas", (req, res) => {
//     res.send("La cantidad de visitas es ")
// })

app.get("/fyh", (req, res) => {
    let today = new Date();
    let now = today.toLocaleDateString();
    res.send(now)
})