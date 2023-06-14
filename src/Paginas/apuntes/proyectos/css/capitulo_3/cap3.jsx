import MensajeModal from "../../../../../componentes/MensajeModal/mensajeModal";
import Volver from "../../../../../componentes/volver/volver";
import "./cap3.css";

function ProyCssCap3() {
  return (  
    <>
      <Volver link={"../"}/>
      <MensajeModal texto={`¡Proyecto! capitulo 3:
Hacer una pagina que de razones para jugar juegos clasicos.
Recuerda que aprendimos:

1. position.
2. display.
3. overflow.
4. float.
5. pseudoelementos.
6. pseudoclases.`}/>
      <div className="Page">
        <h1 className="titlecap3ProyCss">¡Juegazos!</h1>

        <div className="contenedorFloatProyCSS contenedorFloatProyCSS1">
        <h2>left 4 dead 2</h2>
          <div className="contenedorFloatProyCSS__img">
            <img src="https://th.bing.com/th/id/OIP.oauh-JGJTFW73X4s-A3hEwHaEP?w=298&h=180&c=7&r=0&o=5&pid=1.7" alt="left 4 dead 2" />
          </div>
          <div className="contenedorFloatProyCSS__parrafo">
            Este juego tiene una comunidad muy activa hoy en dia es demasiado jugado ya que el juego sigue siendo entretenido por los mods , la comunidad y lo divertido que es el juego ademas <a href="https://primerallamadalocdob.com/">primera llamada locucion</a> actualmente esta desarrollando un doblaje al español latino lo cual revivio aun mas a la comunidad.
          </div>
        </div>

        <div className="contenedorFloatProyCSS">
        <h2>plantas vs zombies</h2>
          <div className="contenedorFloatProyCSS__img">
            <img src="https://th.bing.com/th/id/OIP.KKkboo2kVkdcAIE_5sOwuQHaEK?w=293&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="plantas vs zombies" />
          </div>
          <div className="contenedorFloatProyCSS__parrafo">
            Este juego es demasiado entretenido aun si lo juegas siendo adulto debido a que este juegazo fue infacia de muchos de nosotros lo cual da un plus , sin mensionar a los mods y al modo supervivencia infinito que traera muchas mas horas de diversion con este clasico.
          </div>
        </div>


        <div className="contenedorFloatProyCSS">
          <h2>trilogia gta</h2>
          <div className="contenedorFloatProyCSS__img">
            <img src="https://th.bing.com/th/id/OIP.LQWzVJueEzRohfRLgGyVvgHaDt?w=320&h=174&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="trilogia gta" />
          </div>
          <div className="contenedorFloatProyCSS__parrafo">
            La trilogia gta siguen siendo juegos demasiado entretenidos , estos ofrecen un modo historia y un mundo abierto por explorar y encontrar misterios(easter eggs) ademas de que los protagonistas son carismaticos a su manera.
          </div>
        </div>
        

        <div className="contenedorFloatProyCSS">
          <h2>dragon ball z budokai tenkaichi</h2>
          <div className="contenedorFloatProyCSS__img">
            <img src="https://th.bing.com/th/id/OIP.IcQXq0cKRLhiWujtqxWYOgHaEO?w=309&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="dragon ball z budokai tenkaichi" />
          </div>
          <div className="contenedorFloatProyCSS__parrafo">
            Este juego es un clasico de dragon ball demasiado entretenido ademas de contar con el modo historia basado en el anime lo cual dara muchas hora de divercion al usuario aparte de tener un modo donde puedes seleccionar a cualquier personaje para pelear con otro personaje de la franquisia dragon ball.
          </div>
        </div>
        

      </div>
    </>
  );
}

export default ProyCssCap3;