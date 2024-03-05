import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import Resumenes from "../../../../../componentes/resumenes/resumenes";

function Br() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `<br> sirve para dejar un espacio en linea.`,
        lenguage: `Html`,
        codigo: `<p>
  esto tambien sera una <br>
  oracon demasiado larga pero tendra saltos <br>
  de linea pero esta vez tambien <br>
  estoy haciendo los saltos en linea en <br>
  el editor de codigo para que sea mas legible.
</p> `}]}/>
      <main>
        <h1>br</h1>
        <Conseptos texto={`Esta etiqueta sirve para dar saltos en linea por ejemplo al escribir algo largo , esta etiqueta no necesita una etiqueta de cierre como las otras etiquetas.

otras etiquetas:
<etiqueta></etiqueta>
con br:
<br>`} />
        <Html codigo={`<p>esta sera una oracion <br> demasiado larga pero aremos saltos <br> en linea gracias a br ya que esa es su <br> utilidad.</p>`}/>
        <div className="website">
          <p>
            esta sera una oracion <br /> demasiado larga pero aremos saltos <br /> en linea gracias a br ya que esa es su <br /> utilidad.
          </p>
        </div>
        <Conseptos texto={`para hacerlo mas legible y no todo este en una misma linea podemos hacer esto.`} />
        <Html codigo={`<p>
  esto tambien sera una <br>
  oracon demasiado larga pero tendra saltos <br>
  de linea pero esta vez tambien <br>
  estoy haciendo los saltos en linea en <br>
  el editor de codigo para que sea mas legible.
</p> 
`}/>
        <div className="website">
          <p>
            esto tambien sera una <br />
            oracon demasiado larga pero tendra saltos <br />
            de linea pero esta vez tambien <br />
            estoy haciendo los saltos en linea en <br />
            el editor de codigo para que sea mas legible.
          </p> 
        </div>
        <Conseptos texto={`como te habras dado cuenta podemos poner <br> en cualquier parte y se hara el salto de linea de forma automatica en nuestra pagina y no afecta si ponemos <br> en una oracion que va de corrido o si la oracion tambien tiene saltos de linea en el editor de codigo.`} />
      </main>
      <Footer />
    </>
  );
}

export default Br;