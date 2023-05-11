import Capitulos from "../../../../../componentes/capitulos/aside";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";
import "./linear.css";

function Linear() {
  return (  
    <>
      <Menu2 />
      <Capitulos />
      <main>
        <h1>linear</h1>
        <Conseptos texto={`Esta propiedad nos permite dar gradientes a nuestros fondos por ejemplo arriba que sea azul y abajo que sea rojo.`}/>
        <h2>pseudocodigo</h2>
        <Css codigo={`background: linear-gradient(cuantos grados , los colores que quieras poner);
background: linear-gradient(0deg , #00f , #f00);`}/>
        <h3>html</h3>
        <Html codigo={`<div class="linear_content1">

</div>`}/>
        <h3>css</h3>
        <Css codigo={`.linear_content1{
    width: 50%;
    height: 60%;
    background: linear-gradient(0deg , #00f , #f00);
}`}/>
        <div className="website">
          <div className="linear_content1">

          </div>
        </div>

        <h2>mas ejemplo</h2>
        <h3>html</h3>
        <Html codigo={`<div class="linear_content2">

</div>`}/>
        <h3>css</h3>
        <Css codigo={`body{
    background-color: #000;
}

.linear_content2{
    width: 50%;
    height: 50%;
    background: linear-gradient(45deg , transparent , #0f0 , transparent , #f00);
}`}/>
        <div className="website">
          <div className="bodyLinear">
            <div className="linear_content2">

            </div>
          </div>
        </div>
      </main>
      <Footer />)
    </>
  );
}

export default Linear;