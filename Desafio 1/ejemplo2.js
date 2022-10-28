const mostrarLetras = (palabra, callback) => { 
    let index = 0;
    const timer = setInterval(() => {
        console.log(palabra[index]);
        index++;
        if(index >= palabra.length){
            clearInterval(timer);
            callback();
        }
    }, 1000)
}
const fin = () => console.log("Terminé.");

mostrarLetras("Hola", fin);

setTimeout(() => {
    mostrarLetras("Chau", fin);
}, 250)

setTimeout(() => {
    mostrarLetras("Hoola", fin);
}, 500);


    
