import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";
import "./sombras.css";

function Sombras() {
  return (  
    <>
      <Menu2 />
      <main>
        <h1>sombras</h1>
        <Conseptos texto={`Esta propiedad es similar a {border} pero en vez de darle bordes a las cajas les damos una sombra. ejemplo.`}
        enlaces={{
          border: {text: "border", url: `../css/capitulo 2/border`}
        }}/>
        <div className="website sombrita__content">
          <div className="cajita__feliz">
            cajita feliz :D
          </div>
        </div>
        
        <h2>box-shadow</h2>
        <Conseptos texto={`La propiedad box-shadow se compone por:

box-shadow: 
  eje x / izquierda y derecha ,
  eje y / arriba y abajo , 
  desenfoque ,
  borde , 
  color;`}/>
      <Css codigo={`box-shadow:  2px    |  2px  |    8px    |  3px | green;
                    |       |           |      |
          ixquierda | ariiba| desenfoque| borde| color
          derecha   | abajo |           |      |
                              `}/>
        
        <Html codigo={`<div class="caja_combreada">
  caja sombreada :D
</div>`}/>
        
        <Css codigo={`.caja_combreada{
  width: 55%;
  background-color: black;
  color: white;
  box-shadow: -8px 8px 15px 8px cadetblue;
  margin: auto;
}`}/>
        <div className="website sombrita__content">
          <div className="caja_combreada">
            caja sombreada :D
          </div>
        </div>
        <h2>text-shadow</h2>
        <Conseptos texto={`Los textos tambien pueden tener sombras al igual que las cajas la diferencia es que no tienen la propiedad de borde al igual que las cajas.
text-shadow:
   eje x / izquierda y derecha , 
   eje y / arriba y abajo ,
  desenfoque , 
  color.
`}/>
        <Css codigo={`text-shadow:   -2px  |   2px    |    15px    |  green;
            izquierda| arriba   | desenfoque |  color
            derecha  | abajo    |            |`}/>
        
        <Html codigo={`<p class="sombra_de_texto">
  un texto feliz :D
</p>`}/>
        
        <Css codigo={`.sombra_de_texto{
  background-color: black;
  color: white;
  height: 45px;
  width: 55%;
  margin: auto;
  text-shadow: 5px 5px 15px white;
}`}/>
        <div className="website sombrita__content">
          <p className="sombra_de_texto">
            un texto feliz :D
          </p>
        </div>
        <Conseptos texto={`dato curioso:
si en las medidas de box-shadow y text-shadow pones numeros negativos significa que:

en el caso de arriba y abajo: estas posisionando hacia arriba.

en el caso de derecha y izquierda: estas posisionando hacia la izquierda

esto es en caso de que pongas nusmeros negativos pero si pones numeros enteros iras a la derecha y abajo.`}/>

      </main>
      <Footer />
    </>
  );
}

export default Sombras;