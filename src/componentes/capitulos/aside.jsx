import "./aside.css";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useEffect } from "react";

function Capitulos({sendshowAside}) {

  // esto es el aside

  useEffect(()=>{
    const links = document.querySelectorAll(".temas a")
    links.forEach(i => {
      i.addEventListener("click",()=>{
        sendshowAside(false)
      })
    });
  })
  


  
  // capitulos
  const [matematicas, setMatematicas] = useState(false);
  const [logica, setLogica] = useState(false);
  const [html, setHtml] = useState(false);
  const [css, setCss] = useState(false);
  const [javaScript, setJavaScript] = useState(false);
  const [git, setGit] = useState(false);
  const [react, setReact] = useState(false);
  const [python, setPython] = useState(false);
  const [node, setNode] = useState(false);
  const [mySql, setMySql] = useState(false);

  // matematicas
  // capitulos
  const [cap1Matematicas, setCap1Matematicas] = useState(false);

  // logica
  // capitulos
  const [cap1Logica, setcap1Logica] = useState(false);
  const [cap2Logica, setCap2Logica] = useState(false);
  const [cap3Logica, setCap3Logica] = useState(false);
  const [cap4Logica, setCap4Logica] = useState(false);

  // html
  // capitulos
  const [cap1Html, setCap1Html] = useState(false);
  const [cap2Html, setCap2Html] = useState(false);
  const [cap3Html, setCap3Html] = useState(false);
  const [cap4Html, setCap4Html] = useState(false);

  // css
  // capitulos
  const [cap1Css, setCap1Css] = useState(false);
  const [cap2Css, setCap2Css] = useState(false);
  const [cap3Css, setCap3Css] = useState(false);
  const [cap4Css, setCap4Css] = useState(false);
  const [cap5Css, setCap5Css] = useState(false);
  const [cap6Css, setCap6Css] = useState(false);

  // javaScript
  // capitulos
  const [cap1JavaScript, setCap1JavaScript] = useState(false);
  const [cap2JavaScript, setCap2JavaScript] = useState(false);
  const [cap3JavaScript, setCap3JavaScript] = useState(false);
  const [cap4JavaScript, setCap4JavaScript] = useState(false);
  const [cap5JavaScript, setCap5JavaScript] = useState(false);
  const [cap6JavaScript, setCap6JavaScript] = useState(false);
  const [cap7JavaScript, setCap7JavaScript] = useState(false);
  const [cap8JavaScript, setCap8JavaScript] = useState(false);
  const [cap9JavaScript, setCap9JavaScript] = useState(false);
  const [cap10JavaScript, setCap10JavaScript] = useState(false);
  const [cap11JavaScript, setCap11JavaScript] = useState(false);
  const [cap12JavaScript, setCap12JavaScript] = useState(false);

  // git
  // capitulos
  const [cap1Git, setCap1Git] = useState(false);


  // react
  // capitulos
  const [cap1React, setCap1React] = useState(false);
  const [cap2React, setCap2React] = useState(false);
  const [cap3React, setCap3React] = useState(false);


  // node.js
  // capitulos
  const [cap1Node, setCap1Node] = useState(false);
  const [cap2Node, setCap2Node] = useState(false);
  const [cap3Node, setCap3Node] = useState(false);
  const [cap4Node, setCap4Node] = useState(false);

  // python
  // capitulos
  const [cap1Python, setCap1Python] = useState(false);
  const [cap2Python, setCap2Python] = useState(false);
  const [cap3Python, setCap3Python] = useState(false);
  const [cap4Python, setCap4Python] = useState(false);
  const [cap5Python, setCap5Python] = useState(false);
  const [cap6Python, setCap6Python] = useState(false);

  // mySql
  // capitulos
  const [cap1MySql, setCap1MySql] = useState(false);
  const [cap2MySql, setCap2MySql] = useState(false);
  const [cap3MySql, setCap3MySql] = useState(false);
  const [cap4MySql, setCap4MySql] = useState(false);
  const [cap5MySql, setCap5MySql] = useState(false);
  const [cap6MySql, setCap6MySql] = useState(false);
  

  return (  
    <>
      <aside>
        <nav className="NavAside">
          <ul className="NavAsideUl">

            {/* estas son las matematicas usadas en programacion */}
            <li className="curso">
              <p onClick={()=>setMatematicas(!matematicas)}>Matematicas</p>
              {
                matematicas && <div className="capitulos">
                  
                  <div>
                    <p onClick={()=>setCap1Matematicas(!cap1Matematicas)}>aritmetica</p>
                    {
                      cap1Matematicas && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"matematica/basico"}>basico</NavLink>
                      </div>
                    }
                  </div>

                </div>
              }
            </li>


            {/* esto es el curso de logica de programacion */}
            <li className="curso">
              <p onClick={()=>setLogica(!logica)}>logica</p>
              {
                logica && <div className="capitulos">
                  <div>
                    <p onClick={()=>setcap1Logica(!cap1Logica)}>capitulo 1</p>
                    {
                      cap1Logica && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../logica/comenzar"}>Comenzar</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../logica/tipo de datos"}>tipos de datos</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../logica/operadores"}>operadores</NavLink>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap2Logica(!cap2Logica)}>capitulo 2</p>
                    {
                      cap2Logica && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../logica/variables"}>variables</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../logica/concatenacion"}>Concatenacion</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../logica/inOuLogica"}>inputs y outputs</NavLink>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap3Logica(!cap3Logica)}>capitulo 3</p>
                    {
                      cap3Logica && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../logica/condicionales"}>Condicionales</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../logica/arreglos"}>Arreglos</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../logica/arreglosBi"}>arreglos bidimencionales</NavLink>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap4Logica(!cap4Logica)}>capitulo 4</p>
                    {
                      cap4Logica && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../logica/bucles"}>bucles</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../logica/funciones"}>Funciones</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../logica/pod"}>programacion orientada a objetos(POD)</NavLink>
                      </div>
                    }
                  </div>
                </div>
              }
            </li>

            {/* esto es el curso de html */}
            <li className="curso">
            <p onClick={()=>setHtml(!html)}>html</p>
              {
                html && <div className="capitulos">

                  <div>
                    <p onClick={()=>setCap1Html(!cap1Html)}>capitulo 1</p>
                    {
                      cap1Html && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../html/importante leer esto"}>importante leer esto</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../html/conseptos basicos"}>conseptos basicos</NavLink>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap2Html(!cap2Html)}>capitulo 2</p>
                    {
                      cap2Html && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../html/etiquetas"}>etiquetas</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../html/estructura html"}>estructura html</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../html/html semantico"}>html semantico</NavLink>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap3Html(!cap3Html)}>capitulo 3</p>
                    {
                      cap3Html && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../html/enlaces"}>enlaces</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../html/br"}>br</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../html/listas"}>listas</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../html/multimedia"}>multimedia</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../html/divs"}>divs</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../html/formularios"}>formularios</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../html/metadatos"}>metadatos</NavLink>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap4Html(!cap4Html)}>capitulo 4</p>
                    {
                      cap4Html && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../html/mav"}>nav</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../html/section y article"}>section y    article</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../html/aside"}>aside</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../html/main"}>main</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../html/footer"}>footer</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../html/tablas"}>tablas</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../html/extra"}>cositas extra</NavLink>
                      </div>
                    }
                  </div>

                </div>
              }
            </li>

            {/* esto es el curso de css */}
            <li className="curso">
              <p onClick={()=>setCss(!css)}>css</p>
              {
                css && <div className="capitulos">

                  <div>
                    <p onClick={()=>setCap1Css(!cap1Css)}>capitulo 1</p>
                    {
                      cap1Css && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../css/introduccion a css"}>introduccion a css</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../css/selectores"}>selectores</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../css/especificidad"}>especificidad</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../css/metodologia BEM"}>metodologia BEM</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../css/unidades"}>unidades</NavLink>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap2Css(!cap2Css)}>capitulo 2</p>
                    {
                      cap2Css && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../css/background"}>background</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../css/propiedades de texto"}>propiedades de texto</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../css/normalize"}>normalize</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../css/cajas"}>cajas</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../css/padding"}>padding</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../css/margin"}>margin</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../css/border"}>border</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../css/sombras"}>sombras</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../css/outline"}>outline</NavLink>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap3Css(!cap3Css)}>capitulo 3</p>
                    {
                      cap3Css && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../css/position"}>position</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../css/display"}>display</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../css/overflow"}>overflow</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../css/float"}>float</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../css/pseudoelementos"}>pseudoelementos</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../css/pseudoclases"}>pseudoclases</NavLink>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap4Css(!cap4Css)}>capitulo 4</p>
                    {
                      cap4Css && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../css/object fit"}>object fit</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../css/cursor"}>cursor</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../css/colorizacion"}>colorizacion</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../css/responsive(basico)"}>responsive(basico)</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../css/flexbox"}>flexbox</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../css/order"}>order</NavLink>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap5Css(!cap5Css)}>capitulo 5</p>
                    {
                      cap5Css && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../css/grid"}>grid</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../css/responsive design"}>responsive design</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../css/transition"}>transition</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../css/animation"}>animation</NavLink>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap6Css(!cap6Css)}>capitulo 6</p>
                    {
                      cap6Css && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../css/Cubic Bezier"}>Cubic Bezier</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../css/Transform"}>Transform</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../css/variables"}>variables</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../css/filter"}>filter</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../css/extraCss"}>cosas extrea de css</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../css/linear"}>linear</NavLink>
                      </div>
                    }
                  </div>

                </div>
              }
            </li>

            {/* esto es el curso de javaScript */}
            <li className="curso">
              <p onClick={()=>setJavaScript(!javaScript)}>javaScript</p>
              {
                javaScript && <div className="capitulos">

                  <div>
                    <p onClick={()=>setCap1JavaScript(!cap1JavaScript)}>capitulo 1</p>
                    {
                      cap1JavaScript && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/recomendado"}>recomendaciones</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/javaScriptBasico"}>javaScript basico</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/enlazarJavaScript"}>enlazar javaScript</NavLink>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap2JavaScript(!cap2JavaScript)}>capitulo 2</p>
                    {
                      cap2JavaScript && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/variables"}>variables</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/javaScriptFun"}>funciones de javaScript</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/prompt"}>prompt</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/operadores"}>Operadores</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/concatenacion"}>Concatenacion</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/camelCase"}>camelCase</NavLink>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap3JavaScript(!cap3JavaScript)}>capitulo 3</p>
                    {
                      cap3JavaScript && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/condicionales"}>Condicionales</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/arreglos"}>arrglos</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/arreglosAsociativos"}>arreglos asociativos</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/bucles"}>bucles</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/funciones"}>funciones</NavLink>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap4JavaScript(!cap4JavaScript)}>capitulo 4</p>
                    {
                      cap4JavaScript && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/PODJavaScript"}>programacion orientado a    objetos(POD)</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/metodosCadena"}>Metodos de cadena</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/metodosArreglo"}>Metodos de arreglos</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/objectMath"}>object Math</NavLink>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap5JavaScript(!cap5JavaScript)}>capitulo 5</p>
                    {
                      cap5JavaScript && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/DOM"}>DOM</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/SelectoresJavaScript"}>selectores de elementos</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/atributosJs"}>atributos</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/atributoGlobal"}>atributos globales</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/attrInput"}>atributos de inputs</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/clasesMet"}>clases y metodos</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/obtenMod"}>obtencion y modificacion de    contenido</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/creacionEle"}>creacion de elementos</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/obChild"}>obtencion de childs</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/propChild"}>propiedades de childs</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/propPar"}>propiedades de parents</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/PropSi"}>propiedades de sibling</NavLink>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap6JavaScript(!cap6JavaScript)}>capitulo 6</p>
                    {
                      cap6JavaScript && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/window1"}>window 1</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/window2"}>window 2</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/window3"}>window 3</NavLink>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap7JavaScript(!cap7JavaScript)}>capitulo 7</p>
                    {
                      cap7JavaScript && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/eventListen"}>eventos de escucha</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/eventFlujo"}>flujo de eventos</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/MouseEvent"}>mouse events</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/keyEvent"}>eventos de teclado</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/interEvent"}>eventos de la interfaz</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/timers"}>timers</NavLink>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap8JavaScript(!cap8JavaScript)}>capitulo 8</p>
                    {
                      cap8JavaScript && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/controlFlujo"}>control de flujo(teorico)</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/switch"}>switch</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/ManErr"}>manejo de errores</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/callbacks"}>callbacks</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/promesas"}>Promesas</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/awaitAsync"}>await y async</NavLink>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap9JavaScript(!cap9JavaScript)}>capitulo 9</p>
                    {
                      cap9JavaScript && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/json"}>JSON</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/Ajsx"}>AJAX</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/fetch"}>fetch</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/axios"}>axios</NavLink>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap10JavaScript(!cap10JavaScript)}>capitulo 10</p>
                    {
                      cap10JavaScript && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/proto"}>prototipos</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/carProto"}>caracteristicas de    prototipos</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/strictMod"}>Strict Mode</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/funciones2"}>funciones parte2 (la venganza :v)</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/thisCon"}>this    contextual</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/recursividad"}>Recursividad</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/clausulas"}>clausulas</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/paramDefaul"}>parametros por defecto</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/paramRest"}>parametro rest</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/opTerna"}>operador ternario</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/opSpread"}>operador spread</NavLink>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap11JavaScript(!cap11JavaScript)}>capitulo 11</p>
                    {
                      cap11JavaScript && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/objDate"}>objeto Date</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/locSeJs"}>LocalStorage y    
                        SessionStorage</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/dragDrop"}>Drag y Drop</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/geolo"}>Geolocalization</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/hisApi"}>History API</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/FileRead"}>FileReader</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/IndexedDB"}>IndexedDB</NavLink>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap12JavaScript(!cap12JavaScript)}>capitulo 12</p>
                    {
                      cap12JavaScript && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/MatchMedia"}>MatchMedia</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/inObser"}>Intersection Observer</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/lazyLoad"}>Lazy Load</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/Notifications"}>Notifications</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/webWork"}> Web Worker</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/sameOr"}> Same Origin Politic</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/objNa"}>Objeto Navigator</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/memori"}>Memoization</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/Caché"}>Caché</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/servWork"}>Service Workers</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/cachWeb"}>Cachear sitio web y mostrarlo    offline</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/Cookies"}>Cookies</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/avisoCookies"}>Crear aviso de uso de cookies</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/objScreen"}>Objeto Screen</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/objCanvas"}>Objeto Canvas</NavLink>                       
                      </div>
                    }
                  </div>

                </div>
              }
            </li>
            
            {/* este curso es de git */}
            <li className="curso">
              <p onClick={()=>setGit(!git)}>git</p>
              {
                git && <div className="capitulos">

                  <div>
                    <p onClick={()=>setCap1Git(!cap1Git)}>capitulo 1</p>
                    {
                      cap1Git && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../git/confiGit"}>configuracion git</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../git/useGit"}>usar git</NavLink>
                      </div>
                    }
                  </div>

                </div>
              }
            </li>

            {/* este curso es de react */}
            <li className="curso">
              <p onClick={()=>setReact(!react)}>react</p>
              {
                react && <div className="capitulos">

                    <div>
                      <p onClick={()=>setCap1React(!cap1React)}>capitulo 1</p>
                      {
                        cap1React && <div className="temas">
                          <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={`../react/creacion`}>creacion de react</NavLink>
                          <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../react/sintaxis"}>sintaxis jsx</NavLink>
                          <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../react/componentes"}>componentes</NavLink>
                          <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../react/props"}>propiedades props</NavLink>
                          <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../react/estado"}>estado</NavLink>
                          <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../react/renCon"}>renderizar    condicional</NavLink>
                          <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../react/renEle"}>renderizado de    Elementos</NavLink>
                          <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../react/evenClass"}>eventos(ES6)</NavLink>
                          <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../react/evenClass2"}>eventos(ES7)</NavLink>
                          <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../react/eventNative"}>Eventos Nativos, Sintéticos & Personalizados</NavLink>                      
                        </div>
                      }
                    </div>

                    <div>
                      <p onClick={()=>setCap2React(!cap2React)}>capitulo 2</p>
                      {
                        cap2React && <div className="temas">
                          <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../react/comuCompo"}>comunicacion    entre componentes</NavLink>
                          <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../react/ciclVid"}>ciclo de vida</NavLink>
                          <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../react/apiPOD"}>peticiones API    (POD)</NavLink>
                          <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../react/hooks"}>hooks</NavLink>
                          <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../react/useEffect"}>useEffect</NavLink>
                          <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../react/hooksPer"}>hooks personalizados</NavLink>
                          <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../react/referencias"}>Referencias</NavLink>
                          <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../react/formularios"}>Formularios</NavLink>
                          <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../react/estilos"}>estilos</NavLink>
                          <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../react/styledCom"}>styled component</NavLink>
                          <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../react/frameCss"}>frameworks css</NavLink>
                        </div>
                      }
                    </div>

                    <div>
                      <p onClick={()=>setCap3React(!cap3React)}>capitulo 3</p>
                      {
                        cap3React && <div className="temas">
                          <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../react/propsChild"}>props.children</NavLink>
                          <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../react/Portales"}>Portales</NavLink>
                          <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../react/reactRouter"}>React router dom</NavLink>
                        </div>
                      }
                    </div>

                </div>
              }
            </li>

            {/* esto es node.js */}
            <li className="curso">
              <p onClick={()=>setNode(!node)}>Node.js</p>
              {
                node && <div className="capitulos">

                  <dir>
                    <p onClick={()=>setCap1Node(!cap1Node)}>capitulo 1</p>
                    {
                      cap1Node && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../node/introduccion/introduccion"}>Introduccion</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../node/modulos"}>Modulos</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../node/process"}>process</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../node/os"}>os</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../node/timers"}>timers</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../node/fs"}>fs</NavLink>
                      </div>
                    }
                  </dir>

                  
                  <dir>
                    <p onClick={()=>setCap2Node(!cap2Node)}>capitulo 2</p>
                    {
                      cap2Node && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../node/npm"}>npm</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../node/json"}>json</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../node/installUninstall"}>instalar y desinstalar paquetes.</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../node/eventsNode"}>Modulo de eventos.</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../node/promesas"}>Promesas.</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../node/asyncAwait"}>async y await.</NavLink>
                      </div>
                    }
                  </dir>


                  <dir>
                    <p onClick={()=>setCap3Node(!cap3Node)}>capitulo 3</p>
                    {
                      cap3Node && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../node/http"}>http</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../node/moduloHttp"}>modulo http</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../node/metodosReq"}>metodos req</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../node/metodosRes"}>metodos res</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../node/urlNode"}>Url</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../node/moduloUrl"}>modulo url</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../node/routing"}>routing node.js</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../node/nodemon"}>nodemon</NavLink>
                      </div>
                    }
                  </dir>


                  <dir>
                    <p onClick={()=>setCap4Node(!cap4Node)}>Express (capitulo 4)</p>
                    {
                      cap4Node && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../node/express"}>express</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../node/routingExpress"}>routing con express</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../node/parametrosUrl"}>paramtros url</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../node/parametrosQuerty"}>paramtros query</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../node/routers"}>Routers</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../node/estructura"}>Estructurar rutas</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../node/metodos"}>otros metodos</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../node/extra"}>Cosas extra</NavLink>

                      </div>
                    }
                  </dir>

                </div>
              }
            </li>

            {/* esto es python */}
            <li className="curso">
              <p onClick={()=>setPython(!python)}>python</p>
              {
                python && <div className="capitulos">

                  <div>
                    <p onClick={()=>setCap1Python(!cap1Python)}>capitulo 1</p>
                    {
                      cap1Python && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../python/importante"}>importante</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../python/datSimple"}>datos simples</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../python/variables"}>variables</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../python/datComp"}>datos compuestos (arreglos)</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../python/operadores"}>operadores</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../python/condicionales"}>condicionales</NavLink>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap2Python(!cap2Python)}>capitulo 2</p>
                    {
                      cap2Python && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../python/metCade"}>Metodos de cadena</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../python/metList"}>metodos de listas</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../python/metDicc"}>Metodos de diccionario</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../python/enDeDatos"}>entrada de datos</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../python/slicing"}>slicing</NavLink>
                      </div>
                    }

                  </div>

                  <div>
                    <p onClick={()=>setCap3Python(!cap3Python)}>capitulo 3</p>
                    {
                      cap3Python && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../python/variable2"}>variables 2 (la venganza)</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../python/diccionarios"}>diccionarios 2 (la venganza)</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../python/bucles"}>bucle for</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../python/while"}>bucle while</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../python/funcIntegradas"}>funciones integradas</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../python/funciones"}>funciones</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../python/lambda"}>funciones lambda</NavLink>


                      
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap4Python(!cap4Python)}>capitulo 4</p>
                    {
                      cap4Python && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../python/modulos"}>Modulos</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../python/enrruMod"}>Enrrutamiento de modulos</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../python/paquetes"}>paquetes</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../python/txtFile"}>archivos TXT</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../python/csvFile"}>archivos csv</NavLink>


                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap5Python(!cap5Python)}>capitulo 5</p>
                    {
                      cap5Python && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../python/graficos"}>graficos</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../python/poo1"}>{"P.O.O (parte 1)"}</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../python/poo2"}>{"P.O.O (parte 2)"}</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../python/abstralClass"}>clases abstractas</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../python/especialMethod"}>metodos especiales</NavLink>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap6Python(!cap6Python)}>capitulo 6</p>
                    {
                      cap6Python && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../python/excepciones"}>Excepciones</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../python/expRegular"}>Expreciones regulares</NavLink>

                        
                      </div>
                    }
                  </div>

                </div>
              }
            </li>


            {/* mySql */}
           <li className="curso">
              <p onClick={()=>setMySql(!mySql)}>mySql</p>
              {
                mySql && <div className="capitulos">
                  <div>
                    <p onClick={()=>setCap1MySql(!cap1MySql)}>capitulo 1</p>
                    {
                      cap1MySql && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../mySql/chen"}>notacion de chen</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../mySql/install"}>instalacion.</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../mySql/installBrowser"}>instalacion db browser.</NavLink>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap2MySql(!cap2MySql)}>capitulo 2</p>
                    {
                      cap2MySql && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../mySql/dark"}>configuracion (modo oscuro)</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../mySql/crear"}>crear base de datos..</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../mySql/tablas"}>tablas</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../mySql/primerCon"}>Primer consulta</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../mySql/tablaCode"}>Tabla con codigo</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../mySql/insert"}>Insertar datos</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../mySql/select"}>clausula select</NavLink>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap3MySql(!cap3MySql)}>capitulo 3</p>
                    {
                      cap3MySql && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../mySql/id"}>identificadores</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../mySql/claves"}>claves primarias y foraneas</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../mySql/select2"}>cosas extra</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../mySql/order"}>Order By</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../mySql/where"}>clausula WHERE</NavLink> 
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../mySql/logicos"}>Operadores logicos</NavLink> 
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../mySql/between"}>Operador between</NavLink> 
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap4MySql(!cap4MySql)}>capitulo 4</p>
                    {
                      cap4MySql && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../mySql/like"}>Operador like</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../mySql/null"}>null</NavLink> 
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../mySql/in"}>operador in</NavLink> 
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../mySql/funcAdd"}>funciones de agregacion</NavLink> 
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../mySql/comentarios"}>Comentarios</NavLink> 
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap5MySql(!cap5MySql)}>capitulo 5</p>
                    {
                      cap5MySql && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../mySql/groupBy"}>GROUP BY</NavLink> 
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../mySql/subConsultas"}>sub consultas</NavLink> 
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../mySql/join"}>join</NavLink> 
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../mySql/union"}>UNION</NavLink>
                      </div>
                    }
                  </div>
                  
                  <div>
                    <p onClick={()=>setCap6MySql(!cap6MySql)}>capitulo 6</p>
                    {
                      cap6MySql && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../mySql/cardinalidad"}>cardinalidad</NavLink> 
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../mySql/indices"}>Indices</NavLink> 
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../mySql/vistas"}>vistas</NavLink> 
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../mySql/bloqTransacc"}>bloque y transacciones</NavLink> 


                      </div>
                    }
                  </div>

                </div>
              }
            </li>



            {/* <li className="curso">
              <p onClick={()=>setPython(!python)}>python</p>
            </li> */}


          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Capitulos;