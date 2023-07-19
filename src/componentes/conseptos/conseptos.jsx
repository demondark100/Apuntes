import { Link } from "react-router-dom";
import "./conseptos.css";

function Conseptos({ texto, enlaces, targetBlank }) {
  const textoConEnlaces = enlaces
    ? texto.split(/(\{\w+\})/)
        .map((fragment, index) => {
          const enlace = enlaces[fragment?.replace(/[{}]/g, "")];
          return enlace ? (
            <Link 
              key={index} 
              to={enlace.url}
              target={
                targetBlank ? "_blank" : undefined
              }
              rel={
                targetBlank ? "noopener noreferrer" : undefined
              }
            >
              {enlace.text}
            </Link>
          ) : (
            fragment
          );
        })
    : texto;

  return (
    <div className="contenedor-conseptos">
      <p style={{ whiteSpace: "pre-wrap" }}>{textoConEnlaces}</p>
    </div>
  );
}

export default Conseptos;