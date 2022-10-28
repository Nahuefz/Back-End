class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName = () => {
        return `${this.nombre} ${this.apellido}`;
    }
    addMascota = (nombreMascota) => {
        this.mascotas.push({
            nombreMascota
        })
    }
    countMascotas = () => {
        return `${this.nombre} ${this.apellido} tiene ${this.mascotas.length} mascotas.`;
    }
    addBook = (nombre, autor) => {
        this.libros.push({
            nombre, autor
        })
    }
    getBookNames = () => {
        return this.libros.map(function(libro){
            return libro.nombre;
        })
    }
}

const user1 = new Usuario('Nahuel', 'Fonteñez', [], []);
const user2 = new Usuario('John', 'Cena', [], []);

//Libros user 1
user1.addBook('La espada del destino', 'Sapkowski, Andrzej');
user1.addBook('El heroe de las eras', 'Sanderson, Brandon');
user1.addBook('Nuestra parte de noche', 'Enríquez, Mariana');

//Mascotas user 1
user1.addMascota('Marquitos');
user1.addMascota('Quien');

//Libros user 2 
user2.addBook('Un saco de huesos', 'King, Stephen');
user2.addBook('El camino de los reyes', 'Sanderson, Brandon');

//Mascotas user 2
user2.addMascota('Coco');
user2.addMascota('Meme');
user2.addMascota('Pitu');

//User 1
console.log(user1.getFullName());
console.log(user1.countMascotas());
console.log(user1.getBookNames());

//User 2
console.log(user2.getFullName());
console.log(user2.countMascotas());
console.log(user2.getBookNames());

