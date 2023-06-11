import { Link } from "react-router-dom";
import Volver from "../../../../../../componentes/volver/volver";

function AlignItems() {
  return (  
    <>
    <div className="Page">
      <div style={{backgroundColor: "#000"}}>
      <div className="content_items">
        <div className="start_align">
          <div>
            start.
          </div>
        </div>
        <div className="center_align">
          <div>
            center.
          </div>
        </div>
        <div className="end_align">
          <div>
            end
          </div>
        </div>
      </div>
      </div>
      <Volver link={"../css/flexbox/flexDirection/flexWrap/alineacionFlex"}/>
      
    </div>
    </>
  );
}

export default AlignItems;