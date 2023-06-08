import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Footer from "../../../../../componentes/menus/Footer";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import "./selectore.css";


import { useState , useRef } from "react";
import LeftModal from "./Left4DeadComponent";

function Selectores() {

  const [showModal, setShowModal] = useState(false);
  const contenedor__left = useRef();

  const left4dead=()=>{
    setShowModal(true)
    document.body.classList.add("modal-open");
    contenedor__left.current.style.top = `${window.scrollY}px`
    setTimeout(() => {
      setShowModal(false)
      document.body.classList.remove("modal-open")
    }, 5000);
  }

  return (  
    <>
      <main>
        <h1>selectores</h1>
        <Conseptos texto={`Los selectores nos sirven para poder seleccionar a las cagitas / elementos de html.

para empezar veremos la propiedad color esto nos sirve para cambiar de color las letras de nuestros elementos.`}/>

        <h2>color</h2>
        <Html codigo={`<p>
  hola mundo css.
</p>`} />


        <Css codigo={`p {
  color: green;
}`} />
        <div className="website">
          <p className="pColor">
            hola mundo css.
          </p>
        </div>

        <h2>tipos de selectores</h2>
        <Conseptos texto={`1: universal
este selector selecciona a todos los elemtos.

2: de tipo.
los de tipo seleccionan directamente a los elementos html como por ejemplo los "p","button","input",etc.

3: clases
para esta forma debemos usar el atributo class="nombre" con class ponemos nombre a un elento html y para seleccionarlo con css debemos poner ".".

4: ID
estos son similares a las clases con la diferencia que un id solo se puede usar para nombrar una sola vez a un elemento no se puede repetir un id con el mismo nombre en html se debe poner como atributo id="" y para llamarlo "#".

5: por atributo
ya sabemos como son los atributos bueno de esta manera podemos crear atributos a un elmento para crear ejemplo="ejemplo" para seleccionar [ejemplo="ejemplo"].

6: descendiente.
con la forma descendiente estamos seleccionando a un elemento que esta dentro de otro esto es por si no quieres usar clases ni nada. ejemplo 
div p {
  estilo
}.

7: pseudo clases
esto es como una clase secundaria bueno para entender mejor daremos un ejemplo con la pseudoclase "hover".`}/>

        <h2>universas " * "</h2>
        <Html codigo={`<h3>esta es una pagina con css</h3>
  <p>
      esta pagina es demasiado basica.
  </p>
  <p>
      todos los elementos cambiaran de color xd.
  </p> `}/>
        <Css codigo={`*{
  color: blue;
}`} />
        <div className="website">
          <h3 className="universalWebsite">esta es una pagina con css</h3>
          <p className="universalWebsite">
            esta pagina es demasiado basica.
          </p>
          <p className="universalWebsite">
            todos los elementos cambiaran de color xd.
          </p>  
        </div>

        <h2>de tipo</h2>
        <Html codigo={`<h4>
  esto no cambiara
</h4>
<input type="text" value="esto si cambiara de color">
<p>
  esto no cambiara
</p>
<button>
  cambiara
</button>`}/>
        <Css codigo={`input{
  color: gray;
}
button{
  color: gray;
}`}/>
        <div className="website">
          <h4>
            esto no cambiara
          </h4>
          <input className="deTipo" type="text" value="esto si cambiara de color" />
          <p>
            esto no cambiara
          </p>
          <button className="deTipo">
            cambiara
          </button>
        </div>

        <h2>clases</h2>
        <Html codigo={`<h2>
    esto no cambiara.
</h2>
<p class="parrafo">
  esto si tiene una clase asi que lo cambiaremos.
</p>
<b>
  esto no tiene ninguna clase no cambiara.
</b>
<p class="parrafo">
  se puede repetir las clases.
</p>
<p>
  esto es para rellenar.
</p>
<button class="parrafo">
  no hagas click.
</button>
<h6 class="subtitulo">
  este es un subtitulo.
</h6>
<p class="parrafo elemento_p">
  tambien se pueden agregar mas clases a un solo elemento.
</p>`}/>
        <Css codigo={`.parrafo{
  color: blue;
}
.subtitulo{
  color: red;
}
.elemento_p{
  color: gray;
}`} />
        <div className="website">
          <h2>
            esto no cambiara.
          </h2>
          <p className="parrafoClases">
            esto si tiene una clase asi que lo cambiaremos.
          </p>
          <b>
            esto no tiene ninguna clase no cambiara.
          </b>
          <p className="parrafoClases">
            se puede repetir las clases.
          </p>
          <p>
            esto es para rellenar.
          </p>
          <button onClick={left4dead} className="parrafoClases botonLeft">
            no hagas click.
          </button>
          <h6 className="subtituloClases">
            este es un subtitulo.
          </h6>
          <p className="elemento_clases">
            tambien se pueden agregar mas clases a un solo elemento.
          </p>
        </div>
        





        <div ref={contenedor__left} className={`left4content ${showModal ? "mostrar-modal": ""}`}>
          <LeftModal />
        </div>








        <h2>ID</h2>
        <Html codigo={`<h4 id="titulo">este es un titulo con id</h4>
<p>
  me encantaria que este parrafo tenga el id titulo pero no se puede ya que no se puede repetir el mismo id.
</p>
<p id="parrafo">
  este parrafo si tendra un id :D.
</p>`}/>
        <Css codigo={`#titulo{
  color: green;
}
#parrafo{
  color: red;
}`}/>
        <div className="website">
          <h4 id="titulo">este es un titulo con id</h4>
          <p>
            me encantaria que este parrafo tenga el id titulo pero no se puede ya que no se puede repetir el mismo id.
          </p>
          <p id="parrafo">
            este parrafo si tendra un id :D.
          </p>
        </div>

        <h2>por atributo</h2>
        <Html codigo={`<button boton="el_boton">
  el boton.
</button>
<p parrafo="el_parrafo">
  el parrafo :D
</p>
<b>
  esto no tendra atributo xd.
</b>`}/>
        <Css codigo={`[boton="el_boton"]{
  color: orange;
}
[parrafo="el_parrafo"]{
  color: pink;
}`}/>
        <div className="website">
          <button boton="el_boton">
            el boton.
          </button>
          <p parrafo="el_parrafo">
            el parrafo :D
          </p>
          <b>
            esto no tendra atributo xd.
          </b>
        </div>

        <h2>descendiente</h2>
        <Html codigo={`<div>
  <p>esto si cambiara a verde</p>
</div>
<h6>
  <p>
    esto tambien cambiara.
  </p>
</h6>
<h6>
  esto no cambiara.
</h6>
<h6 class="subtitulo__h6">
  <p class="un_parrafo">
    esto tambien cambiara.
  </p>
</h6>
`}/>
        <Css codigo={`div p{
  color: green;
}
h6 p{
  color: red;
}
.subtitulo__h6 .un_parrafo{
  color: gray;
}`}/>
        <div className="website">
          <div>
            <p>esto si cambiara a verde</p>
          </div>
          <h6>
            <p>
              esto tambien cambiara.
            </p>
          </h6>
          <h6>
            esto no cambiara.
          </h6>
          <h6 class="subtitulo__h6">
            <p class="un_parrafo">
              esto tambien cambiara.
            </p>
          </h6>
        </div>

        <h2>pseudoclase</h2>
        <Conseptos texto={`"hover" es una pseudoclase que se encarga de cambiar de estilo cada que pasemos el mouse sobre un elemento.`}/>
        <Html codigo={`<p id="cambiar">
  pasa el mouse sobre mi.
</p>`} />
        <Css codigo={`#cambiar{
  color: red;
}
#cambiar:hover{
  color: green;
}`} />

        <div className="website">
          <p id="cambiar">
            pasa el mouse sobre mi.
          </p>
        </div>

      </main>
      <Footer />
    </>
  );
}

export default Selectores;