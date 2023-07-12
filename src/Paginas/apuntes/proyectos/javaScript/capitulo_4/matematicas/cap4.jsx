import MensajeModal from "../../../../../../componentes/MensajeModal/mensajeModal";
import CodigoFuenteSinInt from "../../../../../../componentes/codigoFuente/code";
import JavaScropt from "../../../../../../componentes/lenguajes/JavaScript";
import Volver from "../../../../../../componentes/volver/volver";
import React, { useState, useEffect } from 'react';
import "./cap4.css"


function Cap4ProyJsV1() {

  const [showInstrucciones, setShowInstrucciones] = useState(true); // este estado quitara las instrucciones.


  return (  
    <>
      <MensajeModal texto={`¡Proyecto! capitulo 4

hacer ejercicios matematicos basicos para que el usuario los resuelva.

Recuerda que aprendimos:

1. Programacion orientada a objetos.
2. Metodos de cadenas.
3. Metodos de arreglos.
4. Object Math.`}/>

      <CodigoFuenteSinInt codigo={<JavaScropt codigo={`alert(\`Hola bienvenido/a a los ejercicios matematicos basicos para aprender aritmetica , la dinamica sera esta:

1. resuelve el ejercicio y le das a aseptar.
2. tu podras elegir cuantos ejercicios quieres resolver para practicar.
3. al final yo te mostrare cuantas veces asetaste y cuantas te equivocaste\`);

class Aritmetica {
  constructor(){
    this.operaciones = [
      [1,"+"],
      [2,"-"],
      [3,"/"],
      [4,"*"]
    ] // esta variable contiene las posibles operaciones que elija el usuario.

    this.operacion = "" // esto guardara la operacion que haya elegido el usuario.

    this.elejir = prompt(\`Escoje un desafio para continuar.
    1. + 2. - 3. / 4. x\`) // esta variable es para que el usuario elija una operacion

    this.cantidad = prompt(\`¿Cuantos ejercicios deseas resolver?\`) // estoes cuantos ejercicios quiere resolver el usuario.

    this.nun1 = 0 //este es el numero aleatorio 1
    this.nun2 = 0 //este es el numero aleatorio 2
    this.resultado = 0 // esto guarda la respuesta correcta.
    this.resultadoUsuario = 0 //esto es la respuesta del usuario.
    this.corrctos = 0 //esto sera el almacen de los asiertos.
    this.incorrectos = 0 //esto seran los fracasos.
    this.mensajesCorrecto = [
      "bien hecho",
      "correcto",
      "vas muy bien",
      "excelente",
      "pero que buen trabajo",
      "eres muy bueno para esto"
    ]
    this.mensajesIncorrecto = [
      "esta mal",
      "incorrecto",
      "no te rindas",
      "¡Tu puedes!",
      "fallaste pero continuemos ¿si?",
      "estuviste cerca"
    ]
    this.mensajeAleatorio = 0;
  }
  obtenerOperacion=()=>{
    for(let i in this.operaciones){
      if (this.elejir == this.operaciones[i][0]) {
        this.operacion = this.operaciones[i][1]
      }
    }
  }
  comprobar(){
    this.obtenerOperacion();
    for(let i = 0;i < this.cantidad;i++){
      this.nun1 = Math.round(Math.random(this.nun1)*1000) + 1;
      this.nun2 = Math.round(Math.random(this.nun2)*1000) + 1;
      this.resultado = eval(this.nun1 + this.operacion + this.nun2)
      this.resultadoUsuario = prompt(\`${"${this.nun1}"} ${"${this.operacion}"}
${"${this.nun2}"}\`)
      this.mensajeAleatorio = Math.round(Math.random(this.mensajeAleatorio)*6)
      if (this.resultadoUsuario == this.resultado) {
        this.corrctos++;
        alert(this.mensajesCorrecto[this.mensajeAleatorio])
      } else{
        this.incorrectos++;
        alert(this.mensajesIncorrecto[this.mensajeAleatorio])
      }
    }
    if(this.corrctos == this.cantidad){
      alert(\`Eres la perfeccion misma tus seres queridos deben de estar orgullosos de ti.
      correctos: ${"${this.corrctos}"}.
      incorrectos: ${"${this.incorrectos}"}\`)
    } else if (this.corrctos > this.incorrectos) {
      alert(\`¡woow! bien hecho hiciste la mayoria de operaciones bien eres de lo mejor.
      correctos: ${"{this.corrctos}"}.
      incorrectos: ${"${this.incorrectos}"}\`)
    } else if (this.corrctos < this.incorrectos){
      alert(\`la mayoria esta mal pero sigue practicando y podras llegar a la perfeccion.:
      correctos: ${"${this.corrctos}"}.
      incorrectos: ${"${this.incorrectos}"}\`)
    }
  }
}
const aritmetica = new Aritmetica(); 
aritmetica.comprobar()`}/>}/>
      <Volver link={"../"}/>


      <div className="Page">

        <div className="contenedorAritmeticaPryJs">

          {/* estas son las instrucciones */}
          <div 
            className={`fondoNegroProyInstrucciones 
            ${showInstrucciones ? 
              "":
              "fondoNegroProyInstruccionesHide"}`
          }>
            <div 
              className={`contenedorInstruccionesJsProy 
              ${showInstrucciones ? 
                "":
                "contenedorInstruccionesJsProyHide"}`
            }>
              <h4>Instrucciones</h4>
              <p>
                Hola bienvenido/a a los ejercicios matematicos basicos para aprender aritmetica , la dinamica sera esta: <br />
                  <br />
                1. resuelve el ejercicio y le das a aseptar. <br />
                  <br />
                2. tu podras elegir cuantos ejercicios quieres resolver para practicar. <br />
                  <br />
                3. al final yo te mostrare cuantas veces asetaste y cuantas te equivocaste
                </p>
              <button onClick={()=>setShowInstrucciones(false)}>Entendido</button>
            </div>
          </div>


        </div>

      </div>
    </>
  );
}

