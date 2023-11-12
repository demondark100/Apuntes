import { Link } from "react-router-dom";
import MensajeModal from "../../../../../componentes/MensajeModal/mensajeModal";
import "./cap5.css";
import { useState } from "react";
import ShowOptions from "../../../../../componentes/showOptions/show"

function Cap5ProyCss() {

  const [mostrar, setMostrar] = useState(false);
  const boton=()=>{
    setMostrar(true)
  }

  return (  
    <>
      <ShowOptions 
        link={`../`}
        html={`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <title>Título de la página</title>
  </head>
  <body>
    <main>
        <div class="contenedorCap5CssProyBody">
            <div class="contenedorCap5CssProyContentBuscador">
              <input type="text" class="contenedorCap5CssProyInput" placeholder="buscar lenguaje"/>
              <button class="contenedorCap5CssProyBtn" onClick={boton}>buscar</button>
            </div>
          <div class="contenedorCap5CssProy">
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
    </main>
  </body>
</html>`}
        css={`main{
  width: 100vw;
  height: 100vh;
}
.contenedorCap5CssProyBody{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://www.xtrafondos.com/wallpapers/ciudad-al-atardecer-5052.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  flex-direction: column;
  overflow: auto;
}

.contenedorCap5CssProyContentBuscador{
  position: absolute;
  background-color: #fff;
  top: 5%;
  margin-bottom: 35px;
  border-radius: 150px;
  overflow: hidden;
  width: 75%;
  height: 6%;
  max-height: 25px;
  display: flex;
}
.contenedorCap5CssProyInput{
  height: 100%;
  border: none;
  outline: none;
  display: block;
  margin: 0 !important;
}
.contenedorCap5CssProyBtn{
  height: 100%;
  margin-top: 0;
  border: none;
  outline: none;
  background-color: #0f0;
  margin-left: 0;
  margin-right: 0;
  cursor: pointer;
  position: absolute;
  left: 75%;
  padding: 0;
  width: 25%;

}

.contenedorCap5CssProy{
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(2 , 1fr);
  grid-template-rows: repeat(5, 1fr);
  width: 75%;
  max-width: 500px;
  background-color: #0000007a;
  backdrop-filter: blur(3px);
  padding: 25px;
  max-height: 500px;
  max-width: 500px;
  overflow: auto;
}
.contenedorCap5CssProy::-webkit-scrollbar{
  display: none;
}
.contenedorCap5CssProy div img{
  display: block;
  margin: auto;
  animation-name: animarImage;
  animation-duration: 2s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  cursor: pointer;
}
@keyframes animarImage {
  0%{
    width: 65%;
  }
  100%{
    width: 75%;
  }
}
.contenedorCap5CssProy p{
  text-align: center;
  animation-name: parrafoAnimar;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
@keyframes parrafoAnimar{
  0%{
    color: #2b86ee;
  }
  25%{
    color: #34f183;
  }
  50%{
    color: #7311c4;
  }
  75%{
    color: #fff;
  }
  100%{
    color: #34f183;
  }
}


@media (min-width: 750px){
  .contenedorCap5CssProy{
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(3,1fr);
    width: 45%;
    height: 55%;
    gap: 15px;
  }
  .contenedorCap5CssProyContentBuscador{
    width: 25%;
    top: 5%;
    max-width: 500px;
  }
  .contenedorCap5CssProy div img{
    animation-name: animarImage;
    animation-duration: 1s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
  }
  @keyframes animarImage {
    0%{
      width: 55%;
    }
    100%{
      width: 60%;
    }
  }
}`}
      />
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