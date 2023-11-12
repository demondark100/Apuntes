import MensajeModal from "../../../../componentes/MensajeModal/mensajeModal";
import ShowOptions from "../../../../componentes/showOptions/show";
import Volver from "../../../../componentes/volver/volver";

function Cap3ProyHtml(){
  
  const aviso =(e)=>{
    e.preventDefault();
    alert("Bien hecho evaluaremos sus respuestas gracias.")
  }

  

  return (
    <>
      <MensajeModal texto={`¡Proyecto! capitulo 3
Hacer un pequeño tutorial web sobre termux.

Recuerda que aprendimos:

1. Enlaces.
2. br.
3. listas.
4. multimedia.
5. divs.
6. formularios.
7. metadatos.`}/>
      <ShowOptions 
        link={"../"}
        html={`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Título de la página</title>
  </head>
  <body>
    <h1>Termux</h1>
    <article>
      <section>
        <h2>conocimientos</h2>
        <p>
          Antes de empezar a usar esta terminal de hacking debemos saber que 
          conocimientos tienes.
        </p>
      </section>
      <section>
        <h2>introduccion</h2>
        <p>
          Termux es una terminal que sirve para poder usar herramientas como 
          git u otros desde un telefono , este esta basado en Linux con lo cual 
          sus comandos son iguales a los de linux.
        </p>
      </section>
      <section>
        <h2>comandos basicos</h2>
        <p>
          Aqui te mostrare algunos comandos basicos de termux.
        </p>
        <ul>
          <li>"ls": Este sirve para ver las carpetas.</li>
          <li>"cd": Esto sirve para cambiar de carpeta.</li>
          <li>"mkdir": Esto sirve para crear carpetas.</li>
        </ul>
        <p>
          Bueno estos son algunos comandos basicos que se usan
          en la terminal de termux son muy basicos estos comandos.
        </p>
      </section>
      <section>
        <h2>Encuesta</h2>
        <p>
          Ahora veremos si tienes conocimientos basicos de este tema.
        </p>
        <form>
          <label>Termux esta basado en Linux?</label>
          <input type="radio" id="radioTermux1"/>
          <label for="radioTermux1">si</label>
          <input type="radio" id="radioTermux2"/>
          <label for="radioTermux2">no</label>
          <br />
          <label for="QueEsMetasploit">¿Que es metasploit?</label>
          <textarea id="QueEsMetasploit" />
          <br />
          <label for="DondeDescargarTermux">¿Donde se descarga termux?</label>
          <textarea id="DondeDescargarTermux"/>
          <br />
          <input type="submit" onClick=("aviso")/>
        </form>
      </section>
      <section>
        <h2 className="pageElement">tutorial</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/TTtk2BQWWEc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p><a className="pageElement" href="https://play.google.com/store/apps/details?id=com.termux&pli=1" target="_blank">aqui</a>  te dejo el link para que descargues termux desde la play store.</p>
      </section>
    </article>
  </body>
</html>`}
      />
      <div className="Page">

        <h1 className="pageElement">Termux</h1>
        <h2 className="pageElement">conocimientos</h2>
        <p>Antes de empezar a usar esta terminal de hacking debemos saber que conocimientos tienes.</p>
        <h2 className="pageElement">introduccion</h2>
        <p>Termux es una terminal que sirve para poder usar herramientas como git u otros desde un telefono , este esta basado en Linux con lo cual sus comandos son iguales a los de linux.</p>
        <h2 className="pageElement">comandos basicos</h2>
        <p>Aqui te mostrare algunos comandos basicos de termux.</p>
        <ul>
          <li>• "ls": Este sirve para ver las carpetas.</li>
          <li>• "cd": Esto sirve para cambiar de carpeta.</li>
          <li>• "mkdir": Esto sirve para crear carpetas.</li>
        </ul>
        <br /> <br />
        <p>Bueno estos son algunos comandos basicos que se usan <br /> en la terminal de termux son muy basicos estos comandos.</p>
        <h2  className="pageElement">Encuesta</h2>
        <p>Ahora veremos si tienes conocimientos basicos de este tema.</p>
        <form>
          <label>Termux esta basado en Linux?</label>
          <input type="radio" id="radioTermux1"/>
          <label htmlFor="radioTermux1">si</label>
          <input type="radio" id="radioTermux2"/>
          <label htmlFor="radioTermux2">no</label>
          <br />
          <label htmlFor="QueEsMetasploit">¿Que es metasploit?</label>
          <textarea id="QueEsMetasploit" />
          <br />
          <label htmlFor="DondeDescargarTermux">¿Donde se descarga termux?</label>
          <textarea id="DondeDescargarTermux"/>
          <br />
          <input type="submit" onClick={aviso}/>
        </form>
        <h2 className="pageElement">tutorial</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/TTtk2BQWWEc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p><a className="pageElement" href="https://play.google.com/store/apps/details?id=com.termux&pli=1" target="_blank">aqui</a>  te dejo el link para que descargues termux desde la play store.</p>
      </div>
    </>
  );
}

export default Cap3ProyHtml;