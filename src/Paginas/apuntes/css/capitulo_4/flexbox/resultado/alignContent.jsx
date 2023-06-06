import { Link } from "react-router-dom";
import Conseptos from "../../../../../../componentes/conseptos/conseptos";
import Volver from "../../../../../../componentes/volver/volver";

function AlignContent() {
  return (
    <>

      <div className="bodyAlignContent">
        <Volver link={"../css/flexbox/flexDirection/flexWrap/alineacionFlex"}/>
      <Conseptos texto={`para notar la diferencia pon la resolucion mas pequeña y ve jugando con las resoluciones y te daras cuenta de las diferencias.`}/>
        <h3>sin align-content</h3>
        <div className="align_content1">
          <div>
            content
          </div>
          <div>
            content
          </div>
          <div>
            content
          </div>
          <div>
            content
          </div>
          <div>
            content
          </div>
          <div>
            content
          </div>
          <div>
            content
          </div>
          <div>
            content
          </div>
          <div>
            content
          </div>
          <div>
            content
          </div>
        </div>


        <h3>con align-content</h3>
        <div className="align_content2">
          <div>
            content
          </div>
          <div>
            content
          </div>
          <div>
            content
          </div>
          <div>
            content
          </div>
          <div>
            content
          </div>
          <div>
            content
          </div>
          <div>
            content
          </div>
          <div>
            content
          </div>
          <div>
            content
          </div>
          <div>
            content
          </div>
        </div>
      </div>
    </>
  );
}

export default AlignContent;