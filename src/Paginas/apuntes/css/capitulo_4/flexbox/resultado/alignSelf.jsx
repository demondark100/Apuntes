import { Link } from "react-router-dom";

function AlignSelf() {
  return (  
    <>
      <div className="bodyAlignSelf">
        <div className="siguiente__parte">
          <Link to={"../css/flexbox/flexDirection/flexWrap/alineacionFlex"}>volver</Link>
        </div>
        <h3>align-self</h3>
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
    </>
  );
}

export default AlignSelf;