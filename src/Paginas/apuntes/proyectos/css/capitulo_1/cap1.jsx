import MensajeModal from "../../../../../componentes/MensajeModal/mensajeModal";
import Volver from "../../../../../componentes/volver/volver";
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
      <Volver link={"../"}/>

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