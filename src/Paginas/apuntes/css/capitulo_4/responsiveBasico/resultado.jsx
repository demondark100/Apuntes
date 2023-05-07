import { Link } from "react-router-dom";

function ResultadoResponsive1() {
  return (  
    <>        
      <div className="siguiente__parte">
        <Link to={"../css/responsive(basico)"}>volver</Link>
      </div>
      <div className="content_1">
        <h5>titulo 1</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro iste accusantium nam fugiat aperiam neque? Et recusandae dolore eum soluta fuga nisi, aliquam ad, perferendis nobis itaque totam blanditiis nesciunt.
        </p>
    </div>
    <div className="content_2">
      <h5>titulo 2</h5>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex maiores dolorem ea vel quo? Esse, ratione! Sit suscipit harum impedit! Natus, dolores porro animi facere voluptatibus atque aut autem exercitationem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores ad nulla exercitationem nobis sapiente recusandae labore nisi est odio, magnam ipsam atque id laborum corporis facilis illum explicabo eius rem?
      </p>
    </div>
    </>
  );
}

export default ResultadoResponsive1;