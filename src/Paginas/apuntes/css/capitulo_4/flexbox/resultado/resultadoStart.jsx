import { Link } from "react-router-dom";
import Volver from "../../../../../../componentes/volver/volver";

function ResultadoStart() {
  return (  
    <>
      <div className="Page">
        <Volver link={"../css/flexbox/flexDirection/flexWrap/alineacionFlex"}/>
          <div style={{backgroundColor: "#000",width: "100vw",height: "100%"}}>
          <h3 style={{color: "#fff"}}>stretch</h3>
        <div class="stretch">
          <div>
            stretch
          </div>
          <div>
            stretch
          </div>
        </div>

        <h3 style={{color: "#fff"}}>flex-start</h3>
        <div class="flex_start">
          <div>
            flex-start
          </div>
          <div>
            flex-start
          </div>
        </div>
          </div>
      </div>
    </>
  );
}

export default ResultadoStart;