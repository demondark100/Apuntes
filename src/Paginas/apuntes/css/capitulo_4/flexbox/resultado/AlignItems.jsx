import { Link } from "react-router-dom";

function AlignItems() {
  return (  
    <>
    <div className="siguiente__parte">
      <Link to={"../css/capitulo 4/flexbox/flexDirection/flexWrap/alineacionFlex"}>volver</Link>
    </div>
    <div className="bodyAlign">
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
    </>
  );
}

export default AlignItems;