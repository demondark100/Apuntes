import { Link } from "react-router-dom";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import Resumenes from "../../../../../componentes/resumenes/resumenes";

function GridDinamico() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `Con esto manejamos el minimo y maximo las celdas,`,
        lenguage: "Css",
        codigo: `grid-template-columns: repeat(3,max-content); /*las celdas ocupan el espacio de todo el contenedor*/
grid-template-columns: repeat(3,min-content); /*las celdas se acoplan al espacio de su contenido*/`
      },
      {
        mensaje: `Con "minmax" asignaremos cuanto sera la medida minima de una celda y cuanto sera la medida maxima de una celda.`,
        lenguage: "Css",
        codigo: `grid-template-columns: repeat(3,minmax(80px,200px)); 
/*papametro 1: medida minima*/
/*parametro 2: medida maxima*/`
      },
      {
        mensaje: `"auto-fill" hace que las celdas se acomoden de forma dinamica sin necsidad de indicar cuantas celdas queremos en columnas o filas.`,
        lenguage: "Css",
        codigo: `grid-template-columns: repeat(auto-fill,minmax(80px,1fr)); /*las celdas se acomodaran de forma dinamica segun la resolucin*/`
      },
      {
        mensaje: `"auto-fit" Es similar a "auto-fill" solo que hace que las celdas se agranden y se ajusten al tamaño de su contenedor osea que es dinamico como "auto-fill".`,
        lenguage: "Css",
        codigo: `grid-template-columns: repeat(auto-fit,minmax(80px,1fr)); /*las celdas se ajustan al ancho de su contenedor y se posisionan automaticamente*/`
      }]}/>
      <main>
        <h1>grid dinamico</h1>
        <Conseptos texto={`Con esto podemos posiscionar de mejor forma los elementos , manejar su comportamento a los elementos/grishas.`}/>
        <h2>min-content / max-content</h2>
        <Conseptos texto={`Estas propiedades ajustan los elementos en el contenedor minimo o maximo , estas propiedades generalmente se suelen poner en repeat.`}/>
        <h2>min content</h2>
        
        <Html codigo={`<div class="min_content">
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit assumenda quam numquam illo quia. Veritatis temporibus explicabo eius nostrum, neque corrupti, a vitae quasi sunt quibusdam libero quidem eveniet nam.
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
</div>`}/>
        
        <Css codigo={`.min_content{
    display: grid;
    grid-template-columns: repeat(3,min-content);
    grid-template-rows: repeat(3,1fr);
    background-color: #60615f;
}
.min_content div{
    border: 2px solid #000;
    background-color: #00000066;
    color: #fff;
}`}/>
        <div className="website">
          <div className="min_content">
            <div>
                a
            </div>
            <div>
                a
            </div>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit assumenda quam numquam illo quia. Veritatis temporibus explicabo eius nostrum, neque corrupti, a vitae quasi sunt quibusdam libero quidem eveniet nam.
            </div>
            <div>
                a
            </div>
            <div>
                a
            </div>
            <div>
                a
            </div>
            <div>
                a
            </div>
            <div>
                a
            </div>
            <div>
                a
            </div>
        </div>
        </div>

        <h2>max content</h2>
        
        <Html codigo={`<div class="max_content">
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit assumenda quam numquam illo quia. Veritatis temporibus explicabo eius nostrum, neque corrupti, a vitae quasi sunt quibusdam libero quidem eveniet nam.
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
</div>`}/>
        <Css codigo={`.max_content{
    display: grid;
    grid-template-columns: repeat(3,max-content);
    grid-template-rows: repeat(3,120px);
    background-color: #60615f;
}
.max_content div{
    border: 2px solid #000;
    background-color: #00000066;
    color: #fff;
}`}/>
        <div className="website">
          <div className="max_content">
            <div>
                a
            </div>
            <div>
                a
            </div>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit assumenda quam numquam illo quia. Veritatis temporibus explicabo eius nostrum, neque corrupti, a vitae quasi sunt quibusdam libero quidem eveniet nam.
            </div>
            <div>
                a
            </div>
            <div>
                a
            </div>
            <div>
                a
            </div>
            <div>
                a
            </div>
            <div>
                a
            </div>
            <div>
                a
            </div>
        </div>
        </div>

        <h2>min-max</h2>
        <Conseptos texto={`Con esta propiedad definiremos cuanto queremos que sea el maximo y el minimo de las celdas.`}/>
        <h2>pseudocodigo</h2>
        <Css codigo={`minmax(cuanto queremos que sea el minimo , cuanto queremos que sea el maximo); 
minmax(120px,400px);`}/>
        
        <Html codigo={`<div class="min_max">
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit assumenda quam numquam illo quia. Veritatis temporibus explicabo eius nostrum, neque corrupti, a vitae quasi sunt quibusdam libero quidem eveniet nam.
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
</div>`}/>
        
        <Css codigo={`.min_max{
    display: grid;
    grid-template-columns: repeat(3,minmax(80px,200px));
    grid-template-rows: repeat(3,1fr);
    background-color: #60615f;
}
.min_max div{
    border: 2px solid #000;
    background-color: #00000066;
    color: #fff;
}`}/>
        <div className="website">
          <div className="min_max">
            <div>
                a
            </div>
            <div>
                a
            </div>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit assumenda quam numquam illo quia. Veritatis temporibus explicabo eius nostrum, neque corrupti, a vitae quasi sunt quibusdam libero quidem eveniet nam.
            </div>
            <div>
                a
            </div>
            <div>
                a
            </div>
            <div>
                a
            </div>
            <div>
                a
            </div>
            <div>
                a
            </div>
            <div>
                a
            </div>
        </div>
        </div>

        <h2>auto-fill</h2>
        <Conseptos texto={`Esta propiedad se encarga de mover de forma dinamica las celdas una a lado de otra o posisionandolas abajo puedes darte cuenta con su comportamiento.`}/>
        
        <Html codigo={`<div class="auto_fill">
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
</div>`}/>
        
        <Css codigo={`.auto_fill{
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(80px,1fr));
    grid-template-rows: repeat(3,1fr);
    background-color: #60615f;
}
.auto_fill div{
    border: 2px solid #000;
    background-color: #00000066;
    color: #fff;
}`}/>
        <div className="website">
          <div className="auto_fill">
            <div>
                a
            </div>
            <div>
                a
            </div>
            <div>
                a
            </div>
            <div>
                a
            </div>
            <div>
                a
            </div>
            <div>
                a
            </div>
            <div>
                a
            </div>
            <div>
                a
            </div>
            <div>
                a
            </div>
            <div>
                a
            </div>
            <div>
                a
            </div>
            <div>
                a
            </div>
        </div>
        </div>
        <Conseptos texto={`Como te das cuenta a medida que se haga mas grande o pequeña la resolucion ira posisionando de forma dinamica los elementos.`}/>
        
        <h2>auto-fit</h2>
        <Conseptos texto={`Este a diferencia de auto-fill hace que los elementos se agranden pero al igual que auto-fill trabaja de forma dinamica.`}/>
        
        <Html codigo={`<div class="auto_fit">
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
</div>`}/>
        
        <Css codigo={`.auto_fit{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(80px,1fr));
    grid-template-rows: repeat(3,1fr);
    background-color: #60615f;
}
.auto_fit div{
    border: 2px solid #000;
    background-color: #00000066;
    color: #fff;
}`}/>
        <div className="website">
          <div className="auto_fit">
              <div>
                  a
              </div>
              <div>
                  a
              </div>
              <div>
                  a
              </div>
          </div>
        </div>

        <div className="siguiente__parte">
          <Link to={"alineacionGrid"}>alineacion en grid</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default GridDinamico;