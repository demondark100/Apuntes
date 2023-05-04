import "./opciones.css";
import { Link } from "react-router-dom";

function Opciones({texto , link}) {
  return (  
    <div className="onciones">
      <Link to={link}>
        {texto}
      </Link>
    </div>
  );
}

export default Opciones;