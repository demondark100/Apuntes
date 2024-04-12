import MensajeModal from "../../../../../componentes/MensajeModal/mensajeModal";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Sintaxis from "../../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../../componentes/menus/Footer";
import Ejercicios from "../../../../../componentes/ejercicios/ejercicios";
import Resumenes from "../../../../../componentes/resumenes/resumenes"

function ArreglosLogica() {
  return (  
    <>
      <Resumenes contenido={[{
        "mensaje": "Con los arreglos podemos guardar mas de un dato.",
        "lenguage": "Sintaxis",
        "codigo": `frutas = ["pera","naranja","sandia"];
mostrar(frutas[0]);`
      }]}/>
      <main>
        <h1>Arreglos</h1>

        <Conseptos 
          texto={`Los arreglos son similares a las variables solo que a diferencia de las variables los arreglos pueden guardar mas de un dato.`}
        />

        <h2>variables</h2>

        <Sintaxis 
          codigo={`variable = "solo se puede guardar un dato no se puede guardar mas de un dato";`}
        />

        <h2>arreglo</h2>

        <h3>pseudocodigo</h3>

        <Sintaxis 
          codigo={`nombre del arreglo = ["dato 1" , "dato 2"]`}
          consola={`Error de sintaxis: "nombre del arreglo" no es una palabra clave.`}
        />

        <Conseptos 
          texto={`Como te das cuenta el arreglo necesita de "[]" y "," para poder guardar mas de un dato.`}
        />

        <h3>ejemplo real</h3>

        <Sintaxis 
          codigo={`arreglo = [15 , 25 , 30 , 35]`}
        />

        <Conseptos 
          texto={`Los arreglos al igual que las variables pueden guardar todo tipo de datos strings , numeros , booleanos.`}
        />

        <h2>recorrer</h2>

        <Conseptos 
          texto={`Si queremos acceder a un dato en especifico de un arreglo podemos hacer esto.`}
        />

        <h3>pseudocodigo</h3>

        <Sintaxis 
          codigo={`arreglo[posision que queremos obtener]`}
          consola={`Error de sintaxis: "[posision que queremos obtener]" no esta definido.`}
        />

        <Conseptos 
          texto={`Las posisiones de los arreglos siempre se cuentan desde 0 nunca empieces a contar desde uno siempre desde 0.`}
        />

        <Sintaxis 
          codigo={`arreglo["posision 0" , "posision 1" , "posision 2"]
mostrar(arreglo[0])
mostrar(arreglo[1])
mostrar(arreglo[2])`}
          consola={`posision 0
posision 1
posision 2`}
        />

        <Conseptos 
          texto={`Ahora un ejemplo mas.`}
        />

        <Sintaxis 
          codigo={`juegos = [
  "left 4 dead",
  "gta",
  "halo",
  "top gear",
  "Mario bros"
]`}
        />
        <Conseptos 
          texto={`Obtengamos el juego que queremos.`}
        />

        <Sintaxis 
          codigo={`favorito = juegos[0] + " es mi juego favorito";
mostrar(favorito);`}
          consola={`left 4 dead es mi juego favorito`}
        />

        <h2>posisiones</h2>

        <Conseptos 
          texto={`Entendamos mejor las posisiones de los arreglos.`}
        />

        <h3>pseudocodigo</h3>
        <h3>crear arreglo</h3>

        <Sintaxis 
          codigo={`arr = ["string1" , "string2" , "string3" , "string4"]
#          0           1           2            3
mostrar(arr);`}
          consola={`["string1","string2","string3","string4"]`}
        />

        <h3>llamar valor</h3>

        <Sintaxis 
          codigo={`mostrar(arr[3])`}
          consola={`string4`}
        />

        <h2>¡Para que sirve!</h2>

        <Conseptos 
          texto={`Como te dije nos sirve para poder guardar mas de un dato nos evita hacer algo como esto.`}
        />

        <Sintaxis 
          codigo={`precio1 = 15;
precio2 = 14;
precio3 = 20;
precio4 = 504;`}
        />

        <Conseptos 
          texto={`Y con los arreglos obtimizamos esto evitando crear variables para cada precio.`}
        />

        <Sintaxis 
          codigo={`precios = [15,14,20,504];`}
        />

        <Conseptos 
          texto={`Imagina que estás desarrollando un programa para una tienda de comestibles y necesitas almacenar los precios de varios productos. Puedes utilizar un arreglo para almacenar estos precios y realizar operaciones simples con ellos. `}
        />

        <Sintaxis 
          codigo={`# Definir los precios de los productos
precios = [10.5, 5.25, 3.75, 8.99, 2.49];
# Calculamos los precios que queremos.
sumar = precios[1] + precios[0];
mostrar(sumar);
# en la variable sumar podemos poner 
# cualquier posision del arreglo para sumar
`}
          consola={`15.75`}
        />

        <h2>Arreglos del tipo objeto</h2>
        <Conseptos 
          texto={`Esto es un objeto pero no mos compliquemos te dire que de esta forma es mas sensillo reconocer el valor que queremos de forma mas sensilla.`}
        />

        <h3>pseudocodigo</h3>
        <h3>Creacion del objeto</h3>
        <Sintaxis 
          codigo={`nombre del objeto = {
  identificador: valor,
  identificador: valor,
  identificador: valor
}`}
          consola={`Error de sintaxis: "nombre del objeto" no es una palabra clave`}
        />
        <h3>llamar valor</h3>
        <Sintaxis 
          codigo={`personas = {
  nombre: "Fanny",
  edad: 19,
  oficio: "Desarrolladora",
  lenguajes: ["c++","javaScript","java","python"]
}
mostrar(
  personas.nombre,
  personas.edad,
  personas.oficio,
  personas.lenguajes
);`}
          consola={`Fanny
19
Desarrolladora
["c++","javaScript","java","python"]`}
        />

        <Conseptos 
          texto={`Estos objetos pueden guardar lo que sea strings , numeros , arreglos.
En el caso de que guardemos arreglos para obtener el valor de un arreglo es lo mismo que te enseñe antes`}
        />

        <Sintaxis 
          codigo={`arreglos = {
  arreglo1: [15,25,30],
  arreglo2: [35,40,45],
  arreglo3: [50,55,60]
}
mostrar(arreglos.arreglo2[1]);`}
          consola={`40`}
        />
        <h3>otra forma de llamar el valor de un objeto.</h3>
        
        <Conseptos 
          texto={`Hata ahora para llamar el valor de un objeto hemos usado un punto(.) pero existe otra forma de hacerlo que cumple la misma funcion.`}
        />

        <Sintaxis 
          codigo={`valores = {
  saludo: "hola mundo",
  despedida: "hasta pronto"
}
#antes
mostrar(valores.saludo);
#ahora
mostrar(valores["despedida"]);`}
          consola={`hola mundo
hasta pronto`}
        />
        
        <Conseptos 
          texto={`Como te das cuenta pasamos de:`}
        />
        <Sintaxis 
          codigo={`variable.identificador;`}
        />
        <Conseptos 
          texto={`A esto.`}
        />
        <Sintaxis 
          codigo={`variable["identificador"];`}
        />
        <Conseptos 
          texto={`De esta manera es mas parecido al como se llama al valor de un arreglo , siempre dentro de los corchetes[] debe de ir las comillas para el identificador [""].`}
        />


        <h2>¡Proyecto!</h2>

        <Conseptos 
          texto={`Hacer um programa que guarde los nombres de 5 videojuegos y en una variable guardar tu juego favorito con la oracion "mi juego favorito es " arreglo[con la posision.].`}
        />
        <Ejercicios 
          texto1={`No puedo enseñas mal >:v`}
          texto2={`Era de chill si puedo.`}
          codigo={<Sintaxis 
            codigo={`juegos = [
  "gta",
  "left 4 dead",
  "counter strike",
  "half-life",
  "plants vs zombies"
];
favorito = "mi juego favorito es " + juegos[1];
mostrar(favorito);`}
             consola={`mi juego favorito es left 4 dead`}
          />}
        />
        
      </main>
      <Footer />
    </>
  );
}

export default ArreglosLogica;