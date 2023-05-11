import Capitulos from "../../../../../componentes/capitulos/aside";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";
import "./order.css";

function Order() {
  return (  
    <>
      <Menu2 />
      <Capitulos />
      <main>
        <h1>order</h1>
        <Conseptos texto={`Esto nos servira para ordenar las caja flexibles como nosotros queramos un ejemplo de uso seria a la hora de trabajar con responsive podemos ordenar una caja como queramos.

esto se debe poner en los elemetos hijos.`}/>
        <h3>pseudocodigo</h3>
        <Css codigo={`order: orden que queremos;`}/>
        <h3>html</h3>
        <Html codigo={`<div class="order_content">
    <div class="caja1">
        caja 1.
    </div>
    <div class="caja2">
        caja 2.
    </div>
    <div class="caja3">
        caja 3.
    </div>
    <div class="caja4">
        caja 4.
    </div>
</div>`}/>
      <h3>css</h3>
      <Css codigo={`.order_content{
    display: flex;
    background-color: #000;
    border: 2px solid #87d10f;
}
.caja1{
    width: 20%;
    color: #87d10f;
    order: 2;
    margin: 15px;
    border: 2px solid #ff0000;
}
.caja2{
    width: 20%;
    color: #87d10f;
    order: 1;
    margin: 15px;
    border: 2px solid #ff0000;
}
.caja3{
    width: 20%;
    color: #87d10f;
    order: 4;
    margin: 15px;
    border: 2px solid #ff0000;
}
.caja4{
    width: 20%;
    color: #87d10f;
    order: 3;
    margin: 15px;
    border: 2px solid #ff0000;
}`}/>
        <Conseptos texto={`Hemos cambiado el orden de las cajas a nuestro gusto esto se debe poner en los contenedores hijos.`}/>
        <div className="website">
          <div class="order_content">
            <div className="caja1">
                caja 1.
              </div>
              <div className="caja2">
                  caja 2.
              </div>
              <div className="caja3">
                  caja 3.
              </div>
              <div className="caja4">
                  caja 4.
              </div>
          </div>
        </div>

        <h3>min y max</h3>
        <Conseptos texto={`Ahora aprenderemos una propiedad muy importante.
min-width , min-height , max-width , max-height.

min-width: es igual que width normal solo que le decimos cual sera el minimo de ancho que tendra un elemento esto se notara mas a la hora de trabajar con porcentajes.

min-height: es igual que height solo que le decimos cuanto sera la medida minima pero en la altura.

max-width: es cuanto sera el maximo de ancho que tendra un elemento.

max-heigth: es cuanto sera el maximo de altura de un elemento.`}/>

        <h2>ejemplo</h2>
        <h3>html</h3>
        <Html codigo={`<div class="min_max">
  una caja.
</div>`}/>
        <h3>css</h3>
        <Css codigo={`.min_max{
  width: 45%;
  height: 20vh;
  background-color: #211a1a;
  color: #fff;
  margin: auto;
  min-width: 100px;
  min-height: 100px;
  max-width: 200px;
  max-height: 200px;
}`}/>
        <div className="website">
          <div className="min_max">
            una caja.
          </div>
        </div>
        <Conseptos texto={`Esto esta con porcentajes y viewport , se adaptara hasta sierta medida ya que usamos la propiedad de "min_max width height".`}/>




      </main>
      <Footer />
    </>
  );
}

export default Order;