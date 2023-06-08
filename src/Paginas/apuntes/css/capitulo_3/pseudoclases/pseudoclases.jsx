import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import "./pseudoclases.css";

function Pseudoclases() {
  return (  
    <>
      <main>
        <h1>pseudoclases</h1>
        <Conseptos texto={`Las pseudoclases de CSS son usadas para seleccionar y aplicar estilos a elementos según su estado o posición en el documento. En resumen, se utilizan para aplicar estilos de forma dinámica a elementos según su interacción con el usuario o posición en la página.`}/>

        <h2>pseudocodigo</h2>
        <Css codigo={`elemento:pseudoclase{

}`}/>

        <h2>hover</h2>
        <Conseptos texto={`"hover" se activara cada que pases el mouse ensima del elemento , puedes poner el estilo que se te ocurra cualquier cosa.`}/>
        
        <Html codigo={`<p class="hover_e">
  hover.
</p>`}/>
        
        <Css codigo={`.hover_e:hover{
  color: wheat;
  background-color: black;
}`}/>
        <div className="website">
          <p className="hover_ejemplo">
            hover.
          </p>
        </div>

        <h2>link</h2>
        <Conseptos texto={`"link" detecta cuando el usuario hace click para que se desactive el estilo que le dimos en la pseudoclase y se ponga el estilo que le dimos al elemento por defecto.`}/>
        
        <Html codigo={`<a id="click" href="#">click aqui</a>`}/>
        
        <Css codigo={`#click{
  background-color: black;
  color: wheat;
}
#click:link{
  background-color: green;
}`}/>
        <div className="website">
          <a id="click" href="#">click aqui</a>
        </div>


        <h2> active</h2>
        <Conseptos texto={`"active" se activara cada que se mantenga clickeado el elemto al cual le pongamos esta pseudoclase.`}/>
        
        <Html codigo={`<button id="btn_1">
  hola xd
</button>`}/>
        
        <Css codigo={`#btn_1{
  background-color: black;
  color: wheat;
  display: block;
  margin: auto;
}
#btn_1:active{
  background-color: orange;
  color: black;
}`}/>
        <div className="website">
          <button id="btn_1">
              hola xd
          </button>
        </div>


        <h2>focus</h2>
        <Conseptos texto={`"focus" sirve mas que nada para inputs esta pseudoclase se activara cuando se haga click al elemento y el elemento se mantenga enfocado por asi decirlo.`}/>
        
        <Html codigo={`<input type="text" id="inputFeliz">`}/>
        
        <Css codigo={`#inputFeliz:focus{
  background-color: black;
  color: orange;
}`}/>
        <div className="website">
          <input type="text" id="inputFeliz" />
        </div>

      </main>
      <Footer />
    </>
  );
}

export default Pseudoclases;