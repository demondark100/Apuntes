import "./aside.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState,useRef } from "react";
import { Link } from "react-router-dom";

function Capitulos() {

  // esto es el aside
  const [showOptions, setShowOptions] = useState(false);
  const aside = useRef(null);
  const toggleRedes = () => {
    setShowOptions(!showOptions);
    if(showOptions){
      aside.current.classList.remove("expandir")
    } else{aside.current.classList.add("expandir")}
  };


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
        
        <nav>
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