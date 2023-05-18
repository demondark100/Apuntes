import { Link } from "react-router-dom";

function Resultado1Flex() {
  return (  
    <>
      <div className="flexPageContent">
        <div className="siguiente__parte">
          <Link to={"../css/flexbox"}>volver</Link>
        </div>
          <div className="contenido_flex">
        <p className="parrafo1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio deserunt aliquid neque odit iure velit ex voluptas expedita alias, porro reiciendis cupiditate, unde ea. Perferendis hic cumque odit animi laborum.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum cum est corporis, quasi ab repellat delectus voluptas optio aliquam deserunt assumenda temporibus dignissimos nesciunt illum suscipit ex! Blanditiis, molestiae asperiores!
        </p>
        <p className="parrafo2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi recusandae dolorum modi, provident magnam debitis ratione et molestiae facere, beatae soluta possimus numquam voluptate quo, aliquid incidunt repellendus aut ipsa.
        </p>
      </div>
      </div>

    </>
  );
}

export default Resultado1Flex;