import "./responsiveBasico.css";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";
import { Link } from "react-router-dom";


function ResponsiveBasico() {
  return (  
    <>
      <Menu2 />
      <main>
        <h1>responsive(basico)</h1>
        <Conseptos texto={`"responsive" se refiere a las distintas resolucines que puede tener un sitio web por ejemplo este sitio web si te das cuenta cuando pongas el sitio web en modo mobile aparecera una opcion de menu pero cuando pongas en resolucines de pc desaparecera esa opcion de menu y se mostrara directamente las opciones.

Ahora una imagen para entender mejor este consepto teorico.`}/>

        <img className="responsive1_img" src="https://www.tutorialspoint.com/css/images/responsive.jpg" alt="responsive" />
        <Conseptos texto={`Como te das cuenta responsive design hace que un sitio web se pueda adaptar a las resolucines de distintos dispositivos , sin responsive se verian mal para los otros dispositivos.`}/>
        
        <h2>movile first</h2>
        <Conseptos texto={`"movile first" es crear la pagina primero para dispositivos mobiles y despues adaptarlos a las otras resoluciones , si lo hacemos de esta forma se nos hara mas facil crear el sitio web para distintas resoluciones.`}/>

        <h2>media query</h2>
        <Conseptos texto={`Con esto vamos a crear los sitios web con distintas resolucines.`}/>
        
        <Html codigo={`<div class="media_1">
  responsive.
</div>`}/>
        
        <Conseptos texto={`Esto es un ejemplo del como se usa media query`}/>
        <Css codigo={`.media_1{
  width: 45%;
  background-color: #ff6738;
  margin: auto;
}
@media(min-width: 820px){
  .media_1{
      width: 55%;
      background-color: #1e1cc4;
      color: #fff;
    margin: auto;
  }
}`}/>   
        <Conseptos texto={`Para ver los resultados cambia de resolucion de mobile a pc y bisebersa.`}/>
        <div className="website">
          <div className="media_1">
            responsive.
          </div>
        </div>

        <Conseptos texto={`Ahora veremos un ejemplo mas si no entiendes algo lo explicaremos de mejor manera mas adelante.`}/>
        
        <Html codigo={`<div class="content_1">
    <h5>titulo 1</h5>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro iste accusantium nam fugiat aperiam neque? Et recusandae dolore eum soluta fuga nisi, aliquam ad, perferendis nobis itaque totam blanditiis nesciunt.
    </p>
</div>
<div class="content_2">
  <h5>titulo 2</h5>
  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex maiores dolorem ea vel quo? Esse, ratione! Sit suscipit harum impedit! Natus, dolores porro animi facere voluptatibus atque aut autem exercitationem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores ad nulla exercitationem nobis sapiente recusandae labore nisi est odio, magnam ipsam atque id laborum corporis facilis illum explicabo eius rem?
  </p>
</div>`}/>
        
        <Css codigo={`div{
  display: inline-block;
}
.content_1{
  width: 40%;
  background-color: #777171;
  color: #fff;
  padding: 15px;
}
.content_2{
  width: 40%;
  background-color: #251e1e;
  color: #fff;
  padding: 15px;
}
@media(max-width: 820px){
  div{
    display: block;
  }
  .content_1{
    width: 100%;
  }
  .content_2{
    width: 100%;
    background-color: #251e1e;
  }
}`}/>
        <Conseptos texto={`Con "(max-width: 820px)" estamos diciendo que cuando la pantalla alcance resoluciones menores a 820px se den otros estilos.`}/>
        <div className="siguiente__parte">
          <Link to="resultadoResponsiveBasico">resultado</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ResponsiveBasico;