import Conseptos from "../../../../../componentes/conseptos/conseptos";
import ReactCode from "../../../../../componentes/lenguajes/React";
import Sintaxis from "../../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../../componentes/menus/Footer";
import "./formularios.css";
import Resumenes from "../../../../../componentes/resumenes/resumenes";

import React from "react";
import { useState,useEffect } from  "react";



function DefaultValor(){
  const [dato,setDato] = useState("")
  
	
  const preguntarInput = ()=>{
    let preguntar = prompt("dime un valor para el input")
    setDato(preguntar)
  }

  return(
    <>
      <button onClick={preguntarInput}>preguntar</button>
      <input 
        type="text" 
        name="nombre"
        defaultValue={dato}
      />
    </>
  )
}

function EnviarForm(){

  const [nombre,setNombre] = useState("");

  const avisar=(e)=>{
    e.preventDefault();
    alert("se envio tu nombre a ningun lado no se nada de backend :v")
  }

  return(
    <div>
      <form onSubmit={avisar}>
        <input 
          type="text" 
          placeholder="nombre"
          onChange={
            (e)=>setNombre(e.target.value)
          }
        />
        <button>enviar nombre</button>
      </form>
    </div>
  )
}


function EjercicioForm(){

  const [nombre,setNombre] = useState("");
  const [lenguaje,setLenguaje] = useState("");
  const [seleccion,setSeleccion] = useState("");
  const [condicion,setCondicion] = useState(false);


  const avisar=(e)=>{
    e.preventDefault();
    alert("uahahaha te jakie ok no nisiquiera escribi bien xd")
  }

  return(
    <div>
      <h5>encuesta de trabajo</h5>
      <form onSubmit={avisar}>
        <label htmlFor="nombres">nombres completos</label>
        <input 
          id="nombres"
          type="text"
          name="encuesta"
          placeholder="nombre completo"
          onChange={
            (e)=>setNombre(e.target.value)
          }
        />

        <h6>cual es tu lenguaje mas usado?</h6>

        <label htmlFor="javaScript">javaScript</label>
        <input 
          type="radio"
          id="javaScript"
          name="encuesta"
          value="javaScript"
          onChange={(e)=>setLenguaje(e.target.value)}
        />

        <label htmlFor="python">python</label>
        <input 
          type="radio"
          id="python"
          name="encuesta"
          value="python"
          onChange={(e)=>setLenguaje(e.target.value)}
        />

        <label htmlFor="c#">c#</label>
        <input 
          type="radio"
          id="c#"
          name="encuesta"
          value="c#"
          onChange={(e)=>setLenguaje(e.target.value)}
        />

        <label htmlFor="ruby">ruby</label>
        <input 
          type="radio"
          id="ruby"
          name="encuesta"
          value="ruby"
          onChange={(e)=>setLenguaje(e.target.value)}
        />

        <label htmlFor="php">php</label>
        <input 
          type="radio"
          id="php"
          name="encuesta"
          value="php"
          onChange={(e)=>setLenguaje(e.target.value)}
        />

        <h3>que lenguaje te gusta menos?</h3>
        <label htmlFor="lenguajeM">lenguaje</label>
        <select
          defaultValue="ensamblador"
          id="lenguajeM"
          onChange={(e)=>setSeleccion(e.target.value)}
          name="encuesta"
        >
          <option value="javaScript">javaScript</option>
          <option value="python">python</option>
          <option value="java">java</option>
          <option value="c++">c++</option>
          <option value="ruby">ruby</option>
          <option value="ruby">ruby</option>
          <option value="ensamblador">ensamblador :v</option>
        </select>


        <h3>condiciones</h3>
        <label htmlFor="condicion">aseptas no se que aseptaras pero lo aseptas?</label>
        <input
          id="condicion"
          type="checkbox"
          name="encuesta"
          onChange={(e)=>setCondicion(e.target.checked)}
        />

        <button>postularse</button>
      </form>
    </div>
  )
}



