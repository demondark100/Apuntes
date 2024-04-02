import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./opciones.css"

function OpcionesImgCap11({
  estado,
  mostrar,
  texto1,
  texto2,
  icono1,
  icono2,
  funcion1,
  funcion2
}) {
  
  return (  
    <div 
      className={`cap11GaleriaProy__imgOptions ${mostrar ? "":"cap11GaleriaProy__imgOptionsHide"}`}
      onClick={()=>estado(false)}
    >
      <div 
        className="cap11GaleriaProy__imgOptions--content"
        onClick={(e)=>e.stopPropagation()}
      >
        <button
          onClick={funcion1}
        >
          <FontAwesomeIcon icon={icono1}/>
          <span>{texto1}</span>
        </button>
        <button
          onClick={funcion2}
        >
          <FontAwesomeIcon icon={icono2}/>
          <span>{texto2}</span>
        </button>
      </div>
    </div>
  );
}

export default OpcionesImgCap11;