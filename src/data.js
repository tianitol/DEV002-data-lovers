
//orden descendente 2014
export const ordenarDataDes = (dataGhibli) => {
  const orderDateDes = dataGhibli.sort((a, b) => b.release_date - a.release_date);

  return orderDateDes;
}

 //orden ascendente 1986
 export const ordenarDataAs = (dataGhibli) => {
  const orderDateAs = dataGhibli.sort((a, b) => a.release_date - b.release_date);

  return orderDateAs;
 }


//FUNCION FILTRAR

export const filterDirector = (dataDirector) => {
    const orderByDirector = dataDirector.filter(pelicula => pelicula.director == "Hayao Miyazaki");
    return orderByDirector;
} 


export const filterDirector2 = (dataDirector) => {
  const orderByDirector2 = dataDirector.filter(pelicula => pelicula.director == "Isao Takahata");
  return orderByDirector2;
} 






//FUNCION CALCULAR 


//  export const aportesHaMi = (HaMiFilms) => {
//  const nuevoArrayDir = HamiFilms.map(x => x.dataDirector)
//   return nuevoArrayDir;
// }





















// let iTakahata = peliculas.filter(pelicula => pelicula.director == "Isao Takahata");
// console.log(iTakahata);

// let yKondo = peliculas.filter(pelicula => pelicula.director == "Yoshifumi Kondō");
// console.log(yKondo);

// let hMorita = peliculas.filter(pelicula => pelicula.director == "Hiroyuki Morita");
// console.log(hMorita);

// let gMiyazaki = peliculas.filter(pelicula => pelicula.director == "Gorō Miyazaki");
// console.log(gMiyazaki);

// let hYonebayashi = peliculas.filter(pelicula => pelicula.director == "Hiromasa Yonebayashi");
// console.log(hYonebayashi);





