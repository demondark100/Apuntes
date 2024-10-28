import Conseptos from "../../../../componentes/conseptos/conseptos";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";
import Php from "../../../../componentes/lenguajes/Php"
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";


function VariablesPhp() {
  return (  
    <>
      <Resumenes contenido={[{
        "mensaje": "Las variables son un espacio en memoria que pueden cambiar su valor, siempre deben llevar el simbolo de dolar \"$\".",
        "lenguage": "Php",
        "codigo": `<?php
$nombre = "Alison";
$edad = 20;
$ciudad_de_nacimiento = "Una aldea";
echo $nombre;
echo $edad;
echo $ciudad_de_nacimiento;`
      },
      {
        "mensaje": "Una constante es una variable la cual no puede cambiar su valor.",
        "lenguage": "Php",
        "codigo": `<?php
const Id = 2549845;
echo Id;`
      }]}/>
      <main>
        <h1>Variables</h1>
        <Conseptos texto={`Las variables son un dato que se puede guardar en un espacion en memoria, en php para crear una variable se necesita usar el simbolo de dola "$"(dolar), esto se debe usar tanto para crear una variable como para acceder a una variable.`}/>
        <Sintaxis codigo={`$nombre_variable = "valor";`}/>
        <Php codigo={`<?php
$nombre = "Alison";
$apellido = "Kanrroji";
echo $nombre;
echo $apellido;`}/>
        <div className="website">
          <p>AlisonKanrroji</p>
        </div>
        <Conseptos texto={`Las variables pueden guardar cualquier tipo de dato, el valor de una variable puede cambiar a medida que avance el programa que escribamos.`}/>
        <Conseptos texto={`Las variables pueden guardar adentro operaciones matematicas.`}/>
        <Php codigo={`<?php
$sumar = 5 + 5;
echo $sumar;`}/>
        <div className="website">
          <p>10</p>
        </div>
        <h2>Nomenclaturas</h2>
        <Conseptos texto={`Las variables son sensibles a mayusculas y minusculas, por ejemplo la variable "$nombre" sera distinta a la variable "$Nombre" ya que uno lleva mayusculas y otro no, en mi caso to suelo usar camel_case para poder separar los nombres de una variable cuando el nombre necesita usar espacio.`}/>
        <Php codigo={`<?php
$variable_con_camel_case = "Esto es camel case, se reemplaza \\" \\" con \\"_\\" cosa que hace el valor mas legible";
echo $variable_con_camel_case;`}/>
        <div className="website">
          <p>Esto es camel case, se reemplaza " " con "_" cosa que hace el valor mas legible</p>
        </div>
        <h2>Constantes</h2>
        <Conseptos texto={`Las constantes son igual que las variables pero estos no pueden cambiar su valor, estos pueden ser usado en caso de querer guardar algo muy importante y no poder cambiarle el valor.`}/>
        <Sintaxis codigo={`const nombre_variable = "valor";`}/>
        <Php codigo={`<?php
const Id = 2549845;
echo Id;`}/>
        <div className="website">
          <p>2549845</p>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default VariablesPhp;