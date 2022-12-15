import data from './data/ghibli/ghibli.js';
import { ordenarDataDes, ordenarDataAs, filterDirector, filterDirector2 } from './data.js';

const peliculas = data.films;
const containerGhibli = document.getElementById("root");


// crear una constante para guardar 
const displayCard = (dataGhibli) => {
    containerGhibli.innerHTML = "";
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
 displayCard(peliculas)


// FUNCION ORDENAR
document.getElementById("desc").addEventListener("click", (e) => {
    e.preventDefault();

    displayCard(ordenarDataDes(peliculas));
})

document.getElementById("asc").addEventListener("click", (e) => {
    e.preventDefault();

    displayCard(ordenarDataAs(peliculas));
})



// FUNCION FILTRAR
document.getElementById("haMi").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("hizo click!")
    displayCard(filterDirector(peliculas));
    
    //  document.getElementById("calculo").value = filterDirector.length;
})

document.getElementById("isTa").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("hizo click!")
    displayCard(filterDirector2(peliculas));
})














//INTENTO  DE CALCULO NUEVO ARRAY CON HAMI
// const nuevoArrayDir = peliculas.map(x => x.Director)
// const arrayHami = filterDirector(nuevoArrayDir)
// console.log(nuevoArrayDir)

//INTENTO 2  DE CALCULO NUEVO ARRAY CON HAMI

// const nuevoArrayDir (Array) {
//     let counter = 0;

//     for(let i = 0; i < peliculas.length; i++) {
//         if (peliculas[i] == "Hayao Miyazaki"){
//             counter += [i];
//         }
//     }
//     return counter;
// }

//INTENTO 3  DE CALCULO NUEVO ARRAY CON HAMI

// const arrayHami = filterDirector
// arrayHami.map(x => x){
//     const 
// }
