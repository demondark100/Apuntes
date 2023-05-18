import { Link } from "react-router-dom";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";
import "./transform.css";

function Transform() {
  return (  
    <>
      <Menu2 />
      <main>
        <h1>Transform</h1>
        <Conseptos texto={`Esta propiedad transforma al elemento de distintas formas que mas adelante veremos como , con mas adelante me refiero a ahora.`}/>
        <h2>translate</h2>
        <Conseptos texto={`"translate" es una propiedad que nos permitira posisionar/mover a un elemento.
translate tiene 2 parametros:`}/>
        <Css codigo={`translate(de izquierda a derecha , de arriba a abajo);
translate(150px , 120px);`}/>
        <Conseptos texto={`A este se le puede dar valores negativos para poder mover a izquierda y a arriba.`}/>
        <h3>html</h3>
        <Html codigo={`<div class="translate_content1">
    <b>:D</b>
</div>
<div class="translate_content2">
    <b>:D</b>
</div>`}/>
        <h3>css</h3>
        <Css codigo={`.translate_content1{
    width: 120px;
    height: 120px;
    background-color: #000;
    border-radius: 8%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 4px groove #5fcdee;


    transform: translate(110px,80px);
}
.translate_content1 b{
    color: #fff;
}

.translate_content2{
    width: 120px;
    height: 120px;
    background-color: #000;
    border-radius: 8%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 4px groove #5fcdee;


    transform: translate(-30px,-140px);
}
.translate_content2 b{
    color: #fff;
}`}/>
        <div className="website">
          <div className="translate_content1">
              <b>:D</b>
          </div>
          <div className="translate_content2">
              <b>:D</b>
          </div>
        </div>

        <h2>scale</h2>
        <Conseptos texto={`Esta propiedad hace que un elemento sea mas grande con mas grande me refiero a que ira escalando a su tamaño que tiene por ejemplo si la caja tiene 120px width y 120px height a la hora de usar scale el width sera de 240 y el height sera de 240px y si ponemos scale(3) el width sera de 480px y el height sera de 480px y asi ira escalando segun como queramos.

Con scale tambien podemos volver mas pequeños a los elementos por ejemplo si la caja mide 120px de width y 120px de height al poner scale(0.5) se restara la mitad y la caja medira 60 de width y 60px de height.
scale tiene dos parametros que son scaleX y scaleY , pero para resumir el codigo no los usaremos.`}/>
          <h2>pseudocodigo</h2>
          <Css codigo={`scale(escala de la altura , escala del ancho);
scale(2 , .4);`}/>
          <h3>html</h3>
          <Html codigo={`<div class="scale_content1">
    <b>:D</b>
</div>`}/>
        <h3>css</h3>
        <Css codigo={`.scale_content1{
    width: 50px;
    height: 50px;
    background-color: #000;
    border-radius: 8%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 4px groove #5fcdee;

    transform: scale(2 , .4);
}
.scale_content1 b{
    color: #fff;
}`}/>
        <div className="website">
          <div className="scale_content1">
              <b>:D</b>
          </div>
        </div>

        <h2>skew</h2>
        <Conseptos texto={`"skew" es una transformación que permite inclinar un elemento en dos dimensiones (horizontal y vertical). Esta propiedad se utiliza para distorsionar el elemento de manera que uno de sus lados se convierta en más largo o más corto que el otro.

"skew" especifica la inclinación. Los valores pueden ser positivos o negativos , este tiene las coordenadas X y Y puedes jugar con estos elementos.`}/>
      
      <h3>html</h3>
      <Html codigo={`<div class="skew_content">
    <b>:D</b>
</div>`}/>
      <h3>css</h3>
      <Css codigo={`.skew_content{
    width: 50px;
    height: 50px;
    background-color: #000;
    border-radius: 8%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 4px groove #5fcdee;

    transform: skew(45deg,15deg);
}
.skew_content b{
    color: #fff;
}`}/>
      <div className="website">
        <div className="skew_content">
            <b>:D</b>
        </div>
      </div>

      <Link className="clipPath" target="_blank" to={"https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path"}>Clip Path</Link>
      <Conseptos texto={`Clip Path es un una propiedad que nos servira para dar formas a los elementos. hay un sitio web que nos facilitara su uso click en el titulo que dice Clip Path.`}/>

      <h3>html</h3>
      <Html codigo={`<div class="clip_content">
    <p>
        :D
    </p>
</div>`}/>
        <h3>css</h3>
        <Css codigo={`.clip_content{
    width: 50px;
    height: 50px;
    background-color: #000;
    border-radius: 8%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 4px groove #5fcdee;


    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
}
.clip_content p{
    color: #fff;
}`}/>
        <div className="website">
          <div className="clip_content">
              <p>
                  :D
              </p>
          </div>
        </div>
      
      
      </main>
      <Footer />
    </>
  );
}

export default Transform;