//import { ordenarData } from './data.js';

import data from './data/ghibli/ghibli.js';


//console.log(example, data);
//console.log(data.films[0].poster)

let peliculas = data.films;
let containerGhibli = document.getElementById("root");

// crear una constante para guardar 
const displayCard = (dataGhibli) => {
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

console.log(peliculas);


//orden descendente

let ordenarDataDes = peliculas.sort((a, b) => b.release_date - a.release_date);
console.log(ordenarDataDes);

let ordenarDataAs = peliculas.sort((a, b) => a.release_date - b.release_date);

console.log(ordenarDataDes);

displayCard(ordenarDataAs);



//document.addEventListener("orderAño")

// export { displayCard }
