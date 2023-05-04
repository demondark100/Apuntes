import "./capitulos.css";
import { Link } from "react-router-dom";

function Capitulos({texto}) {
  return (  
    <div className="capitulos_content">
      <Link to={texto}>{texto}</Link>
    </div>
  );
}

export default Capitulos;