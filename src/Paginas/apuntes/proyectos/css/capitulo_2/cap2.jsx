import MensajeModal from "../../../../../componentes/MensajeModal/mensajeModal";
import "./cap2.css";
import ShowOptions from "../../../../../componentes/showOptions/show"

function Cap2ProyectoCss() {
  return (
    <>
      <MensajeModal texto={`¡Proyecto! capitulo 2
Hacer una pagina que muestre la utilidad de algunas tecnologias.

Recuerda aprendimos:

1. fondos.
2. propiedades de texto.
3. normalize.
4. cajas.
5. padding.
6. margin.
7. bordes.
8. sombras.
9. outline`}/>
      <ShowOptions 
        link={"../"}
        html={`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <title>Estilos intermedio</title>
  </head>
  <body>
    <main>
        <h1 class="pageElement titleCap4CssProyect">tecnologias</h1>
        <div class="contenedorCssProyectoCap2">
          <h2 class="pageElement titleCap4CssProyect__h2">html</h2>
          <p>
            Este lenguaje nos sirve para estructurar sitiow web es como si 
            fuese el esqueleto de us ser humano o animal.
          </p>
        </div>
        <div class="contenedorCssProyectoCap2 contenedorCssProyectoCap2_1">
          <h2 class="pageElement titleCap4CssProyect__h2">css</h2>
          <p>
            Esta tegnologia nos sirve para estilizar la estructura de nuestro 
            sitio web es como si fuese la skin de un personaje de videojuegos.
          </p>
        </div>
        <div class="contenedorCssProyectoCap2 contenedorCssProyectoCap2_3">
          <h2 class="pageElement titleCap4CssProyect__h2">javaScript</h2>
          <p>
            JavaScript es para dar funcionalidad a la estructura que se hizo 
            con html es como si fuesen los organos de un ser vivo hacen que la 
            estructura funcione y que los estilos/piel de animaciones.
          </p>
        </div>
        <div class="contenedorCssProyectoCap2 contenedorCssProyectoCap2_4">
          <h2 class="pageElement titleCap4CssProyect__h2">git</h2>
          <p>
            Git es para poder guardar nuestros proyectos de codificacion de 
            forma local es demasiado sencillo de usar , este se puede conectar 
            con servicios como github para poder guardar el codigo en la nuve.
          </p>
        </div>
        <div class="contenedorCssProyectoCap2 contenedorCssProyectoCap2_5">
          <h2 class="pageElement titleCap4CssProyect__h2">react</h2>
          <p>
            React junta html , css y javaScript para hacer una sola aplicacion 
            esto es muy usado tanto para el desarrollo web como el desarrollo 
            de aplicaciones moviles.
          </p>
        </div>
        <div class="contenedorCssProyectoCap2 contenedorCssProyectoCap2_6">
          <h2 class="pageElement titleCap4CssProyect__h2">python</h2>
          <p>
            Este lenguaje se usa para muchas cosas como el hacking , el 
            backend , etc.
          </p>
        </div>
    </main>
  </body>
</html>`}
        css={`main{
  width: 100vw;
  height: 100vh;
}
.titleCap4CssProyect{
  margin-top: 0;
  text-align: center !important;
  background-color: #e0e0e0;
  padding: 15px;
  color: #000;
}
.titleCap4CssProyect__h2{
  text-align: center !important;
  background-color: #e0e0e0;
  text-shadow: 0px 8px 15px #000;
  min-width: 100px;
  max-width: 500px;
  box-shadow: 0 8px 13px 8px #e0e0e0;
}
.contenedorCssProyectoCap2{
  display: block;
  background-color: #ff5506;
  width: 35%;
  color: #000000 !important;
  padding: 50px;
  margin: auto;
  margin-top: 25px;
  border-radius: 35px;
  min-width: 200px;
  max-width: 600px;
  border: 2px solid #b64511;
}
.contenedorCssProyectoCap2 p{
  margin-top: 25px;
}
.contenedorCssProyectoCap2_1{
  background-color: #00f;
  border: 2px solid #8888ff;
}
.contenedorCssProyectoCap2_1 p{
  color: #fff !important;
}
.contenedorCssProyectoCap2_1 h2{
  color: #000;
}
.contenedorCssProyectoCap2_3{
  background-color: #f2ff00;
  color: #000;
  border: 2px solid #b3ba26;
}
.contenedorCssProyectoCap2_4{
  background-color: #000;
  border: 2px solid #5f5d5d;
}
.contenedorCssProyectoCap2_4 p{
  color: #fff !important;
}
.contenedorCssProyectoCap2_4 h2{
  color: #000;
}
.contenedorCssProyectoCap2_5{
  background-color: #1ff3e9;
  color: #000000;
  border: 2px solid #198d61;
}
.contenedorCssProyectoCap2_6{
  background-color: #cae51c;
  color: #000000;
  border: 2px solid #c2ce73;
}`}
      />
      <div className="Page">
        <h1 className="pageElement titleCap4CssProyect">tecnologias</h1>
        <div className="contenedorCssProyectoCap2">
          <h2 className="pageElement titleCap4CssProyect__h2">html</h2>
          <p>
            Este lenguaje nos sirve para estructurar sitiow web es como si fuese el esqueleto de us ser humano o animal.
          </p>
        </div>
        <div className="contenedorCssProyectoCap2 contenedorCssProyectoCap2_1">
          <h2 className="pageElement titleCap4CssProyect__h2">css</h2>
          <p>
            Esta tegnologia nos sirve para estilizar la estructura de nuestro sitio web es como si fuese la skin de un personaje de videojuegos.
          </p>
        </div>
        <div className="contenedorCssProyectoCap2 contenedorCssProyectoCap2_3">
          <h2 className="pageElement titleCap4CssProyect__h2">javaScript</h2>
          <p>
            JavaScript es para dar funcionalidad a la estructura que se hizo con html es como si fuesen los organos de un ser vivo hacen que la estructura funcione y que los estilos/piel de animaciones.
          </p>
        </div>
        <div className="contenedorCssProyectoCap2 contenedorCssProyectoCap2_4">
          <h2 className="pageElement titleCap4CssProyect__h2">git</h2>
          <p>
            Git es para poder guardar nuestros proyectos de codificacion de forma local es demasiado sencillo de usar , este se puede conectar con servicios como github para poder guardar el codigo en la nuve.
          </p>
        </div>
        <div className="contenedorCssProyectoCap2 contenedorCssProyectoCap2_5">
          <h2 className="pageElement titleCap4CssProyect__h2">react</h2>
          <p>
            React junta html , css y javaScript para hacer una sola aplicacion esto es muy usado tanto para el desarrollo web como el desarrollo de aplicaciones moviles.
          </p>
        </div>
        <div className="contenedorCssProyectoCap2 contenedorCssProyectoCap2_6">
          <h2 className="pageElement titleCap4CssProyect__h2">python</h2>
          <p>
            Este lenguaje se usa para muchas cosas como el hacking , el backend , etc.
          </p>
        </div>
      </div>
    </>
  );
}

export default Cap2ProyectoCss;