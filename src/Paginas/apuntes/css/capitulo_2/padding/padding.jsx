import Capitulos from "../../../../../componentes/capitulos/aside";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";
import "./padding.css";

function Padding() {
  return (  
    <>
      <Menu2 />
      <Capitulos />
      <main>
        <h1>padding</h1>
        <Conseptos texto={`Padding en HTML es un espacio interno añadido alrededor del contenido de un elemento, separándolo de su borde.`}/>
        <img className="imagePadiing" src="https://lh6.ggpht.com/-lN8-wB8_dBc/Tl-DgEaap0I/AAAAAAAAJZY/B7AkhYYiN6A/image3.png?imgmax=800" alt="padding" />
        
        <Conseptos texto={`Padding tiene las siguientes propiedades:

"padding-top; 15px;" = cuanto espacio queremos en la parte de arriba.

"padding-right: 15px;" = cuanto espacio queremos en la parte derecha.

"padding-bottom: 15px;" = cuanto espacio queremos en la parte de abajo.

"padding-left: 15px;" = cuanto espacio queremos en la parte izquierda.`}/>
        
        <h2>ejemplo</h2>
        <h3>html</h3>
        <Html codigo={`<div class="content__">

  <div class="arriba">
    <div>arriba</div>
  </div>

  <div class="derecha">
    <div>derecha</div>
  </div>

  <div class="abajo">
    <div>abajo</div>
  </div>

  <div class="izquierda">
    <div>izquierda</div>
  </div>

</div>`}/>
        <h3>css</h3>
        <Css codigo={`.content__{
  width: 45%;
  margin: auto;
  background-color: green;
}
.arriba{
  display: block;
  width: 35%;
  height: 35%;
  background-color: #00f;

  padding-top: 2vh;
  
  margin: auto;
  margin-top: 1%;
}
.derecha{
  display: block;
  width: 35%;
  height: 35%;
  background-color: #00f;

  padding-right: 2vw;
  
  margin: auto;
  margin-top: 1%;
}
.abajo{
  display: block;
  width: 35%;
  height: 35%;
  background-color: #00f;

  padding-bottom: 2vh;
  
  margin: auto;
  margin-top: 1%;
}
.izquierda{
  display: block;
  width: 35%;
  height: 35%;
  background-color: #00f;

  padding-left: 2vw;
  
  margin: auto;
  margin-top: 1%;
}


/* despues veremos como funciona "margin". */


.arriba div{
  color: wheat;
}
.derecha div{
  color: wheat;
}
.abajo div{
  color: wheat;
}
.izquierda div{
  color: wheat;
}`}/>

        <div className="website">
          <div className="content__">

            <div className="arriba">
              <div>arriba</div>
            </div>

            <div className="derecha">
              <div>derecha</div>
            </div>

            <div className="abajo">
              <div>abajo</div>
            </div>

            <div className="izquierda">
              <div>izquierda</div>
            </div>

          </div>
        </div>

        <Conseptos texto={`El padding siempre se debe poner en el contenedor padre t para entender mejor el padding es el espacio que hay entre el borde de la caja y el contenido pero desde adentro.`}/>
        <h3>html</h3>
        <Html codigo={`<div class="contenedor_div">
  <div>contenido</div>
</div>`}/>
        <h3>css</h3>
        <Css codigo={`.contenedor_div{
  background-color: red;
  padding: 15px;
}
.contenedor_div div {
  background-color: blue;
  color: white;
}`}/>
        <Conseptos texto={`con tan solo poner "padding: 15px;" estamos dicinedo que deje espacio en:
(
  arriba,
  derecha,
  abajo,
  izquierda
).`}/>
        <div className="website">
          <div className="contenedor_div">
            <div>contenido</div>
          </div>
        </div>
        <Conseptos texto={`ahora veremos resumir de mejor manera a la propiedad padding.`}/>
        <h2>ejemplo</h2>
        <h3>html</h3>
        <Html codigo={`<div class="content_a_a">
  <div>contenido</div>
</div>`}/>
        <h3>css</h3>
        <Css codigo={`.content_a_a{
  padding: 15px 0;
  background-color: red;
}
.content_a_a div{
  background-color: blue;
  color: white;
}`} />
        <Conseptos texto={`Si solo ponemos dos valores el primero hara referencia a (arriba y abajo) y el segundo hara referencia a (derecha e izquierda).
en este caso hemos dicho que (arriba y abajo) tengan un padding de 15px y que (derecha e izquierda) no tengan padding.`}/>
        <div className="website">
          <div className="content_a_a">
            <div>contenido</div>
          </div>
        </div>

        <h3>html</h3>
        <Html codigo={`<div class="content_d_i">
  <div>contenido</div>
</div>`}/>
        <h3>css</h3>
        <Css codigo={`.content_d_i{
  background-color: red;
  padding: 0 15px;
}
.content_d_i div{
  background-color: blue;
  color: wheat;
}`}/>
        <Conseptos texto={`Siguiendo la regla de que el primer parametro es (arriba y abajo) y el segundo es (derecha e izquierda):
hemos dicho que en (arriba y abajo) no tengan padding y que (derecha e izquierda) si tengan padding de 15px.`}/>
        <div className="website">
          <div className="content_d_i">
            <div>contenido</div>
          </div>
        </div>

        <Conseptos texto={`Ahora si en la propiedad padding ponemos cuatro parametros.
"padding: 16px 12px 8px 6px;"
primer parametro = arriba.
segundo parametro = derecha.
tercer parametro = abajo.
cuarto parametro = izquierda.`}/>
        <h2>ejemplo</h2>
        <h3>html</h3>
        <Html codigo={`<div class="resumen_p">
  <div>contenido</div>
</div>`}/>
        <h3>css</h3>
        <Css codigo={`.resumen_p{
  padding: 16px 12px 8px 6px;
  background-color: red;
}
.resumen_p div{
  background-color: blue;
  color: white;
}`}/>
        <Conseptos texto={`en este caso.
arriba = 16px.
derecha = 12px.
abajo = 8px.
izquierda = 6px.`}/>

        <div className="website">
          <div className="resumen_p">
              <div>contenido</div>
          </div>
        </div>




      </main>
      <Footer />
    </>
  );
}

export default Padding;