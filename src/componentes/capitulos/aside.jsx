import "./aside.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState,useRef } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Capitulos() {
  const navAside = useRef(null)


  // esto es el aside
  const [showOptions, setShowOptions] = useState(false);
  const aside = useRef(null);
  const toggleRedes = () => {
    setShowOptions(!showOptions);
    if(showOptions){
      aside.current.classList.remove("expandir")
      navAside.current.classList.add("quitarNavAside")
    } else{
      aside.current.classList.add("expandir")
      navAside.current.classList.remove("quitarNavAside")
    }
  };
  useEffect(()=>{
    const links = document.querySelectorAll(".temas a");
    if (links != null) {
      links.forEach(i=>{
        i.addEventListener(("click"),()=>{
          aside.current.classList.remove("expandir");
          setShowOptions(false)
          navAside.current.classList.add("quitarNavAside")
        })
      })
    } else {
      
      aside.current.classList.remove("expandir")
      setShowOptions(true)
      navAside.current.classList.remove("quitarNavAside")
    }
  })

  
  // capitulos
  const [logica, setLogica] = useState(false);
  const [html, setHtml] = useState(false);
  const [css, setCss] = useState(false);
  const [javaScript, setJavaScript] = useState(false);
  const [react, setReact] = useState(false);
  const [python, setPython] = useState(false);


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

  return (  
    <>
      <aside ref={aside}>

        <div className="botonAsideContent">
          <p>cursos</p>
          <FontAwesomeIcon
            icon={faChevronDown}
            onClick={toggleRedes}
            className={showOptions ? 'iconoAside rotar' : 'iconoAside'}
          />
        </div>
        
        <nav ref={navAside}>
          <ul>

            <li className="curso">
              <p onClick={()=>setLogica(!logica)}>logica</p>
              {
                logica && <div className="capitulos">
                  <div>
                    <p onClick={()=>setcap1Logica(!cap1Logica)}>capitulo 1</p>
                    {
                      cap1Logica && <div className="temas">
                        <Link to={"../logica/comenzar"}>Comenzar</Link>
                        <Link to={"../logica/tipo de datos"}>tipos de datos</Link>
                        <Link to={"../logica/operadores"}>operadores</Link>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap2Logica(!cap2Logica)}>capitulo 2</p>
                    {
                      cap2Logica && <div className="temas">
                        <Link to={"../logica/variables"}>variables</Link>
                        <Link to={"../logica/concatenacion"}>Concatenacion</Link>
                        <Link to={"../logica/inOuLogica"}>inputs y outputs</Link>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap3Logica(!cap3Logica)}>capitulo 3</p>
                    {
                      cap3Logica && <div className="temas">
                        <Link to={"../logica/condicionales"}>Condicionales</Link>
                        <Link to={"../logica/arreglos"}>Arreglos</Link>
                        <Link to={"../logica/arreglosBi"}>arreglos <br /> bidimencionales</Link>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap4Logica(!cap4Logica)}>capitulo 4</p>
                    {
                      cap4Logica && <div className="temas">
                        <Link to={"../logica/bucles"}>bucles</Link>
                        <Link to={"../logica/funciones"}>Funciones</Link>
                        <Link to={"../logica/pod"}>programacion <br />orientada a <br /> objetos(POD)</Link>
                      </div>
                    }
                  </div>
                </div>
              }
            </li>


            <li className="curso">
              <p onClick={()=>setHtml(!html)}>html</p>
              {
                html && <div className="capitulos">

                  <div>
                    <p onClick={()=>setCap1Html(!cap1Html)}>capitulo 1</p>
                    {
                      cap1Html && <div className="temas">
                        <Link to={"../html/importante leer esto"}>importante <br /> leer esto</Link>
                        <Link to={"../html/conseptos basicos"}>conseptos basicos</Link>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap2Html(!cap2Html)}>capitulo 2</p>
                    {
                      cap2Html && <div className="temas">
                        <Link to={"../html/etiquetas"}>etiquetas</Link>
                        <Link to={"../html/estructura html"}>estructura html</Link>
                        <Link to={"../html/html semantico"}>html semantico</Link>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap3Html(!cap3Html)}>capitulo 3</p>
                    {
                      cap3Html && <div className="temas">
                        <Link to={"../html/enlaces"}>enlaces</Link>
                        <Link to={"../html/br"}>br</Link>
                        <Link to={"../html/listas"}>listas</Link>
                        <Link to={"../html/multimedia"}>multimedia</Link>
                        <Link to={"../html/divs"}>divs</Link>
                        <Link to={"../html/formularios"}>formularios</Link>
                        <Link to={"../html/metadatos"}>metadatos</Link>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap4Html(!cap4Html)}>capitulo 4</p>
                    {
                      cap4Html && <div className="temas">
                        <Link to={"../html/mav"}>nav</Link>
                        <Link to={"../html/section y article"}>section y <br /> article</Link>
                        <Link to={"../html/aside"}>aside</Link>
                        <Link to={"../html/main"}>main</Link>
                        <Link to={"../html/footer"}>footer</Link>
                        <Link to={"../html/tablas"}>tablas</Link>
                        <Link to={"../html/extra"}>cositas extra</Link>
                      </div>
                    }
                  </div>
                </div>
              }
            </li>


            <li className="curso">
              <p onClick={()=>setCss(!css)}>css</p>
              {
                css && <div className="capitulos">
                  <div>
                    <p onClick={()=>setCap1Css(!cap1Css)}>capitulo 1</p>
                    {
                      cap1Css && <div className="temas">
                        <Link to={"../css/introduccion a css"}>introduccion <br /> a css</Link>
                        <Link to={"../css/selectores"}>selectores</Link>
                        <Link to={"../css/especificidad"}>especificidad</Link>
                        <Link to={"../css/metodologia BEM"}>metodologia BEM</Link>
                        <Link to={"../css/unidades"}>unidades</Link>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap2Css(!cap2Css)}>capitulo 2</p>
                    {
                      cap2Css && <div className="temas">
                        <Link to={"../css/background"}>background</Link>
                        <Link to={"../css/propiedades de texto"}>propiedades <br /> de texto</Link>
                        <Link to={"../css/normalize"}>normalize</Link>
                        <Link to={"../css/cajas"}>cajas</Link>
                        <Link to={"../css/padding"}>padding</Link>
                        <Link to={"../css/margin"}>margin</Link>
                        <Link to={"../css/border"}>border</Link>
                        <Link to={"../css/sombras"}>sombras</Link>
                        <Link to={"../css/outline"}>outline</Link>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap3Css(!cap3Css)}>capitulo 3</p>
                    {
                      cap3Css && <div className="temas">
                        <Link to={"../css/position"}>position</Link>
                        <Link to={"../css/display"}>display</Link>
                        <Link to={"../css/overflow"}>overflow</Link>
                        <Link to={"../css/float"}>float</Link>
                        <Link to={"../css/pseudoelementos"}>pseudoelementos</Link>
                        <Link to={"../css/pseudoclases"}>pseudoclases</Link>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap4Css(!cap4Css)}>capitulo 4</p>
                    {
                      cap4Css && <div className="temas">
                        <Link to={"../css/object fit"}>object fit</Link>
                        <Link to={"../css/cursor"}>cursor</Link>
                        <Link to={"../css/colorizacion"}>colorizacion</Link>
                        <Link to={"../css/responsive(basico)"}>responsive(basico)</Link>
                        <Link to={"../css/flexbox"}>flexbox</Link>
                        <Link to={"../css/order"}>order</Link>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap5Css(!cap5Css)}>capitulo 5</p>
                    {
                      cap5Css && <div className="temas">
                        <Link to={"../css/grid"}>grid</Link>
                        <Link to={"../css/responsive design"}>responsive design</Link>
                        <Link to={"../css/transition"}>transition</Link>
                        <Link to={"../css/animation"}>animation</Link>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap6Css(!cap6Css)}>capitulo 6</p>
                    {
                      cap6Css && <div className="temas">
                        <Link to={"../css/Cubic Bezier"}>Cubic Bezier</Link>
                        <Link to={"../css/Transform"}>Transform</Link>
                        <Link to={"../css/variables"}>variables</Link>
                        <Link to={"../css/filter"}>filter</Link>
                        <Link to={"../css/extraCss"}>cosas extrea <br /> de css</Link>
                        <Link to={"../css/linear"}>linear</Link>
                      </div>
                    }
                  </div>

                </div>
              }
            </li>


            <li className="curso">
              <p onClick={()=>setJavaScript(!javaScript)}>jsvaScript</p>
              {
                javaScript && <div className="capitulos">
                  <div>
                    <p onClick={()=>setCap1JavaScript(!cap1JavaScript)}>capitulo 1</p>
                    {
                      cap1JavaScript && <div className="temas">
                        <Link to={"../javaScript/recomendado"}>recomendaciones</Link>
                        <Link to={"../javaScript/javaScriptBasico"}>javaScript basico</Link>
                        <Link to={"../javaScript/enlazarJavaScript"}>enlazar javaScript</Link>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap2JavaScript(!cap2JavaScript)}>capitulo 2</p>
                    {
                      cap2JavaScript && <div className="temas">
                        <Link to={"../javaScript/variables"}>variables</Link>
                        <Link to={"../javaScript/javaScriptFun"}>funciones de <br />javaScript</Link>
                        <Link to={"../javaScript/prompt"}>prompt</Link>
                        <Link to={"../javaScript/operadores"}>Operadores</Link>
                        <Link to={"../javaScript/concatenacion"}>Concatenacion</Link>
                        <Link to={"../javaScript/camelCase"}>camelCase</Link>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap3JavaScript(!cap3JavaScript)}>capitulo 3</p>
                    {
                      cap3JavaScript && <div className="temas">
                        <Link to={"../javaScript/condicionales"}>Condicionales</Link>
                        <Link to={"../javaScript/arreglos"}>arrglos</Link>
                        <Link to={"../javaScript/arreglosAsociativos"}>arreglos <br />asociativos</Link>
                        <Link to={"../javaScript/bucles"}>bucles</Link>
                        <Link to={"../javaScript/funciones"}>funciones</Link>
                        <Link to={"../javaScript/PODJavaScript"}>programacion <br /> orientado a <br /> objetos(POD)</Link>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap4JavaScript(!cap4JavaScript)}>capitulo 4</p>
                    {
                      cap4JavaScript && <div className="temas">
                        <Link to={"../javaScript/metodosCadena"}>Metodos de <br /> cadena</Link>
                        <Link to={"../javaScript/metodosArreglo"}>Metodos de <br />arreglos</Link>
                        <Link to={"../javaScript/objectMath"}>object Math</Link>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap5JavaScript(!cap5JavaScript)}>capitulo 5</p>
                    {
                      cap5JavaScript && <div className="temas">
                        <Link to={"../javaScript/DOM"}>DOM</Link>
                        <Link to={"../javaScript/SelectoresJavaScript"}>selectores de <br /> elementos</Link>
                        <Link to={"../javaScript/atributosJs"}>atributos</Link>
                        <Link to={"../javaScript/atributoGlobal"}>atributos <br />globales</Link>
                        <Link to={"../javaScript/attrInput"}>atributos de <br /> inputs</Link>
                        <Link to={"../javaScript/clasesMet"}>clases y <br /> metodos</Link>
                        <Link to={"../javaScript/obtenMod"}>obtencion y <br /> modificacion de <br /> contenido</Link>
                        <Link to={"../javaScript/creacionEle"}>creacion de <br /> elementos</Link>
                        <Link to={"../javaScript/obChild"}>obtencion de <br /> childs</Link>
                        <Link to={"../javaScript/propChild"}>propiedades <br /> de childs</Link>
                        <Link to={"../javaScript/propPar"}>propiedades de <br /> parents</Link>
                        <Link to={"../javaScript/PropSi"}>propiedades de <br /> sibling</Link>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap6JavaScript(!cap6JavaScript)}>capitulo 6</p>
                    {
                      cap6JavaScript && <div className="temas">
                        <Link to={"../javaScript/window1"}>window 1</Link>
                        <Link to={"../javaScript/window2"}>window 2</Link>
                        <Link to={"../javaScript/window3"}>window 3</Link>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap7JavaScript(!cap7JavaScript)}>capitulo 7</p>
                    {
                      cap7JavaScript && <div className="temas">
                        <Link to={"../javaScript/eventListen"}>eventos de <br /> escucha</Link>
                        <Link to={"../javaScript/eventFlujo"}>flujo de <br /> eventos</Link>
                        <Link to={"../javaScript/MouseEvent"}>mouse events</Link>
                        <Link to={"../javaScript/keyEvent"}>eventos de <br /> teclado</Link>
                        <Link to={"../javaScript/interEvent"}>eventos de <br /> la interfaz</Link>
                        <Link to={"../javaScript/timers"}>timers</Link>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap8JavaScript(!cap8JavaScript)}>capitulo 8</p>
                    {
                      cap8JavaScript && <div className="temas">
                        <Link to={"../javaScript/controlFlujo"}>control de <br /> flujo(teorico)</Link>
                        <Link to={"../javaScript/switch"}>switch</Link>
                        <Link to={"../javaScript/ManErr"}>manejo de <br />errores</Link>
                        <Link to={"../javaScript/callbacks"}>callbacks</Link>
                        <Link to={"../javaScript/promesas"}>Promesas</Link>
                        <Link to={"../javaScript/awaitAsync"}>await y async</Link>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap9JavaScript(!cap9JavaScript)}>capitulo 9</p>
                    {
                      cap9JavaScript && <div className="temas">
                        <Link to={"../javaScript/json"}>JSON</Link>
                        <Link to={"../javaScript/Ajsx"}>AJAX</Link>
                        <Link to={"../javaScript/fetch"}>fetch</Link>
                        <Link to={"../javaScript/axios"}>axios</Link>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap10JavaScript(!cap10JavaScript)}>capitulo 10</p>
                    {
                      cap10JavaScript && <div className="temas">
                        <Link to={"../javaScript/proto"}>prototipos</Link>
                        <Link to={"../javaScript/carProto"}>caracteristicas de <br /> prototipos</Link>
                        <Link to={"../javaScript/strictMod"}>Strict Mode</Link>
                        <Link to={"../javaScript/funciones2"}>funciones parte2 <br /> (la venganza :v)</Link>
                        <Link to={"../javaScript/thisCon"}>this <br /> contextual</Link>
                        <Link to={"../javaScript/recursividad"}>Recursividad</Link>
                        <Link to={"../javaScript/clausulas"}>clausulas</Link>
                        <Link to={"../javaScript/paramDefaul"}>parametros por <br /> defecto</Link>
                        <Link to={"../javaScript/paramRest"}>parametro rest</Link>
                        <Link to={"../javaScript/opTerna"}>operador <br /> ternario</Link>
                        <Link to={"../javaScript/opSpread"}>operador <br /> spread</Link>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap11JavaScript(!cap11JavaScript)}>capitulo 11</p>
                    {
                      cap11JavaScript && <div className="temas">
                        <Link to={"../javaScript/objDate"}>objeto Date</Link>
                        <Link to={"../javaScript/locSeJs"}>LocalStorage y <br /> SessionStorage</Link>
                        
                      </div>
                    }
                  </div>

                </div>
              }
            </li>


            <li className="curso">
              <p onClick={()=>setReact(!react)}>react</p>
            </li>


            <li className="curso">
              <p onClick={()=>setPython(!python)}>python</p>
            </li>


          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Capitulos;