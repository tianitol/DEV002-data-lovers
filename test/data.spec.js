import { ordenarDataDes, ordenarDataAs, filterDirector, filterDirector2, percentDir } from '../src/data.js';


const data =
{
  films: [
    {
      "title": "Castle in the Sky",
      "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
      "director": "Hayao Miyazaki",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
      "release_date": "1986",
    },
    {
      "title": "My Neighbor Totoro",
      "description": "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
      "director": "Hayao Miyazaki",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbor_Totoro.jpg",
      "release_date": "1988",
    },
    {
      "title": "Kiki's Delivery Service",
      "description": "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.",
      "director": "Hayao Miyazaki",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/4/48/Kiki%27s_Delivery_Service_%282%29.jpg",
      "release_date": "1989",
    },
    {
      "title": "Grave of the Fireflies",
      "description": "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.",
      "director": "Isao Takahata",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/a/a5/Grave_of_the_Fireflies_Japanese_poster.jpg",
      "release_date": "1988",
    },
    {
      "title": "Only Yesterday",
      "description": "It’s 1982, and Taeko is 27 years old, unmarried, and has lived her whole life in Tokyo. She decides to visit her family in the countryside, and as the train travels through the night, memories flood back of her younger years: the first immature stirrings of romance, the onset of puberty, and the frustrations of math and boys. At the station she is met by young farmer Toshio, and the encounters with him begin to reconnect her to forgotten longings. In lyrical switches between the present and the past, Taeko contemplates the arc of her life, and wonders if she has been true to the dreams of her childhood self.",
      "director": "Isao Takahata",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/a/a9/Only_Yesterday.jpg",
      "release_date": "1991",
    }
  ]
}

console.log(data);

//TEST N1.1 ORDENAR DATA DESC

describe('ordenarDataDes ordenará las peliculas por año descendente', () => {
  it('is a function', () => {
    expect(typeof (ordenarDataDes)).toBe('function');
  });

  it('Deberia devolver las películas por año en des', () => {
    let filmsDes = ordenarDataDes(data);
    expect(filmsDes[0].release_date).toEqual('1991');
    expect(filmsDes[1].release_date).toEqual('1989');
    expect(filmsDes[2].release_date).toEqual('1988');
    expect(filmsDes[3].release_date).toEqual('1988');
    expect(filmsDes[4].release_date).toEqual('1986');
  });

  // it('retornara nuevo array sin el elemento "1988"', () => {

  //   expect(filter).toContain(["1991","1989","1986"]);
  // });

  // it('retornara "1991" como primer elemento', () => {
  //   const primerElemento = ordenarDataDes(data.release_date);
  //   expect(primerElemento).tobe("1991");

  // });

  it('mostrara un TypeError cuando se invoque con un tipo de argumento erroneo', () => {
    expect(() => ordenarDataDes(undefined).toThrow(TypeError));
    expect(() => ordenarDataDes(null).toThrow(TypeError));
  });

});


describe('ordenarDataAs ordenará las peliculas por año ascendente', () => {
  it('is a function', () => {
    expect(typeof (ordenarDataAs)).toBe('function');
  });

  it('mostrara un TypeError cuando se invoque con un tipo de argumento erroneo', () => {
    expect(() => ordenarDataAs(undefined).toThrow(TypeError));
    expect(() => ordenarDataAs(null).toThrow(TypeError));
  });

});


describe('devolverá las películas del director Hayao Miyazaki', () => {
  it('is a function', () => {
    expect(typeof (filterDirector)).toBe('function');
  });

  it('mostrara un TypeError cuando se invoque con un tipo de argumento erroneo', () => {
    expect(() => filterDirector(undefined).toThrow(TypeError));
    expect(() => filterDirector(null).toThrow(TypeError));
  });

});

describe('devolverá las películas del director Isao Takahata', () => {
  it('is a function', () => {
    expect(typeof (filterDirector2)).toBe('function');
  });

  it('mostrara un TypeError cuando se invoque con un tipo de argumento erroneo', () => {
    expect(() => filterDirector2(undefined).toThrow(TypeError));
    expect(() => filterDirector2(null).toThrow(TypeError));
  });
});

//TEST N1.2 ORDENAR DATA ASC

describe('ordenarDataAs ordenará las peliculas por año ascendente', () => {
  it('is a function', () => {
    expect(typeof (ordenarDataAs)).toBe('function');
  });


  //   it('retornara un array cuyo indice es igual a "1986"', () => {
  //     const elemento = "1986"
  //     expect(ordenarDataAs(data.release_date[0])).toEqual ;
  //   });

  it('mostrara un TypeError cuando se invoque con un tipo de argumento erroneo', () => {
    expect(() => ordenarDataAs(undefined).toThrow(TypeError));
    expect(() => ordenarDataAs(null).toThrow(TypeError));

  });
});


// //TEST N2 FILTRAR DATA

describe('filtrara la data por el nombre director', () => {
  it('is a function', () => {
    expect(typeof (filterDirector)).toBe('function');
  });


  //   it('retornara un array cuyo indice es igual a "1986"', () => {
  //     const elemento = "1986"
  //     expect(ordenarDataDes(data.release_date)).toEqual([i ==5]);
  //   });

  it('mostrara un TypeError cuando se invoque con un tipo de argumento erroneo', () => {
    expect(() => filterDirector(undefined).toThrow(TypeError));
    expect(() => filterDirector(null).toThrow(TypeError));
  });

});

// //TEST N3 CALCULO ADICIONAL 
describe('calculara el porcentaje de aportes por director', () => {
  it('is a function', () => {
    expect(typeof (percentDir)).toBe('function');
  });


  //   it('retornara un array cuyo indice es igual a "1986"', () => {
  //     const elemento = "1986"
  //     expect(ordenarDataDes(data.release_date)).toEqual([i ==5]);
  //   });

  it('mostrara un TypeError cuando se invoque con un tipo de argumento erroneo', () => {
    expect(() => percentDir(undefined).toThrow(TypeError));
    expect(() => percentDir(null).toThrow(TypeError));
  });
});