class Contador {
    constructor(responsable){
        this.responsable = responsable;
        this.cuenta = 0;
    }
    static contadorGlobal = 0;
    obtenerResponsable = () => {
        console.log(`El responsable es ${this.responsable}`);
    }
    obtenerCuentaIndividual = () => {
        return this.cuenta;
    }
    obtenerCuentaGlobal = () => {
        return Contador.contadorGlobal;
    }
    contar  = () => {
        this.cuenta++;
        Contador.contadorGlobal++;
    }
}

const contador1 = new Contador('Nahuel');
const contador2 = new Contador('Juan');

contador1.obtenerResponsable();
contador2.obtenerResponsable();

contador1.contar();
contador2.contar();

let cuenta1 = contador1.obtenerCuentaIndividual();
let cuenta2 = contador2.obtenerCuentaIndividual();

console.log(`El contador de ${contador1.responsable} tiene ${contador1.cuenta1} contados`);
console.log(`El contador de ${contador2.responsable} tiene ${contador2.cuenta2} contados`);