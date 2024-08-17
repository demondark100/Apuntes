import "./seccion.css"
import logo from "../../../../componentes/imgs/logo.jpg";

function Seccion1Home() {
  const contacto=()=>{
    window.open("https://wa.me/51900099632");
  }
  return (  
    <div className="HomeSeccion1 HomeSeccion">
      <div className="HomeSeccion1__info1">
        <h1>Hola soy desarrollador.</h1>
        <p>Mi nombre es Daniel y me especializo en el desarrollo web fron-end.</p>
        <button onClick={contacto}>Contactarse conmigo</button>
      </div>
      <div className="HomeSeccion1__Img">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default Seccion1Home;