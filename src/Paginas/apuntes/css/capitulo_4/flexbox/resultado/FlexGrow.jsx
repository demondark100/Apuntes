import Volver from "../../../../../../componentes/volver/volver";

function FlexGrowResultado() {
  return (
    <>
      <Volver link={"../css/flexbox/flexDirection/flexWrap/alineacionFlex/flex-grow"}/>
      <div className="Page">
        <div>
        <h4 style={{color: "#fff"}}>sin grow</h4>
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

        <h4 style={{color: "#fff"}}>con grow</h4>
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
      </div>
    </>
  );
}

export default FlexGrowResultado;