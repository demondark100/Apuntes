import MensajeModal from "../../../../../componentes/MensajeModal/mensajeModal";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Sintaxis from "../../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../../componentes/menus/Footer";
import Ejercicios from "../../../../../componentes/ejercicios/ejercicios";

function ArreglosLogica() {
  return (  
    <>
      <MensajeModal texto={`Todo este codigo podras ejecutarlo en tu consola del navegador.`}/>
      <main>
        <h1>Arreglos</h1>
        <Conseptos texto={`Los arreglos son similares a las variables solo que a diferencia de las variables los arreglos pueden guardar mas de un dato.`}/>
        <h2>variables</h2>
        <Sintaxis codigo={`variable = "solo se puede guardar un dato no se puede guardar mas de un dato";`}/>
        <h2>arreglo</h2>
        <h3>pseudocodigo</h3>
        <Sintaxis codigo={`nombre del arreglo = ["dato 1" , "dato 2"]`}/>

        <Conseptos texto={`Como te das cuenta el arreglo necesita de "[]" y "," para poder guardar mas de un dato.`}/>
        <h3>ejemplo real</h3>
        <Sintaxis codigo={`arreglo = [15 , 25 , 30 , 35]`}/>
        <Conseptos texto={`Los arreglos al igual que las variables pueden guardar todo tipo de datos strings , numeros , booleanos.`}/>
        <h2>recorrer</h2>
        <Conseptos texto={`Si queremos acceder a un dato en especifico de un arreglo podemos hacer esto.`}/>
        <h3>pseudocodigo</h3>
        <Sintaxis codigo={`arreglo[posision que queremos obtener]`}/>
        <Conseptos texto={`Las posisiones de los arreglos siempre se cuentan desde 0 nunca empieces a contar desde uno siempre desde 0.`}/>
        <Sintaxis codigo={`arreglo["posision 0" , "posision 1" , "posision 2"]
alert(arreglo[0])
alert(arreglo[1])
alert(arreglo[2])`}/>
        <Conseptos texto={`Ahora un ejemplo mas.`}/>
        <Sintaxis codigo={`juegos = [
  "left 4 dead",
  "gta",
  "halo",
  "top gear",
  "Mario bros"
]`}/>
        <Conseptos texto={`Obtengamos el juego que queremos.`}/>
        <Sintaxis codigo={`favorito = juegos[0] + " es mi juego favorito";`}/>
        <h2>posisiones</h2>
        <Conseptos texto={`Entendamos mejor las posisiones de los arreglos.`}/>
        <h3>pseudocodigo</h3>
        <h3>crear arreglo</h3>
        <Sintaxis codigo={`arr = ["string1" , "string2" , "string3" , "string4"]
//         0           1           2            3`}/>
        <h3>llamar valor</h3>
        <Sintaxis codigo={`alert(arr[3])
// resultado "string4"`}/>
        <h2>¡Para que sirve!</h2>
        <Conseptos texto={`Como te dije nos sirve para poder guardar mas de un dato nos evita hacer algo como esto.`}/>
        <Sintaxis codigo={`precio1 = 15;
precio2 = 14;
precio3 = 20;
precio4 = 504;`}/>
        <Conseptos texto={`Y con los arreglos obtimizamos esto evitando crear variables para cada precio.`}/>
        <Sintaxis codigo={`precios = [15,14,20,504];`}/>
        <Conseptos texto={`Imagina que estás desarrollando un programa para una tienda de comestibles y necesitas almacenar los precios de varios productos. Puedes utilizar un arreglo para almacenar estos precios y realizar operaciones simples con ellos. `}/>
        <Sintaxis codigo={`// Definir los precios de los productos
precios = [10.5, 5.25, 3.75, 8.99, 2.49];
// Calculamos los precios que queremos.
sumar = precios[1] + precios[0];
alert(sumar);
// en la variable sumar podemos poner 
// cualquier posision del arreglo para sumar
`}/>
        <h2>¡Proyecto!</h2>
        <Conseptos texto={`Hacer um programa que guarde los nombres de 5 videojuegos y en una variable guardar tu juego favorito con la oracion "mi juego favorito es " arreglo[con la posision.].`}/>
        <Ejercicios 
          texto1={`No puedo enseñas mal >:v`}
          texto2={`Era de chill si puedo.`}
          codigo={<Sintaxis codigo={`juegos = [
  "gta",
  "left 4 dead",
  "counter strike",
  "half-life",
  "plants vs zombies"
];
favorito = "mi juego favorito es " + juegos[1];
alert(favorito);`}/>}
        />
        
      </main>
      <Footer />
    </>
  );
}

export default ArreglosLogica;