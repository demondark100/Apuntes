import Volver from "../../../../../../componentes/volver/volver";

function Wrap2() {
  return (
    <>
      <Volver link={"../css/flexbox/flexDirection/flexWrap"}/>
    <div className="Page">
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
    </>
  );
}

export default Wrap2;