let contador = 0;
const intervalController = setInterval(() =>{
   contador++;
   console.log(contador);
   if(contador === 3){
      clearInterval(intervalController);
   }
}, 2000);