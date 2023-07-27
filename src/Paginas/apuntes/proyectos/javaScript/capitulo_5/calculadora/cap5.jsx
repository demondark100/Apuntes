import { useEffect } from "react";
import MensajeModal from "../../../../../../componentes/MensajeModal/mensajeModal";
import CodigoFuenteSinInt from "../../../../../../componentes/codigoFuente/code";
import JavaScropt from "../../../../../../componentes/lenguajes/JavaScript";
import Volver from "../../../../../../componentes/volver/volver";
import Html from "../../../../../../componentes/lenguajes/Html"
import Css from "../../../../../../componentes/lenguajes/Css"
import "./cap5.css";


// // react
// import { useEffect, useState } from "react";





function Cap5ProyJsV1() {

  useEffect(()=>{
    const botonNumero = document.querySelectorAll('[data-numero]')
const botonOperador = document.querySelectorAll('[data-operador]')
const botonIgual = document.querySelector('[data-igual]')
const botonBorrarTodo = document.querySelector('[data-borrar-todo]')
const botonBorrar = document.querySelector('[data-borrar]')
const textoValorSuperior = document.querySelector('[data-valor-superior]')
const textoValorInferior = document.querySelector('[data-valor-inferior]')


class Calculadora {
    constructor(textoValorInferior,textoValorSuperior){
        this.textoValorInferior = textoValorInferior
        this.textoValorSuperior = textoValorSuperior
        this.valorInferior = ''
        this.valorSuperior = ''
        this.operador = undefined
    }

    agregarNumero(numero){
    if(numero === '.' && this.valorInferior.includes('.')) return
    this.valorInferior = this.valorInferior + numero
    }
    imprimirDisplay() {
        this.textoValorInferior.innerText = this.valorInferior
        this.textoValorSuperior.innerText = this.valorSuperior
    }
    borrar (){
        this.valorInferior = this.valorInferior.slice(0,-1)
    }
    elegirOperacion(operador) {
        if(this.valorInferior == '') return
        if(this.valorSuperior != '') {
            this.realizarCalculo()
        }
        this.operador = operador
        this.valorSuperior = this.valorInferior
        this.valorInferior = ''
    }
    realizarCalculo() {
        let resultado
        let conversionValorSuperior = parseFloat(this.valorSuperior)
        let conversionValorInferior = parseFloat (this.valorInferior)
        if(isNaN(conversionValorSuperior) || isNaN(conversionValorInferior)) return
        switch (this.operador) {
            case '+':
            resultado = conversionValorSuperior + conversionValorInferior
            break
            case '-':
            resultado = conversionValorSuperior - conversionValorInferior
            break
            case '*':
            resultado = conversionValorSuperior * conversionValorInferior
            break
            case '÷':
            resultado = conversionValorSuperior / conversionValorInferior
            break
            default: return
        }
        
        this.valorInferior = resultado
        this.operador = undefined
        this.valorSuperior= ''
    }

    limpiarPantalla() {
        this.valorInferior = ''
        this.valorSuperior = ''
        this.operador = undefined

    }
}



const calculadora = new Calculadora (textoValorInferior,textoValorSuperior)



botonNumero.forEach(boton => {
    boton.addEventListener('click', () => {
        calculadora.agregarNumero(boton.innerText)
        calculadora.imprimirDisplay() 
    })
})

botonBorrar.addEventListener('click',() => {
    calculadora.borrar()
    calculadora.imprimirDisplay()
})

botonOperador.forEach(boton => {
    boton.addEventListener('click', () => {
        calculadora.elegirOperacion(boton.innerText)
        calculadora.imprimirDisplay() 
    })
})
botonIgual.addEventListener('click',() => {
    calculadora.realizarCalculo()
    calculadora.imprimirDisplay()
})

botonBorrarTodo.addEventListener('click',() => {
    calculadora.limpiarPantalla()
    calculadora.imprimirDisplay()
})
  })

  return (  
    <>
      <MensajeModal texto={`¡Proyecto! capitulo 5

Hacer una calculadora con programacion orientada a objetos.

Recuerda que aprendimos:

1. DOM.
2. Selectores de elementos.
3. Atributos.
4. Atributos globales.
5. Atributos de inputs.
6. clases y metodos.
7. Obtencion y modificacion de contenido.
8. Creacion de elementos.
9. Obtencion de childs.
10. propiedades de childs.
11. propiedades de parents.
12. propiedades de siblings.`}/>
      <Volver link={`../`}/>
      <CodigoFuenteSinInt codigo={<Html codigo={`<div className="calculadora">
  <div className="display">
    <div className="valor-superior" data-valor-superior></div>
    <div className="valor-inferior" data-valor-inferior></div>
  </div> 
  <button className="span2" data-borrar-todo>AC</button>
  <button data-borrar>DEL</button>
  <button data-operador>÷</button>
  <button data-numero >1</button>
  <button data-numero>2</button>
  <button data-numero>3</button>
  <button data-operador>*</button>
  <button data-numero>4</button>
  <button data-numero>5</button>
  <button data-numero>6</button>
  <button data-operador>+</button>
  <button data-numero>7</button>
  <button data-numero>8</button>
  <button button data-numero>9</button>
  <button data-operador>-</button>
  <button data-numero>.</button>
  <button data-numero>0</button>
  <button data-igual >=</button>
</div>`}/>}
        codigo2={<Css codigo={`body {
  display: flex;
  justify-content: center;
  background-image: url("https://th.bing.com/th/id/OIP.pfx5_Yz0AM6cCz39FjERLAHaEK?w=313&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7");
  background-size: cover;
  background-position: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: auto;
}
.calculadora {
  width: 400px;
  height: 600px;
  background: linear-gradient(0deg,#343434,#000000);
  display: grid;
  grid-template-columns: repeat(4,80px);
  grid-template-rows: 130px repeat(6,80px);
  justify-content: center;
  border-radius: 20px;
  padding-top: 20px;
  margin-top: 25px;
  margin-bottom: 25px;
}
        
.calculadora button {
  font-size: 1.5rem;
  background: linear-gradient(0deg,#000,#5d5d5d);
  border-radius: 50%;
  border: 2px #333333 solid;
  margin:2px;
  color: #dce7bb;
  padding: 0;
  margin-top: 25px;
}
        
.calculadora button:hover {
  background: linear-gradient(0deg,#3333,#000);
}
        
        
.display {
  height: 120px;
  background: linear-gradient(0deg,#5d5d5d,#000);
  opacity: .7;
  grid-column: 1/span 4;
  border: 2px #333 solid;
  text-align: end;
  padding: 10px 0;
}
        
.span2 {
  grid-column: span 2;
}
.valor-superior {
  color: #dce7bb;
  font-size: 1.2rem;
  margin-bottom: 30px;      
}
        
.valor-inferior {
  color: #dce7bb;
  font-size: 2rem;
}`}/>}
        codigo3={<JavaScropt codigo={`const botonNumero = document.querySelectorAll('[data-numero]')
const botonOperador = document.querySelectorAll('[data-operador]')
const botonIgual = document.querySelector('[data-igual]')
const botonBorrarTodo = document.querySelector('[data-borrar-todo]')
const botonBorrar = document.querySelector('[data-borrar]')
const textoValorSuperior = document.querySelector('[data-valor-superior]')
const textoValorInferior = document.querySelector('[data-valor-inferior]')


class Calculadora {
    constructor(textoValorInferior,textoValorSuperior){
        this.textoValorInferior = textoValorInferior
        this.textoValorSuperior = textoValorSuperior
        this.valorInferior = ''
        this.valorSuperior = ''
        this.operador = undefined
    }

    agregarNumero(numero){
    if(numero === '.' && this.valorInferior.includes('.')) return
    this.valorInferior = this.valorInferior + numero
    }
    imprimirDisplay() {
        this.textoValorInferior.innerText = this.valorInferior
        this.textoValorSuperior.innerText = this.valorSuperior
    }
    borrar (){
        this.valorInferior = this.valorInferior.slice(0,-1)
    }
    elegirOperacion(operador) {
        if(this.valorInferior == '') return
        if(this.valorSuperior != '') {
            this.realizarCalculo()
        }
        this.operador = operador
        this.valorSuperior = this.valorInferior
        this.valorInferior = ''
    }
    realizarCalculo() {
        let resultado
        let conversionValorSuperior = parseFloat(this.valorSuperior)
        let conversionValorInferior = parseFloat (this.valorInferior)
        if(isNaN(conversionValorSuperior) || isNaN(conversionValorInferior)) return
        switch (this.operador) {
            case '+':
            resultado = conversionValorSuperior + conversionValorInferior
            break
            case '-':
            resultado = conversionValorSuperior - conversionValorInferior
            break
            case '*':
            resultado = conversionValorSuperior * conversionValorInferior
            break
            case '÷':
            resultado = conversionValorSuperior / conversionValorInferior
            break
            default: return
        }
        
        this.valorInferior = resultado
        this.operador = undefined
        this.valorSuperior= ''
    }

    limpiarPantalla() {
        this.valorInferior = ''
        this.valorSuperior = ''
        this.operador = undefined

    }
}



const calculadora = new Calculadora (textoValorInferior,textoValorSuperior)



botonNumero.forEach(boton => {
    boton.addEventListener('click', () => {
        calculadora.agregarNumero(boton.innerText)
        calculadora.imprimirDisplay() 
    })
})

botonBorrar.addEventListener('click',() => {
    calculadora.borrar()
    calculadora.imprimirDisplay()
})

botonOperador.forEach(boton => {
    boton.addEventListener('click', () => {
        calculadora.elegirOperacion(boton.innerText)
        calculadora.imprimirDisplay() 
    })
})
botonIgual.addEventListener('click',() => {
    calculadora.realizarCalculo()
    calculadora.imprimirDisplay()
})

botonBorrarTodo.addEventListener('click',() => {
    calculadora.limpiarPantalla()
    calculadora.imprimirDisplay()
})`}/>}
      />

      <div className="Page">

        <div className="contenedorCalculadoraCap4Js">

          <div className="contenedorCalculadoraCap4JsContentPrincipal">
              <div className="calculadora">
                  <div className="display">
                      <div className="valor-superior" data-valor-superior></div>
                      <div className="valor-inferior" data-valor-inferior></div>
                  </div> 
                  <button className="span2" data-borrar-todo>AC</button>
                  <button data-borrar>DEL</button>
                  <button data-operador>÷</button>
                  <button data-numero >1</button>
                  <button data-numero>2</button>
                  <button data-numero>3</button>
                  <button data-operador>*</button>
                  <button data-numero>4</button>
                  <button data-numero>5</button>
                  <button data-numero>6</button>
                  <button data-operador>+</button>
                  <button data-numero>7</button>
                  <button data-numero>8</button>
                  <button button data-numero>9</button>
                  <button data-operador>-</button>
                  <button data-numero>.</button>
                  <button data-numero>0</button>
                  <button data-igual >=</button>
              </div>
          </div>

        </div>

      </div>
    </>
  );
}

export default Cap5ProyJsV1;