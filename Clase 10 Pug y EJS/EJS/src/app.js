import express, { application } from "express";
import __dirname from "./utils.js";

const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = [];

app.get("/", (req, res) => {
  res.render("formulario", {
    users,
  });
});

app.post("/users", (req, res) => {
  const user = req.body;
  users.push(user);
  res.redirect("/");
});

app.get("/example", (req, res) => {
  const users = [
    { name: "Leandro", age: 24 },
    { name: "Panchito", age: 22 },
    { name: "Marcos", age: 21 },
  ];
  res.render("home", {
    papa: "Quesito",
    users,
  });
});
const server = app.listen(8080, () => console.log("Listening"));
