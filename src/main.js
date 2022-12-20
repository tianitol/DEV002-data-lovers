import data from './data/ghibli/ghibli.js';
import { ordenarDataDes, ordenarDataAs, filterDirector, filterDirector2, filterDirector3, filterDirector4, filterDirector5, filterDirector6, percentDir } from './data.js';

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
document.getElementById("calculo").innerHTML = " Studio Ghibli has made 20 films between 1986 and 2014 ";


// FUNCION ORDENAR
document.getElementById("desc").addEventListener("click", (e) => {
    e.preventDefault();

    displayCard(ordenarDataDes(peliculas));
    // document.getElementById("calculo").innerHTML = "Este director a realizado "
    document.getElementById("calculo").innerHTML = " ";
})

document.getElementById("asc").addEventListener("click", (e) => {
    e.preventDefault();

    displayCard(ordenarDataAs(peliculas));
    // document.getElementById("calculo").innerHTML = "Este director a realizado "
    document.getElementById("calculo").innerHTML = " ";
})



// FUNCION FILTRAR
document.getElementById("haMi").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("hizo click!")
    const resultFilterDir = filterDirector(peliculas);
    displayCard(resultFilterDir);

    document.getElementById("calculo").innerHTML = "H. Miyazaki has made " + resultFilterDir.length + " films, this is " + percentDir((resultFilterDir.length), 20) + " % Studio Ghibli's works";

})

//DIR 2
document.getElementById("isTa").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("hizo click!")
    const resultFilterDir2 = filterDirector2(peliculas);
    displayCard(filterDirector2(peliculas));

    document.getElementById("calculo").innerHTML = "I. Takahata has made " + resultFilterDir2.length + " films, this is " + percentDir((resultFilterDir2.length), 20) + " % Studio Ghibli's works";
})

//DIR 3
document.getElementById("yoKo").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("hizo click!")
    const resultFilterDir3 = filterDirector3(peliculas);
    displayCard(filterDirector3(peliculas));

    document.getElementById("calculo").innerHTML = "Y. Kondō has made " + resultFilterDir3.length + " films, this is " + percentDir((resultFilterDir3.length), 20) + " % Studio Ghibli's works";
})


//DIR 4
document.getElementById("hiMo").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("hizo click!")
    const resultFilterDir4 = filterDirector4(peliculas);
    displayCard(filterDirector4(peliculas));

    document.getElementById("calculo").innerHTML = "H. Morita has made " + resultFilterDir4.length + " films, this is " + percentDir((resultFilterDir4.length), 20) + " % Studio Ghibli's works";
})

//DIR 5

document.getElementById("goMi").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("hizo click!")
    const resultFilterDir5 = filterDirector5(peliculas);
    displayCard(filterDirector5(peliculas));

    document.getElementById("calculo").innerHTML = "G. Miyazaki has made " + resultFilterDir5.length + " films, this is " + percentDir((resultFilterDir5.length), 20) + " % Studio Ghibli's works";
})


// DIR 6

document.getElementById("hiYo").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("hizo click!")
    const resultFilterDir6 = filterDirector6(peliculas);
    displayCard(filterDirector6(peliculas));

    document.getElementById("calculo").innerHTML = "H. Yonebayashi has made " + resultFilterDir6.length + " films, this is " + percentDir((resultFilterDir6.length), 20) + " % Studio Ghibli's works";
});




