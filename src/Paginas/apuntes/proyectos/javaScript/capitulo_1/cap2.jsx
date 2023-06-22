import { useEffect, useRef,useState } from "react";
import MensajeModal from "../../../../../componentes/MensajeModal/mensajeModal";
import Volver from "../../../../../componentes/volver/volver";
import "./cap2.css";
import CodigoFuernteSinInt from "../../../../../componentes/codigoFuente/code";
import JavaScropt from "../../../../../componentes/lenguajes/JavaScript";


function Cap1Vs2PryJs() {

  const inputSumar1 = useRef(null)
  const inputSumar2 = useRef(null)
  const [resultadoSuma, setResultadoSuma] = useState("");
  const sumar =()=>{
    setResultadoSuma(parseInt(inputSumar1.current.value) + parseInt(inputSumar2.current.value))
  }

  const inputRestar1 = useRef(null)
  const inputRestar2 = useRef(null)
  const [resultadoResta, setResultadoResta] = useState("");
  const restar =()=>{
    setResultadoResta(parseInt(inputRestar1.current.value) - parseInt(inputRestar2.current.value))
  }

  const inputDividir1 = useRef(null)
  const inputDividir2 = useRef(null)
  const [resultadoDividir, setResultadoDividir] = useState("");
  const dividir =()=>{
    setResultadoDividir(parseInt(inputDividir1.current.value) / parseInt(inputDividir2.current.value))
  }

  const inputMultiplicar1 = useRef(null)
  const inputMultiplicar2 = useRef(null)
  const [resultadoMultiplicar, setResultadoMultiplicar] = useState("");
  const multiplicar =()=>{
    setResultadoMultiplicar(parseInt(inputMultiplicar1.current.value) * parseInt(inputMultiplicar2.current.value))
  }

  const inputResto1 = useRef(null)
  const inputResto2 = useRef(null)
  const [resultadoResto, setResultadoResto] = useState("");
  const resto =()=>{
    setResultadoResto(parseInt(inputResto1.current.value) % parseInt(inputResto2.current.value))
  }

  // mostrar operaciones
  const [showSuma, setShowSuma] = useState(false);
  const [showResta, setShowResta] = useState(false);
  const [showMultiplicar, setShowMultiplicar] = useState(false);
  const [showDividir, setShowDividir] = useState(false);
  const [showResto, setShowResto] = useState(false);
  
  // funciones para mostrar las operaciones
  const mostrarSuma=()=>{
    setShowSuma(!showSuma)
    setResultadoSuma("")
    setShowResta(false)
    setShowMultiplicar(false)
    setShowDividir(false)
    setShowResto(false)
  }
  const mostrarResta=()=>{
    setShowResta(!showResta)
    setResultadoResta("")
    setShowSuma(false)
    setShowMultiplicar(false)
    setShowDividir(false)
    setShowResto(false)

  }
  const mostrarMultiplicar=()=>{
    setShowMultiplicar(!showMultiplicar)
    setResultadoMultiplicar("")
    setShowResta(false)
    setShowSuma(false)
    setShowDividir(false)
    setShowResto(false)
  }
  const mostrarDividir=()=>{
    setShowDividir(!showDividir)
    setResultadoDividir("")
    setShowResta(false)
    setShowSuma(false)
    setShowMultiplicar(false)
    setShowResto(false)
    
  }
  const mostrarResto=()=>{
    setShowResto(!showResto)
    setResultadoResto("")
    setShowResta(false)
    setShowSuma(false)
    setShowDividir(false)
    setShowMultiplicar(false)
  }


  return (
    <>
      <CodigoFuernteSinInt codigo={<JavaScropt codigo={`// suma
let numeroSuma1 = parseInt(prompt("dime el primer numero para sumar"));
let numeroSuma2 = parseInt(prompt("dime el segundo numero para sumar"));
console.log(\`el resultado de la suma es: ${"${numeroSuma1 + numeroSuma2}"}\`);

// resta
let numeroResta1 = parseInt(prompt("dime el primer numero para restar"));
let numeroResta2 = parseInt(prompt("dime el segundo numero para restar"));
console.log(\`el resultado de la resta es: ${"${numeroResta1 - numeroResta2}"}\`);

// dividir
let numeroDividir1 = parseInt(prompt("dime el primer numero para dividir"));
let numeroDividir2 = parseInt(prompt("dime el segundo numero para dividir"));
console.log(\`el resultado de la divicion es: ${"${numeroDividir1 / numeroDividir2}"}\`);

// multiplicar
let numeroMultiplicar1 = parseInt(prompt("dime el primer numero para multiplicar"));
let numeroMultiplicar2 = parseInt(prompt("dime el segundo numero para multiplicar"));
console.log(\`el resultado de la multiplicacion es: ${"${numeroMultiplicar1 * numeroMultiplicar2}"}\`);

// resto
let numeroResto1 = parseInt(prompt("dime el primer numero para sacar el resto"));
let numeroResto2 = parseInt(prompt("dime el segundo numero para sacar el resto"));
console.log(\`el resultado del resto es: ${"${numeroResto1 % numeroResto2}"}\`);`}/>}/>
      <MensajeModal texto={`¡Proyecto! capitulo 1:

Hacer un programa que sume , reste , multiplique , divida , saque el resto.`}/>
      <Volver link={"../"}/>
      <div className="Page">

        <div className="contenedorCap1JsV2">

          <div className="contenedorCap1JsV2__content">

            <div className="contenedorCap1JsV2__boton">
              <button onClick={mostrarSuma}>sumar</button>
              <button onClick={mostrarResta}>restar</button>
              <button onClick={mostrarDividir}>dividir</button>
              <button onClick={mostrarMultiplicar}>multiplicar</button>
              <button onClick={mostrarResto}>resto</button>
            </div>
          
            {
              showSuma && <div className="contenedorCap1JsV2__inputs--input1">
                <div className="contenedorCap1JsV2__inputs--input1--in">
                  <input className="contenedorCap1JsV2__input" type="number" ref={inputSumar1}/>
                  <button onClick={sumar}>+</button>
                </div>
                <input className="contenedorCap1JsV2__input contenedorCap1JsV2__input2" type="number" ref={inputSumar2}/>
                <p>{resultadoSuma}</p>
              </div>
            }

            {
              showResta && <div className="contenedorCap1JsV2__inputs--input1">
                <div className="contenedorCap1JsV2__inputs--input1--in">
                  <input className="contenedorCap1JsV2__input" type="number" ref={inputRestar1}/>
                  <button onClick={restar}>-</button>
                </div>
                <input className="contenedorCap1JsV2__input contenedorCap1JsV2__input2" type="number" ref={inputRestar2}/>
                <p>{resultadoResta}</p>
              </div> 
            }

            {
              showDividir && <div className="contenedorCap1JsV2__inputs--input1">
                <div className="contenedorCap1JsV2__inputs--input1--in">
                  <input className="contenedorCap1JsV2__input" type="number" ref={inputDividir1}/>
                  <button onClick={dividir}>/</button>
                </div>
                <input className="contenedorCap1JsV2__input contenedorCap1JsV2__input2" type="number" ref={inputDividir2}/>
                <p>{resultadoDividir}</p>
              </div>
            }

            {
              showMultiplicar &&  <div className="contenedorCap1JsV2__inputs--input1">
                <div className="contenedorCap1JsV2__inputs--input1--in">
                  <input className="contenedorCap1JsV2__input" type="number" ref={inputMultiplicar1}/>
                  <button onClick={multiplicar}>x</button>
                </div>
                <input className="contenedorCap1JsV2__input contenedorCap1JsV2__input2" type="number" ref={inputMultiplicar2}/>
                <p>{resultadoMultiplicar}</p>
              </div>
            }

            {
              showResto &&  <div className="contenedorCap1JsV2__inputs--input1">
                <div className="contenedorCap1JsV2__inputs--input1--in">
                  <input className="contenedorCap1JsV2__input" type="number" ref={inputResto1}/>
                  <button onClick={resto}>%</button>
                </div>
                <input className="contenedorCap1JsV2__input contenedorCap1JsV2__input2" type="number" ref={inputResto2}/>
                <p>{resultadoResto}</p>
              </div> 
            }
          </div>

        </div>

      </div>
    </>
  );
}

export default Cap1Vs2PryJs;