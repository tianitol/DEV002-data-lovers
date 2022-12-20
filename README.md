# Data Lovers Ghibli Studio

## Studio Ghibli

Studio Ghibli es un estudio de animación japonés, conocido por sus largometrajes
animados como **Mi vecino Totoro**, **El viaje de Chihiro** o
**El castillo ambulante**, entre otros grandes éxitos.

Las animaciones tienen gran acogida a nivel mundial y algunas han recibido varias nominaciones y premios. De todo este fandom hay un grupo que desea poder interactuar y ver la información de las animaciones y sus personajes.


## 1. Presentación de Ghibli DataLovers

Esta aplicación web es un sitio donde los seguidores de Estudios Ghibli pueden conocer y obtener información de las peliculas realizadas por Estudio Ghibli entre los años 1986 y 2014. El usuario puede interactuar con la información desplegada en cartas (por cada película) conformadas por un texto que entrega datos tales como: Título, Año de liberación, Director y Breve descripción de la película; y una imagen (poster) alusiva a cada obra.

Los fanáticos de Ghibli pueden obtener información relevante como el orden cronológico de liberación de las películas y los aportes que realizó cada Director en la totalidad de las obras del Estudio, por lo que se vuelve una web de consulta muy atractiva a la hora de querer seguir el proceso creativo de Ghibli y la impronta que le dio cada Director en cada uno de los títulos publicados. 


## 2. Modo de uso:
* El usuario debe ingresar a la página web de la aplicación https://tianitol.github.io/DEV002-data-lovers/src
* Se desplegarán todas las películas realizadas por Ghibli entre los años 1986 y 2014.
* El usuario puede manipular la data mostrada mediante las opciones desplegadas en la barra de menú desplegable ubicada en la parte superior (fija) de la pantalla, que se encuentra bajo el encabezado fijo (Gif de totoro pequeño caminando desde izquierda a derecha).
* Al dar click en el menú `Sort by` el usuario accederá a otras dos opciones, `Date up` que le permitirá desplegar todas las películas ordenadas por su año de liberación en forma Ascendente (aparecerá primero la película más antigua del Estudio) y `Date down`que le permitirá desplegar todas las películas ordenadas por su año de liberación en forma Descendente (aparecerá primero la película más reciente).
* Al dar click en el menú `Filter by` el usuario accederá a la opción `Director`, al hacer click en ella se desplegarán los nombres de los directores aportantes en la realización de las obras del Estudio. Si se clickea sobre uno de los nombres, ej: `Hayao Miyazaki` se mostrarás desplegadas en pantalla sólo las películas realizadas por él, además se mostrará un mensaje en la barra superior fija de color malva con información de la cantidad de películas realizadas por él y el % correspondiente a su aporte a las obras de Ghibli.
* El usuario puede hacer scroll por sobre las cartas que despliegan la información individual de cada película, mientras el banner superior (header); la barra malva de información y la barra de menús desplegables se mantienen siempre fijos y visibles en la pantalla, para tener acceso a ellos en todo momento.

## 3. Definición del Producto - Diseño y UX

El diseño fue difinido mediante la investigación y la iteracion en el proceso de elaboración buscando obedecer a las peticiones del usuario para el cual va dirigido. 

Se plantearon 4 Historias de Usuario para abordar los requerimientos asociados al despliegue de la data en una interfaz amigable, agradable y funcional.

### Historias de Usuario (resumen)

#### HU1 
`Quiero`: Ver una lista de todas las películas de SG
`Para`: Saber cuáles he visto y cuáles me falta por ver.

`Criterios de Aceptación`:
- Se muestran las películas en cartas que ocupan todo el ancho de la pantalla (poster izq - derecha información Nombre, año, Director, breve descripción)
- Es fiel a los estilos definidos en prototipo de alta
- Se puede hacer scroll
- Es responsiva (móvil, tablet, pc)
- Se muestra un banner con una imagen alusiva al SG más un título "Studio Ghibli's movies" en el header de la página

