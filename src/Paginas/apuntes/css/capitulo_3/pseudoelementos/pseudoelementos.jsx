import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";
import "./pseudoelementos.css"

function Pseudoelementos() {
  return (  
    <>
      <Menu2 />
      <main>
        <h1>pseudoelementos</h1>
        <Conseptos texto={`Un pseudoelemento en CSS es un elemento virtual que se utiliza para agregar contenido o estilo a un elemento en el documento, sin tener que agregar elementos adicionales al código HTML. Es una forma de crear elementos visuales adicionales en un documento web sin necesidad de agregar más HTML.`}/>
        <h2>sintaxis</h2>
        <Css codigo={`elemento:: pseudoelemento;`}/>

        <h2>first-line</h2>
        <Conseptos texto={`"first-line" es para dar estilos solo a la primera linea de un texto esto se hara de forma dinamica osea que si la resolucion se hace mas pequeña o mas grande siempre la primera linea conservara el estilo que le dimos.`}/>
        <h3>html</h3>
        <Html codigo={`<p class="primer_linea">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis deleniti eum cupiditate consequuntur aperiam deserunt distinctio quis eveniet id tempora sint ipsa, beatae est culpa provident ad voluptatum repudiandae.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias in architecto blanditiis sit tempora doloribus ratione modi consectetur, inventore consequuntur rerum dicta hic ab quis placeat quisquam. Consequatur, perspiciatis iure?
</p>`}/>
        <Css codigo={`.primer_linea::first-line{
  color: blue;
  font-size: 1.5em;
}`}/>
        <div className="website">
          <p className="primer_linea">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis deleniti eum cupiditate consequuntur aperiam deserunt distinctio quis eveniet id tempora sint ipsa, beatae est culpa provident ad voluptatum repudiandae.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias in architecto blanditiis sit tempora doloribus ratione modi consectetur, inventore consequuntur rerum dicta hic ab quis placeat quisquam. Consequatur, perspiciatis iure?
          </p>
        </div>
        
        <h2>first-letter</h2>
        <Conseptos texto={`"first-letter" es para darle estilos solo a la primer letra de todas por ejemplo si quieres hacer un cuento y asi.`}/>
        <h3>html</h3>
        <Html codigo={`<p class="primerLetra">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptate, impedit aperiam eaque quasi earum error quas libero, ratione minus magni, repudiandae repellendus cumque recusandae voluptatem vitae? Ratione, sed voluptas?
</p>`}/>
        <h3>css</h3>
        <Css codigo={`.primerLetra::first-letter{
  font-size: 1.5em;
  color: blueviolet;
}`}/>
        <div className="website">
          <p className="primerLetra">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptate, impedit aperiam eaque quasi earum error quas libero, ratione minus magni, repudiandae repellendus cumque recusandae voluptatem vitae? Ratione, sed voluptas?
          </p>
        </div>

        <h2>placeholder</h2>
        <Conseptos texto={`"placeholder" solo se aplican a los inputs debido a que esta atributo corresponde solo a los inputs , recuerda que el texto del placeholder desaparece cuando escribas algo en el input y que es un texto indicativo nada mas.`}/>
        <h3>html</h3>
        <Html codigo={`<input type="text" id="modificarInput" placeholder="XD">`}/>
        <h3>css</h3>
        <Css codigo={`#modificarInput::placeholder{
  color: wheat;
  background-color: black;
}`}/>
        <div className="website">
          <input type="text" id="modificarInput" placeholder="XD" />
        </div>

        <h2>selection</h2>
        <Conseptos texto={`"selection" es para estilizar la barrita de seleccion para ponerlo a prueba selecciona el texto y veras como es que cambio.`}/>
        <h3>html</h3>
        <Html codigo={`<p class="texto_seleccion">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quas explicabo, eius ratione adipisci temporibus iure architecto possimus. Porro quas nesciunt quae necessitatibus assumenda animi quis illum corporis nostrum esse.
</p>`}/>
        <h3>css</h3>
        <Css codigo={`.texto_seleccion::selection{
  background-color: black;
  color: wheat;
}`}/>
        <div className="website">
          <p className="texto_seleccion">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quas explicabo, eius ratione adipisci temporibus iure architecto possimus. Porro quas nesciunt quae necessitatibus assumenda animi quis illum corporis nostrum esse.
          </p>
        </div>

        <h2>after y before</h2>
        <Conseptos texto={`Estas propiedades son hijos del elemento que creemos pero no forma parte del DOM como tal.`}/>
        <h3>html</h3>
        <Html codigo={`<p class="oracion__parrafo">
  a la
</p>`}/>
        <h3>css</h3>
        <Css codigo={`.oracion__parrafo::before{
  content: "bienvenidos ";
}
.oracion__parrafo::after{
  content: " programacion";
}`}/>
        <Conseptos texto={`la propiedad content es para poder escribir oraciones y asi pero se pueden poner imagenes gifs lo que sea esto se puede usar para animaciones etc.`}/>
        <div className="website">
          <p className="oracion__parrafo">
            a la
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Pseudoelementos;