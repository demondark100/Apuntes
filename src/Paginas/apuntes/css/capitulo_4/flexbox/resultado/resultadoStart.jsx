import { Link } from "react-router-dom";

function ResultadoStart() {
  return (  
    <>
      <div className="siguiente__parte">
        <Link to={"../css/capitulo 4/flexbox/flexDirection/flexWrap/alineacionFlex"}>volver</Link>
      </div>
      
      <div className="content__start_ejemplo">
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