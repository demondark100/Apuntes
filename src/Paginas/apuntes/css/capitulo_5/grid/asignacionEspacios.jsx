import { Link } from "react-router-dom";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import Resumenes from "../../../../../componentes/resumenes/resumenes";

function AsignacionEspacios() {
  return (
    <>
      <Resumenes contenido={[{
        mensaje: `Con esto asignaremos espacios a un elemento dentro del contenedor.`,
        lenguage: "Css",
        codigo: `grid-column: 1/3; /*asignar espacios a las columnas |*/
grid-row: 1/3; /*asignar espacios a las filas -*/
        `
      },
      {
        mensaje: `"span" facilita mas la asignacion ya que no debemos contar cada linea sino que se asignara el espacio de forma literal.`,
        lenguage: "Css",
        codigo: `grid-column: 1 / span 2; /*Asignar espacios a las columnas |*/
grid-row: 1 / span 2; /*Asignar espacios a las filas -*/
        `
      }]}/>
      <main>
        <h1>asignacion de espacios</h1>
        <Conseptos texto={`Nosotros podemos asignar cuanto queremos que ocupe cada celda/grisha.

Estas propiedades se deben aplicar a los contenedores hijos del grid content.`}/>
        <h2>pseudocodigo</h2>
        <Css codigo={`grid-column-start: aqui debemos poner desde que linea inicia;
grid-column-end: aqui debemos poner en que linea finaliza;
grid-row-start: aqui debemos poner desde que linea inicia;
grid-row-end: aqui debemos poner en que linea finaliza;`}/>
        <Conseptos texto={`Estos se pueden abreviar con:
grid-row:
grid-column:
Es recomendable solo usar "grid-row" y "grid-column".`}/>
        <h2>pseudocodigo</h2>
        <Css codigo={`grid-column: desde que linea inicia / desde que linea termina;
grid-row: desde que linea inicia / desde que linea termina;`}/>
        <Conseptos texto={`Las lineas tienen un numero asignado para poder asignar espacios en el grid.`} />
        <img className="alineacionGridImg" src="https://keepcoding.io/wp-content/uploads/2022/06/diagrama-de-numeracion-de-lineas-de-grid.jpg" alt="alineacionGridImg" />

        <h2>sin resumir codigo</h2>
        
        <Html codigo={`<div class="sin_resumir">
    <div>
        >:v
    </div>
    <div>
        >:v
    </div>
    <div>
        >:v
    </div>
    <div>
        >:v
    </div>
    <div>
        >:v
    </div>
    <div>
        >:v
    </div>
    <div>
        >:v
    </div>
    <div>
        >:v
    </div>
    <div>
        >:v
    </div>
</div>`}/>
        
        <Css codigo={`.sin_resumir{
    display: grid;
    border: 5px solid #32a8a8;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
}
.sin_resumir div:nth-child(1){
    grid-column-start: 1;
    grid-column-end: 3;
}
.sin_resumir div:nth-child(2){
    grid-row-start: 2;
    grid-row-end: 4;
}
.sin_resumir div{
    border: 2px solid #000;
}`}/>
        <div className="website">
          <div className="sin_resumir">
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
        </div>
        </div>
        <Conseptos texto={`Como te das cuenta para poder asignar espacios necesitamos de dos lineas para el inicio y el final.`}/>
        
        <h2>resumir codigo</h2>
        
        <Html codigo={`<div class="con_resumir">
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
</div>`}/>
        
        <Css codigo={`.con_resumir{
    display: grid;
    border: 5px solid #32a8a8;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
}
.con_resumir div:nth-child(1){
    grid-column: 1/3;
}
.con_resumir div:nth-child(2){
    grid-row: 2/4;
}
.con_resumir div{
    border: 2px solid #000;
}`}/>
        <div className="website">
          <div className="con_resumir">
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
        </div>
        </div>
        <Conseptos texto={`En vez de poner grid-column/row-start/end lo resumimos en una sola linea de codigo y es mas legible.`}/>

        <h2>span</h2>
        <Conseptos texto={`Esto nos puede ayudar para evitar contar las lineas , al poner span contara literalmente las filas o columnas ya no las lineas como antes.`}/>
        <h2>pseudocodigo</h2>
        <Css codigo={`grid-row: desde que linea empieza / span cuantas filas ocupara;
grid-row: 1 / span 3;`}/>
        
        <Html codigo={`<div class="spam_content">
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
    <div>
        :v
    </div>
</div>`}/>
        
        <Css codigo={`.spam_content{
    display: grid;
    border: 5px solid #32a8a8;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
}
.spam_content div:nth-child(1){
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;
}
.spam_content div{
    border: 2px solid #000;
}`}/>
        <div className="website">
          <div className="spam_content">
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
            <div>
                :v
            </div>
        </div>
        </div>
        
        <div className="siguiente__parte">
          <Link to={"repeat"}>repeat</Link>
        </div>

      </main>
      <Footer />
    </>
  );
}

export default AsignacionEspacios;