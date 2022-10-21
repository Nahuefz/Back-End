class Cliente {
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
        this.productos = [];
        this.cartera = 0;
    }
    saludar = () => {
        console.log(`Hola, soy ${this.nombre} y mi email es ${this.email}. Me estoy llevando ${this.productos.length} productos y tengo $${this.cartera} pesos.`);
    }


añadirFondos = (fondos) => {
    this.cartera = this.cartera += fondos;
}

añadirProducto = producto => {
    this.productos.push(producto);
    }
}

const instaciaDeCliente1 = new Cliente("Nahuel", "correo@correo.com");
const instaciaDeCliente2 = new Cliente("Nacho", "correo@correo.com");
const instaciaDeCliente3 = new Cliente("Roni", "correo@correo.com");
const instaciaDeCliente4 = new Cliente("Ulises", "correo@correo.com");

instaciaDeCliente1.añadirFondos(10000);
instaciaDeCliente1.añadirProducto("Coquita")
instaciaDeCliente1.saludar();
instaciaDeCliente2.saludar();
instaciaDeCliente3.saludar();
instaciaDeCliente4.saludar();