`Definición de terminado`:
- Tuvo al menos un ciclo de feedback/iteración/mejora con usuarios
- Pasa los test (definir test según función implementada, en este caso sería mostrar data)
- El código se ha subido a git hub
- Está desplegado en git hub pages

#### HU2 
`Quiero`: Ordenar las películas por año de publicación
`Para`: Tener idea del orden cronológico y cómo evolucionó la animación del estudio.

`Criterios de Aceptación`:
- Se muestra un menú desplegable con opción de ordenar por: año
- El usuario puede dar click a la opción y se muestran las películas ordenadas por año
- Es fiel a los estilos definidos en prototipo de alta
- Se puede hacer scroll
- Es responsiva (móvil, tablet, pc)

`Definición de terminado`:
-Tuvo al menos un ciclo de feedback/iteración/mejora con usuarios
- Pasa los test (definir test según función implementada, en este caso sería ordenar películas por año)
-El código se ha subido a git hub
- Está desplegado en git hub pages

#### HU3 
`Quiero`: Filtrar películas por Director (6 directores)
`Para`: Saber los aportes de cada Director/productor participante del SG y saber cuál estilo me gusta más.

`Criterios de Aceptación`:
- Se muestra un menú desplegable con opción de filtrar por: Director
- El usuario puede dar click a la opción y se despliegan los Directores, al escoger alguno de ellos se muestran sólo las películas que dirigió
- Es fiel a los estilos definidos en prototipo de alta
- Se puede hacer scroll
- Es responsiva (móvil, tablet, pc)

`Definición de terminado`:
-Tuvo al menos un ciclo de feedback/iteración/mejora con usuarios
- Pasa los test (definir test según función implementada, en este caso sería Filtrar películas por Director)
-El código se ha subido a git hub
- Está desplegado en git hub pages

#### HU4 
`Quiero`: Calcular el % de películas realizadas por Director
`Para`: Saber cuáles de ellos han sido los que más aporte han hecho y dado vida al SG como lo que es.

`Criterios de Aceptación`:
- Se muestra el cálculo del % de películas realizadas por el director seleccionado impreso en el footer (asociado al click del filtro por director)
- Es fiel a los estilos definidos en prototipo de alta
- Es responsiva (móvil, tablet, pc)

`Definición de terminado`:
-Tuvo al menos un ciclo de feedback/iteración/mejora con usuarios
- Pasa los test (definir test según función implementada, en este caso sería calcular%)
-El código se ha subido a git hub
- Está desplegado en git hub pages


### Prototipo de baja fidelidad

La primera idea presentada se adjunta en un sketch a papel, la cual fue iterada luego de ser presentada a potenciales usuarios de los cuales se recibió feedback.
![prototipo-papel](/src/protopapel.jpeg)

1.- se nos aconseja cambiar el menú de opciones a una sola modalidad (botones de un mismo tipo para las diferentes opciones).

![prototipo-baja-fidelidad](/src/ProtoBaja.png)

Una vez conformes con el prototipo propuesto se procedió a realizar el prototipo de alta para la HU1 (desplegar las películas -información + imagen- en cartas alargadas de forma horizontal)

### Prototipo de baja fidelidad

![prototipo-alta-1](/src/protoAlta1.png)


2.- se nos pide priorizar la lejibilidad del texto (descripción breve de cada película) mediante una tipografia legible (ya que en primera instancia estaba en una tipografía cursiva) y con un fondo sólido ojalá no sobre la imagen alusiva a la película.
3.- se nos aconseja considerar bordes y margenes para ajustar los tamaños iniciales de las cartas (eran muy grandes en el primer despliegue).
4.- Finalmente se llega al prototipo final considerando la barra de menús y todas las funcionalidades contempladas en las 4 Historias de Usuario propuestas.

Se realiza un menú desplegable que permita escoger opciones respetando un solo tipo de diseño para las opciones de ordenar y filtrar
se conservan estos dos y se ofrece mas información en un cuadro sobre la barra menú para informar aportes una vez seleccionado el director de interés. 
Se ingresa una opcion para ampliar el texto de descripción de cada película mediante la etiqueta hover (CSS).

![prototipo-alta-final](/src/PROTODEALTA.png)


