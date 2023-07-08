import { useEffect, useRef,useState } from "react";
import MensajeModal from "../../../../../../componentes/MensajeModal/mensajeModal";
import CodigoFuenteSinInt from "../../../../../../componentes/codigoFuente/code";
import JavaScropt from "../../../../../../componentes/lenguajes/JavaScript";
import Volver from "../../../../../../componentes/volver/volver";
import "./tienda.css";

// este componente es la pantalla que muestra los helados
function Helado({
  texto, // esto es el texto por ejemplo "helado de {chocolate}"
  precio, // esto es el precio del helado
  imagen, // esta es la imagen de fondo
  cantidad, // esto es la cantidad de helados
  incrementar, // esto es para incrementar la cantidad de helados
  decrementar // esto es para decrementar la cantidad nde helados
}){

  const [mostrarMenos, setMostrarMenos] = useState(false);

  // esta funcion se encarga de mostrar o quitar el boton de menos
  useEffect(()=>{
    if (cantidad > 0) {
      setMostrarMenos(true)
    } else {
      setMostrarMenos(false)
    }
  })
  

  return(
    <div className="contenedorHelado">
      <div
        style={{
          backgroundImage: `url(${imagen})`,
          backgroundPosition: "center"
        }}
        className="contenedorHelado__content1"
      >
        <p>{texto}</p>
        <b>${precio}</b>
    
      </div>
      <p>{cantidad}</p>
      <div className="contenedorHelado__content2">
        <div onClick={incrementar}>+</div>
        {mostrarMenos && <div onClick={decrementar}>-</div>}
      </div>
    </div>
  )
}

// este componente es el mensaje de confirmacion para comprar los helados
function ComparHelados({
  si,
  no //esto es para confirmar o rechazar la compra
}) {

  return (
    <div className="cintenedorConfirmarCompraHeladoProyJs">
      <div className="cintenedorConfirmarCompraHeladoProyJs__contenedorConfirm">
        <h4>¿Estas seguro/a de esta compra?</h4>
        <div>
          <button onClick={si}>Si</button>
          <button onClick={no}>No</button>
        </div>
      </div>
    </div>
  )
}


function Mensajes({mensaje,setMensaje1}) {
  return (
    <div className="contenedorMensajeProyJsHelados">
      <div className="contenedorMensajeProyJsHelados__p">
        <p>{mensaje}</p>
        <button onClick={()=>setMensaje1(false)}>ok</button>
      </div>
    </div>
  )
}

