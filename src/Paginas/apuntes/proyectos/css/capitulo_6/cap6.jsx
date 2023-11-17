import MensajeModal from "../../../../../componentes/MensajeModal/mensajeModal";
import "./cap6.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTiktok,
  faGithub,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import ShowOptions from "../../../../../componentes/showOptions/show";

function Cap6ProyCss() {
  return (  
    <>
      <ShowOptions 
        link={`../`}
        html={`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <title>Título de la página</title>
  </head>
  <body>
    <main>
        <div class="contenedorCap6CssProy">
          <div class="contenedorCap6CssPoryIcon">
              <a href="../"><FontAwesomeIcon icon={faHome} class="contenedorCap6CssProy__icono1"/></a>
              <a href="https://www.tiktok.com/@el_tio_dan_" target="_blank"><FontAwesomeIcon icon={faTiktok} class="contenedorCap6CssProy__icono2" /></a>
              <a href="https://github.com/demondark100" target="_blank"><FontAwesomeIcon icon={faGithub} class="contenedorCap6CssProy__icono3" /></a>
              <a href="https://www.youtube.com/channel/UCA7e0Kh1CGQUEIOBFvm-jBQ" target="_blank"><FontAwesomeIcon icon={faYoutube} class="contenedorCap6CssProy__icono4" /></a>
          </div>
        </div>
    </main>
  </body>
</html>`}
        css={`.contenedorCap6CssProy{
  width: 100%;
  height: 100%;
  background-color: #160524;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contenedorCap6CssPoryIcon{
  background-color: #000000;
  max-width: 500px;
  border-radius: 150px;
  padding: 15px;
  display: flex;
  width: 60%;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 0px 200px 25px #fff;
  animation-name: contenedorCap6CssPoryIcon;
  animation-duration: 60s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  transition-timing-function: ease-in-out;
}
.contenedorCap6CssPoryIcon a{
  color: #fff !important;
  transition-duration: .5s;
}
.contenedorCap6CssPoryIcon a:hover{
  color: #6aade4 !important;
  transition-duration: .5s;
}
@keyframes contenedorCap6CssPoryIcon {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}


.contenedorCap6CssProy__icono1{
  animation-name: icono1AnimacionCssCap6Proy;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
@keyframes  icono1AnimacionCssCap6Proy{
  0%{
    transform: rotateY(0deg);
  }
  100%{
    transform: rotateY(360deg);
  }
}

.contenedorCap6CssProy__icono2{
  animation-name: icono1AnimacionCssCap6Proy2;
  animation-duration: 2s;
  animation-delay: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
@keyframes  icono1AnimacionCssCap6Proy2{
  0%{
    transform: rotateY(0deg);
  }
  100%{
    transform: rotateY(360deg);
  }
}


.contenedorCap6CssProy__icono3{
  animation-name: icono1AnimacionCssCap6Proy3;
  animation-duration: 2s;
  animation-delay: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
@keyframes  icono1AnimacionCssCap6Proy3{
  0%{
    transform: rotateY(0deg);
  }
  100%{
    transform: rotateY(360deg);
  }
}


.contenedorCap6CssProy__icono4{
  animation-name: icono1AnimacionCssCap6Proy4;
  animation-duration: 2s;
  animation-delay: 3s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
@keyframes  icono1AnimacionCssCap6Proy4{
  0%{
    transform: rotateY(0deg);
  }
  100%{
    transform: rotateY(360deg);
  }
}

@media(min-width: 750px){
  .contenedorCap6CssPoryIcon{
    width: 25%;
    max-width: 500px;
  }
}`}
      />
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