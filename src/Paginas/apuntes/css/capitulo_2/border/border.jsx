import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import "./border.css";
import Resumenes from "../../../../../componentes/resumenes/resumenes";

function Border() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: "Esta propiedad maneja los bordes en los elementos html",
        lenguage: "Css",
        codigo: `border: 2px solid blue; /*poner un borde a una caja*/
border: none; /*quitar el borde a una caja*/
border-radius: 15px; /*redondear el borde de una caja*/
/*poner borde en solo un lado*/
border-top: 2px solid red; /*poner borde arriba*/
border-right: 2px solid red; /*poner borde a la derecha*/
border-bottom: 2px solid red; /*poner borde abajo*/
border-left: 2px solid red; /*poner borde a la izquierda*/
`
      }]}/>
      <main> 
        <h1>border</h1>
        <Conseptos texto={`Esta propiedad se encarga de darle el borde a las cajas.`}/>
        <h2>ejemplo</h2>
        <Css codigo={`border: ancho de borde , que borde dar a la caja , color de borde;
border: 2px solid blue;`}/>
        <div className="website">
          <div className="ejemplo__1">
            borde
          </div>
        </div>

        
        <Html codigo={`<div class="bordeer_1">
  borde
</div>`}/>
        <Css codigo={`.bordeer_1{
  border: 2px solid blue;
  width: 35%;
  height: 35%;
}`}/>
      <div className="website">
        <div class="bordeer_1">
          borde
        </div>
      </div>

      <Conseptos texto={`la propiedad solid es una de las mas usadas pero tenemos mas propiedades con bordes mas bonitos que solo simples lineas {bordes}.`}
      enlaces={{
        bordes:{text: "aqui hay mas estilos de bordes",url: `https://www.mclibre.org/consultar/htmlcss/css/css-bordes.html#:~:text=Los%20estilos%20de%20bordes%20definidos,%2C%20ridge%2C%20inset%20y%20outset.`
      }}}
      targetBlank={true}/>
      
      <h2>none</h2>
      <Conseptos texto={`Luego tenemos una propiedad muy importante la cual es none con esta propiedad estamos diciendo que no tenga ningun borde por ejemplo un boton.`}/>
      
      <Html codigo={`<button class="boton_1">
  con borde
</button>
<button class="boton_2">
  sin borde
</button>`}/>
      
      <Css codigo={`.boton_2{
  border: none;
}`}/>
      <div className="website">
      <button className="boton_1">
          con borde
        </button>
        <button className="boton_2">
          sin borde
        </button>
      </div>

      <h2>border-radius</h2>
      <Conseptos texto={`Luego tenemos a "border-radius" que nos sirve para redondear un borde en simples palabras es por si quieres border con forma de circulo.`}/>
      
      <Html codigo={`<div class="borde_1_b">
  caja.
</div>
<div class="borde_2_b">
  caja.
</div>
<div class="borde_3_b">
  caja.
</div>`}/>
      
      <Css codigo={`.borde_1_b{
  background-color: red;
  color: white;
  margin-left: 15px;
  width: 35%;
  margin-bottom: 12px;
}
.borde_2_b{
  background-color: red;
  color: white;
  border-radius: 8px;
  margin-left: 15px;
  width: 35%;
  margin-bottom: 12px;
}
.borde_3_b{
  background-color: red;
  color: white;
  border-radius: 100px;
  margin-left: 15px;
  width: 35%;
}`}/>
      <div className="website">
        <div className="borde_1_b">
            caja.
        </div>
        <div className="borde_2_b">
            caja.
        </div>
        <div className="borde_3_b">
            caja.
        </div>
      </div>
      <Conseptos texto={`En este caso yo use px pero para mas facilidad de uso es recomendable usar el "%" pero puedes usar cualquiera px , em , etc.`}/>

      <h2>border direcciones</h2>
      <Conseptos texto={`Al igual que margin y padding esto tiene:
border-top = borde de arriba
border-right = borde de la derecha
border-bottom = borde de abajo
border-left = borde de la izquierda`}/>
      
      <Html codigo={`<div class="caja__border">
  contenido
</div>`}/>
      
      <Css codigo={`.caja__border{
  width: 55%;
  height: 12%;
  margin: auto;
  background-color: black;
  color: white;
  border-bottom: 5px solid orangered;
  border-left: 5px solid orangered;
}`}/>
      <div className="website">
        <div class="caja__border">
          contenido
        </div>
      </div>




      </main>
      <Footer />
    </>
  );
}

export default Border;