function Cap3ProyJsV3() {

  // esto es el dinero del usuario
  // esto multiplica la cantidad de helados que quiere el usuario por el precio del helado
  // este objeto contiene la cantidad de helados y el precio
  const [helados, setHelados] = useState({
    chocolate: [0,0,26],
    lucuma: [0,0,22],
    vainilla: [0,0,25],
    fresa: [0,0,20],
    chispitas: [0,0,36],
    heladoFrito: [0,0,40]
  });


  // estas funciones incrementaran y decrementaran la cantidad de helados
  const incrementar = (heladoIn)=>{
    const nuevosHelados = { ...helados };
    nuevosHelados[heladoIn][0] += 1;
    helados[heladoIn][1] = nuevosHelados[heladoIn][2] * nuevosHelados[heladoIn][0]
    setHelados(nuevosHelados);
  }
  const decrementar = (heladoIn)=>{
    const nuevosHelados = { ...helados };
    nuevosHelados[heladoIn][0] -= 1;
    helados[heladoIn][1] = nuevosHelados[heladoIn][1] - nuevosHelados[heladoIn][2]
    setHelados(nuevosHelados);
  }



  const [dineroUsuario, setDineroUsuario] = useState(100); // esta variable de estado es el dinero inicial del usuario.

  const [confirmarCompra, setconfirmarCompra] = useState(); // esta variable es para confirmar la compra.

  const [showConfirmCompra, setShowConfirmCompra] = useState(false);

  const si =()=> {
    setconfirmarCompra(true)
    setShowConfirmCompra(false)
  }
  const no =()=> {
    setconfirmarCompra(false)
    setShowConfirmCompra(false)
  }

  
  const comprar = () => {
    setShowConfirmCompra(true)
  };


  // este es el mensaje de que no alcanza el dinero.
  const [mensaje1, setMensaje1] = useState(false); 
  const [mensaje2, setMensaje2] = useState(false); // este es el mensaje de que no puede comprar mas helados hasta sierto tiempo.

  useEffect(()=>{
    const modificar = { ...helados };
    let nuevoDineroUsuario = dineroUsuario; // Almacena el valor inicial
    let dineroSuficiente = true; // Variable booleana para controlar si tiene suficiente dinero

    
    if (confirmarCompra == true) {
      for (let i in modificar) {
        nuevoDineroUsuario -= modificar[i][1]; // Resta el valor del arreglo
    
        if (nuevoDineroUsuario < 0) {
          nuevoDineroUsuario += modificar[i][1]; // Agrega nuevamente el valor del helado
          modificar[i][0] = Math.floor(nuevoDineroUsuario / modificar[i][1]); // Calcula la cantidad de helados que puede comprar
          dineroSuficiente = false; // Actualiza la variable booleana
          break; // Detiene el bucle
        }
    
        modificar[i][0] = 0;
        modificar[i][1] = 0;
      }
    }
  
    if (!dineroSuficiente) {
      for (let i in modificar) {
        modificar[i][0] = 0;
        modificar[i][1] = 0;
      }
      setMensaje1(true)
    }
  
    setDineroUsuario(nuevoDineroUsuario); // Actualiza el estado con el nuevo valor
    setHelados(modificar);
  },[confirmarCompra])
  
  
  



  return (  
    <>
      <MensajeModal texto={`¡proyecto! capitulo 3:

Hacer una tienda de helados.`}/>
      <Volver link={"../"}/>
      <CodigoFuenteSinInt codigo={<JavaScropt codigo={`// Necesitamos el dinero del usuario.
// necesitamos el precio de los helados.
// necesitamos ver cuanto dinero le queda al usuario.

let dineroUsuario = 100; //esta variable simula el dinero del usuario puedes poner cualquier cantidad wahahaha hackea el sistema y pon un millon XD.
let helados = {      // el 1mer valor de los arreglos es el id , el 2do es el precio
  chocolate: [1,26],
  lucuma: [2,22],
  vainilla: [3,25],
  fresa: [4,20],
  chispitas: [5,36],
  heladoFrito: [6,40]
}
let cantidadHelados = prompt("Hola ¿Cuantos helados desea comprar?")

for (let i = 0; i < parseInt(cantidadHelados); i++) {
  let comprar = prompt(\`¿Que helado desearia comprar?
cantidad de helados: helado n${"${i + 1}"}.
1. chocolate (costo 26$)
2. lucuma (costo 22$)
3. vainilla (costo 25$)
4. fresa (costo 20$)
5. chispas de chocolate (costo 36$)
6. helado frito (costo 40$)\`)

  if (dineroUsuario <= 0) {
    console.log("lo siento ya no cuentas con dinero suficiente")
  } else {
    for(let i in helados){
      if (comprar == helados[i][0]) {
        dineroUsuario -= helados[i][1]
        console.log(\`compraste helado de ${"${i}"} te queda $${"${dineroUsuario}"}\`)
      } else if (comprar != helados[i][0]) {
        console.log(\`Opcion no valida.\`)
      }
    }
  }
}

// este sistema es muy dinamico porque puedes 
// agregar mas helados y se detectara automaticamente 
// si hay mas helados para vender y todo xd.`}/>}/>
    
      <div className="Page">
        
        <div className={
          showConfirmCompra ? 
            "mostrarConfirmHelados"
          :
            "hideConfirmHelados"
        }>
          <ComparHelados 
            si={si}
            no={no}
            setShowConfirmCompra={setShowConfirmCompra}
          />
        </div>

        <div className={
          mensaje1 ? 
            "mostrarConfirmHelados"
          :
            "hideConfirmHelados"
        }>
          <Mensajes setMensaje1={setMensaje1} mensaje={"Usted no cuenta con dinero suficiente."}/>
        </div>

        <div className="contenedorTiendaHeladosProyJs">
          <h1>Heladeria el helado</h1>
          <div className="contenedorTiendaHeladosProyJs__presupuesto">
            <p>su presupuesto es de: ${dineroUsuario}</p>
          </div>
          
          <div className="componenteHelados">
            <Helado 
              texto={"helado de chocolate"}
              precio={helados.chocolate[1]}
              imagen={"https://th.bing.com/th/id/OIP.krNQLmf72s1tKYYGaHNw5gHaE8?w=304&h=203&c=7&r=0&o=5&dpr=1.1&pid=1.7"}
              cantidad={helados.chocolate[0]}
              incrementar={()=>incrementar("chocolate")}
              decrementar={()=>decrementar("chocolate")}
            />
            <Helado 
              texto={"helado de lucuma"}
              precio={helados.lucuma[1]}
              imagen={"https://th.bing.com/th/id/OIP.8c4t_rCPBZpMWIxB_3TefwHaE6?w=258&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"}
              cantidad={helados.lucuma[0]}
              incrementar={()=>incrementar("lucuma")}
              decrementar={()=>decrementar("lucuma")}
            />
            <Helado 
              texto={"helado de vainilla"}
              precio={helados.vainilla[1]}
              imagen={"https://th.bing.com/th/id/OIP.JLCndw61EmIn_4um0sttrwHaFz?w=220&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"}
              cantidad={helados.vainilla[0]}
              incrementar={()=>incrementar("vainilla")}
              decrementar={()=>decrementar("vainilla")}
            />
            <Helado 
              texto={"helado de fresa"}
              precio={helados.fresa[1]}
              imagen={"https://th.bing.com/th/id/OIP.iXlB5oP9GSFI3Q6rSX5XjAHaFm?w=221&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"}
              cantidad={helados.fresa[0]}
              incrementar={()=>incrementar("fresa")}
              decrementar={()=>decrementar("fresa")}
            />
            <Helado 
              texto={"helado de chispas de chocolate"}
              precio={helados.chispitas[1]}
              imagen={"https://th.bing.com/th/id/OIP.-YXLoEZo2GPx80d94IxbtwHaE7?w=259&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"}
              cantidad={helados.chispitas[0]}
              incrementar={()=>incrementar("chispitas")}
              decrementar={()=>decrementar("chispitas")}
            />
            <Helado 
              texto={"helado frito"}
              precio={helados.heladoFrito[1]}
              imagen={"https://th.bing.com/th/id/OIP.MSfSlEu5M1lpj_l39uwmIQHaEr?w=295&h=186&c=7&r=0&o=5&dpr=1.1&pid=1.7"}
              cantidad={helados.heladoFrito[0]}
              incrementar={()=>incrementar("heladoFrito")}
              decrementar={()=>decrementar("heladoFrito")}
            />
          </div>
          <button onClick={comprar} className="comprarHelados">comprar</button>
        </div>
        
      </div>
    </>
  );
}
export default Cap3ProyJsV3;