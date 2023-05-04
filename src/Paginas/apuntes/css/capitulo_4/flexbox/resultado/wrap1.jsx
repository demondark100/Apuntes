import { Link } from "react-router-dom";

function Wrap1() {
  return (  
    <>
      <div className="siguiente__parte">
        <Link to={"../css/capitulo 4/flexbox/flexDirection/flexWrap"}>volver</Link>
      </div>

      <div className="sinWrapContent">
        <div className="sinWrapContent__caja">
          caja 1
        </div>
        <div className="sinWrapContent__caja">
          caja 2
        </div>
        <div className="sinWrapContent__caja">
          caja 3
        </div>
        <div className="sinWrapContent__caja">
          caja 4
        </div>
        <div className="sinWrapContent__caja">
          caja 5
        </div>
      </div>
      <p className="sinWrapParrafo">
        Como te das cuenta a medida que pongas la resolucion mas pequeña las cajas se iran haciendo mas pequeñas perdiendo la medida original que nosotros dimos.
      </p>
    </>
  );
}

export default Wrap1;