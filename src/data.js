import data from './data/ghibli/ghibli.js';
// import { displayCard } from './main.js';
import * as todo from './main.js';

const peliculas = data.films;


//orden descendente 2014
export const ordenarDataDes = peliculas.sort((a, b) => b.release_date - a.release_date);

console.log(ordenarDataDes)

// //orden ascendente 1986
// export const ordenarDataAs = peliculas.sort((a, b) => a.release_date - b.release_date);

// // console.log(ordenarDataAs);









//OPCION PRUEBA PARA NO IMPORTAR DATA EN AMBOS ARCHIVOS, SOLO MAIN
// export const ordenarDataDes = (dataGhibli) => {
//     dataGhibli.sort((a, b) =>  b.release_date - a.release_date);
    
// }