import Conseptos from "../../../../componentes/conseptos/conseptos";
import ReactCode from "../../../../componentes/lenguajes/React";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";

import React from "react";
import { useState } from "react";


function Hooks(){
  const [estado,setContador] = useState(0);
  
  const sumar=()=>setContador(estado + 1);
  const restar=()=>setContador(estado - 1);

  return(
    <div>
      <h5>contador con hooks</h5>
      <p>{estado}</p>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
    </div>
  )
}


function HoksReact() {
  return (  
    <>
      <Resumenes contenido={[{
        "mensaje": "Esto es mas facil de usar en reat , los hooks tambien reducen mucho codigo y es mas legible y entendible que trabajar con componentes de clase.",
        "lenguage": "ReactCode",
        "codigo": `import React from "react";
import { useState } from "react";
function Hooks(){
  const [number,setNumber] = useState(0);
  const sumar=()=>setNumber(number + 1);

  return(
    <div>
      <h5>incrementar</h5>
      <p>{number}</p>
      <button onClick={sumar}>+</button>
    </div>
  )
}

export default Hooks;`
      }]}/>
      <main>
        <h1>hooks</h1>
        <Conseptos texto={`Los hooks son una version mejorada de los componentes de clase por asi decirlo ya que volvemos a las funciones , y es muy parecida a las bases de javaScript y ademas escribimos menos codigo ya que se reduce demasiado con las funciones.

Empecemos sabiendo como es la sintaxis aunque ya la usamos muuuuchas veces.`}/>
        <h2>estructura</h2>
        <Sintaxis codigo={`importar React de "react";
importar {usarEstado} de "react";

funcion nombre(parametro){
  retornar(
    <div>
      
    </div>
  )
}`}/>
        <h2>estado</h2>
        <Conseptos texto={`En los componentes de clase teniamos a los estados para actualizarlos aqui en los hooks es mas sencillo aun pero la sintaxis es distinta ya que estamos trabajando con funciones ya no con objetos.`}/>
        <Sintaxis codigo={`importar React de "react";
importar {usarEstado} de "react";

  funcion Estado(){
  constante {estado , accederEstado} = usarEstado(valorQueQueremosTrabajar)

  // 1. estado: en estado ira el estado que sacara la copia para actualizar la interfaz.
  // 2. accederEstado: sera la funcion que actualizara la funcion que actualizara la interfaz.
  // 3. usarEstado: en el parametro se pone cualquier valor con el que trabajaremos , puede ser string , numero , etc.
}`}/>
        <h2>hacer contador con hooks</h2>
        <h3>codigo explicado</h3>
        <ReactCode codigo={`
// importamos react y useState para trabajar con la interfaz. 

import React from "react";
import { useState } from "react";


// creamos la funcion hooks

function Hooks(){

  // destructuramos dos variables para useState y asi poder trabajar con los estados. 

  const [estado,setContador] = useState(0);
  
  // creamos dos metodos sumar y restar.
  
  // ambas funciones acceden al estado y lo suman. 

  const sumar=()=>setContador(estado + 1);
  const restar=()=>setContador(estado - 1);

  // retornamos todo en la interfaz.

  return(

    // en el elemento "p" ponemos el estado donde se acualizara el numero segun sea.
    
    // en ambos botones ponemos el onclick y les damos les decimos que ejecuten las funciones respectivas.

    <div>
      <h5>contador con hooks</h5>
      <p>{estado}</p>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
    </div>
  )
}

// exportamos esta funcion.

export default Hooks;`}/>
        <h3>codigo sin comentarios</h3>
        <ReactCode codigo={`import React from "react";
import { useState } from "react";


function Hooks(){
  const [estado,setContador] = useState(0);
  
  const sumar=()=>setContador(estado + 1);
  const restar=()=>setContador(estado - 1);

  return(
    <div>
      <h5>contador con hooks</h5>
      <p>{estado}</p>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
    </div>
  )
}

export default Hooks;`}/>
        <ReactCode codigo={`import React from "react";
import Hooks from "./ruta";
export default function App(){
  return <Hooks />
}`}/>
        <div className="website">
          <Hooks />
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default HoksReact;