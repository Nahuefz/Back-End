import http from "http";

const server = http.createServer((peticion, respuesta) => {
    respuesta.end("Bienvenidos")
})

const connectedServer = server.listen(8080, () => {
    console.log("Servidor escuchando");
})