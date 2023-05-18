import { Link } from "react-router-dom";

function Wrap2() {
  return (  
    <div className="flexPageContent flexPageContentMod1">
      <div className="siguiente__parte">
        <Link to={"../css/flexbox/flexDirection/flexWrap"}>volver</Link>
      </div>
      <div className="conWrapContent">
        <div className="conWrapContent__caja">
          caja 1
        </div>
        <div className="conWrapContent__caja">
          caja 2
        </div>
        <div className="conWrapContent__caja">
          caja 3
        </div>
        <div className="conWrapContent__caja">
          caja 4
        </div>
        <div className="conWrapContent__caja">
          caja 5
        </div>
      </div>
      <p className="sinWrapParrafo">
        Como te das cuenta al hacer las resoluciones mas pequeñas las cajas no cambiaran el ancho que le asignamos en cambio se ubicara una de bajo de otra.
      </p>
    </div>
  );
}

export default Wrap2;