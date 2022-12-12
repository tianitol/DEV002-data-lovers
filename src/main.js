import data from './data/ghibli/ghibli.js';
import { ordenarDataDes } from './data.js';




//console.log(example, data);
//console.log(data.films[0].poster)

export const peliculas = data.films;
let containerGhibli = document.getElementById("root");

// crear una constante para guardar 
export const displayCard = (dataGhibli) => {
    dataGhibli.forEach((films) => {
        let cardFilms = document.createElement("div");
        cardFilms.classList.add("carta");
        cardFilms.innerHTML += `<img src="${films.poster}" /> 
        <section class= "infoFilms"> 
        <h2 class="nameMovie" > ${films.title} </h2>
        <p class= "text1"> ${films.director} </p>
        <p class= "text"> ${films.release_date} </p>
        <p class= "cajatext"> ${films.description} </p>
        </section>
        `
        containerGhibli.appendChild(cardFilms);
    })
}

//displayCard(peliculas); // entregamos el argumento, para filtrar u ordenar le paso la data a displaycard para recorrer y mostrar
displayCard(ordenarDataDes)






//OPCION PRUEBA PARA NO IMPORTAR DATA EN AMBOS ARCHIVOS, SOLO MAIN
// displayCard(ordenarDataDes(peliculas));




//document.addEventListener("orderAño")





//FUNCION PARA ORDENAR DATA AUN SIN PASAR AL MODULO DATA.JS
//orden descendente
// let ordenarDataDes = peliculas.sort((a, b) => b.release_date - a.release_date);
// // orden ascendente
// let ordenarDataAs = peliculas.sort((a, b) => a.release_date - b.release_date);
// console.log(ordenarDataAs);
// displayCard(ordenarDataDes);



//document.addEventListener("orderAño")


