import { Link } from "react-router-dom";

function FlexGrowResultado() {
  return (  
    <>
      <div className="siguiente__parte">
        <Link to={"../css/capitulo 4/flexbox/flexDirection/flexWrap/alineacionFlex/flex-grow"}>volver</Link>
      </div>
      <div className="bodyFlexGrow">
        <h4>sin grow</h4>
        <div className="sin_grow">
            <div>
                caja 1
            </div>
            <div>
                caja 2
            </div>
            <div>
                caja 3
            </div>
        </div>

        <h4>con grow</h4>
        <div className="con_grow">
            <div>
                caja 1
            </div>
            <div>
                caja 2
            </div>
            <div>
                caja 3
            </div>
        </div>
      </div>
    </>
  );
}

export default FlexGrowResultado;