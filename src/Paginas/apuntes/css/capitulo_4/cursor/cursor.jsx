import Footer from "../../../../../componentes/menus/Footer";
import Html from "../../../../../componentes/lenguajes/Html";
import Css from "../../../../../componentes/lenguajes/Css";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import "./cursor.css";

function Cursor() {
  return (  
    <>
      <main>
        <h1>cursor</h1>

        <Conseptos texto={`El cursor es el puntero del mouse a este tambien se le puede modificar las propiedades.`}/>
        
        <Html codigo={`<p class="cursor_1">
  pasa el mouse aqui.
</p>`}/>
        
        <Css codigo={`.cursor_1{
  background-color: gray;
  cursor: pointer;
}`}/>
        <div className="website">
          <p className="cursor_1">
              pasa el mouse aqui.
          </p>
        </div>
        <Conseptos texto={`"pointer" cambia la flechita por una manito , esto se puede aplicar a cualquier elemento.`}/>


        <Conseptos texto={`{cursors} tienes todos los cursores para que puedas usarlos en tus proyectos.

Recuerda para usar la propiedad siempre sera asi.
cursor: tipo de cursor;`}
      enlaces={{cursors: {url: "https://www.w3schools.com/cssref/tryit.php?filename=trycss_cursor" , text: "aqui"}}}
      targetBlank={true}
      />

      </main>
      <Footer />
    </>
  );
}

export default Cursor;