export default Cap4ProyJsV1;












// alert(`Hola bienvenido/a a los ejercicios matematicos basicos para aprender aritmetica , la dinamica sera esta:

// 1. resuelve el ejercicio y le das a aseptar.
// 2. tu podras elegir cuantos ejercicios quieres resolver para practicar.
// 3. al final yo te mostrare cuantas veces asetaste y cuantas te equivocaste`);

// class Aritmetica {
//   constructor(){
//     this.operaciones = [
//       [1,"+"],
//       [2,"-"],
//       [3,"/"],
//       [4,"*"]
//     ] // esta variable contiene las posibles operaciones que elija el usuario.

//     this.operacion = "" // esto guardara la operacion que haya elegido el usuario.

//     this.elejir = prompt(`Escoje un desafio para continuar.
//     1. + 2. - 3. / 4. x`) // esta variable es para que el usuario elija una operacion

//     this.cantidad = prompt(`¿Cuantos ejercicios deseas resolver?`) // estoes cuantos ejercicios quiere resolver el usuario.

//     this.nun1 = 0 //este es el numero aleatorio 1
//     this.nun2 = 0 //este es el numero aleatorio 2
//     this.resultado = 0 // esto guarda la respuesta correcta.
//     this.resultadoUsuario = 0 //esto es la respuesta del usuario.
//     this.corrctos = 0 //esto sera el almacen de los asiertos.
//     this.incorrectos = 0 //esto seran los fracasos.
//     this.mensajesCorrecto = [
//       "bien hecho",
//       "correcto",
//       "vas muy bien",
//       "excelente",
//       "pero que buen trabajo",
//       "eres muy bueno para esto"
//     ]
//     this.mensajesIncorrecto = [
//       "esta mal",
//       "incorrecto",
//       "no te rindas",
//       "¡Tu puedes!",
//       "fallaste pero continuemos ¿si?",
//       "estuviste cerca"
//     ]
//     this.mensajeAleatorio = 0;
//   }
//   obtenerOperacion=()=>{
//     for(let i in this.operaciones){
//       if (this.elejir == this.operaciones[i][0]) {
//         this.operacion = this.operaciones[i][1]
//       }
//     }
//   }
//   comprobar(){
//     this.obtenerOperacion();
//     for(let i = 0;i < this.cantidad;i++){
//       this.nun1 = Math.round(Math.random(this.nun1)*1000) + 1;
//       this.nun2 = Math.round(Math.random(this.nun2)*1000) + 1;
//       this.resultado = eval(this.nun1 + this.operacion + this.nun2)
//       this.resultadoUsuario = prompt(`${this.nun1} ${this.operacion}
//       ${this.nun2}`)
//       console.log(this.resultado)
//       this.mensajeAleatorio = Math.round(Math.random(this.mensajeAleatorio)*6)

//       if (this.resultadoUsuario == this.resultado) {
//         this.corrctos++;
//         alert(this.mensajesCorrecto[this.mensajeAleatorio])
//       } else{
//         this.incorrectos++;
//         alert(this.mensajesIncorrecto[this.mensajeAleatorio])
//       }
//     }
//     if(this.corrctos == this.cantidad){
//       alert(`Eres la perfeccion misma tus seres queridos deben de estar orgullosos de ti.
//       correctos: ${this.corrctos}.
//       incorrectos: ${this.incorrectos}`)
//     } else if (this.corrctos > this.incorrectos) {
//       alert(`¡woow! bien hecho hiciste la mayoria de operaciones bien eres de lo mejor.
//       correctos: ${this.corrctos}.
//       incorrectos: ${this.incorrectos}`)
//     } else if (this.corrctos < this.incorrectos){
//       alert(`la mayoria esta mal pero sigue practicando y podras llegar a la perfeccion.:
//       correctos: ${this.corrctos}.
//       incorrectos: ${this.incorrectos}`)
//     }
//   }
// }

// const aritmetica = new Aritmetica(); 
// aritmetica.comprobar()