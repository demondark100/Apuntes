import MensajeModal from "../../../../../componentes/MensajeModal/mensajeModal";
import Volver from "../../../../../componentes/volver/volver";
import "./cap6.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTiktok,
  faGithub,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function Cap6ProyCss() {
  return (  
    <>
      <Volver link={"../"}/>
      <MensajeModal texto={`?Proyecto! capitulo 6:

Hacer un menu animado:

Recuerda que aprendimos:

1. Cubic Bezier.
2. Transform.
3. variables.
4. filter.
5. estras de css.
6. linear gradient.`}/>
      <div className="Page">
        <div className="contenedorCap6CssProy">
          <div className="contenedorCap6CssPoryIcon">
              <Link to={"../"}><FontAwesomeIcon icon={faHome} className="contenedorCap6CssProy__icono1"/></Link>
              <Link to={"https://www.tiktok.com/@el_tio_dan_"} target="_blank"><FontAwesomeIcon icon={faTiktok} className="contenedorCap6CssProy__icono2" /></Link>
              <Link to={"https://github.com/demondark100"} target="_blank"><FontAwesomeIcon icon={faGithub} className="contenedorCap6CssProy__icono3" /></Link>
              <Link to={"https://www.youtube.com/channel/UCA7e0Kh1CGQUEIOBFvm-jBQ"} target="_blank"><FontAwesomeIcon icon={faYoutube} className="contenedorCap6CssProy__icono4" /></Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cap6ProyCss;