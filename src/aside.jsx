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


// html
// capitulos
const [cap1Html, setCap1Html] = useState(false);
const [cap2Html, setCap2Html] = useState(false);
const [cap3Html, setCap3Html] = useState(false);
const [cap4Html, setCap4Html] = useState(false);

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
                    <p>capitulo 1</p>
                  </div>
                  <div>
                    <p>capitulo 2</p>
                  </div>
                  <div>
                    <p>capitulo 3</p>
                  </div>
                  <div>
                    <p>capitulo 4</p>
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
                        <Link to={"../html/importante leer esto"}>importante leer esto</Link>
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
                        <Link to={",,/html/divs"}>divs</Link>
                        <Link to={"../html/formularios"}>formularios</Link>
                        <Link to={"../html/metadatos"}>metadatos</Link>
                      </div>
                    }
                  </div>

                  <div>
                    <p onClick={()=>setCap4Html(!cap4Html)}>capitulo 4</p>
                    {
                      cap4Html && <div className="temas">
                        <Link to={"../html/mav"}></Link>
                        <Link to={"../html/section y article"}>section y article</Link>
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
                    <p>capitulo 1</p>
                  </div>
                  <div>
                    <p>capitulo 2</p>
                  </div>
                  <div>
                    <p>capitulo 3</p>
                  </div>
                  <div>
                    <p>capitulo 4</p>
                  </div>
                  <div>
                    <p>capitulo 5</p>
                  </div>
                  <div>
                    <p>capitulo 6</p>
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