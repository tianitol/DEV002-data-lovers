
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

export const filterDirector3 = (dataDirector) => {
  const orderByDirector3 = dataDirector.filter(pelicula => pelicula.director == "Yoshifumi Kondō");
  return orderByDirector3;
} 

export const filterDirector4 = (dataDirector) => {
  const orderByDirector4 = dataDirector.filter(pelicula => pelicula.director == "Hiroyuki Morita");
  return orderByDirector4;
} 

export const filterDirector5 = (dataDirector) => {
  const orderByDirector5 = dataDirector.filter(pelicula => pelicula.director == "Gorō Miyazaki");
  return orderByDirector5;
} 

export const filterDirector6 = (dataDirector) => {
  const orderByDirector6 = dataDirector.filter(pelicula => pelicula.director == "Hiromasa Yonebayashi");
  return orderByDirector6;
} 




//FUNCION CALCULO ADICIONAL

export const percentDir = (a,b) => {
  const percentMo = (a/b)*100;
  return percentMo;
}
  
























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





