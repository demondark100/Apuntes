import MensajeModal from "../../../../../componentes/MensajeModal/mensajeModal";
import ShowOptions from "../../../../../componentes/showOptions/show";
import "./cap1.css";

function Cap1ProyCss() {
  return (  
    <>
      <MensajeModal texto={`¡Proyecto! capitulo 1

Hacer un sitio web que de consejos sobre css.

Recuerda que aprendimos:

1. Selectores.
2. Especificidad.
3. Metodologia BEM.
4. Unidades.`}/>
      <ShowOptions 
        link={"../"}
        html={`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <title>Estilos basicos</title>
  </head>
  <body>
    <main>
      <h1 class="pageElement titleCap1CssProyecto">Consejos de css.</h1>
          
      <div class="consejosProyecto1Css">
        <h2 class="pageElement consejosProyecto1Css__title">¡Practicar!</h2>
        <p>Para entender bien css no memorices nada solo practica con las propiedades y veras que escribiras codigo de forma automatica sin necesidad de decir ¿para que era esto?</p>
      </div>
      <div class="consejosProyecto1Css">
        <h2 class="pageElement consejosProyecto1Css__title">¡Jugar!</h2>
        <p>Otra forma para no frustrarse es jugar con las propiedades de css los fondos , las unidades , etc.</p>
      </div>
      <div class="consejosProyecto1Css">
        <h2 class="pageElement consejosProyecto1Css__title">Proyectos!</h2>
        <p>Haz pequeños proyectos como este para poder practicar con el codigo esto ayudara de una form uff no te imaginas ayuda demasiado.</p>
      </div>
    </main>
  </body>
</html>`}
        css={`.titleCap1CssProyecto{
  background-color: #3147e9;
  width: 75%;
  color: #11fff7 !important;
}
.consejosProyecto1Css__title{
  color: #11fff7 !important;
}
.consejosProyecto1Css{
  background-color: rgb(0, 0, 0);
  width: 50%;
  color: #fff !important;
}
.consejosProyecto1Css p{
  color: #fff !important;
}`}
      />

      <div className="Page">
        <h1 className="pageElement titleCap1CssProyecto">Consejos de css.</h1>
        
        <div className="consejosProyecto1Css">
          <h2 className="pageElement consejosProyecto1Css__title">¡Practicar!</h2>
          <p>Para entender bien css no memorices nada solo practica con las propiedades y veras que escribiras codigo de forma automatica sin necesidad de decir ¿para que era esto?</p>
        </div>
        <div className="consejosProyecto1Css">
          <h2 className="pageElement consejosProyecto1Css__title">¡Jugar!</h2>
          <p>Otra forma para no frustrarse es jugar con las propiedades de css los fondos , las unidades , etc.</p>
        </div>
        <div className="consejosProyecto1Css">
          <h2 className="pageElement consejosProyecto1Css__title">Proyectos!</h2>
          <p>Haz pequeños proyectos como este para poder practicar con el codigo esto ayudara de una form uff no te imaginas ayuda demasiado.</p>
        </div>
      </div>
    </>
  );
}

export default Cap1ProyCss;