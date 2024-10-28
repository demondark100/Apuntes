import Conseptos from "../../../../componentes/conseptos/conseptos";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";
import Php from "../../../../componentes/lenguajes/Php"
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";


function TipoDatosPhp(){
  return(
    <>
      <Resumenes contenido={[{
        "mensaje": `Php permite el uso de distintos tipos de datos que pueden ser usados para desarrollar una logica.`,
        "lenguage": "Php",
        "codigo": `<?php
    echo true; // boleano
    echo false; // boleano
    echo "a"; // string
    echo "1"; // string
    echo "String"; // string
    echo "369489"; // string
    echo 15; // integer(entero)
    echo -254; // integer(entero)
    echo 3.1416;  // float(flotante)
    
    // ver tipo de dato
    var_dump(true); // bool(true)
    var_dump(15); // int(15)
    var_dump("hola"); // string(4) "hola"
    var_dump(23.15); // float(23.15)`
      }]}/>
      <main>
        <h1>Tipo de datos</h1>
        <Conseptos texto={`Php tiene varios tipos de datos al igual que otros lenguajes de programacion, entre estos tenemos:`}/>
        <h2>Booleanos</h2>
        <Conseptos texto={`Los booleanos son true y false osea verdadero y falso.`}/>
        <Php codigo={`<?php
    echo true;
    echo false;`}/>
        <h2>Enteros</h2>
        <Conseptos texto={`Estos son numeros que van del 0 al infinito osea numeros enteros, tambien se le considera como numeros enteros a los numeros negativos.`}/>
        <Php codigo={`<?php
    echo 15;
    echo -15;`}/>
        <div className="website">
          15-15
        </div>
        <h2>Flotantes</h2>
        <Conseptos texto={`Estos son los numeros decimales, para que un numero sea flotante necesita de un "." para que sea un numero flotante.`}/>
        <Php codigo={`<?php
    echo 15.0;
    echo 256.987;
    echo 3.1416;`}/>
        <div className="website">
            15.0256.9873.1416
        </div>
        <h2>Caracter y strings</h2>
        <Conseptos texto={`Un caracter es una sola letra, los caracteres y las strings siempre iran rodeadas de "" por ejemplo:`}/>
        <Php codigo={`<?php
    echo "a";
    echo "6";`}/>
        <div className="website">
            a15
        </div>
        <Conseptos texto={`Y las estrings son un conjunto de caracteres que forman una palabra y tambien siempre van enserrados por comillas "" por ejemplo:`}/>
        <Php codigo={`<?php
    echo "Esto es un caracter";
    echo "25894";`}/>
          <div className="website">
            Esto es un caracter25894
          </div>
          <Conseptos texto={`Como nos damos cuenta en el ejemplo de caracter y strings tambien habiamos puesto numeros, si un numero esta enserrado por comillas tambien se le considera como un caracter o string.`}/>
          
          <h2>Tipo de dato</h2>
          <Conseptos texto={`Php tiene una funcion que vera que tipo de datos es el parametro que pasemos por ejemplo si a la funcion que verifica le pasamos un numero nos dira que es un entero y asi detectara con todos los tipos de datos y nos mostrara que tipo de dato es.`}/>
          <Sintaxis codigo={`var_dump(tipo de dato);`}/>
          <Conseptos texto={`Al momento de usar esta funcion ya no sera necesario usar la funcion "echo" ya que "var_dump" mostrara de forma automatica en la pantalla.`}/>
          <Php codigo={`<?php
    var_dump(true);
    var_dump(15);
    var_dump("hola");
    var_dump(23.15);`}/>
          <div className="website">
              <p>bool(true) int(15) string(4) "hola" float(23.15)</p>
          </div>
      </main>
      <Footer />
    </>
  )
}

export default TipoDatosPhp;