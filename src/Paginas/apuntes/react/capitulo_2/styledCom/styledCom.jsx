import Conseptos from "../../../../../componentes/conseptos/conseptos";
import ReactCode from "../../../../../componentes/lenguajes/React";
import Sintaxis from "../../../../../componentes/lenguajes/Sintaxis";
import Terminal from "../../../../../componentes/lenguajes/Terminal";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";
import "./styled.css";
import { useRef,useState } from "react";

function StyledComReact() {
  const fondo = useRef(null);
  const fondoAnimado = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const color =()=>{
    const preguntar = parseInt(prompt("de que color quieres que sea el fondo? 1 rojo 2 azul 3 verde"));
  
    if (preguntar === 1) {
      fondo.current.style.backgroundColor = "#f00";
    } else if (preguntar === 2){
      fondo.current.style.backgroundColor = "#00f";
    } else if (preguntar === 3){
      fondo.current.style.backgroundColor = "#0f0";
    } else {
      fondo.current.style.backgroundColor = "#ccc"
    }
  }
  
  const animar =()=>{
    setIsVisible(!isVisible);
    isVisible ? 
      fondoAnimado.current.classList.add("animarParrafoStyledComponent")
    :
      fondoAnimado.current.classList.remove("animarParrafoStyledComponent")
    }

  return (  
    <>
      <Menu2/>
      <main>
        <h1>Styled Component</h1>
        <Conseptos texto={`Esta es una libreria demasiado util para trabajar con los estilos ya que hacemos todo desde 1 archivo sin crear nada y podemos darle logica a los estilos.`}/>
        <h2>instalacion</h2>
        <Conseptos texto={`Para poder instalar esta libreria debemos acceder a nuestro proyecto de react osea en la misma ubicacion donde ponemos "npx start" para iniciar el server bien , alli debemos poner lo siguiente.
Esto instalara la libreria.`}/>
        <Terminal codigo={`npm install --save styled-components`}/>
        <Conseptos texto={`Una vez se instalo la libreria podemos importar nuestra libreria donde queramos.`}/>
        <ReactCode codigo={`import styled from "styled-components";`}/>
        <Conseptos texto={`La libreria tiene una gran gama de etuquetas html con lo cual podemos usarlas para dar estilos a nuestros componentes.`}/>
        <Sintaxis codigo={`const Ejemplo = styled.que etiqueta llamar\`
  codigo css;
\`;

<Ejemplo>
  el contenido
</Ejemplo>`}/>
        <h2>ejemplo de uso real</h2>
        <Conseptos texto={`Nota como te das cuenta a la hora de crear una nueva etiqueta siempe debe iniciar con mayuscula de lo contrario habra errores.`}/>
        <ReactCode codigo={`import styled from "styled-components";

export default function Ejemplo(){
  const Mayuscula = styled.h2\`
    background-color: #000;
    color: #fff;
  \`;

  return(
    <div>
      <Mayuscula>
        esto es un h2 pero estamos usando styled.
      </Mayuscula>
    </div>
  )
}`}/>
        <div className="website">
          <h5 style={{color: "#fff",backgroundColor: "#000"}}>esto es un h2 pero estamos usando styled.</h5>
        </div>
        <Conseptos texto={`Probablemente te habras dado cuenta que a la hora de escribir codigo css con styled usamos las template strings y el codigo se ve solo como una cadena de texto pero podemos arreglar eso con una extencion que se llama "vscode-styled-components" esto hara que el codigo escrito sea parecido a los colores de css.
buscar extencion:`}/>
        <div className="website">
          <h6>vscode-styled-components</h6>
        </div>
        <h2>pseudoclases</h2>
        <Conseptos texto={`Para usar pseudoclases debemos usar este simbolo "&".`}/>
        <h2>ejemplo</h2>
        <Sintaxis codigo={`const Ejemplo = styled.p\`
  background-color: #000;
  &:pseudoclase{
    background-color: #fff;
  }
\`;`}/>
        <h2>ejercicio</h2>
        <Conseptos texto={`Recuerda que styled component es una template string asi que podemos hacer algo como esto.`}/>
        <ReactCode codigo={`import React from "react";
import styled from "styled-components";

export default function Hooks(){

  const colorPrimario = "#0f0";
  const colorHover = "#00f";

  const Parrafo = styled.p\`
    background-color: ${"${colorPrimario}"};
    color: #000;
    transition-duration: .5s;
    transition-timing-function: ease-in-out;
    &:hover{
      color: #fff;
      background-color: ${"${colorHover}"};
    }
  \`;

  return(
    <div>
      <Parrafo>
        las letras cambiaran de color.
      </Parrafo>
    </div>
  )
}`}/>
        <div className="website">
          <p className="styledParrafoComponent">las letras cambiaran de color.</p>
        </div>

        <h2>funciones</h2>
        <Conseptos texto={`A estos tambien podemos concatenarles funciones para poder dar colores.`}/>
        <Sintaxis codigo={`const color = (colores) => {
  codigo programado.
}

const Contenedor = styled.div\`
  background-color: ${"${color(poner un parametro)}"}
\`;`}/>
        <h2>ejercicio</h2>
        <ReactCode codigo={`import React  from "react";
import styled from "styled-components";

let preguntarColor = prompt("de que color quieres que sea el fondo? 1 rojo 2 azul 3 verde"); 

export default function Hooks(){
  const colorFondo=(color)=>{
    if (color === "1") {
      return "#f00";
    } else if (color === "2"){
      return "#00f";
    } else if (color === "3"){
      return "#0f0";
    } else {
      return "#ccc"
    }
  }

  const Contenedor = styled.div\`
    background-color: ${"${colorFondo(preguntarColor)}"};
  \`;
  return(
    <Contenedor>
      <p>contenido</p>
    </Contenedor>
  )
}`}/>
        <div className="website">
          <button onClick={color}>ejecutar?</button>
 						<div ref={fondo}>
 							<p>contenido</p>
 						</div>
        </div>

        <h2>props</h2>
        <Conseptos texto={`A estos tambien podemos pasarles props y ponerlos colo propiedad por ejemplo.`}/>
        <Sintaxis codigo={`const Contenedor = styled.div\`
  backgrounnd-color: #fff;
  color: ${"${props=>props.color}"};
\`;

funcion {
  return(
    <Contenedor color="#000">
      <p>contenido</p>
    </Contenedor>
  )
}`}/>
        <h2>ejercicio</h2>
        <Conseptos texto={`En este caso vamos a destructurar para simplificar el codigo pero es lo mismo.`}/>
        <ReactCode codigo={`import React  from "react";
import styled from "styled-components";

export default function Hooks(){
  const Contenedor = styled.div\`
    background-color: #000;
    color: ${"${({color})=>color}"};
  \`;
  return(
    <Contenedor color="#0f0">
      <p>contenido</p>
    </Contenedor>
  )
}`}/>
        <div className="website">
          <p style={{color: "#0f0",backgroundColor:"#000"}}>contenido</p>
        </div>
        <h2>renderizado condicional</h2>
        <Conseptos texto={`Con esto podemos ejecutar una condicional para poder poner un color de fondo por defecto esto lo aremos con el operador logico "||".`}/>
        <ReactCode codigo={`import React  from "react";
import styled from "styled-components";

export default function Hooks(){
  const Parrafo = styled.p\`
    background-color: ${`$({fondo})=> fondo || "#000"`};
  \`;
  return(
    <div>
      <Parrafo fondo="#ccc">contenido</Parrafo>
      <Parrafo>contenido</Parrafo>
    </div>
  )
}`}/>
        <div className="website">
          <p style={{backgroundColor: "#ccc"}}>contenido</p>
          <p style={{backgroundColor: "#000",color: "#fff"}}>contenido</p>
        </div>

        <Conseptos texto={`A estos componentes podemos darles un renderizado condicional mas complejo por ejemplo si tal componente tiene tal propiedad que se ponga otros estilos.
Primero debemos importar css desde styled componentes para poder hacer esto.`}/>
        <Terminal codigo={`import syled , {css} from "styled-components";`}/>
        
        <h2>ejercicio</h2>
        <ReactCode codigo={`import React  from "react";
import styled , {css} from "styled-components";

export default function Hooks(){
  const Parrafo = styled.p\`
    background-color: ${"${({fondo})=>fondo || \"#000\"}"};
    ${`$\{props=>props.boton && css\`
      background-color: #5f2;
      color: #000;
      width: 85%;
      border-radius: 15px;
      margin: auto;
      cursor: pointer;
    \`\}`}
  \`;


  return(
    <div>
      <Parrafo fondo="#ccc">contenido</Parrafo>
      <Parrafo boton>contenido</Parrafo>
    </div>
  )
}`}/>
        <div className="website">
          <p style={{backgroundColor: "#ccc",color:"#fff"}}>contenido</p>
          <p style={{backgroundColor:"#5f2",color:"#000",width:"85%",borderRadius:"15px",margin:"auto",cursor:"pointer"}}>contenido</p>
        </div>

        <h2>animaciones</h2>
        <Conseptos texto={`Esta libreria nos trae la posibilidad de hacer animaciones al igual que css puro.
Para esto debemos importar keyframes.`}/>
        <ReactCode codigo={`import styled , {css,keyframes} from "styled-components";`}/>
        <Sintaxis codigo={`crear variable que sera el equivalente al nombre de animacion
antes @keyframe animacion { codigo animacion };
ahora: 
const animacion = keyframes\`
  codigo de animacion.
\`;

en estilos se llama igual que una animacion normal.
\`
  animation-name: ${"${animacion}"};
\`;`}/>
        <h2>ejercicio</h2>
        <ReactCode codigo={`import React  from "react";
import styled , {css,keyframes} from "styled-components";

export default function Hooks(){

  const animacion = keyframes\`
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  \`;

  const Parrafo = styled.p\`
    background-color: #000;
    color: #fff;
    animation-name: ${"${animacion}"};
    animation-duration: .5s;

  \`;
  return(
    <div>
      <Parrafo>contenido</Parrafo>
    </div>
  )
}`}/>
        <div className="website">
          <button onClick={animar}>ejecutar?</button>
          <p ref={fondoAnimado} className={"parrafoAnimacionStyledComponent"}>contenido</p>
        </div>

        <h2>ThemeProvider</h2>
        <Conseptos texto={`ThemeProvider es un componente de styled-components que permite asignar un tema unificado a todos los componentes hijos en una aplicación, lo que resulta en una fácil gestión y reutilización de estilos, y la posibilidad de cambiar el tema en tiempo de ejecución.
Para usar ThemeProvider debemos de importar esta funcionalidad.`}/>
        <ReactCode codigo={`import styled {css,keyframes,ThemeProvider} from "styled-components";`}/>
        <Conseptos texto={`Esto es como un contenedor donde podemos poner un objeto con el estilo que queremos que se pongan.`}/>
        <Sintaxis codigo={`const objetoConEstilos = {
 color: "#000",
 borde: "15px"
}

<ThemeProvider theme={objetoConEstilos}>
 <Componente>

  aqui dentro ponemos nuestro componente que queremos que se estilice con el objeto.
 
 </Componente>
</ThemeProvider>`}/>
        <Conseptos texto={`Y para poder usar los estilos debemos de extraer el objeto donde tenemos los estilos personalizados ejemplo.`}/>
        <Sintaxis codigo={`const Caja = styled.div{
 color: ${"${{theme}=>propiedad del objeto}"};
}
// para usarlos debemos destructurar theme que esta en el contenedor llamado "ThemeProvider";`}/>
        <h2>ejercicio</h2>
        <ReactCode codigo={`import React  from "react";
import styled , {css,keyframes,ThemeProvider} from "styled-components";

export default function Hooks(){

  const light={
    color: "#000",
    fondo: "#fff"
  }
  const dark={
    color: "#fff",
    fondo: "#000"
  }

  const Box = styled.div\`
    color: ${"${({theme})=>theme.color}"};
    background-color: ${"${({theme})=>theme.fondo}"};
    width: 50%;
    border-radius: 15px;
    margin: auto;
  \`;
  return(
    <div>
      <ThemeProvider theme={light}>
        <Box>caja clara</Box>
      </ThemeProvider>
      <ThemeProvider theme={dark}>
        <Box>caja oscura</Box>
      </ThemeProvider>
    </div>
  )
}`}/>
        <div className="website">
          <p className="cajaBlancaTheme">caja clara</p>
          <p className="cajaOscuraTheme">caja oscura</p>
        </div>

        <h2>heredar</h2>
        <Conseptos texto={`Nosotros podemos heredar los estilos de una caja y poder modificarlos a nuestro gusto.`}/>
        <Sintaxis codigo={`const EstiloQueHeredar = styled.div\`
 codigo css original.
\`;

const Herencia = styled(EstiloQueHeredar)\`
 codigo css que queremos agregar
\`;`}/>
        <h2>ejercicio</h2>
        <ReactCode codigo={`import React  from "react";
import styled , {css,keyframes,ThemeProvider} from "styled-components";

export default function Hooks(){

  const Caja = styled.div\`
    color: #fff;
    background-color: #000;
    width: 60%;
    margin: auto;
  \`;
  const Herencia = styled(Caja)\`
    border-radius: 15px;
    border: 2px solid #c5f;
  \`;

  return(
    <div>
      <Caja>
        contenido original
      </Caja>
      <Herencia>
        contenido heredado
      </Herencia>
    </div>
  )
}`}/>
        <div className="website">
          <p className="contenidoOriginalTheme">contenido original</p>
          <p className="contenidoHeredadoTheme">contenido heredado</p>
        </div>
        <h2>createGlobalStyle</h2>
        <Conseptos texto={`Para poder usar esta funcionalidad lo ideal es importarla en: imdex.js de react.`}/>
        <ReactCode codigo={`import styled , {createGlobalStyle} from "styled-components";`}/>
        <Conseptos texto={`Esto nos sirve para darles un estilo global a los elementos de nuestros componentes.`}/>
        <Sintaxis codigo={`const EstilosG = aqui llamamos a los estilos globales\`
  aqui estilizamos nuestros estilos globales.
\`;
return(
  <EstilosG />
  // aqui renderizamos nuestros esrtilos.
)`}/>
        <h2>ejemplo de uso</h2>
        <ReactCode codigo={`import React  from "react";
import styled , {createGlobalStyle, css,keyframes,ThemeProvider} from "styled-components";

export default function Hooks(){

  const EstilosGlobales = createGlobalStyle\`
    a{
      text-decoration: none;
    }\`
  ;

  return(
    <div>
      <EstilosGlobales />
      <a href="#">ejemplo</a>
    </div>
  )
}`}/>
        <div className="website">
          <p style={{color: "#00f",cursor: "pointer"}}>ejemplo</p>
        </div>
      </main>
      <Footer/>
    </>
  );
}


export default StyledComReact;