import { Link } from "react-router-dom";
import MensajeModal from "../../../../../componentes/MensajeModal/mensajeModal";
import Volver from "../../../../../componentes/volver/volver";
import "./cap5.css";
import { useState } from "react";

function Cap5ProyCss() {

  const [mostrar, setMostrar] = useState(false);
  const boton=()=>{
    setMostrar(true)
  }

  return (  
    <>
      <Volver link={"../"}/>
      <MensajeModal texto={`¡Proyecto! ¡capitulo 5

Hacer un buscador de lenguajes de programacion , solo debe ser estetico no programar nada.

Recuerda que aprendimos:
1. grid.
2. responsive design.
3. transition.
4. animation.`}/>
      {
        mostrar && <MensajeModal texto={`Este boton no tiene ninguna funcion :v`}/>
      }
      <div className="Page">
        <div className="contenedorCap5CssProyBody">
            <div className="contenedorCap5CssProyContentBuscador">
              <input type="text" className="contenedorCap5CssProyInput" placeholder="buscar lenguaje"/>
              <button className="contenedorCap5CssProyBtn" onClick={boton}>buscar</button>
            </div>
          <div className="contenedorCap5CssProy">
            <div>
              <Link to={"../javaScript/recomendado"}><img src="https://th.bing.com/th/id/OIP.I2iERaOxGQWmdtMOhZJYhAHaEK?w=322&h=181&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="javaScript" /></Link>
              <p>javaScript</p>
            </div>
            <div>
              <Link to={"../python/importante"}><img src="https://th.bing.com/th/id/OIP.eCl3WiXx7ZCtzJ2fSIKrzAHaEh?w=257&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="python" /></Link>
              <p>python</p>
            </div>
            <div>
              <img src="https://th.bing.com/th/id/OIP.nypPQg79EI1vULcVa4bveQHaEK?w=313&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="java" />
              <p>java</p>
            </div>
            <div>
              <img src="https://th.bing.com/th/id/OIP.Uk8w6p9WC9hjKzl8RLFzQAHaDW?w=349&h=158&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="ruby" />
              <p>ruby</p>
            </div>
            <div>
              <img src="https://th.bing.com/th/id/OIP.JJEOFwpWr35GltPm2UKkgQHaD9?w=274&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="kotlin" />
              <p>kotlin</p>
            </div>
            <div>
              <img src="https://th.bing.com/th/id/OIP.4tLqopDJvFNTFDeCgFRIHQHaD4?w=316&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="c" />
              <p>c</p>
            </div>
            <div>
              <Link to={"../react/creacion"}><img src="https://th.bing.com/th/id/OIP.XMJOqsxF3JuXexojdz01FQHaEK?w=293&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="react" /></Link>
              <p>react</p>
            </div>
            <div>
              <img src="https://th.bing.com/th/id/OIP.ph3Srp2N_rVm0o17noaKdAHaF7?w=226&h=181&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="c++" />
              <p>c++</p>
            </div>
            <div>
              <img src="https://th.bing.com/th/id/OIP.AaLCiHaxV61OpnQ_O5mYzwAAAA?w=200&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="go" />
              <p>go</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cap5ProyCss;