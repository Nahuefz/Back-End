const Manager = require("./desafio2");
const manager = new Manager();

//Hardcodeamos un usuario

let user = {
  firstName: "Joe",
  lastName: "Momma",
  userName: "Sheesh",
  age: 18,
  email: "correo@correo.com",
};

//Llamar a la funcion createUser
  manager.createUser(user).then((response) => {
  console.log(response);
 });

//Llamar a la funcion readUsers
// manager.readUsers().then((response) => {
//   console.log(response);
// });

//Llamar a la funcion getById
// manager.getById(3).then((response) => {
//   console.log(response);
// })

//LLamar a la funcion deleteById
// manager.deleteById(1).then((response) => {
//   console.log(response);
// })

//Llamar a la funcion deleteAllUsers
// manager.deleteAllUsers(user).then((response) =>  {
//   console.log(response);
// })