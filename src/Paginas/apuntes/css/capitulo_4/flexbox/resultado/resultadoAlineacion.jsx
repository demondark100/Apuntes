import Volver from "../../../../../../componentes/volver/volver";

function ResultadoAlineacionFlex() {
  return (
    <>
      <Volver link={"../css/flexbox/flexDirection/flexWrap/alineacionFlex"}/>
    <div className="Page">
        <div style={{backgroundColor: "#000"}}>
          <h2 style={{color: "#fff"}}>center</h2>
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

            <h2 style={{color: "#fff"}}>space around</h2>

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

            <h2 style={{color: "#fff"}}>space between</h2>

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

            <h2 style={{color: "#fff"}}>space evenly</h2>

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
    </div>
    </>
  );
}

export default ResultadoAlineacionFlex;