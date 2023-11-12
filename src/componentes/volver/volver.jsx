import "./volver.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";


function Volver({link}) {
  

  return (  
    <>
      <Link to={link} className="volverLink"><FontAwesomeIcon icon={faArrowLeft}/></Link>
    </> 
  );
}

export default Volver;