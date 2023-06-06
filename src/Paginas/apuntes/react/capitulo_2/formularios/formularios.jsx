import Conseptos from "../../../../../componentes/conseptos/conseptos";
import ReactCode from "../../../../../componentes/lenguajes/React";
import Sintaxis from "../../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";
import "./formularios.css";

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

  useEffect(()=>{
    
    // este codigo se lo explico al yo pendejo del futuro ese weon es re pendejo pero que se le va hacer :v.
    
    // aqui seleccionamos a las opciones del input radio para usarlas mas adelante.
    
    const Rem = document.getElementById("Rem");
    const Emilia = document.getElementById("Emilia");
    const Ram = document.getElementById("Ram");
    const Beatriz = document.getElementById("Beatriz");
    const Petra = document.getElementById("Petra");
    
    // en este arreglo almacenaremos todas las variables para recorrerlos y no escribir un evento para cada variable.
    
    const contenedorWaifus = [Rem,Ram,Emilia,Beatriz,Petra];
    
    // aqui seleccionamos las imagenes y el mensaje que se dara segun sea.
    
    const mostrar_content = document.querySelector(".mostrar_content");
    const imagenWaifu = document.querySelector(".imagenWaifu");
    const mensajeWaifu = document.getElementById("mensajeWaifu");
    
    // en este objeto almacenaremos las respectivas imagenes para mostrarlas
    
    
    
    
    let imagenRem = "data:image/jpeg;base64,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"
    let imagenRam = "data:image/jpeg;base64,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"
    let imagenEmilia = "https://th.bing.com/th/id/OIP.opfRy7JV9ks6wS8F0kfgigHaFj?w=288&h=216&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    let imagenBeatriz = "data:image/jpeg;base64,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"
    let imagenPetra = "data:image/jpeg;base64,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"
    
    
    // creamos un arreglo para almacenar las variables con los enlaces de las imagenes.
    
    let image = [
        imagenRem,
        imagenEmilia,
        imagenRam,
        imagenBeatriz,
        imagenPetra
    ]
    
    // agregamos las imagenes a cada evento lo haria recorrer en el bucle de abajo pero no detecta la posision de las imagenes sale como undefined
    
    Rem.addEventListener("click",e=>imagenWaifu.setAttribute("src",image[0]))
    Emilia.addEventListener("click",e=>imagenWaifu.setAttribute("src",image[1]))
    Ram.addEventListener("click",e=>imagenWaifu.setAttribute("src",image[2]))
    Beatriz.addEventListener("click",e=>imagenWaifu.setAttribute("src",image[3]))
    Petra.addEventListener("click",e=>imagenWaifu.setAttribute("src",image[4]))
    
    
    
    const mensajesBuenos = [
        "buena eleccion",
        "tu si sabes crack",
        "tremenda verdad?",
        "una Diosa",
        "asi es yo tambien la adoro",
        "a quien no le gustaria?",
        "Mi diosa",
        "una belleza",
        "pero que pro",
        "este carnal si me entiende",
        "este tipo me cae bien",
        "pero este man tiene buenos gustos",
        "ahora somos amigos",
        "compartimos la misma waifu"
    ]
    
    const mensajesMalos = [
        "estas enfermo es una loli",
        "eres pedofilo?",
        "ok un psicolo tambien estaria bien",
        "no seas mamon",
        "porque elegiste una loli?",
        "pero que carajos?",
        "todo bien en casa?",
        "hmm creo que tambien estoy enfermo XD",
        "el fbi viene a tu casa",
        "la ONU perro",
        "lolis lolis noooo",
        "te ayudo con un psicologo",
        "ni se te ocurra buscar rule 34 de ella",
        "nooo re enfermo"
    ]
    
    // aqui recorremos con un for el arreglo que contiene las variables seleccionadas de los inputs
    
    contenedorWaifus.forEach(i=>{
    
        // aqui ponemos el evento para las variables
    
    
        i.addEventListener("click",()=>{
    
            // aqui evitamos que el usuario haga scroll
    
            document.body.classList.add("modal-open");
            const mostrar_content = document.querySelector(".mostrar_content");
            mostrar_content.style.top = `${window.scrollY}px`
    
            // aqui ponemos el nombre de las waifu por si acaso la imagen no carga
    
            imagenWaifu.setAttribute("alt",i.value)
    
            // aqui agregamos y quitamos la clase "mostrarWaifus" para que se muestre solamente 5 segundos , y agregamos para que el usuario se pueda des`lazar.
    
            mostrar_content.classList.add("mostrarWaifus")
            setTimeout(()=>{
                document.body.classList.remove("modal-open");
                mostrar_content.classList.remove("mostrarWaifus")
            },5000)
    
            // con esto mostraremos un mensaje al azar
    
            let seleccionarRandom = Math.round(Math.random()*14);
            // aqui mostramos un mensaje segun que seleccione el usuario
    
            if (i.value == "Rem"||
                i.value == "Ram" ||
                i.value == "Emilia"){
                mensajeWaifu.textContent = `${i.value}!!! ${mensajesBuenos[seleccionarRandom]}`
            } else {
                mensajeWaifu.textContent = `${i.value}? ${mensajesMalos[seleccionarRandom]}`
            }
        })
    })
      })




  return(
    <>
      <Menu2/>
      <main>
        <h1>Formularios</h1>
        <Conseptos texto={`React nos da unas herramientas para poder trabajar con los formularios.
Tenemos dos estrategias para trabajar con los formularios:

1. controlados: estos estan gestionados por los estados (recomendado).
2. no controlados: son las que usan las referencias de react (no recomendado).
Muy importante si usamos la etiqueta "label" como sabemos estos tienen como atributo "for" pero en react se cambia por "htmlFor" , es de buena practica pornerle el atributo name.`}/>
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
      <h5>elige tu waifu preferida</h5>
      <form>
        <input 
          type="radio"
          id="Rem"
          value="Rem"
          name="waifu"
          onChange={e=>setRadio(e.target.value)}
        />
        <label htmlFor="Rem">Rem</label>

        <input 
          type="radio"
          id="Emilia"
          value="Emilia"
          name="waifu"
          onChange={e=>setRadio(e.target.value)}
        />
        <label htmlFor="Emilia">Emilia</label>

        <input 
          type="radio"
          id="Ram"
          value="Ram"
          name="waifu"
          onChange={e=>setRadio(e.target.value)}
        />
        <label htmlFor="Ram">Ram</label>

        <input 
          type="radio"
          id="Beatriz"
          value="Beatriz"
          name="waifu"
          onChange={e=>setRadio(e.target.value)}
        />
        <label htmlFor="Beatriz">Beatriz</label>

        <input 
          type="radio"
          id="Petra"
          value="Petra"
          name="waifu"
          onChange={e=>setRadio(e.target.value)}
        />
        <label htmlFor="Petra">Petra</label>
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
          <h5>elige tu waifu preferida</h5>
      			<form className="formWaifus">
              <div>
                <input 
                  type="radio"
                  id="Rem"
                  value="Rem"
                  name="waifu"
                  onChange={(e)=>e.target.value}
                />
                <label for="Rem">Rem</label>
              </div>

              <div>
                <input 
                  type="radio"
                  id="Emilia"
                  value="Emilia"
                  name="waifu"
                  onChange={(e)=>e.target.value}
                />
                <label for="Emilia">Emilia</label>
              </div>

              <div>
                <input 
                  type="radio"
                  id="Ram"
                  value="Ram"
                  name="waifu"
                  onChange={(e)=>e.target.value}
                />
                <label for="Ram">Ram</label>
              </div>

              <div>
                <input 
                  type="radio"
                  id="Beatriz"
                  value="Beatriz"
                  name="waifu"
                  onChange={(e)=>e.target.value}
                />
                <label for="Beatriz">Beatriz</label>
              </div>

              <div>
                <input 
                  type="radio"
                  id="Petra"
                  value="Petra"
                  name="waifu"
                  onChange={(e)=>e.target.value}
                />
              <label htmlFor="Petra">Petra</label>
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
            <label htmlFor="denegar">no , es aburrido >:v</label>
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
        <Conseptos texto={`Luego creamos dos funciones que nos permitan trabajar con el atributo name y rellenar ese objeto vacio con los datos del usuario.

1. creamos dos funciones una para los inputs en general y otra para los checkebox.
2. en ambas les damos el event "e".
3. accedemos al estado.
4. usamos un parametro rest para poder crear el objeto y se actualice.
5. destructuramos la propiedad name.
6. accedemos al valor "value" pero en el de check cambiamos a "checked" para comprobar si es verdadero o falso.`}/>
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