import { Link } from "react-router-dom";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";
import "./responsive.css";
import Capitulos from "../../../../../componentes/capitulos/aside";

function ResponsiveDesing() {
  return (  
    <>
      <Menu2 />
      <Capitulos />
      <main>
        <h1>responsive design</h1>
        <Conseptos texto={`Responsive Design es para poder adaptar nuestro sitio web para todas las resoluciones que queramos.

Ahora comprenderemos como funcionan los media query.
los media query son condicionales por asi decirlo por ejemplo si una ventana llega a este alto y ancho ejecutar tal estilo.`}/>
        <h2>pseudocodigo</h2>
        <Css codigo={`@media(si el ancho es mayor o igual a 120px){
    ejecutar estos estilos.
}
@media(si el ancho es mayor o igual a 1200px){
    ejecutar estos estilos.
}`}/>
        <h2>mobile first (recomendado)</h2>
        <Conseptos texto={`Tenemos una metodologia muy buena para poder trabajar con Responsive Design el cual es mobile first la cual consiste en dar primero los estilos a los telefonos y despues a las tabletas , laptos , PC , tv , etc.`}/>
        <h2>desktop first (no recomendado)</h2>
        <Conseptos texto={`esta metodologia es lo contrario de mobile first ya que se trabaja de resoluciones grandes a resoluciones pequeñas:
pc , tableta , mobil , yo no la recomiendo ya que los estilos de mobile sirven para las demas resoluciones o para evitar que tq equivoques a la hora de leer tu codigo.`}/>
        <h2>media</h2>
        <Css codigo={`@media (con que se trabajara) (condicional) (medidas para trbajar){
si se cumple poner un estilo.
}
@media scrren and (min-width: 820px){
estilos.
}
@media scrren and (max-width: 1200px){
estilos.
}`}/>
        <h2>ejemplo de uso</h2>
        <h3>html</h3>
        <Html codigo={`<div class="responsive_content">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum aperiam nam blanditiis quam sapiente consequuntur sed est facere repellendus nulla, dignissimos repudiandae voluptatum, asperiores doloribus, optio nemo non fugiat dolor.
</div>`}/>
        <h3>css</h3>
        <Css codigo={`.responsive_content{
    background-color: rgb(8, 163, 54);
}

@media screen and (min-width: 820px){
    .responsive_content{
        background-color: rgb(27, 61, 37);
        color: #fff;
    }
}`}/>
        <div className="siguiente__parte">
          <Link to={"responRes1"}>resultado</Link>
        </div>
        <Conseptos texto={`Puedes ir jugando con las resoluciones tu solo entenderas de mejor forma el comportamiento , en este caso para mobiles el color es un verde clarito y para pc es un verde mas oscuro.`}/>
        <h2>trabajar con varias resoluciones</h2>
        <Conseptos texto={`Para poder trabajar con vairas resoluciones necesitaremos de la condicional and que traducido al español es (y).`}/>
        <h2>pseudocodigo</h2>
        <Css codigo={`@media screen and (minima resolucion) and (maxima resolucion){
    se ejecutara un estilo para la resolucion que dijimos.
}
@media screen and (min-width: 120px) and (max-width: 200px){
    body{
        background-color: #000;
    }
}`}/>
        <h3>html</h3>
        <Html codigo={`<div class="content_media">
    <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus saepe qui, corporis ea inventore dolor natus vel obcaecati et non doloribus perferendis perspiciatis officiis molestias quibusdam earum harum voluptates hic.
    </p>
</div>`}/>
        <h3>css</h3>
        <Css codigo={`.content_media{
    background-color: #000;
    color: #ffff;
}

@media screen and (min-width: 400px) and (max-width: 700px){
    .content_media{
        background-color: #ffdede;
        color: #000;
    }
}
@media screen and (min-width: 700px) and (max-width: 900px){
    .content_media{
        background-color: #fffb06;
        color: #000;
    }
}
@media screen and (min-width: 900px) and (max-width: 1100px){
    .content_media{
        background-color: #ff2424;
        color: #ffffff;
    }
}
@media screen and (min-width: 1100px){
    .content_media{
        background-color: #00f;
        color: #fff;
    }
}`}/>
        <div className="siguiente__parte">
          <Link to={"responRes2"}>resultado</Link>
        </div>

        <h2>una practica :v</h2>
        <h3>htmñ</h3>
        <Html codigo={`<header id="header">
    <b class="logo">proyecto!</b>
    <nav>
        <ul>
            <li><a href="#">un menu</a></li>
            <li><a href="#">otra opcion</a></li>
            <li><a href="#">una cosa</a></li>
            <li><a href="#">otra cosa</a></li>
        </ul>
    </nav>
</header>

<div class="contenedor">
    <main id="main">
        <h1>una pagina web</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eos sed excepturi minima. Veniam blanditiis dolorum nobis atque tenetur aspernatur voluptates eum, exercitationem quia. Nulla ab repellat nobis autem a!
        </p>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto rem soluta voluptas facilis quisquam ipsam cumque, sit voluptatum? Quod numquam quia amet delectus voluptatibus veniam beatae atque accusamus dolorem nam!
            </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur veritatis nisi tenetur! Aut quam, nihil voluptatibus eius mollitia rerum asperiores placeat obcaecati dolores vitae corrupti nam, ad autem libero aspernatur!
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non laudantium saepe rerum, libero quisquam delectus sit blanditiis, cumque laboriosam placeat necessitatibus iste expedita vero quod, fuga aliquid tempore esse? Veniam.
        </p>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolores suscipit vitae, aperiam voluptates fuga possimus, ipsam quas, atque libero dolorum magnam necessitatibus! Esse quo aliquid sed, tempora qui ipsam.
        </p>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam a molestiae culpa aliquam vero magnam voluptate, est, accusamus placeat mollitia quo maiores neque! Tempora quasi saepe officiis aut laboriosam maiores!
        </p>
    </main>
    
    <aside id="aside">
        <h2>publicidad</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, eveniet ullam consequuntur odio deserunt veritatis saepe quae autem aperiam, nesciunt fugiat reprehenderit eaque necessitatibus dignissimos, magni beatae aut tempora cum.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis aspernatur maxime dicta harum tempora velit at veniam aperiam, nostrum facilis. Unde, totam excepturi numquam deserunt at placeat consectetur facere! Unde!
        </p>
        <p>
            no duraras ni 5 minutos jugando a este juego.
        </p>
    </aside>
</div>

<footer id="footer">
    <h3>pie de pagina</h3>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ea harum dolor eum nam ad quas, earum cumque repudiandae ut officia libero maiores eos soluta mollitia eius quisquam numquam molestias.
    </p>
</footer>`}/>
        <h3>css</h3>
        <Css codigo={`body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1.5em;
    display: flex;
    flex-direction: column;
    height: 100vh;
}

a{
    text-decoration: none;
}
ul{
    list-style: none;
}

.logo{
    display: block;
    text-align: center;
    color: #70ffff;
}

#header{
    background-color: #000;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
#header a{
    color: #c5ffc5;
    margin-left: -45px;
}
#header a:hover{
    color: #468f46;
    margin-left: -45px;
}



#main{
    background-color: #00000066;
    padding: 15px;
    width: 85%;
    margin: auto;
    margin-top: 15px;
}
#main h1{
    color: #70ffff;
    text-align: center;
    font-size: 1.6em;
}
#main p{
    padding: 15px;
    margin: 8px;
    font-size: 0.9em;
    text-align: center;
}


#aside{
    background-color: #00000066;
    width: 85%;
    margin: auto;
    margin-top: 15px;
    margin-bottom: 15px;
}
#aside h2{
    color: #70ffff;
    text-align: center;
    font-size: 1.6em;
}
#aside p{
    padding: 15px;
    margin: 8px;
    font-size: 0.9em;
    text-align: center;
}



#footer{
    background-color: #000000;
    margin-top: auto;
    width: 100%;
}
#footer h3{
    color: #70ffff;
    text-align: center;
    font-size: 1.6em;
}
#footer p{
    padding: 15px;
    margin: 8px;
    font-size: 0.9em;
    text-align: center;
    color: #fff;
}




@media screen and (min-width: 820px) and (max-width: 1200px) {
    .contenedor{
        display: flex;
        flex-direction: row-reverse;
        padding: 8px;
        column-gap: 5px;
    }
    #header{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        height: 7%;
    }
    #header ul{
        display: flex;
        justify-content: space-around;
        width: 480px;
    }
    #main{
        width: 80%;
        display: flex;
        flex-wrap: wrap;
        height: 100%;
    }
    #main h1{
        display: block;
        margin: auto;
    }
    #aside{
        width: 20%;
        overflow: auto;
        height: 45%;
    }
    #footer{
        display: flex;
        align-items: center;
    }
    #footer h3{
        width: 45%;
        font-size: 1.1em;
    }
}

@media screen and (min-width: 1200px){
    .contenedor{
        display: flex;
        flex-direction: row-reverse;
        padding: 8px;
        column-gap: 5px;
    }
    #header{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        height: 7%;
    }
    #header ul{
        display: flex;
        justify-content: space-around;
        width: 600px;
        font-size: 1.1em;
    }
    #main{
        width: 70%;
        display: flex;
        flex-wrap: wrap;
        height: 100%;
    }
    #main h1{
        display: block;
        margin: auto;
    }
    #aside{
        width: 30%;
        overflow: auto;
        height: 45%;
    }
    #footer{
        display: flex;
        align-items: center;
    }
    #footer h3{
        width: 45%;
        font-size: 1.1em;
    }
}`}/>
        <div className="siguiente__parte">
          <Link to={"responRes3"}>resultado</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ResponsiveDesing;