import { Link } from "react-router-dom";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";
import "./extraCss.css";

function ExtraCss() {
  return (  
    <>
      <Menu2 />
      <main>
        <h1>cosas extrea de css</h1>
        <h2>direction</h2>
        <Conseptos texto={`Esta propiedad nos ayuda a mover un texto de derecha a izquierda y bisebersa , esta tiene dos propiedades.

rtl: (right to left) (derecha a izquierda);
ltr: (left to right) (izquierda a derecha);`}/>
        
        <Html codigo={`<div class="rtl_content direction">
    <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, impedit! Debitis repudiandae doloremque obcaecati consequuntur aperiam cum, voluptate laboriosam totam maxime commodi adipisci error rem tempore minus placeat inventore eos.
    </p>
</div>
<div class="ltr_content direction">
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, mollitia quos. Cum voluptas, accusamus maiores aliquid error natus eum, aspernatur sit eveniet deserunt magni necessitatibus a omnis eaque, unde odit!
    </p>
</div>`}/>
        
        <Css codigo={`.direction{
    background-color: #000;
    color: #fff;
    font-family: serif;
    text-shadow: 2px 5px 15px #fff;
}
.rtl_content{
    direction: rtl;
}
.ltr_content{
    direction: ltr;
}`}/>

        <div className="website">
          <div className="rtl_content direction">
              <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, impedit! Debitis repudiandae doloremque obcaecati consequuntur aperiam cum, voluptate laboriosam totam maxime commodi adipisci error rem tempore minus placeat inventore eos.
              </p>
          </div>
          <div className="ltr_content direction">
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, mollitia quos. Cum voluptas, accusamus maiores aliquid error natus eum, aspernatur sit eveniet deserunt magni necessitatibus a omnis eaque, unde odit!
              </p>
          </div>
        </div>

        <h2>Letter Spacing</h2>
        <Conseptos texto={`Esta propiedad nos sirve para separar las letras como queramos a estos los puedes separar con px.`}/>
        
        <Html codigo={`<div class="tituloLetter">
    <h1>HOLA MUNDO</h1>
</div>`}/>
        
        <Css codigo={`.tituloLetter{
    background-color: #000;
    box-shadow: 2px 4px 8px 15px #000;
    border: 2px solid #0f0;
}
.tituloLetter h1{
    color: #fff;
    text-shadow: 2px 5px 15px #fff;
    letter-spacing: 10px;
    text-align: center;
}`}/>
        <div className="website">
          <div className="tituloLetter">
              <h1>HOLA MUNDO</h1>
          </div>
        </div>

        <h2>Scroll Behavior</h2>
        <Conseptos texto={`Esta propiedad nos sirve para poder scrollear de forma mas suave y qye no sea tan brusco el scrolleo.`}/>
        
        <Html codigo={`<div class="containerScrollF">
    <h1>una pagina informativa xd</h1>
    <a href="#articulo_2">articulo 2</a>
    <h2>articulo 1</h2>
    <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut iste, ea placeat tempora natus earum quasi nisi animi distinctio labore. Nostrum nisi eveniet voluptatum tenetur maxime ipsa aperiam voluptates eligendi.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque pariatur iusto assumenda adipisci veritatis ab voluptatum, placeat qui voluptate eligendi nobis porro magnam nemo magni officia accusamus quos nesciunt harum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, inventore. Quaerat, tempore dolorum! Vero eum aliquam animi at architecto quibusdam, quam necessitatibus, assumenda iusto eveniet minus repellat magnam nostrum accusamus!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi itaque odit veniam soluta, quis aperiam explicabo numquam quam eum officiis sint quibusdam architecto sit vel cupiditate exercitationem? Necessitatibus, voluptatem voluptatibus!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis alias modi provident unde velit quo adipisci ab iste ex asperiores, voluptate consequuntur, suscipit repellendus error ratione quae et! Aliquam, qui!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eius expedita pariatur debitis aliquid fugiat vitae facilis corrupti dolores, voluptatum totam accusamus voluptatem eum doloremque dicta nesciunt laborum maiores minus!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, deserunt a ea odio reiciendis nam numquam ab harum, illo fuga officiis aspernatur. Itaque nisi cumque voluptatibus eaque exercitationem aperiam tempore.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta odit nemo corrupti sit voluptate, ullam sequi. Facilis tempore, in labore, est ratione vitae iste expedita temporibus a voluptatem quibusdam asperiores.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ducimus deleniti ad eligendi magnam distinctio a dicta laborum ipsa velit quos commodi! Deleniti enim excepturi, voluptatibus quaerat aut fugit debitis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quas! Quas laborum accusantium, voluptatum, corporis labore cupiditate vel maiores maxime inventore ea harum veritatis doloribus temporibus in nulla minima! Porro.
    </p>

    <h2 id="articulo_2">articulo 2</h2>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere vitae, molestiae totam impedit iusto ipsum aliquid repellat nemo asperiores perferendis, possimus consequuntur veritatis reprehenderit qui obcaecati laboriosam. Facilis, possimus ratione.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, iusto. Perspiciatis molestiae est neque quia, inventore minus possimus officiis consequuntur voluptatem, quidem a illum eaque optio odio eveniet enim tempora!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id tempora modi accusamus, maiores qui, numquam, animi culpa quisquam beatae quae eveniet. A nobis similique voluptatem nesciunt illum impedit numquam sequi!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, totam sapiente officiis inventore perspiciatis cum nihil aliquid optio suscipit reprehenderit. Eligendi omnis numquam, sed debitis deleniti perspiciatis quisquam dolorem labore. 
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut consectetur harum repellendus obcaecati eos aliquam id nam? Numquam nesciunt, nulla sequi magnam beatae labore eum molestiae exercitationem facere atque non?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quam vitae voluptatum deleniti expedita quo ad minima obcaecati voluptatem aliquid perferendis quisquam eligendi enim aut officia blanditiis vel, voluptates incidunt.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam harum sequi, eaque, aspernatur distinctio hic laborum maxime accusamus qui laboriosam nihil sapiente iure. Dignissimos rerum et magnam atque? Enim, vero!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste accusamus a natus nobis aspernatur, neque consectetur earum non dolore culpa harum perspiciatis, vitae consequuntur veritatis rerum ullam hic reprehenderit qui?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quae ut repellendus similique labore voluptatum aliquid, ad dicta mollitia repellat? Repellat laudantium, distinctio corporis vitae accusantium animi quam in aut!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi doloremque quos minus quia sequi consequuntur. Alias quas enim placeat corporis? Maxime vel, incidunt sapiente omnis tempora delectus rerum ad ex.
    </p>
</div>`}/>
        
        <Css codigo={`body{
    background-color: #000;
    color: #fff;
}
*{
    /* es recomendable ponerlo para todos los elementos para que se haga una transision en el scroll. */


    scroll-behavior: smooth;
}
a{
    text-decoration: none;
    color: #fff;
}

h1{
    color: #000;
    font-size: 1.5em;
    text-align: center;
    color: #fff;
}

h2{
    color: #000;
    font-size: 1.5em;
    text-align: center;
    color: #fff;
}`}/>

        <div className="siguiente__parte">
          <Link to={"resultadoScroll"}>resultado</Link>
        </div>

        <h2>User Selected</h2>
        <Conseptos texto={`Con esta propiedad evitaremos que el usuario seleccione un texto.`}/>
        
        <Html codigo={`<p class="no_seleccion">
    jaja no puedes seleccionarme
</p>`}/>
      
      <Css codigo={`.no_seleccion{
    background-color: #000;
    color: #fff;

    /* con none indicamos que no queremos que el usuario seleccione este texto */

    user-select: none;
}`}/>
      <div className="website">
      <p className="no_seleccion">
            jaja no puedes seleccionarme
        </p>
      </div>
      

      </main>
      <Footer />
    </>
  );
}

export default ExtraCss;