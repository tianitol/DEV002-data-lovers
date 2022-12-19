import data from './data/ghibli/ghibli.js';
import { ordenarDataDes, ordenarDataAs, filterDirector, filterDirector2, percentDir } from './data.js';

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
document.getElementById("calculo").innerHTML = " Estudio Ghibli ha realizado 20 peliculas entre los años 1986 y 2014 ";


// FUNCION ORDENAR
document.getElementById("desc").addEventListener("click", (e) => {
    e.preventDefault();

    displayCard(ordenarDataDes(peliculas));
    // document.getElementById("calculo").innerHTML = "Este director a realizado "
})

document.getElementById("asc").addEventListener("click", (e) => {
    e.preventDefault();

    displayCard(ordenarDataAs(peliculas));
    // document.getElementById("calculo").innerHTML = "Este director a realizado "
})



// FUNCION FILTRAR
document.getElementById("haMi").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("hizo click!")
    const resultFilterDir = filterDirector(peliculas);
    displayCard(resultFilterDir);

    document.getElementById("calculo").innerHTML = "Este director a realizado " + resultFilterDir.length + " peliculas, lo que equivale a " + percentDir((resultFilterDir.length), 20) + " % de las peliculas del estudio";

})

document.getElementById("isTa").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("hizo click!")
    const resultFilterDir2 = filterDirector2(peliculas);
    displayCard(filterDirector2(peliculas));

    document.getElementById("calculo").innerHTML = "Este director a realizado " + resultFilterDir2.length + " peliculas, lo que equivale a " + percentDir((resultFilterDir2.length), 20) + " % de las peliculas del estudio";
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
