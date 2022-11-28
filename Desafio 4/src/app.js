import express from "express";
import usersRouter from "./routes/users.router.js";
import petsRouter from "./routes/pets.router.js";
import __dirname from "./utils.js";

const app = express();

const server = app.listen(8080, () => console.log("Listening"));

// app.use((req, res, next) => {
//   console.log("Peticion recibida");
//   if(!req.query.name) return res.send("error");
//   next();
// })

app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.use("/api/users", usersRouter);
app.use("/api/pets", petsRouter);

app.get("/", (req, res) => {
  res.send({ message: "ok" });
});
