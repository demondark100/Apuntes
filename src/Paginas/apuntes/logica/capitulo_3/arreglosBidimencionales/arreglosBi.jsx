import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Sintaxis from "../../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../../componentes/menus/Footer";
import Resumenes from "../../../../../componentes/resumenes/resumenes"

function ArreglosBiLogica() {
  return (  
    <>
      <Resumenes contenido={[{
        "mensaje": `Con los bucles recorreremos arreglos normales o bidimencionales, tambien es util para ejecutar un bloque de codigo de forma repetida.`,
        "lenguage": "Sintaxis",
        "codigo": ``
      }]}/>
      <Resumenes contenido={[{
        "mensaje": "Con esto guardaremos arreglos dentro de un arreglo.",
        "lenguage": "Sintaxis",
        "codigo": `informacion = [
  ["Pepito","Alcachofa"],
  ["Emilia","Heartfilia"]
];
mostrar(informacion[1]);`
      }]}/>
      <main>
        <h1>arreglos bidimencionales</h1>

        <Conseptos 
          texto={`Los arreglos bidimensionales, también conocidos como matrices, son estructuras de datos que nos permiten almacenar y manipular datos en dos dimensiones, es decir, en filas y columnas. Podemos pensar en ellos como una tabla o una cuadrícula.`}
        />

        <Conseptos 
          texto={`En pseudocódigo, podemos representar un arreglo bidimensional de la siguiente manera:`}
        />

        <Sintaxis 
          codigo={`arregloBidimensional = [
  [elemento11, elemento12, elemento13],
  [elemento21, elemento22, elemento23],
  [elemento31, elemento32, elemento33]
]`}
          consola={`Error de sintaxis : 
          [elemento11, elemento12, elemento13],
          [elemento21, elemento22, elemento23],
          [elemento31, elemento32, elemento33]
no estan definidos.`}
        />

        <Conseptos 
          texto={`Cada elemento de un arreglo bidimensional se puede acceder utilizando dos índices: uno para la fila y otro para la columna.`}
        />

        <Sintaxis 
          codigo={`# fila __ columna |`}
        />

        <Sintaxis 
          codigo={`arregloBidimensional[fila][columna]`}
          consola={`Error de sintaxis: arregloBidimensional[fila][columna] no esta definido.`}
        />

        <Conseptos 
          texto={`Por ejemplo, si queremos crear un arreglo bidimensional de 3 filas y 4 columnas, podemos hacer lo siguiente:`}
        />

        <Sintaxis 
          codigo={`dimensiones = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12]
];
mostrar(dimensiones[0][1]);`}
          consola={`2`}
        />

        <Conseptos 
          texto={`Por ejemplo, para acceder al elemento en la segunda fila y tercera columna, hacemos lo siguiente:`}
        />

        <Sintaxis 
          codigo={`mostrar(dimensiones[1][2]);`}
          consola={`7`}
        />

        <Conseptos 
          texto={`Para modificar un elemento existente en el arreglo, simplemente asignamos un nuevo valor al elemento deseado:`}
        />

        <Sintaxis 
          codigo={`arregloBidimensional[fila][columna] = nuevoValor`}
          consola={`Error: [fila][columna] no estan definidos.`}
        />

        <h2>ejemplo</h2>

        <Sintaxis 
          codigo={`# crear arreglo bidimensional
datos = [
  ["dato 1" , "dato 2"],
  ["dato 3" , "dato 4"]
];
# asignar nuevo valor
datos[1][1] = "otro dato";
# llamar al arreglo
mostrar(datos)
`}
          consola={`["dato 1","dato 2","dato 3","otro dato"]`}
        />

        <h2>¡Para que sirve!</h2>

        <Conseptos 
          texto={`Estamos desarrollando una aplicacion que saca el promedio de cada estudiante bueno en un arreglo bidimensional guardaremos la nota de cada estudiante en cada fila creada ponemos todas las notas del estudiante ejemplo.`}
        />

        <Sintaxis 
          codigo={`notas = [
  [15,14,8], # 15,14,8 son las notas del primer estudiante
  [12,6,11], # 12,6,11 son las notas del segundo estudiante
  [10,13,20] # 10,13,20 son las notas del tercer estudiante
]`}
        />

        <Conseptos 
          texto={`Y ya con la magia de los bucles hacemos un promedio de cada arreglo que guarda las notas del estudiante.`}
        />
        
      </main>
      <Footer />
    </>
  );
}

export default ArreglosBiLogica;