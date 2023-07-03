import { useRef } from "react";
import "./volver.css";
import { Link } from "react-router-dom";
function Volver({link}) {
  const contenedor = useRef(null);

  return (  
    <div className={"contenedor__volver"}>
      <div ref={contenedor} className="volver">
        <Link to={link} className="volverLink">back</Link>
      </div>  
    </div>
  );
}

export default Volver;