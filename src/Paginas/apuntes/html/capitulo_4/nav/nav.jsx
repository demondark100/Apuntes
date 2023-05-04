import { Link } from "react-router-dom";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";

function Nav() {
  return (  
    <>
      <Menu2 />
      <main>
        <h1>Nav</h1>
        <Conseptos texto={`El nav es para poder navegar sobre el sitio web o otras cosas mayormente se debe poner dentro de una etiqueta <header> en caso de que sea un menu pero si no es para un menu no se debe de moner header.

El contenido del <nav> nunca cambia por ejemplo fijate en la parte de arriba de la pagina donde estan las opciones nunca cambian.`}/>

        <h2>estructura</h2>
        <Html codigo={`<nav>
  enlaces para navegar en nuestro sitio web
</nav>`}/>

        <Conseptos texto={`Ahora hagamos un pequeño menu solo con html.`}/>
        <Html codigo={`<header>
  <nav>
      <ul>
        <li><a href="pagina_1.html">cuenta</a> </li>
        <li><a href="pagina_2.html">sobre nosotros</a> </li>
        <li><a href="pagina_3.html">registrarse</a></li>
        <li><a href="pagina_4.html">inicio de sesion</a> </li>
      </ul>
    </nav>
</header>`}/>

        <div className="website">
            <nav>
                <ul>
                  <li><Link href="/pagina_1.html">• cuenta</Link> </li>
                  <li><Link href="/pagina_2.html">• sobre nosotros</Link> </li>
                  <li><Link href="/pagina_3.html">• registrarse</Link></li>
                  <li><Link href="/pagina_4.html">• inicio de sesion</Link> </li>
                </ul>
              </nav>
        </div>

      </main>
      <Footer />
    </>
  );
}

export default Nav;