import { Link } from "react-router-dom";
import Volver from "../../../../../../componentes/volver/volver";

function ResultadoAlineacionFlex() {
  return (  
    <>
    <div className="body__content">
        <Volver link={"../css/flexbox/flexDirection/flexWrap/alineacionFlex"}/>
          <h2>center</h2>
            <div class="center">
                <div>
                    caja 1.
                </div>
                <div>
                    caja 2.
                </div>
                <div>
                    caja 3.
                </div>
                <div>
                    caja 4.
                </div>
            </div>

            <h2>space around</h2>

            <div class="space_around">
                <div>
                    caja 1.
                </div>
                <div>
                    caja 2.
                </div>
                <div>
                    caja 3.
                </div>
                <div>
                    caja 4.
                </div>
            </div>

            <h2>space between</h2>

            <div class="space_between">
                <div>
                    caja 1.
                </div>
                <div>
                    caja 2.
                </div>
                <div>
                    caja 3.
                </div>
                <div>
                    caja 4.
                </div>
            </div>

            <h2>space evenly</h2>

            <div class="space_evenly">
                <div>
                    caja 1.
                </div>
                <div>
                    caja 2.
                </div>
                <div>
                    caja 3.
                </div>
                <div>
                    caja 4.
                </div>
            </div>
    </div>
    </>
  );
}

export default ResultadoAlineacionFlex;