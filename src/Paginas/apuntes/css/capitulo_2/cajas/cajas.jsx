import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";
import Html from "../../../../../componentes/lenguajes/Html";
import Css from "../../../../../componentes/lenguajes/Css";
import "./cajas.css";
import Capitulos from "../../../../../aside";


function Cajas() {
  return (  
    <>
      <Menu2 />
      <Capitulos />
      <main>
        <h1>cajas</h1>
        <Conseptos texto={`En html tenemos dos tipos de caja las que son en linea y las que son en bloque.`}/>
        <h2>bloque</h2>
        <Conseptos texto={`Las cajas en bloque son los mas importantes debido a que se pueden hacer mas cosas que las cajas en linea.

Las cajas en bloque ocupan todo el espacio del sitio web mientras que las de linea no.
ejemplo.`}/>
        <Conseptos texto={`como nos damos cuenta la caja en bloque ocupara todo el ancho del sitio web.`}/>
        <div className="website caja_content">
          <div className="caja__1">
            elemento en bloque
          </div>
        </div>
        
        <Conseptos texto={`los bloques se adaptan al ancho de su contenedor como veras a continuacion.`}/>
        <div className="website">
          <div className="contenedor_h2">
            <div>
              h2
            </div>
          </div>
        </div>

        <h2>linea</h2>
        <Conseptos texto={`Estos no ocuparan todo el ancho del sitio web sino que ocuparan el ango del elemento html.`}/>
        <div className="website elementoLineaContent">
          <div className="p__bloque">
            p
          </div>
          <div className="b__linea">
            b
          </div>

        </div>

        <Conseptos texto={`En los ejemplos el "h2" y el "p" ocupan todo el ancho y el "b" no pero con css podemos cambiar eso por ejemplo que el b se comporte como bloque y que el h2 y p se comporten como linea.`}/>
        <h2>ejemplo</h2>
        <h3>html</h3>
        <Conseptos texto={`Para entender mejor has click derecho en cualquier elemento y dale en inspeccionar despues pasa el mouse encima de cada elemento pero desde la consola y veras como te muestra que elemento esta en bloque y que elemento esta en linea.`}/>
        <Html codigo={`<h2>bloque</h2>
<h3>bloque</h3>
<b>linea </b>
<b>linea</b>
<p>bloque</p>`} />
        <Conseptos texto={`Aqui abajo inspecciona`}/>
        <div className="website">
          <h2>bloque</h2>
          <h3>bloque</h3>
          <b>linea </b>
          <b>linea</b>
          <p>bloque</p>
        </div>

        <h2>display</h2>
        <Conseptos texto={`Esta propiedad nos sirve para cambiar el comportamiento de los elementos como queramos.

tenemos:

display: block; = bloque.
display: inline; = linea.`}/>        
        <h2>ejemplo</h2>
        <h3>html</h3>
        <Html codigo={`<h2>bloque</h2>
<h3>bloque</h3>
<b>linea</b>
<b>linea</b>
<p>bloque</p>`}/>
        <h3>css</h3>
        <Css codigo={`h2{
  display: inline;
}
h3{
  display: inline;
}
p{
  display: inline;
}
b{
  display: block;
}`}/>
        <div className="website cambioComportamientos">
          <h2 className="cambioComportamientos__linea">bloque</h2>
          <h3 className="cambioComportamientos__linea">bloque</h3>
          <b className="cambioComportamientos__bloque">linea</b>
          <b className="cambioComportamientos__bloque">linea</b>
          <p className="cambioComportamientos__linea">bloque</p>
        </div>
        
        <Conseptos texto={`Recuerdan cuando dije que en los elementos en linea no se podian dar muchas propiedades y con los de bloque si se podian dar mas propiedades bueno es hora de ponerlo a prueba.

propiedad de caja numero 1:

width y height:

width = el ancho de las cajas.
height = la altura de las cajas.

Tanto a wisth como height les puesdes poner % , cm , px , pt , vh cualquier medida pero supongo que ya lo habras deduciodo a cualquier propiedad que tenga un parametro para medir se le puede poner cualquier tipo de medida`}/>

        <h2>ejemplo</h2>
        <h3>html</h3>
        <Html codigo={`<b>
  esto es un elemento en linea no se puede
  modificar el ancho y la altura.
</b>
<p>
  este es un elemento en bloque si se puede
  modificar el ancho y la altura.
</p>`}/>
        <h3>css</h3>
        <Css codigo={`b{
  background-color: red;
  color: white;
  width: 150px;
  height: 150px;
}
p{
  background-color: blue;
  color: white;
  width: 150px;
  height: 110px;
}`}/>
        <div className="website altAn">
          <b>
            esto es un elemento en linea no se puede
            modificar el ancho y la altura.
          </b>
          <p>
            este es un elemento en bloque si se puede
            modificar el ancho y la altura.
          </p>
        </div>

        <Conseptos texto={`Para finalizar con esta parte podemos hacer que un elemento en linea pueda recibir las propiedades de un elemento de bloque`}/>
        <h3>html</h3>
        <Html codigo={`<b class="noRecibe">
  esto no recibira las propiedades.
</b>
<b class="recibe">
  esto si recibira las propiedades.
</b>`}/>
        <h3>css</h3>
        <Css codigo={`.noRecibe{
  background-color: red;
  color: white;
  width: 155px;
  height: 110px;
}
.recibe{
  display: inline-block;
  background-color: green;
  color: wheat;
  width: 125px;
  height: 110px;
}`}/>
        <Conseptos texto={`"display: inline-block;" es para que un elemento en linea pueda recibir las propiedades de un elemento en bloque.`}/>
        <div className="website">
          <b className="noRecibe">
            esto no recibira las propiedades.
          </b>
          <b className="recibe">
            esto si recibira las propiedades.
          </b>
        </div>

        <Conseptos texto={`ahora veremos algunos de los elementos mas importantes que estan en bloque y los que estan en linea.`}/>
        <h2>en bloque</h2>
        <Html codigo={`<div>
<p>
<h1> - <h6>
<ul>
<ol>
<li>
<table>
<form>
<blockquote>
<pre>
<hr>
<address>`}/>
        <h2>en linea</h2>
        <Html codigo={`<a>
<span>
<strong>
<em>
<img>
<input>
<button>
<label>
<select>
<textarea>
<code>
<br>
<i>`}/>


      </main>
      <Footer />
    </>
  );
}

export default Cajas;