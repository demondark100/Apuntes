import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import "./linear.css";
import Resumenes from "../../../../../componentes/resumenes/resumenes";

function Linear() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `Con "linear" hacemos gradientes a los elementos html.`,
        lenguage: "Css",
        codigo: `background: linear-gradient(0deg,#fff,#000);`
      }]}/>
      <main>
        <h1>linear</h1>
        <Conseptos texto={`Esta propiedad nos permite dar gradientes a nuestros fondos por ejemplo arriba que sea azul y abajo que sea rojo.`}/>
        <h2>pseudocodigo</h2>
        <Css codigo={`background: linear-gradient(cuantos grados , los colores que quieras poner);
background: linear-gradient(0deg , #00f , #f00);`}/>
        
        <Html codigo={`<div class="linear_content1">

</div>`}/>
        
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
        
        <Html codigo={`<div class="linear_content2">

</div>`}/>
        
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