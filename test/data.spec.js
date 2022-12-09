import { displayCard } from '../src/main.js';

//prueba 1  con toBe

/*describe('prueba para mostrar data', () => {
  it('la funcion displayCard debe imprimir la data', () => {
    const resultdo = displayCard([])
    expect (resultdo).toEqual("")
    expect(typeof displayCard).toEqual('function');

  });
});*/


//prueba 2 con toEqual

/*describe('prueba para mostrar data', () => {
  it('debe retornar un arreglo con la data de ghibli', () => {
    const arrDataGibli = [20]
    const MostrarDataGiblhi = displayCard(arrDataGibli)
    expect(MostrarDataGiblhi).toEqual([{
      "title": "Castle in the Sky",
      "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
      "director": "Hayao Miyazaki",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
      "release_date": "1986",}]);
  });
});*/

// prueba 3 con toContain

describe('prueba para mostrar data', () => {
  it('debe retornar un arreglo con la data de ghibli', () => {
    const arrDataGibli = [20]
    const MostrarDataGiblhi = displayCard(arrDataGibli)
    expect(MostrarDataGiblhi).toContain([{
      "title": "Castle in the Sky",
      "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
      "director": "Hayao Miyazaki",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
      "release_date": "1986",}]);
  });
});

/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/

