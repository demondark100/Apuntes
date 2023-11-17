import Conseptos from "../../../../../../componentes/conseptos/conseptos";
import Volver from "../../../../../../componentes/volver/volver";

function AlignContent() {
  return (
    <>
      <Volver link={"../css/flexbox/flexDirection/flexWrap/alineacionFlex"}/>
      <div className="Page">
        <Conseptos texto={`para notar la diferencia pon la resolucion mas pequeña y ve jugando con las resoluciones y te daras cuenta de las diferencias.`}/>
        <h3>sin align-content</h3>
        <div style={{backgroundColor: "#000"}}>

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


        <h3 style={{color: "#fff"}}>con align-content</h3>
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
      </div>
    </>
  );
}

export default AlignContent;