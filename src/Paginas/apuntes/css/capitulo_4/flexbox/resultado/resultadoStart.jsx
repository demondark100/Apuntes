import { Link } from "react-router-dom";
import Volver from "../../../../../../componentes/volver/volver";

function ResultadoStart() {
  return (  
    <>
      <div className="content__start_ejemplo">
        <Volver link={"../css/flexbox/flexDirection/flexWrap/alineacionFlex"}/>
        <h3>stretch</h3>
        <div class="stretch">
          <div>
            stretch
          </div>
          <div>
            stretch
          </div>
        </div>

        <h3>flex-start</h3>
        <div class="flex_start">
          <div>
            flex-start
          </div>
          <div>
            flex-start
          </div>
        </div>
      </div>
    </>
  );
}

export default ResultadoStart;