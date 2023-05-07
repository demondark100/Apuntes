import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";
import Css from "../../../../../componentes/lenguajes/Css";
import "./metodologia.css";
import { useRef } from "react";
import Capitulos from "../../../../../aside";



function Metodologia() {
  const input1 = useRef(null)
  const input2 = useRef(null)
  const input3 = useRef(null)
  const input4 = useRef(null)
  const input5 = useRef(null)
  const input6 = useRef(null)
  const input = [
    input1,
    input2,
    input3,
    input4,
    input5,
    input6 
  ]

  const limpiarInput =()=>{
    for (let i = 0; i <= input.length; i++) {
      input[i].current.value = "";
    }
  }

  return (  
    <>
      <Menu2 />
      <Capitulos />
      <main>
        <h1>metodologia BEM</h1>
        <Conseptos texto={`La metodologia BEM nos permite solucionar conflictos con la seleccion de multiples clases de una forma tal que nos permite saber que elemento estamos seleccionando.

ahora veremos como aplicar la metodologia BEM.`}/>

        <h2>pseudocodigo</h2>
        <Html codigo={`elemento                   clase

contenedor:<div>           content
hijo:<p>                   content__hijo
hijo con cambios:<p>       content__hijo--cambios`}/>
        <h2>ejemplo 1</h2>
        <Html codigo={`<form class="formulario">
  <input type="text" class="formulario__input--diferente">
  <input type="text" class="formulario__input">
  <input type="text" class="formulario__input">
  <input type="text" class="formulario__input">
  <input type="text" class="formulario__input--diferente">
  <input type="text" class="formulario__input">
</form>`}/>

        <Css codigo={`.formulario__input--diferente{
  color: orange;
}
.formulario__input{
  color: green;
}`} />

        <div className="website">
          <button className="botonLimpiarInput" onClick={limpiarInput}>limpiar inputs</button>
          <form class="formulario">
            <input type="text" class="formulario__input--diferente" placeholder="escribe algo" ref={input1}/>
            <input type="text" class="formulario__input" placeholder="escribe algo" ref={input2}/>
            <input type="text" class="formulario__input" placeholder="escribe algo" ref={input3}/>
            <input type="text" class="formulario__input" placeholder="escribe algo" ref={input4}/>
            <input type="text" class="formulario__input--diferente" placeholder="escribe algo" ref={input5}/>
            <input type="text" class="formulario__input" placeholder="escribe algo" ref={input6}/>
          </form>
        </div>

        <h2>ejemplo 2</h2>
        <h3>html</h3>
        <Html codigo={`<div class="content">
  yo sere color verde.
  <p class="content__p">
    yo sere color cafe.
    <b class="content__p--b">
      yo sere color naranja. 
    </b>
  </p>
</div>
`}/>
        <h3>css</h3>
        <Css codigo={`.content{
  color: green;
}
.content__p{
  color: brown;
}
.content__p--b{
  color: orange;
}`}/>

        <div className="website">
          <div class="content">
            yo sere color verde.
            <p class="content__p">
              yo sere color cafe.
              <b class="content__p--b">
                yo sere color naranja. 
              </b>
            </p>
          </div>
        </div>


      </main>
      <Footer />
    </>
  );
}

export default Metodologia;