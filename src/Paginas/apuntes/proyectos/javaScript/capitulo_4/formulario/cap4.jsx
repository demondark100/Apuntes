import MensajeModal from "../../../../../../componentes/MensajeModal/mensajeModal";
import CodigoFuenteSinInt from "../../../../../../componentes/codigoFuente/code";
import JavaScropt from "../../../../../../componentes/lenguajes/JavaScript";
import Volver from "../../../../../../componentes/volver/volver";


// alert("Bienvenido/a al registro para esta red social por favor rellene los campos para continuar.")
// class Formulario{
//   constructor(){
    
//     this.nombre = prompt("nombres")
//     this.correo = prompt("correo electronico")
//     this.contraseña = prompt("contraseña")
//     this.numero = prompt("numero telefonico")
//   }
//   validarNombre(){
//     if (this.nombre == "") {
//       alert("no has puesto nada en este campo ¡porfavor ponga su nombre!")
//     } else if (this.nombre.length < 3) {
//       alert("la cantidad de caracteres es insuficiente")
//     } else if (this.nombre.length > 20) {
//       alert("excediste la cantidad de caracteres")
//     }
//   }
// }
// const formulario = new Formulario();
// formulario.validarNombre()


function Cap4ProyJsV3() {
  return (  
    <>
      <MensajeModal texto={`¡Proyecto! capitulo 4

Hacer un formulario que valide las entradas que de el usuario.`}/>

      <CodigoFuenteSinInt codigo={<JavaScropt codigo={`xd`}/>}/>
      <Volver link={"../"}/>



      <div className="Page">
        asd
      </div>

    </>
  );
}

export default Cap4ProyJsV3;