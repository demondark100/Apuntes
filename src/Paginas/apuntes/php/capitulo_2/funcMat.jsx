import Conseptos from "../../../../componentes/conseptos/conseptos";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";
import Php from "../../../../componentes/lenguajes/Php"
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";


function FuncMatPhp(){
  return(
    <>
      <Resumenes contenido={[{
        "mensaje": `Aqui algunas funciones matematicas.`,
        "lenguage": `Php`,
        "codigo": `<?php
pow(5,3); // sacar exponente // resultado: 125
sqrt(49); // sacar raiz cuadrada // resultado: 7
rand(0.20) // generar numero aleatorio
floor(4.9); // redondear un numero quitando el decimal
ceir(4.2); // redondear un numero al siguiente
round(4.5); // redondear un numero segun el decimal`
      }]}/>
      <main>
        <h1>Funciones matematicas</h1>
        <Conseptos texto={`Php tiene muchas funciones matematicas predeterminadas y listas para ser usadas, aqui veremos algunas que son mas usadas.`}/>
        <h2>pow</h2>
        <Conseptos texto={`Con esta funcion vamos a sacar el exponente a un numero.`}/>
        <Sintaxis codigo={`pow(5,3);
# parametro 1: numero el cual sera multiplicado
# parametro 2: numero que sera el exponente.`}/>
        <Php codigo={`<?php

echo pow(5,3);`}/>
        <div className="website">
          <p>125</p>
        </div>
        <Conseptos texto={`En este caso sale 125 porque 5 se esta multiplicando 3 veces.`}/>
        <h2>sqrt</h2>
        <Conseptos texto={`Con esta funcion vamos a sacar la raiz cuadrada de algun numero`}/>
          <Php codigo={`<?php

echo sqrt(49);`}/>
        <div className="website">
          <p>7</p>
        </div>
        <h2>rand</h2>
        <Conseptos texto={`Con esta funcion vamos a generar un numero aleatorio, esta funcion recibe 2 parametros, el numero minimo y el numero maximo.`}/>
        <Sintaxis codigo={`rand(numero minmo,numero maximo);`}/>
        <Php codigo={`<?php

echo rand(0,8);`}/>
        <div className="website">
          <p>4</p>
        </div>
        <h2>floor y ceil</h2>
        <Conseptos texto={`Ambas funciones sirven para redondear numeros decimales, la diferencia es que floor redondea los numeros hacia abajo osea que si tenemos un decimas por ejemplo 8.6 al redondear sera 8 y con ceil redondeara el numero hacia arriba por ejemplo 5.2 lo redondeara a 6.`}/>
        <Php codigo={`<?php

echo floor(4.9);
echo "<br>";
echo ceil(4.2);`}/>
        <div className="website">
          <p>
            4 <br />
            5
          </p>
        </div>
        <h2>round</h2>
        <Conseptos texto={`Con esta funcion vamos a redondear un numero decimal, pero esto lo hara de forma tradicional como nos enseñaron en matematica.`}/>
        <Php codigo={`<?php

echo round(4.5);
echo "<br>";
echo round(4.2);`}/>
        <div className="website">
          <p>
            5 <br />
            4
          </p>
        </div>

      </main>
      <Footer />
    </>
  )
}
export default FuncMatPhp;





// capitulo 40 
// https://www.youtube.com/watch?v=rlxqbzqL-e0&list=PLH_tVOsiVGzmnl7ImSmhIw5qb9Sy5KJRE&index=40