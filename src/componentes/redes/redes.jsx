import "./redes.css";
import { Link } from "react-router-dom";


// iconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube,faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Redes() {
  return (  
    <div className="RedesContent">
      <ul className="RedesContentUl">
        <li>
          <Link to={"https://www.facebook.com/shadowkillerxe"} target="_blank"><FontAwesomeIcon icon={faFacebook}/></Link>
        </li>
        <li>
          <Link to={"https://www.youtube.com/channel/UCA7e0Kh1CGQUEIOBFvm-jBQ"} target="_blank"><FontAwesomeIcon icon={faYoutube}/></Link>
        </li>
        <li>
          <Link to={"https://www.tiktok.com/@el_tio_dan_"} target="_blank"><FontAwesomeIcon icon={faTiktok}/></Link>
        </li>
        <li>
          <Link to={"https://www.linkedin.com/in/daniel-champi-a1836523a/"} target="_blank"><FontAwesomeIcon icon={faLinkedin}/></Link>
        </li>
      </ul>
    </div>
  );
}

export default Redes;