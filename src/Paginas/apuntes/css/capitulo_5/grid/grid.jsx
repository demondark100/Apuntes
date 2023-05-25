import { Link } from "react-router-dom";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Css from "../../../../../componentes/lenguajes/Css";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";
import "./grid.css";
import Html from "../../../../../componentes/lenguajes/Html";

function Grid() {
  return (  
    <>
      <Menu2 />      
      <main>
        <h1>grid</h1>
        <Conseptos texto={`grid es muy similar a flex con la diferencia que se pueden crear filas , columnas como nosotros queramos.`}/>
        <div className="siguiente__parte">
          <Link to={"../css/flexbox"}>flex</Link>
        </div>
        <img className="gridFlexImg" src="https://cdn-media-1.freecodecamp.org/images/HHwxqz2N4bNksz9YwcMBAtD0z9TTCxeNXNBS" alt="gridFlexImg" />
        <h2>grid</h2>
        
        <Conseptos texto={`Esto es todo el contenedor de las filas y columnas.`}/>
        <div className="website">
          <div className="cuadrado_grid">
                    <div className="columnas">
                        columnas.
                    </div>
                    <div className="filas">
                        filas.
                    </div>
                </div>
        </div>
        <Conseptos texto={`A la hora de poner un elemento con "display: grid;" se comportara como un bloque y se haran las celdas en el grid intem/hijo el cual nosotros podemos modificar como queramos.`}/>
        <img className="imagenGrid1" src="https://www.guineapigcagesstore.com/Shared/Images/Product/Standard-Grid/standard-grid.jpg" alt="imagenGrid1" />
        <h2>display grid</h2>
        <Conseptos texto={`Con esto indicaremos que el contenedor se vuelva grid los cambios al igual que flex se notaran en los elementos hijos.`}/>
        
        <Html codigo={`<div class="grid_content">
    <div>.</div>
    <div>.</div>
    <div>.</div>
    <div>.</div>
    <div>.</div>
    <div>.</div>
</div>`}/>
          
          <Css codigo={`.grid_content{
    display: grid;
}
.grid_content div{
    border: 2px solid #000;
}`}/>
        <div className="website">
          <div className="grid_content">
              <div>.</div>
              <div>.</div>
              <div>.</div>
              <div>.</div>
              <div>.</div>
              <div>.</div>
          </div>
        </div>
        <Conseptos texto={`Al poner display grid se crearan por defecto columnas pero podemos definir cuantas columnas y cuantas filas queremos.`}/>
        <div className="siguiente__parte">
          <Link to={`gridTemplate`}>grid-template</Link>
        </div>

      </main>
      <Footer />
    </>
  );
}

export default Grid;