function EjercicioObtimizado(){

  const [form,setForm] = useState({});
  
  const manejarCambio=(e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const manejarCheck=(e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.checked
    })
  }


  const avisar=(e)=>{
    e.preventDefault();
    alert("no te estas postulando a nada tranqui")
  }

  return(
    <div>
      <h6>encuesta de trabajo</h6>
      <form onSubmit={avisar}>
        <label htmlFor="nombres">nombres completos</label>
        <input 
          id="nombres"
          type="text"
          name="nombres"
          placeholder="nombre completo"
          onChange={manejarCambio}
        />
        <label htmlFor="apellidos">apellidos</label>
        <input 
          type="text"
          id="apellidos"
          name="apellidos"
          placeholder="apellidos"
          onChange={manejarCambio}
        />

        <h6>cual es tu lenguaje mas usado?</h6>

        <label htmlFor="javaScript">javaScript</label>
        <input 
          type="radio"
          id="javaScript"
          name="lenguaje mas usado"
          value="javaScript"
          onChange={manejarCambio}
        />

        <label htmlFor="python">python</label>
        <input 
          type="radio"
          id="python"
          name="lenguaje mas usado"
          value="python"
          onChange={manejarCambio}
        />

        <label htmlFor="c#">c#</label>
        <input 
          type="radio"
          id="c#"
          name="lenguaje mas usado"
          value="c#"
          onChange={manejarCambio}
        />

        <label htmlFor="ruby">ruby</label>
        <input 
          type="radio"
          id="ruby"
          name="lenguaje mas usado"
          value="ruby"
          onChange={manejarCambio}
        />

        <label htmlFor="php">php</label>
        <input 
          type="radio"
          id="php"
          name="lenguaje mas usado"
          value="php"
          onChange={manejarCambio}
        />

        <h3>que lenguaje te gusta menos?</h3>
        <label htmlFor="lenguajeM">lenguaje</label>
        <select
          defaultValue="ensamblador"
          id="lenguajeM"
          onChange={manejarCambio}
          name="lenguaje menos"
        >
          <option value="javaScript">javaScript</option>
          <option value="python">python</option>
          <option value="java">java</option>
          <option value="c++">c++</option>
          <option value="ruby">ruby</option>
          <option value="ruby">ruby</option>
          <option value="ensamblador">ensamblador :v</option>
        </select>


        <h3>condiciones</h3>
        <label htmlFor="condicion">aseptas no se que aseptaras pero lo aseptas?</label>
        <input
          id="condicion"
          type="checkbox"
          name="condicion"
          onChange={manejarCheck}
        />

        <button>postularse</button>
      </form>
    </div>
  )
}


