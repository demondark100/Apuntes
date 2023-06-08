import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Footer from "../../../../../componentes/menus/Footer";
import "./input.css";
import Sintaxis from "../../../../../componentes/lenguajes/Sintaxis";
import { useState } from "react";
import Ejercicios from "../../../../../componentes/ejercicios/ejercicios";

function InpuLogica() {
  const [inputValue, setInputValue] = useState('');
  const [mensaje, setMensaje] = useState("");
  const [relsatado, setRelsatado] = useState(false);
  const [nombre, setNombre] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;
    if(newValue == "Megumin"){
      setMensaje("Buen trabajo " + nombre)
      setRelsatado(true)
    } else if (newValue != "Megumin"){
      setMensaje(nombre +" escribe Megumin >:v.")
      setRelsatado(false)
    } 
    if (newValue == ""){
      setMensaje("")
    }

    setInputValue(newValue);
  };

  const pedirName =()=>{
    setNombre(prompt("escribe tu nombre"))
  }
  return (  
    <>
      <main>
        <h1>inputs y outputs</h1>
        <Conseptos texto={`La programacion se basa en
1. pedir un dato al usuario (input)
2. procesar el dato  (procesar)
3. dar una respuesta al usuario   (output)

Un ejemplo de la vida cotidiana hablas con una persona.
tu: preguntas la hora.
otra persona: recibe la pregunta y la procesa en su cerebro.
otra persona: te da la hora.`}/>
        <h2>input</h2>
        <Conseptos texto={`El input se encargara de pedir un dato al usuario por ejemplo.`}/>
        <Sintaxis codigo={`nombre = pedirDato("escribe tu nombre")`}/>
        <p 
          onClick={pedirName}
          style={{color: `#fff`,fontSize: `1.8em`,cursor: "pointer"}}
        >ejecutar codigo</p>
        <h2>proceso</h2>
        <Conseptos texto={`Aqui procesamos el nombre del usuario.`}/>
        <Sintaxis codigo={`saludar = "hola " + nombre + " soy una IA."`}/>
        <h2>output</h2>
        <Conseptos texto={`Aqui le mostramos al usuario el resultado de lo que procesamos.`}/>
        <Sintaxis codigo={`mostrar(saludar)`}/>
        <h2>resultado</h2>
        <Sintaxis codigo={`hola ${nombre} soy una IA.`} />

        <h2>ejercicio</h2>
        <Conseptos texto={`Escribe o copia "Megumin" tal como esta.`}/>
        <input 
          type="text" 
          id="waifuName" 
          placeholder="waifu name"
          onChange={handleChange}
        />
        <p className={`mensajeInputMegumin ${relsatado ? "verde":"rojo"}`}>{mensaje}</p>

        <Conseptos texto={`Como te das cuenta te pedi un dato luego programe algo que lo procese y te di un mensaje del si era lo que queria o no en este caso te dije escribe Megumin o copialo.

si lo escribiste mal te di un mensaje.
si lo escribiste bien te di otro mensaje.
y si no esciribiste nada no te di ningun mensaje.`}/>

        <h2>¡Para que sirve!</h2>
        <Conseptos texto={`Como ya te diste cuenta esto es demasiado util en la programacion tanto para desarrollar IA , juegos , sitios web , etc.`}/>
        
        <h2>¡Proyecto!</h2>
        <Conseptos texto={`Hacer un programa que multiplique un numero por otro , el programa debe pedir al usuario que numeros desea multiplicar.

nota: en los ejemplos que di cambia:
pedirDato() por prompt()
mostrar() por alert()

De esta manera podras escribir codigo en la consola de tu navegador`}/>
        <h2>pseudocodigo</h2>
        <h3>prompt</h3>
        <Sintaxis codigo={`prompt(mensaje para pedir un dato)`}/>
        <h3>mostrar</h3>
        <Sintaxis codigo={`alert(que queremos mostrar al usuario)`}/>
        
        <h2>empieza a programar</h2>
        <Ejercicios 
          texto1={`Ahh esta complicado no puedo!`}
          texto2={`Esta izi :D oculta el resultado`}
          codigo={<Sintaxis codigo={`numero1 = prompt("Dime el numero 1");
numero2 = prompt("Dime el numero 2");
multiplicar = numero1 * numero2;
alert("el resultado es " multiplicar);`}/>}
        />
        <h2>nota</h2>
        <Conseptos texto={`El lenguaje que usaste para programar esto fue Sintaxis de ahora en adelante usaremos "alert" y "prompt" en vez de usar mostrar() y pedirDato().

Esto para que puedas escribir codigo en tu navegador.`}/>
      </main>
      <Footer />
    </>
  );
}

export default InpuLogica;