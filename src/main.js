import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, data);
//console.log(data.films[0].poster)

let peliculas = data.films;
let containerGhibli = document.getElementById("root");

//peliculas.forEach( films => console.log(films) )
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

let hMiyazaki = peliculas.filter(pelicula => pelicula.director == "Hayao Miyazaki");
console.log(hMiyazaki);

let iTakahata = peliculas.filter(pelicula => pelicula.director == "Isao Takahata");
console.log(iTakahata);

let yKondo = peliculas.filter(pelicula => pelicula.director == "Yoshifumi Kondō");
console.log(yKondo);

let hMorita = peliculas.filter(pelicula => pelicula.director == "Hiroyuki Morita");
console.log(hMorita);

let gMiyazaki = peliculas.filter(pelicula => pelicula.director == "Gorō Miyazaki");
console.log(gMiyazaki);

let hYonebayashi = peliculas.filter(pelicula => pelicula.director == "Hiromasa Yonebayashi");
console.log(hYonebayashi);

displayCard(hMiyazaki); 
export { displayCard }