function FormulariosReacr(){


  return(
    <>
      <Resumenes contenido={[{
        "mensaje": "Con react los formularios son muy similares a html y js nativo pero en el caso de react se hacen con vatiables de estado para cambiar los datos de forma dinamica.",
        "lenguage": "ReactCode",
        "codigo": `import React , {useState} from "react";

function EjercicioObtimizado(){

  const [form,setForm] = useState({});
  
  const manejarCambio=(e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const manejarCheck=(e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.checked
    })
  }

  return(
    <div>
      <h1>encuesta de trabajo</h1>
      <form onSubmit={avisar}>
        <label htmlFor="nombres">nombres completos</label>
        <input 
          id="nombres"
          type="text"
          name="nombres"
          placeholder="nombre completo"
          onChange={manejarCambio}
        />
        <label htmlFor="apellidos">apellidos</label>
        <input 
          type="text"
          id="apellidos"
          name="apellidos"
          placeholder="apellidos"
          onChange={manejarCambio}
        />
        <label htmlFor="condicion">aseptas no se que aseptaras pero lo aseptas?</label>
        <input
          id="condicion"
          type="checkbox"
          name="condicion"
          onChange={manejarCheck}
        />
      </form>
    </div>
  )
}
export default EjercicioObtimizado;`
      }]}/>
      <main>
        <h1>Formularios</h1>
        <Conseptos texto={`React nos da unas herramientas para poder trabajar con los formularios.
Tenemos dos estrategias para trabajar con los formularios:`}/>
        <ol>
          <li>controlados: estos estan gestionados por los estados (recomendado).</li>
          <li>no controlados: son las que usan las referencias de react (no recomendado).</li>
        </ol>
        <Conseptos texto={`Muy importante si usamos la etiqueta "label" como sabemos estos tienen como atributo "for" pero en react se cambia por "htmlFor" , es de buena practica pornerle el atributo name.`}/>
        <Sintaxis codigo={`<label htmlFor="nombre">pon tu nombre de usuario aqui</label>
<input type="text" id="nombre" name="nombre">`}/>
        <Conseptos texto={`Para trabajar con los inputs react nos recomienda trabajar con las variables de estado , ahora tenemos un problema y esque no podemos usar value por defecto par que nos traera una advertencia por lo cual es lo correcto sera trabajar con el evento onChange pero si queremos ponerle un value por defecto podemos usar la propiedad "defaultValue".`}/>
        <h2>defaultValue no controlado</h2>
        <ReactCode codigo={`import React from "react";
import { useState } from  "react";

function DefaultValor(){
  const [dato,setDato] = useState("")
  
	
  const preguntarInput = ()=>{
    let preguntar = prompt("dime un valor para el input")
    setDato(preguntar)
  }

  return(
    <>
      <button onClick={preguntarInput}>preguntar</button>
      <input 
        type="text" 
        name="nombre"
        defaultValue={dato}
      />
    </>
  )
}
export default DefaultValor;`}/>
        <ReactCode codigo={`import React from "react";
import DefaultValor from "./ruta";
export default function App(){
  return <DefaultValor />
}`}/>
        <div className="website">
          <DefaultValor />
        </div>
        <h2>onChange controlado</h2>
      <Conseptos texto={`"onChange" se usa para los inputs y los textarea y asi es como react recomienda trabajarlos.
Recuerda que esto trabaja con los inputs de forma controlada y qye trabajan con las variables de estado.
El evento "e" hace referencia al evento.
El "e.target.value" hace referencia al valor del input.`}/>
        <ReactCode codigo={`import React from "react";
import React , {useState} from "react";

function OnChangeFormulario(){

  const [valor,setValor] = useState("");
	
  return(
    <input 
      type="text" 
      name="nombre"
      onChange={
        (e)=>setValor(e.target.value)
      }
    />
  )
}
export default OnChangeFormulario`}/>
        <ReactCode codigo={`import React from "react";
import OnChangeFormulario from "./ruta";
export default function App(){
  return <OnChangeFormulario />
}`}/>
        <div className="website">
          <input type="text" />
        </div>
        <h2>otros inputs</h2>
        <Conseptos texto={`A diferencia de los inputs de texto con los inputs de tipo radio o checkbox podemos darle un value para que se cambie el estado.`}/>
        <h2>ejemplo de uso</h2>
        <ReactCode codigo={`import React , { useState } from "react";

function ElejirOpcion(){

  const [radio,setRadio] = useState("");

  return(
    <div>
      <h5>elige tu juego preferida</h5>
      <form>
        <input 
          type="radio"
          id="gta"
          value="gta"
          name="juego"
          onChange={e=>setRadio(e.target.value)}
        />
        <label htmlFor="gta">gta</label>

        <input 
          type="radio"
          id="doom"
          value="doom"
          name="juego"
          onChange={e=>setRadio(e.target.value)}
        />
        <label htmlFor="doom">doom</label>

        <input 
          type="radio"
          id="minecraft"
          value="minecraft"
          name="juego"
          onChange={e=>setRadio(e.target.value)}
        />
        <label htmlFor="minecraft">minecraft</label>

        <input 
          type="radio"
          id="acman"
          value="acman"
          name="juego"
          onChange={e=>setRadio(e.target.value)}
        />
        <label htmlFor="acman">acman</label>

        <input 
          type="radio"
          id="left 4 dead"
          value="left 4 dead"
          name="juego"
          onChange={e=>setRadio(e.target.value)}
        />
        <label htmlFor="left 4 dead">left 4 dead</label>
      </form>
    </div>
  )
}
export default ElejirOpcion;`}/>
        <ReactCode codigo={`import React from "react";
import ElejirOpcion from "./ruta";
export default function App(){
  return <ElejirOpcion />
}`}/>
        <div className="website">
          <h5>elige tu juego favorito</h5>
      			<form className="formWaifus">
              <div>
                <input 
                  type="radio"
                  id="gta"
                  value="gta"
                  name="juego"
                  onChange={(e)=>e.target.value}
                />
                <label for="gta">gta</label>
              </div>

              <div>
                <input 
                  type="radio"
                  id="doom"
                  value="doom"
                  name="juego"
                  onChange={(e)=>e.target.value}
                />
                <label for="doom">doom</label>
              </div>

              <div>
                <input 
                  type="radio"
                  id="minecraft"
                  value="minecraft"
                  name="juego"
                  onChange={(e)=>e.target.value}
                />
                <label for="minecraft">minecraft</label>
              </div>

              <div>
                <input 
                  type="radio"
                  id="pacman"
                  value="pacman"
                  name="juego"
                  onChange={(e)=>e.target.value}
                />
                <label for="pacman">pacman</label>
              </div>

              <div>
                <input 
                  type="radio"
                  id="left 4 dead"
                  value="left 4 dead"
                  name="juego"
                  onChange={(e)=>e.target.value}
                />
              <label htmlFor="left 4 dead">left 4 dead</label>
              </div>
      		</form>
        </div>
        <div className="mostrar_content">
          <img className="imagenWaifu" />
          <p id="mensajeWaifu"></p>
        </div>

        <h2>defaultChecked</h2>
        <Conseptos texto={`Esta propiedad en react es equivalente a checked de html basico con esto podremos marcar un check por defecto y se actualizara la variable de estado.`}/>
        <ReactCode codigo={`import React , {useState} from "react";
function DefaultChecar(){
  const [valor,setValor] = useState("");
  return(
    <div>
      <h5>elige lenguaje</h5>
      <label htmlFor="javaScipt">javaScipt</label>
      <input 
        type="radio"  
        name="lenguaje" 
        id="javaScipt"
        value="javaScipt"
        onChange={e=>setValor(e.target.value)}
        defaultChecked
      />
      <label htmlFor="python">python</label>
      <input 
        type="radio" 
        name="lenguaje"
        id="python"
        value="python"
        onChange={e=>setValor(e.target.value)}
      />
    </div>
  )
}
export default DefaultChecar;`}/>
        <ReactCode codigo={`import React from "react";
import DefaultChecar from "./ruta";
export default function App(){
  return <DefaultChecar />
}`}/>
        <div className="website">
          <h5>elige lenguaje</h5>
          <label htmlFor="javaScipt">javaScipt</label>
          <input 
            type="radio"  
            name="lenguaje" 
            id="javaScipt"
            value="javaScipt"
            onChange={e=>setValor(e.target.value)}
            defaultChecked
          />
          <label htmlFor="python">python</label>
          <input 
            type="radio" 
            name="lenguaje"
            id="python"
            value="python"
            onChange={e=>setValor(e.target.value)}
          />
        </div>

        <h2>input select</h2>
        <Conseptos texto={`Para los inputs de tipo select son similares a los del tipo texto pero osea que no usamos "value" si no que usamos "defaultValue" al igual que los inputs de tipo texto.`}/>
        <ReactCode codigo={`import React , {useState} from "react";
function InputSelector(){
  const [seleccion,setSeleccion] = useState("");

  return(
    <div>
      <label htmlFor="lenguaje">elige un lenguaje</label>
      <select 
        id="lenguaje"
        name="lenguaje"
        defaultValue="javaScript"
        onChange={e=>setSeleccion(e.target.value)}
      >
        <option value="...">...</option>
        <option value="javaScript">javaScript</option>
        <option value="python">python</option>
        <option value="c#">c#</option>
        <option value="java">java</option>
      </select>
    </div>
  )
}
export default InputSelector`}/>
        <ReactCode codigo={`import React from "react";
import InputSelector from "./ruta";
export default function App(){
  return <InputSelector />
}`}/>
        <div className="website">
          <label htmlFor="lenguaje">elige un lenguaje</label>
          <select 
            id="lenguaje"
            name="lenguaje"
            defaultValue="javaScript"
            onChange={e=>setSeleccion(e.target.value)}
          >
            <option value="...">...</option>
            <option value="javaScript">javaScript</option>
            <option value="python">python</option>
            <option value="c#">c#</option>
            <option value="java">java</option>
          </select>
        </div>

        <h2>checkbox</h2>
        <Conseptos texto={`Esto es similar a radio pero aqui en vez de ponerle el valor le pondremos valores booleanos en las variables de estado.`}/>
        <ReactCode codigo={`import React , {useState} from "react";

function ChecarCaja(){

  const [check,setCheck] = useState(false);

  return(
    <div>
      <form>
        <h4>te gusta programar?:</h4>
        <input 
          type="checkbox"
          id="aseptar"
          name="terminos"
          onChange={e=>setCheck(e.target.checked)}
        /> 
        <label htmlFor="aseptar">si me gusta :D</label>

        <input 
          type="checkbox"
          id="denegar"
          name="terminos"
          onChange={e=>setCheck(e.target.checked)}
        />
        <label htmlFor="denegar">no , es aburrido </label>
      </form>
    </div>
  )
}
export default ChecarCaja`}/>
        <ReactCode codigo={`import React from "react";
import ChecarCaja from "./ruta";
export default function App(){
  return <ChecarCaja />
}`}/>
        <div className="website">
          <form>
            <h5>te gusta programar?:</h5>
            <input 
              type="checkbox"
              id="aseptar"
              name="terminos"
              onChange={e=>setCheck(e.target.checked)}
            /> 
            <label htmlFor="aseptar">si me gusta :D</label>

            <input 
              type="checkbox"
              id="denegar"
              name="terminos"
              onChange={e=>setCheck(e.target.checked)}
            />
            <label htmlFor="denegar">no , es aburrido :v</label>
          </form>
        </div>

        <h2>enviar formulario</h2>
        <Conseptos texto={`Ahora veremos como enviar el formulario y de paso mandar una alerta pero si solo deseas enviar puedes poner el input o el button pero para poder hacer un evento al boton de envio para dar un mensaje o algo podemos usar el evento "onSubmit".`}/>
        <Sintaxis codigo={`<form onsubmit={evento}>

</form>`}/>
        <ReactCode codigo={`import React , {useState} from "react";

function EnviarForm(){

  const [nombre,setNombre] = useState("");

  const avisar=(e)=>{
    e.preventDefault();
    alert("se envio tu nombre a ningun lado no se nada de backend :v")
  }

  return(
    <div>
      <form onSubmit={avisar}>
        <input 
          type="text" 
          placeholder="nombre"
          onChange={
            (e)=>setNombre(e.target.value)
          }
        />
        <button>enviar nombre</button>
      </form>
    </div>
  )
}
export default EnviarForm;`}/>
        <ReactCode codigo={`import React from "react";
import EnviarForm from "./ruta";
export default function App(){
  return <EnviarForm />
}`}/>
        <div className="website">
          <EnviarForm />
        </div>

        <h2>ejercicio formulario</h2>
        <ReactCode codigo={`import React , {useState} from "react";

function EjercicioForm(){

  const [nombre,setNombre] = useState("");
  const [lenguaje,setLenguaje] = useState("");
  const [seleccion,setSeleccion] = useState("");
  const [condicion,setCondicion] = useState(false);


  const avisar=(e)=>{
    e.preventDefault();
    alert("uahahaha te jakie ok no nisiquiera escribi bien xd")
  }

  return(
    <div>
      <h1>encuesta de trabajo</h1>
      <form onSubmit={avisar}>
        <label htmlFor="nombres">nombres completos</label>
        <input 
          id="nombres"
          type="text"
          name="encuesta"
          placeholder="nombre completo"
          onChange={
            (e)=>setNombre(e.target.value)
          }
        />

        <h3>cual es tu lenguaje mas usado?</h3>

        <label htmlFor="javaScript">javaScript</label>
        <input 
          type="radio"
          id="javaScript"
          name="encuesta"
          value="javaScript"
          onChange={(e)=>setLenguaje(e.target.value)}
        />

        <label htmlFor="python">python</label>
        <input 
          type="radio"
          id="python"
          name="encuesta"
          value="python"
          onChange={(e)=>setLenguaje(e.target.value)}
        />

        <label htmlFor="c#">c#</label>
        <input 
          type="radio"
          id="c#"
          name="encuesta"
          value="c#"
          onChange={(e)=>setLenguaje(e.target.value)}
        />

        <label htmlFor="ruby">ruby</label>
        <input 
          type="radio"
          id="ruby"
          name="encuesta"
          value="ruby"
          onChange={(e)=>setLenguaje(e.target.value)}
        />

        <label htmlFor="php">php</label>
        <input 
          type="radio"
          id="php"
          name="encuesta"
          value="php"
          onChange={(e)=>setLenguaje(e.target.value)}
        />

        <h3>que lenguaje te gusta menos?</h3>
        <label htmlFor="lenguajeM">lenguaje</label>
        <select
          defaultValue="ensamblador"
          id="lenguajeM"
          onChange={(e)=>setSeleccion(e.target.value)}
          name="encuesta"
        >
          <option value="javaScript">javaScript</option>
          <option value="python">python</option>
          <option value="java">java</option>
          <option value="c++">c++</option>
          <option value="ruby">ruby</option>
          <option value="ruby">ruby</option>
          <option value="ensamblador">ensamblador :v</option>
        </select>


        <h3>condiciones</h3>
        <label htmlFor="condicion">aseptas no se que aseptaras pero lo aseptas?</label>
        <input
          id="condicion"
          type="checkbox"
          name="encuesta"
          onChange={(e)=>setCondicion(e.target.checked)}
        />

        <button>postularse</button>
      </form>
    </div>
  )
}
export default EjercicioForm`}/>
        <ReactCode codigo={`import React from "react";
import EjercicioForm from "./ruta";
export default function App(){
  return <EjercicioForm />
}`}/>
        <div className="website">
          <EjercicioForm />
        </div>

        <h2>obtimizar todo!!</h2>
        <Conseptos texto={`En el caso de que queramos hacer un formulario mas complejo seria muy tedioso crear una variable de estado para cada dato con lo cual podemos crear funciones que obtimicen esto y en vwz de andar poniendo todo en una variable para cada uno podemos crear solo una variable de estado con un solo objeto vacio.`}/>
        <ReactCode codigo={`const [valores,setValores] = useState({})`}/>
        <Conseptos texto={`Luego creamos dos funciones que nos permitan trabajar con el atributo name y rellenar ese objeto vacio con los datos del usuario.`}/>
        <ol>
          <li>creamos dos funciones una para los inputs en general y otra para los checkebox.</li>
          <li>en ambas les damos el event "e".</li>
          <li>accedemos al estado.</li>
          <li>usamos un parametro rest para poder crear el objeto y se actualice.</li>
          <li>destructuramos la propiedad name.</li>
          <li>accedemos al valor "value" pero en el de check cambiamos a "checked" para comprobar si es verdadero o falso.</li>
        </ol>
        <ReactCode codigo={`const manejarCambio=(e)=>{
  setForm({
    ...form,
    [e.target.name]: e.target.value
  })
}
 const manejarCheck=(e)=>{
  setForm({
    ...form,
    [e.target.name]: e.target.checked
  })
}`}/>
        <h2>ejercicio obtimizado</h2>
        <ReactCode codigo={`import React , {useState} from "react";

function EjercicioObtimizado(){

  const [form,setForm] = useState({});
  
  const manejarCambio=(e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const manejarCheck=(e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.checked
    })
  }


  const avisar=(e)=>{
    e.preventDefault();
    alert("no te estas postulando a nada tranqui")
  }

  return(
    <div>
      <h1>encuesta de trabajo</h1>
      <form onSubmit={avisar}>
        <label htmlFor="nombres">nombres completos</label>
        <input 
          id="nombres"
          type="text"
          name="nombres"
          placeholder="nombre completo"
          onChange={manejarCambio}
        />
        <label htmlFor="apellidos">apellidos</label>
        <input 
          type="text"
          id="apellidos"
          name="apellidos"
          placeholder="apellidos"
          onChange={manejarCambio}
        />

        <h3>cual es tu lenguaje mas usado?</h3>

        <label htmlFor="javaScript">javaScript</label>
        <input 
          type="radio"
          id="javaScript"
          name="lenguaje mas usado"
          value="javaScript"
          onChange={manejarCambio}
        />

        <label htmlFor="python">python</label>
        <input 
          type="radio"
          id="python"
          name="lenguaje mas usado"
          value="python"
          onChange={manejarCambio}
        />

        <label htmlFor="c#">c#</label>
        <input 
          type="radio"
          id="c#"
          name="lenguaje mas usado"
          value="c#"
          onChange={manejarCambio}
        />

        <label htmlFor="ruby">ruby</label>
        <input 
          type="radio"
          id="ruby"
          name="lenguaje mas usado"
          value="ruby"
          onChange={manejarCambio}
        />

        <label htmlFor="php">php</label>
        <input 
          type="radio"
          id="php"
          name="lenguaje mas usado"
          value="php"
          onChange={manejarCambio}
        />

        <h3>que lenguaje te gusta menos?</h3>
        <label htmlFor="lenguajeM">lenguaje</label>
        <select
          defaultValue="ensamblador"
          id="lenguajeM"
          onChange={manejarCambio}
          name="lenguaje menos"
        >
          <option value="javaScript">javaScript</option>
          <option value="python">python</option>
          <option value="java">java</option>
          <option value="c++">c++</option>
          <option value="ruby">ruby</option>
          <option value="ruby">ruby</option>
          <option value="ensamblador">ensamblador :v</option>
        </select>


        <h3>condiciones</h3>
        <label htmlFor="condicion">aseptas no se que aseptaras pero lo aseptas?</label>
        <input
          id="condicion"
          type="checkbox"
          name="condicion"
          onChange={manejarCheck}
        />

        <button>postularse</button>
      </form>
    </div>
  )
}
export default EjercicioObtimizado;`}/>
        <ReactCode codigo={`import React from "react";
import EjercicioObtimizado from "./ruta";
export default function App(){
  return <EjercicioObtimizado />
}`}/>
        <div className="website">
          <EjercicioObtimizado />
        </div>
      </main>
      <Footer/>
    </>
  )
}
export default FormulariosReacr;