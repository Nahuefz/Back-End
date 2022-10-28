const fs = require("fs");
const { Agent } = require("http");

user = {
  firstName: "string",
  lastName: "string",
  userName: "string",
  age: "number",
  email: "string",
};

const pathToFile = "./users.json";

class Manager {
  //Funcion para crear usuarios
  createUser = async (user) => {
    if (!user.firstName || !user.userName || !user.email) {
      return {
        status: "Error",
        message: "Missing required fields",
      };
    }
    try {
      if (fs.existsSync(pathToFile)) {
        let data = await fs.promises.readFile(pathToFile, "utf-8");
        let users = JSON.parse(data);
        let id = users.length + 1;
        user.id = id;
        users.push(user);
        await fs.promises.writeFile(pathToFile, JSON.stringify(users, null, 2));
        return {
          status: "Success",
          message: "User created successfully",
        };
      } else {
        user.id = 1;
        await fs.promises.writeFile(
          pathToFile,
          JSON.stringify([user], null, 2)
        );
        return {
          status: "Success",
          message: "User created successfully",
        };
      }
    } catch (error) {
      return {
        status: "Error",
        message: error.message,
      };
    }
  };
  //Funcion para leer usuarios
  readUsers = async (user) => {
    try {
      if (fs.existsSync(pathToFile)) {
        let data = await fs.promises.readFile(pathToFile, "utf-8");
        let users = JSON.parse(data);
        return {
          status: "success",
          users: users,
        };
      } else {
        return {
          status: "error",
          message: "No users found",
        };
      }
    } catch (error) {
      return {
        status: "Error",
        message: error.message,
      };
    }
  };
  //Funcion para leer por id
  getById = async (id) => {
    if (!id) {
      return {
        status: "error",
        message: "ID is required",
      };
    }
    if (fs.existsSync(pathToFile)) {
      let data = await fs.promises.readFile(pathToFile, "utf-8");
      let users = JSON.parse(data);
      let user = users.find((user) => user.id == id);
      if (user) {
        return {
          status: "success",
          user: user,
        };
      } else {
        return {
          status: "error",
          message: "User not found",
        };
      }
    }
  };
  //Funcion para eliminar un usuario por id
  deleteById = async (id) => {
    if (!id) {
      return {
        status: "error",
        message: "ID is required",
      };
    }
    if (fs.existsSync(pathToFile)) {
      let data = await fs.promises.readFile(pathToFile, "utf-8");
      let users = JSON.parse(data);
      let newUsers = users.filter((user) => user.id != id);
      await fs.promises.writeFile(
        pathToFile,
        JSON.stringify(newUsers, null, 2)
      );
      return {
        status: "success",
        message: "User deleted successfully",
      };
    } else {
      return {
        status: "error",
        message: "No users found",
      };
    }
  };
  //Funcion para eliminar a todos los usuarios
  deleteAllUsers = async (user) => {
    if (!user) {
      return {
        status: "error",
        message: "ID is required",
      };
    }
    if (fs.existsSync(pathToFile)) {
      let data = await fs.promises.readFile(pathToFile, "utf-8");
      let users = JSON.parse(data);
      let newUsers = users.filter((user) => user != user);
      await fs.promises.writeFile(
        pathToFile,
        JSON.stringify(newUsers, null, 2)
      );
      return {
        status: "success",
        message: "All users deleted successfully",
      };
    } else {
      return {
        status: "error",
        message: "No users found",
      };
    }
  };
}

module.exports = Manager;
