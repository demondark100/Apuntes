import Footer from "../../../../../componentes/menus/Footer";
import Html from "../../../../../componentes/lenguajes/Html";
import Css from "../../../../../componentes/lenguajes/Css";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import "./colorizacion.css"
import { useState , useRef } from "react";
import Resumenes from "../../../../../componentes/resumenes/resumenes";

function Colorizacion() {

  const valorInput = useRef(null);
  const [showValorI, setShowValorI] = useState(undefined);

  const obtenerColor=()=>{
    setShowValorI(valorInput.current.value);
  }

  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `Css tiene distintas formas de colorizar.`,
        lenguage: "Css",
        codigo: `/*rgb*/
color: rgb(150,256,38); /*solo se pueden poner desde el 0 al 255, 0 nada de color 255 color al maximo*/
/*rgba*/
background-color: rgba(0,255,12,0.5); /*esto es para colorizar con opacidad , estos van desde el 0 al 1 , la opacidad se pone como ultimo parametro*/
/*hexadecimal*/
/*estos es una mescla entre numero y alfabeto*/
/*desde el 1 al 9 y a hasta la f*/
color: #0f0; /*solo de 3 se usa cuando se quiere lograr un color fijo*/ 
color: #a7e476; /*de 6 digitos es para mesclar colores*/
background-color: #a7e4763d; /*con 8 digitos elegimos la opacidad del color*/
        `
      }]}/>
      <main>
        <h1>colorizacion</h1>
        <Conseptos texto={`Tenemos distintas formas de usar los colores por ejemplo la forma que hemos estado usando hasta ahora.

color: red;
pero tenemos mejores formas colorizar ya que podemos ser mas especificos al color que nosotros queremos.

hexadecimal:
color: #000eef;

rgb:
color: rgb(150,255,120);
rgb viene de los colores primario Rojo Verde Azul Red Green , Blue`}/>

        <h2>rgb</h2>
        <div className="rgb__content">
          <div className="rgb1">
            R
          </div>
          <div className="rgb2">
            G
          </div>
          <div className="rgb3">
            B
          </div>
        </div>

        <Conseptos texto={`Como usar rgb?:
0 = a nada del color.
255 = es el valor maximo de un color y esto es todo el color.

rgb(150 rojo,255 verde,12 azul);
rgb(150 red,255 green,12 blue);`}/>

        
        <Html codigo={`<div class="colorizacion_rgb">

</div>`}/>
        <Css codigo={`.colorizacion_rgb{
  width: 200px;
  height: 200px;
  background-color: rgb(14, 212, 202);
  border: 2px solid rgb(8, 55, 207);
}`}/>
        <div className="website">
          <div className="colorizacion_rgb">

          </div>
        </div>
        <Conseptos texto={`"rgb" mesclara los colores red,green,blue , puedes ir jugando con la mescla de colores.`}/>

        <h2>rgba</h2>
        <Conseptos texto={`Esto es exactamente igual a rgb pero con rgba desidiremos cuanta opacidad queremos darle al color.`}/>
        
        <Html codigo={`<div class="rgba">

</div>`}/>
        
        <Css codigo={`.rgba{
  width: 150px;
  height: 150px;
  border: 2px solid rgb(8, 55, 207);
  background-color: rgba(252, 114, 72, 0.5);
}`}/>
        <div className="website">
          <div className="rgba">

          </div>
        </div>
        <Conseptos texto={`"rgba" recuerdas a la propiedad opacity bueno en el cuarto parametro vamos a poner cuanta opacidad queremos que se aplique al color esto se comportara al igual que opacity osea que va del 0 al 1.`}/>
        
        <h2>hexadecimal</h2>
        <Conseptos texto={`Esto trabaja maximo con 16 unidades osea del "1" al "9" y del "a" hasta la "f".
color: #hexadecimal;
color: #0f0;
aqui podemos poner 3 o 6 caracteres para poder colorizar si ponemos mas o menos cantidad no funcionara.
de 3: color: #f00;
de 6: color: #0000ff;
para entender mejor.`}/>

        <div className="content__rgbImg">
          <img className="img_rgb" src="https://i.ytimg.com/vi/iJcIlC4yFIQ/maxresdefault.jpg" alt="rgb" />
          <img className="img_rgb"  src="data:image/png;base64,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" alt="rmg imagen" />
        </div>

        <Conseptos texto={`Al momento de colorizar con hexadecimales debes saber que:

podemos colorizar con numeros desde el "0" hasta el "9".

con letras desde la "a" hasta la "f".

estos podemos mesclarlos para que formemos colores pero puedes ir jugando con los valores.`}/>
        
        <Html codigo={`<div class="rgb1">

</div>`}/>
        
        <Css codigo={`.rgb1{
  width: 100px;
  height: 100px;
  border: 2px solid #0837cf;
  background-color: #0ed4ca;
}`}/>
        <div className="website">
          <div className="rgbEjemplo1">

          </div>
        </div>


        <h2>opacidad con hexadecimal</h2>
        <Conseptos texto={`Para dar opacidad agregaremos dos valores mas despues de los 6 valores estos tambien se comportaran como "0" valor minimo y "f" valor maximo.`}/>
        
        <Html codigo={`<div class="rgb_o">

</div>`}/>
        
        <Css codigo={`.rgb_o{
  width: 100px;
  height: 100px;
  border: 2px solid #0837cf;
  background-color: #ff5b3e7e;
}`}/>
        <div className="website">
          <div className="rgb_opacity">

          </div>
        </div>

        <div className="colorizacion__content">
          
          <Conseptos texto={`aqui podras elegir un color y te mostrare el codigo hexadesimal.`}/>
          <div className="colorizacion__funcion">
            <input type="color" ref={valorInput}/>
            <button onClick={obtenerColor}>obtener color</button>
            <p>{showValorI}</p>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}

export default Colorizacion;