import "./aside.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

function Capitulos({contentMenu,estadoMenu,sendshowAside,sendasideMb ,sendasidePc,active}) {

  // esto es el aside


  // esta funcion activa y desactiva el estado del cuando se haga click en el p principal
  const [activeElement, setActiveElement] = useState("");
  const handleElementClick = (element) => {
    setActiveElement(element);

    if (element === "p1") {
      setLogica(!logica);
    } else if (element === "p2") {
      setHtml(!html);
    } else if (element === "p3") {
      setCss(!css);
    } else if (element === "p4") {
      setJavaScript(!javaScript);
    } else if (element === "p5") {
      setGit(!git);
    } else if (element === "p6") {
      setReact(!react);
    } else if (element === "p7") {
      setPython(!python);
    } else if (element === "p8") {
      setPendejadas(!pendejadas);
    }
  };

  // esta funcion activa y desactiva el estado del cuando se haga click en el p principal
  const [activeTemas, setActiveTemas] = useState("");
  const hundleActiveTemas = (element) => {
    setActiveTemas(element);

    if (element === "p1") {         // todo esto es logica
      setcap1Logica(!cap1Logica)
    } else if (element === "p2") {
      setCap2Logica(!cap2Logica)
    } else if (element === "p3") {
      setCap3Logica(!cap3Logica)
    } else if (element === "p4") {
      setCap4Logica(!cap4Logica)      
    } else if (element === "p5") {    //todo esto es html
      setCap1Html(!cap1Html)
    } else if (element === "p6") {
      setCap2Html(!cap2Html)
    } else if (element === "p7") {
      setCap3Html(!cap3Html)
    } else if (element === "p8") {
      setCap4Html(!cap4Html)
    } else if (element === "p9") {      //esto es css
      setCap1Css(!cap1Css)
    } else if (element === "p10") {
      setCap2Css(!cap2Css)
    } else if (element === "p11") {    
      setCap3Css(!cap3Css)
    } else if (element === "p12") {
      setCap4Css(!cap4Css)
    } else if (element === "p13") {
      setCap5Css(!cap5Css)
    } else if (element === "p14") {
      setCap6Css(!cap6Css)
    } else if (element === "p15") {    //todo esto es javaScript
      setCap1JavaScript(!cap1JavaScript)
    } else if (element === "p16") {
      setCap2JavaScript(!cap2JavaScript)
    } else if (element === "p17") {
      setCap3JavaScript(!cap3JavaScript)
    } else if (element === "p18") {
      setCap4JavaScript(!cap4JavaScript)
    } else if (element === "p19") {      
      setCap5JavaScript(!cap5JavaScript)
    } else if (element === "p20") {
      setCap6JavaScript(!cap6JavaScript)
    } else if (element === "p21") {
      setCap7JavaScript(!cap7JavaScript)
    } else if (element === "p22") {
      setCap8JavaScript(!cap8JavaScript)
    } else if (element === "p23") {
      setCap9JavaScript(!cap9JavaScript)
    } else if (element === "p24") {
      setCap10JavaScript(!cap10JavaScript)
    } else if (element === "p25") {
      setCap11JavaScript(!cap11JavaScript)
    } else if (element === "p26") {
      setCap12JavaScript(!cap12JavaScript)
    } else if (element === "p27") {           // esto es git
      setCap1Git(!cap1Git)
    } else if (element === "p28") {           // esto es react
      setCap1React(!cap1React)
    } else if (element === "p29") {
      setCap2React(!cap2React)
    } else if (element === "p30") {           
      setCap3React(!cap3React)
    } else if (element === "p31") {           // esto es python
      setCap1Python(!cap1Python)
    } else if (element === "p32") {
      setCap2Python(!cap2Python)
    } else if (element === "p33") {           
      setCap3Python(!cap3Python)
    } else if (element === "p34") {           //esto es pendejadas    
      setCap1Pendejadas(!cap1Pendejadas)
    }
  };
  // estos son los estilos de claro y oscuro de los capitulos
  useEffect(()=>{
    if (active == true) {
      document.querySelector("aside").classList.add("asideDark");
      document.querySelectorAll(".curso").forEach(i=>i.classList.add("cursosDark"))
      document.querySelectorAll(".activeParrafo").forEach(i=>i.classList.add("activeParrafoDark"))
    } else if (active == false){
      document.querySelector("aside").classList.remove("asideDark");
      document.querySelectorAll(".curso").forEach(i=>i.classList.remove("cursosDark"))
      document.querySelectorAll(".activeParrafo").forEach(i=>i.classList.remove("activeParrafoDark"))
    }
  })
  
  // capitulos
  const [logica, setLogica] = useState(false);
  const [html, setHtml] = useState(false);
  const [css, setCss] = useState(false);
  const [javaScript, setJavaScript] = useState(false);
  const [git, setGit] = useState(false);
  const [react, setReact] = useState(false);
  const [python, setPython] = useState(false);
  const [pendejadas, setPendejadas] = useState(false);




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


  // python
  // capitulos
  const [cap1Python, setCap1Python] = useState(false);
  const [cap2Python, setCap2Python] = useState(false);
  const [cap3Python, setCap3Python] = useState(false);

  // pendejadas
  // capitulos
  const [cap1Pendejadas, setCap1Pendejadas] = useState(false);

  return (  
    <>
      <aside>
        <nav>
          <ul>
            
            {/* esto es el curso de logica de programacion */}
            <li className="curso">
              <p 
                className={activeElement === "p1" ? "activeParrafo" : ""}
                onClick={() => handleElementClick("p1")}
              >logica</p>
              {
                logica && <div className="capitulos">
                  <div>
                    <p 
                      className={activeTemas === "p1" ? "activeParrafoTemas" : ""}
                      onClick={() => hundleActiveTemas("p1")}
                    >capitulo 1</p>
                    {
                      cap1Logica && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../logica/comenzar"}>Comenzar</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../logica/tipo de datos"}>tipos de datos</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../logica/operadores"}>operadores</NavLink>
                      </div>
                    }
                  </div>

                  <div>
                    <p 
                      className={activeTemas === "p2" ? "activeParrafoTemas" : ""}
                      onClick={() => hundleActiveTemas("p2")}
                    >capitulo 2</p>
                    {
                      cap2Logica && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../logica/variables"}>variables</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../logica/concatenacion"}>Concatenacion</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../logica/inOuLogica"}>inputs y outputs</NavLink>
                      </div>
                    }
                  </div>

                  <div>
                    <p 
                      className={activeTemas === "p3" ? "activeParrafoTemas" : ""}
                      onClick={() => hundleActiveTemas("p3")}
                    >capitulo 3</p>
                    {
                      cap3Logica && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../logica/condicionales"}>Condicionales</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../logica/arreglos"}>Arreglos</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../logica/arreglosBi"}>arreglos bidimencionales</NavLink>
                      </div>
                    }
                  </div>

                  <div>
                    <p 
                      className={activeTemas === "p4" ? "activeParrafoTemas" : ""}
                      onClick={() => hundleActiveTemas("p4")}
                    >capitulo 4</p>
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
              <p 
                className={activeElement === "p2" ? "activeParrafo" : ""}
                onClick={() => handleElementClick("p2")}
              >html</p>
              {
                html && <div className="capitulos">

                  <div>
                    <p 
                      className={activeTemas === "p5" ? "activeParrafoTemas" : ""}
                      onClick={() => hundleActiveTemas("p5")}
                    >capitulo 1</p>
                    {
                      cap1Html && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../html/importante leer esto"}>importante leer esto</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../html/conseptos basicos"}>conseptos basicos</NavLink>
                      </div>
                    }
                  </div>

                  <div>
                    <p 
                      className={activeTemas === "p6" ? "activeParrafoTemas" : ""}
                      onClick={() => hundleActiveTemas("p6")}
                    >capitulo 2</p>
                    {
                      cap2Html && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../html/etiquetas"}>etiquetas</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../html/estructura html"}>estructura html</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../html/html semantico"}>html semantico</NavLink>
                      </div>
                    }
                  </div>

                  <div>
                    <p 
                      className={activeTemas === "p7" ? "activeParrafoTemas" : ""}
                      onClick={() => hundleActiveTemas("p7")}
                    >capitulo 3</p>
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
                    <p 
                      className={activeTemas === "p8" ? "activeParrafoTemas" : ""}
                      onClick={() => hundleActiveTemas("p8")}
                    >capitulo 4</p>
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
              <p 
                className={activeElement === "p3" ? "activeParrafo" : ""}
                onClick={() => handleElementClick("p3")}
              >css</p>
              {
                css && <div className="capitulos">

                  <div>
                    <p 
                      className={activeTemas === "p9" ? "activeParrafoTemas" : ""}
                      onClick={() => hundleActiveTemas("p9")}
                    >capitulo 1</p>
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
                    <p 
                      className={activeTemas === "p10" ? "activeParrafoTemas" : ""}
                      onClick={() => hundleActiveTemas("p10")}
                    >capitulo 2</p>
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
                    <p 
                      className={activeTemas === "p11" ? "activeParrafoTemas" : ""}
                      onClick={() => hundleActiveTemas("p11")}
                    >capitulo 3</p>
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
                    <p 
                      className={activeTemas === "p12" ? "activeParrafoTemas" : ""}
                      onClick={() => hundleActiveTemas("p12")}
                    >capitulo 4</p>
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
                    <p 
                      className={activeTemas === "p13" ? "activeParrafoTemas" : ""}
                      onClick={() => hundleActiveTemas("p13")}
                    >capitulo 5</p>
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
                    <p 
                      className={activeTemas === "p14" ? "activeParrafoTemas" : ""}
                      onClick={() => hundleActiveTemas("p14")}
                    >capitulo 6</p>
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
              <p 
                className={activeElement === "p4" ? "activeParrafo" : ""}
                onClick={() => handleElementClick("p4")}
              >jsvaScript</p>
              {
                javaScript && <div className="capitulos">

                  <div>
                    <p 
                      className={activeTemas === "p15" ? "activeParrafoTemas" : ""}
                      onClick={() => hundleActiveTemas("p15")}
                    >capitulo 1</p>
                    {
                      cap1JavaScript && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/recomendado"}>recomendaciones</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/javaScriptBasico"}>javaScript basico</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/enlazarJavaScript"}>enlazar javaScript</NavLink>
                      </div>
                    }
                  </div>

                  <div>
                    <p 
                      className={activeTemas === "p16" ? "activeParrafoTemas" : ""}
                      onClick={() => hundleActiveTemas("p16")}
                    >capitulo 2</p>
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
                    <p 
                      className={activeTemas === "p17" ? "activeParrafoTemas" : ""}
                      onClick={() => hundleActiveTemas("p17")}
                    >capitulo 3</p>
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
                    <p 
                      className={activeTemas === "p18" ? "activeParrafoTemas" : ""}
                      onClick={() => hundleActiveTemas("p18")}
                    >capitulo 4</p>
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
                    <p 
                      className={activeTemas === "p19" ? "activeParrafoTemas" : ""}
                      onClick={() => hundleActiveTemas("p19")}
                    >capitulo 5</p>
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
                    <p 
                      className={activeTemas === "p20" ? "activeParrafoTemas" : ""}
                      onClick={() => hundleActiveTemas("p20")}
                    >capitulo 6</p>
                    {
                      cap6JavaScript && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/window1"}>window 1</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/window2"}>window 2</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../javaScript/window3"}>window 3</NavLink>
                      </div>
                    }
                  </div>

                  <div>
                    <p 
                      className={activeTemas === "p21" ? "activeParrafoTemas" : ""}
                      onClick={() => hundleActiveTemas("p21")}
                    >capitulo 7</p>
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
                    <p 
                      className={activeTemas === "p22" ? "activeParrafoTemas" : ""}
                      onClick={() => hundleActiveTemas("p22")}
                    >capitulo 8</p>
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
                    <p 
                      className={activeTemas === "p23" ? "activeParrafoTemas" : ""}
                      onClick={() => hundleActiveTemas("p23")}
                    >capitulo 9</p>
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
                    <p 
                      className={activeTemas === "p24" ? "activeParrafoTemas" : ""}
                      onClick={() => hundleActiveTemas("p24")}
                    >capitulo 10</p>
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
                    <p 
                      className={activeTemas === "p25" ? "activeParrafoTemas" : ""}
                      onClick={() => hundleActiveTemas("p25")}
                    >capitulo 11</p>
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
                    <p 
                      className={activeTemas === "p26" ? "activeParrafoTemas" : ""}
                      onClick={() => hundleActiveTemas("p26")}
                    >capitulo 12</p>
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
              <p 
                className={activeElement === "p5" ? "activeParrafo" : ""}
                onClick={() => handleElementClick("p5")}
              >git</p>
              {
                git && <div className="capitulos">

                  <div>
                    <p 
                      className={activeTemas === "p27" ? "activeParrafoTemas" : ""}
                      onClick={() => hundleActiveTemas("p27")}
                    >capitulo 1</p>
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
              <p 
                className={activeElement === "p6" ? "activeParrafo" : ""}
                onClick={() => handleElementClick("p6")}
              >react</p>
              {
                react && <div className="capitulos">

                    <div>
                      <p 
                      className={activeTemas === "p28" ? "activeParrafoTemas" : ""}
                      onClick={() => hundleActiveTemas("p28")}
                      >capitulo 1</p>
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
                      <p 
                      className={activeTemas === "p29" ? "activeParrafoTemas" : ""}
                      onClick={() => hundleActiveTemas("p29")}
                      >capitulo 2</p>
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
                      <p 
                      className={activeTemas === "p30" ? "activeParrafoTemas" : ""}
                      onClick={() => hundleActiveTemas("p30")}
                      >capitulo 3</p>
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

            {/* esto es python */}
            <li className="curso">
              <p 
                className={activeElement === "p7" ? "activeParrafo" : ""}
                onClick={() => handleElementClick("p7")}
              >python</p>
              {
                python && <div className="capitulos">

                  <div>
                    <p 
                      className={activeTemas === "p31" ? "activeParrafoTemas" : ""}
                      onClick={() => hundleActiveTemas("p31")}
                    >capitulo 1</p>
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
                    <p 
                      className={activeTemas === "p32" ? "activeParrafoTemas" : ""}
                      onClick={() => hundleActiveTemas("p32")}
                    >capitulo 2</p>
                    {
                      cap2Python && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../python/metCade"}>Metodos de cadena</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../python/metList"}>metodos de listas</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../python/metDicc"}>Metodos de diccionario</NavLink>
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../python/enDeDatos"}>entrada de datos</NavLink>
                      </div>
                    }

                  </div>

                  <div>
                    <p 
                      className={activeTemas === "p33" ? "activeParrafoTemas" : ""}
                      onClick={() => hundleActiveTemas("p33")}
                    >capitulo 3</p>
                    {
                      cap3Python && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../python/variable2"}>variables 2.0 (la venganza)</NavLink>
                      </div>
                    }
                  </div>

                </div>
              }
            </li>

            {/* estas son pendejadas literalmente xd */}
            <li className="curso">
              <p 
                className={activeElement === "p8" ? "activeParrafo" : ""}
                onClick={() => handleElementClick("p8")}
              >pendejadas</p>
              {
                pendejadas && <div className="capitulos">

                  <div className="temas">
                    <p 
                      className={activeTemas === "p34" ? "activeParrafoTemas" : ""}
                      onClick={() => hundleActiveTemas("p34")}
                    >calculadora pendeja</p>
                    {
                      cap1Pendejadas && <div className="temas">
                        <NavLink className={(data)=>data.isActive ? "active":"desactive"} to={"../pendejadas/calculadora"}>calculadora</NavLink>
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