import Capitulos from "../../../../../aside";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";

function ExtraHtml() {
  return (  
    <>
      <Menu2 />
      <Capitulos />
      <main>
        <h1>cosas extra de html</h1>
        <Conseptos texto={`Primero empecemos con un atributo extra de img.`}/>
        <h2>title y alt</h2>
        <Conseptos texto={`1: title es para ponerle un pequeño titulo a la imagen al momento de pasarle el mouse aparecera el titulo que pusimos.

2: alt es para poner un mensaje en caso de que la imagen no cargue posdata siempre se debe poner nunca olvidarse ya que es demasiado importante.`}/>

        <Html codigo={`<img title="imagen de javaScript" alt="esta imagen no esta disponible."  src="https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png">`}/>

        <div className="website">
          <img style={{width: "25%"}} title="imagen de javaScript" alt="esta imagen no esta disponible."  src="https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png" />
        </div>
        
        <h1>center</h1>
        <Conseptos texto={`Esta etiqueta es para centrar los elemento pero es mejor hacerlo desde css pero igual les muestro nomas para saber XD.`}/>

        <Html codigo={`<center>
  <h4>esto centra cualquier elemento literalmente xd.</h4>
  <img src="https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png" title="imagen de javaScript" alt="esta imagen no esta disponible.">
</center>
`}/>

        <div className="website">
        <center>
          <h4>esto centra cualquier elemento literalmente xd.</h4>
          <img style={{width: "25%"}} src="https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png" title="imagen de javaScript" alt="esta imagen no esta disponible." />
        </center>
        </div>

        <h2>icono</h2>
        <Conseptos texto={`El icono es para poner una imagen a la ventanita de arriba del navegador esto debe de ir en el head de la pagina.

Atributos:

1: rel es para indicarle que sera un icono.
2: href en href las imagenes que pongamos siempre deben terminar con ".ico".`}/>
      <Html codigo={`<link rel="icono" href="imagen.ico">`}/>

        <h2>ID</h2>
        <Conseptos texto={`Este atributo es para idenficar a un elemento esto lo usaremos mucho con css pero por ahora haremos un ejercicio para entender mejor.`}/>

        <Html codigo={`<p id="parrafo_1">primer identificador</p>

<!-- ahora para llamar a un elemto debemos poner #nombre que le pusimos al elemento -->

<!-- #parrafo_1 -->
`}/>

        <h2>ejercicio</h2>

        <Html codigo={`<h4>esta es la noticia 1</h4>
<a href="#noticia_2">click aqui para ir a la noticia 2</a>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eum temporibus eos impedit neque a tempore quam nemo numquam beatae quaerat alias atque, libero, id in autem iure aliquid itaque?
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde necessitatibus, in ullam exercitationem soluta eligendi perferendis esse numquam! Quos laborum quod placeat fugit eveniet repellendus maxime dolorem, qui ducimus nulla!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sit est veritatis eaque voluptas culpa aspernatur, quaerat maxime. Dolores doloribus molestiae id nulla amet ducimus voluptatum consectetur nam sed delectus.
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eum temporibus eos impedit neque a tempore quam nemo numquam beatae quaerat alias atque, libero, id in autem iure aliquid itaque?
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde necessitatibus, in ullam exercitationem soluta eligendi perferendis esse numquam! Quos laborum quod placeat fugit eveniet repellendus maxime dolorem, qui ducimus nulla!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sit est veritatis eaque voluptas culpa aspernatur, quaerat maxime. Dolores doloribus molestiae id nulla amet ducimus voluptatum consectetur nam sed delectus.
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eum temporibus eos impedit neque a tempore quam nemo numquam beatae quaerat alias atque, libero, id in autem iure aliquid itaque?
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde necessitatibus, in ullam exercitationem soluta eligendi perferendis esse numquam! Quos laborum quod placeat fugit eveniet repellendus maxime dolorem, qui ducimus nulla!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sit est veritatis eaque voluptas culpa aspernatur, quaerat maxime. Dolores doloribus molestiae id nulla amet ducimus voluptatum consectetur nam sed delectus.
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eum temporibus eos impedit neque a tempore quam nemo numquam beatae quaerat alias atque, libero, id in autem iure aliquid itaque?
</p>

<h2 id="noticia_2">noticia 2</h2>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eum temporibus eos impedit neque a tempore quam nemo numquam beatae quaerat alias atque, libero, id in autem iure aliquid itaque?
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde necessitatibus, in ullam exercitationem soluta eligendi perferendis esse numquam! Quos laborum quod placeat fugit eveniet repellendus maxime dolorem, qui ducimus nulla!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sit est veritatis eaque voluptas culpa aspernatur, quaerat maxime. Dolores doloribus molestiae id nulla amet ducimus voluptatum consectetur nam sed delectus.
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eum temporibus eos impedit neque a tempore quam nemo numquam beatae quaerat alias atque, libero, id in autem iure aliquid itaque?
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde necessitatibus, in ullam exercitationem soluta eligendi perferendis esse numquam! Quos laborum quod placeat fugit eveniet repellendus maxime dolorem, qui ducimus nulla!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sit est veritatis eaque voluptas culpa aspernatur, quaerat maxime. Dolores doloribus molestiae id nulla amet ducimus voluptatum consectetur nam sed delectus.
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eum temporibus eos impedit neque a tempore quam nemo numquam beatae quaerat alias atque, libero, id in autem iure aliquid itaque?
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde necessitatibus, in ullam exercitationem soluta eligendi perferendis esse numquam! Quos laborum quod placeat fugit eveniet repellendus maxime dolorem, qui ducimus nulla!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sit est veritatis eaque voluptas culpa aspernatur, quaerat maxime. Dolores doloribus molestiae id nulla amet ducimus voluptatum consectetur nam sed delectus.
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eum temporibus eos impedit neque a tempore quam nemo numquam beatae quaerat alias atque, libero, id in autem iure aliquid itaque?
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde necessitatibus, in ullam exercitationem soluta eligendi perferendis esse numquam! Quos laborum quod placeat fugit eveniet repellendus maxime dolorem, qui ducimus nulla!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sit est veritatis eaque voluptas culpa aspernatur, quaerat maxime. Dolores doloribus molestiae id nulla amet ducimus voluptatum consectetur nam sed delectus.
</p>`}/>

        <div className="website">
        <h4>esta es la noticia 1</h4>
          <a href="#noticia_2">click aqui para ir a la noticia 2</a>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eum temporibus eos impedit neque a tempore quam nemo numquam beatae quaerat alias atque, libero, id in autem iure aliquid itaque?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde necessitatibus, in ullam exercitationem soluta eligendi perferendis esse numquam! Quos laborum quod placeat fugit eveniet repellendus maxime dolorem, qui ducimus nulla!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sit est veritatis eaque voluptas culpa aspernatur, quaerat maxime. Dolores doloribus molestiae id nulla amet ducimus voluptatum consectetur nam sed delectus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eum temporibus eos impedit neque a tempore quam nemo numquam beatae quaerat alias atque, libero, id in autem iure aliquid itaque?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde necessitatibus, in ullam exercitationem soluta eligendi perferendis esse numquam! Quos laborum quod placeat fugit eveniet repellendus maxime dolorem, qui ducimus nulla!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sit est veritatis eaque voluptas culpa aspernatur, quaerat maxime. Dolores doloribus molestiae id nulla amet ducimus voluptatum consectetur nam sed delectus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eum temporibus eos impedit neque a tempore quam nemo numquam beatae quaerat alias atque, libero, id in autem iure aliquid itaque?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde necessitatibus, in ullam exercitationem soluta eligendi perferendis esse numquam! Quos laborum quod placeat fugit eveniet repellendus maxime dolorem, qui ducimus nulla!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sit est veritatis eaque voluptas culpa aspernatur, quaerat maxime. Dolores doloribus molestiae id nulla amet ducimus voluptatum consectetur nam sed delectus.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eum temporibus eos impedit neque a tempore quam nemo numquam beatae quaerat alias atque, libero, id in autem iure aliquid itaque?
          </p>

          <h2 id="noticia_2">noticia 2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eum temporibus eos impedit neque a tempore quam nemo numquam beatae quaerat alias atque, libero, id in autem iure aliquid itaque?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde necessitatibus, in ullam exercitationem soluta eligendi perferendis esse numquam! Quos laborum quod placeat fugit eveniet repellendus maxime dolorem, qui ducimus nulla!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sit est veritatis eaque voluptas culpa aspernatur, quaerat maxime. Dolores doloribus molestiae id nulla amet ducimus voluptatum consectetur nam sed delectus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eum temporibus eos impedit neque a tempore quam nemo numquam beatae quaerat alias atque, libero, id in autem iure aliquid itaque?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde necessitatibus, in ullam exercitationem soluta eligendi perferendis esse numquam! Quos laborum quod placeat fugit eveniet repellendus maxime dolorem, qui ducimus nulla!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sit est veritatis eaque voluptas culpa aspernatur, quaerat maxime. Dolores doloribus molestiae id nulla amet ducimus voluptatum consectetur nam sed delectus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eum temporibus eos impedit neque a tempore quam nemo numquam beatae quaerat alias atque, libero, id in autem iure aliquid itaque?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde necessitatibus, in ullam exercitationem soluta eligendi perferendis esse numquam! Quos laborum quod placeat fugit eveniet repellendus maxime dolorem, qui ducimus nulla!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sit est veritatis eaque voluptas culpa aspernatur, quaerat maxime. Dolores doloribus molestiae id nulla amet ducimus voluptatum consectetur nam sed delectus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eum temporibus eos impedit neque a tempore quam nemo numquam beatae quaerat alias atque, libero, id in autem iure aliquid itaque?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde necessitatibus, in ullam exercitationem soluta eligendi perferendis esse numquam! Quos laborum quod placeat fugit eveniet repellendus maxime dolorem, qui ducimus nulla!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sit est veritatis eaque voluptas culpa aspernatur, quaerat maxime. Dolores doloribus molestiae id nulla amet ducimus voluptatum consectetur nam sed delectus.
          </p>
        </div>
        
      </main>
      <Footer />
    </>
  );
}

export default ExtraHtml;