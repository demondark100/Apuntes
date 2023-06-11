import { Link } from "react-router-dom";
import Volver from "../../../../../../componentes/volver/volver";

function AlignSelf() {
  return (  
    <>
      <div className="Page">
        <Volver link={"../css/flexbox/flexDirection/flexWrap/alineacionFlex"}/>
        <h3>align-self</h3>
        <div style={{backgroundColor: "#000"}}>
        <div className="AlignSelfCajas">
          <div className="AlignSelfCajas__caja1">
            caja 1
          </div>
          <div className="AlignSelfCajas__caja2">
            caja 2
          </div>
          <div className="AlignSelfCajas__caja3">
            caja 3
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default AlignSelf;