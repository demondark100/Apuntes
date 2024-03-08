import { Link } from "react-router-dom";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import "./flexbox.css";
import Resumenes from "../../../../../componentes/resumenes/resumenes";

function Flexbox() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `Esto es otra propiedad de "display" que vuelve las cajas flexibles, las cajas aal ser flexibles reciben muchas propiedades nuevas.`,
        lenguage: "Css",
        codigo: `display: flex; /*pone un elemento en "flex"*/`
      }]}/>
      <main>
        <h1>flexbox</h1>
        <Conseptos texto={`Anteriormente se solia trabajar con tablas , float para crear los sitios web pero ahora se usa flexbox debido a que es mas facil y mas optimo.

flex requiere de dos cosas que son el flex contenedor y el flex contenido.`} />
        
        <div className="flexbox_ejemplo1">
          flex contenedor
          <div className="flexbox_ejemplo1__contenido">
            flex contenido
          </div>
        </div>

        <Conseptos texto={`Nosotros al dar "display: flex;" a una caja se comportara como si fuese un bloque los cambios se notaran en los elementos hijos.

flexbox se mueve de arriba a abajo y de izquierda a derecha mostraria un grafico pero te marearias igual yo no entendi nada de flexbox con lo teorico entendi mas con el codigo y tu tambien lo haras >:v.


ahora vamos a comprobar que el contenedor de flex se comporta como un bloque.`}/>


        
        <Html codigo={`<div class="flex_content">
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quasi molestias, doloribus est quibusdam velit unde, odit nihil ab quae adipisci veniam corporis soluta alias id eum qui molestiae consequatur.
  </p>
</div>`}/>
        
        <Css codigo={`.flex_content{
  display: flex;
  background-color: #2f87a1;
  color: #e7e4ff;
}`}/>
        <div className="website">
          <div className="flex_content">
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quasi molestias, doloribus est quibusdam velit unde, odit nihil ab quae adipisci veniam corporis soluta alias id eum qui molestiae consequatur.
              </p>
          </div>
        </div>

        <h2>mas diferencias con flex y block.</h2>
        
        <Html codigo={`<div class="ejemplo_block">
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium blanditiis velit animi autem omnis cupiditate, sapiente illo consectetur quo voluptatem vel dolorem eos cum vero nesciunt inventore. Sapiente, officiis ullam.
  </p>
  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae autem culpa iusto architecto unde officiis consequuntur totam adipisci, provident eaque. In, inventore. Dolor atque deserunt consequatur quod nisi sequi totam?
  </p>
</div>
<div class="ejemplo_flex">
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium blanditiis velit animi autem omnis cupiditate, sapiente illo consectetur quo voluptatem vel dolorem eos cum vero nesciunt inventore. Sapiente, officiis ullam.
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem molestias sint eligendi cumque. Accusantium, recusandae explicabo cum hic voluptatem debitis repudiandae facilis sit, optio quia praesentium quod ipsum animi cupiditate.
  </p>
</div>`}/>
        
        <Css codigo={`.ejemplo_block{
  display: block;
}
.ejemplo_flex{
  display: flex;
}`}/>
        <div className="website">
          <div className="ejemplo_block">
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium blanditiis velit animi autem omnis cupiditate, sapiente illo consectetur quo voluptatem vel dolorem eos cum vero nesciunt inventore. Sapiente, officiis ullam.
            </p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae autem culpa iusto architecto unde officiis consequuntur totam adipisci, provident eaque. In, inventore. Dolor atque deserunt consequatur quod nisi sequi totam?
            </p>
        </div>
        <div className="ejemplo_flex">
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium blanditiis velit animi autem omnis cupiditate, sapiente illo consectetur quo voluptatem vel dolorem eos cum vero nesciunt inventore. Sapiente, officiis ullam.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem molestias sint eligendi cumque. Accusantium, recusandae explicabo cum hic voluptatem debitis repudiandae facilis sit, optio quia praesentium quod ipsum animi cupiditate.
            </p>
        </div>
        </div>
        <Conseptos texto={`Como te das cuenta con block los hijos se ponen uno de bajo del otro pero con flex los hijos se ponen uno a lado del otro si al contenedor flex le agregamos mas hijos se iran poniendo uno a lado del otro cosa que con block no sucedera.
        
Nosotros a la hora de trabajar con flex las cajas siempre se ajustaran al contenido y que a diferencia de float no hay problemas de altura.`}/>

        
        <Html codigo={`<div class="contenido_flex">
  <p class="parrafo1">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio deserunt aliquid neque odit iure velit ex voluptas expedita alias, porro reiciendis cupiditate, unde ea. Perferendis hic cumque odit animi laborum.
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum cum est corporis, quasi ab repellat delectus voluptas optio aliquam deserunt assumenda temporibus dignissimos nesciunt illum suscipit ex! Blanditiis, molestiae asperiores!
  </p>
  <p class="parrafo2">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi recusandae dolorum modi, provident magnam debitis ratione et molestiae facere, beatae soluta possimus numquam voluptate quo, aliquid incidunt repellendus aut ipsa.
  </p>
</div>`}/>
        
        <Css codigo={`.contenido_flex{
  display: flex;
  padding: 10px;
}

.parrafo1{
  background-color: #c5bee6;
  padding: 12px;
  margin: 8px;
}
.parrafo2{
  background-color: #34b66a;
  padding: 12px;
  margin: 8px;
}`}/>

        <div className="siguiente__parte">
          <Link to={"resultado1"}>resultado</Link>
        </div>
        <Conseptos texto={`Como te das cuenta uno tiene mas texto que el otro y aun asi se ajusta a al contenedor eliminando los problemas de altura.`}/>

        <div className="siguiente__parte">
          <Link to={`flexDirection`}>flex direction</Link>
        </div>

      </main>
      <Footer />
    </>
  );
}

export default Flexbox;