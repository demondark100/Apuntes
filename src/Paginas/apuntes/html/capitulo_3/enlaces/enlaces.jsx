import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";

function EnlacesHtml() {
  return (  
    <>
      <main>
        <h1>Enlaces</h1>
        <Conseptos texto={`Esta etiqueta nos servira para redirigir al usuario hacia otra parte de nuestra pagina web o a otros lugares por ejemplo facebook , youtube , hentaiLA lo que sea.

        Esta etiqueta se representa por "<a>" la cual tiene un atributo "href" en ese atributo debemos poner el enlace que nosotros deseemos por ejemplo una seccion de nuestra pagina o tambien un enlace externo de nuestra pagina.`}/>
        <Html codigo={`<a href="cualquier enlace">mensaje que queremos poner</a>`}/>
        
        <Conseptos texto={`Ahora dare un ejemplo real de como usar "<a href="">".

        Redirigir al usuario a una imagen cualquiera.`}/>

        <Html codigo={`<a href="https://www.bing.com/images/search?view=detailV2&ccid=gmTtk%2fbJ&id=CA2A1F058F35F12D65AF10F11796CBD6A2420959&thid=OIP.gmTtk_bJXV97qZzhc7_hGgHaEK&mediaurl=https%3a%2f%2fsm.ign.com%2ft%2fign_latam%2fscreenshot%2fdefault%2fhola-soy-goku_vzxh.1200.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.8264ed93f6c95d5f7ba99ce173bfe11a%3frik%3dWQlCotbLlhfxEA%26pid%3dImgRaw%26r%3d0&exph=675&expw=1200&q=hola+soy+goku&simid=608024012174743578&FORM=IRPRST&ck=E32972141ECBBA421BE9490A23D4800A&selectedIndex=3">Hola soy Goku</a>
<!-- pruebalo en tu codigo -->`}/>

        <div className="website">
          <a target="_blank" style={{textDecoration: "underline"}} href="https://www.bing.com/images/search?view=detailV2&ccid=gmTtk%2fbJ&id=CA2A1F058F35F12D65AF10F11796CBD6A2420959&thid=OIP.gmTtk_bJXV97qZzhc7_hGgHaEK&mediaurl=https%3a%2f%2fsm.ign.com%2ft%2fign_latam%2fscreenshot%2fdefault%2fhola-soy-goku_vzxh.1200.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.8264ed93f6c95d5f7ba99ce173bfe11a%3frik%3dWQlCotbLlhfxEA%26pid%3dImgRaw%26r%3d0&exph=675&expw=1200&q=hola+soy+goku&simid=608024012174743578&FORM=IRPRST&ck=E32972141ECBBA421BE9490A23D4800A&selectedIndex=3">Hola soy Goku</a>
        </div>

        <h2>target</h2>
        <Conseptos texto={`este atributo nos sirve para poder redireccionar al usuario pero se abrira en otra ventana del navegador esto nos sirve por si queremos redireccionar al usuario pero no queremos que el usuario salga ne nuestra pagina.

        Para esto debemos poner el valor "_blank" a target.`}/>

        <Html codigo={`<a href="enlace" target="_blank">contenido</a>
<!-- pruebalo en tu codigo -->
<!-- cambia "enlace" por cualquier enlace -->
<!-- cambia "contenido" por cualquier cosa-->`}/>

        <h2>protocolo local y https</h2>
        <Conseptos texto={`Como sabemos con <a> podemos enviar al usuario a otras paginas pero tambien podemos enviar al usuario a otras partes de nuestra propia pagina.`}/>
        <Html codigo={`<a href="/carpeta">click aqui</a>
<!-- si queremos acceder a una carpeta necesitamos de "/" -->
<a href="../carpeta">click aqui</a>
<!-- si queremos retroceder de nuestra posision se usa "../" -->`}/>

        <h2>ejercicio 1</h2>
        <Conseptos texto={`Ahora haremos un pequeño ejercicio donde mandaremos al usuario a otras partes de nuestro sitio web esto lo haremos desde cero.`}/>
        <ol>
          <li>crear una carpeta llamada "paginas".</li>
          <li>vrear un archivo llamado "pagina1.html" dentro de la carpeta "paginas" y luego abrirla.</li>
          <li>crear un archivo llamado "pagina2.html" dentro de la carpeta "paginas"</li>
        </ol>
        <h2>pagina 1</h2>
        <Html codigo={`<!-- copiar todo este codigo -->
<!DOCTYPE html>
<html>
  <head>
    <title>pagina 1</title>
  </head>
  <body>
    <h1>Pagina 1</h1>
    <p>esta es la pagina 1.</p>
    <p>
      <a href="pagina2.html">click aqui.</a>
      para ir a la pagina 2
    </p>
  </body>
</html>
`} />

        <h2>pagina 2</h2>
        <Html codigo={`<!-- copiar todo este codigo -->
<!DOCTYPE html>
<html>
  <head>
    <title>pagina 2</title>
  </head>
  <body>
    <h1>Pagina 2</h1>
    <p>esta es la pagina 2.</p>
    <p>
      <a href="pagina1.html">click aqui.</a>
      para ir a la pagina 1
    </p>
  </body>
</html>
`}/>

        <h2>ejercicio 2</h2>
        <ol>
          <li>crear una carpeta llamada "paginas carpeta".</li>
          <li>crear un archivo llamado "pagina1.html" dentro de "paginas carpeta" y luego abrirla.</li>
          <li>dentro de la carpeta "paginas carpeta" crear una carpeta llamada "carpeta 2".</li>
          <li>crear un archivo llamado "pagina2.html" dentro de la carpeta "carpeta 2"</li>
        </ol>
        <h2>pagina 1</h2>
        <Html codigo={`<!-- copiar todo este codigo -->
<!DOCTYPE html>
<html>
  <head>
    <title>pagina 1</title>
  </head>
  <body>
    <h1>esta es la pagina 1</h1>
    <p>
      <a href="carpeta 2/pagina2.html">
          click aqui
      </a>
      para ir a la pagina 2.
    </p>
  </body>
</html>
`}/>
        <h2>pagina 2</h2>
        <Html codigo={`<!-- copiar todo este codigo -->
<!DOCTYPE html>
<html>
  <head>
    <title>pagina 2</title>
  </head>
  <body>
    <h1>esta es la pagina 2</h1>
    <p>
      <a href="../pagina1.html">
          click aqui
      </a>
      para ir a la pagina 1.
    </p>
  </body>
</html>
`} />
      </main>
      <Footer />
    </>
  );
}

export default EnlacesHtml;