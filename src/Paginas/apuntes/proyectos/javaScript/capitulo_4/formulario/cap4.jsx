import MensajeModal from "../../../../../../componentes/MensajeModal/mensajeModal";
import CodigoFuenteSinInt from "../../../../../../componentes/codigoFuente/code";
import JavaScropt from "../../../../../../componentes/lenguajes/JavaScript";
import Volver from "../../../../../../componentes/volver/volver";









function Cap4ProyJsV3() {
  return (  
    <>
      <MensajeModal texto={`¡Proyecto! capitulo 4

Hacer un formulario que valide las entradas que de el usuario.`}/>

      <CodigoFuenteSinInt codigo={<JavaScropt codigo={`alert("Bienvenido/a al registro para esta red social por favor rellene los campos para continuar.")
class Formulario {
  constructor() {
    this.nombre = "";
    this.apellido = "";
    this.correo = "";
    this.contraseña = "";
    this.numero = "";
  }

  pedirValor(campo, min, max) {
    let valor;
    do {
      valor = prompt(\`Ingrese ${"${campo}"}:\`);
      if (valor === null) {
        return null;
      }

      valor = valor.trim();

      if (valor.length < min) {
        alert(\`La cantidad de caracteres en ${"${campo}"} es insuficiente (mínimo ${"${min}"} caracteres).\`);
      } else if (valor.length > max) {
        alert(\`Excediste la cantidad de caracteres en ${"${campo}"} (máximo ${"${max}"} caracteres).\`);
      }
    } while (valor.length < min || valor.length > max);

    return valor;
  }

  validarCorreo(correo) {
    while (true) {
      correo = this.pedirValor("correo electrónico", 5, 50);
      if (correo === null) {
        // User clicked 'Cancel' on the prompt
        return null;
      }

      if (correo.indexOf("@gmail.com") === -1) {
        alert("El correo debe contener '@gmail.com'.");
      } else {
        return correo;
      }
    }
  }

  validarNumero(numero) {
    while (true) {
      numero = this.pedirValor("número telefónico", 6, 9);
      if (numero === null) {
        // User clicked 'Cancel' on the prompt
        return null;
      }

      if (isNaN(numero)) {
        alert("Debes ingresar solo números, no letras.");
      } else {
        return numero;
      }
    }
  }

  mostrar() {
    this.nombre = this.pedirValor("nombres", 3, 22);
    if (this.nombre === null) return;

    this.apellido = this.pedirValor("apellidos", 3, 22);
    if (this.apellido === null) return;

    this.correo = this.validarCorreo(this.correo);
    if (this.correo === null) return;

    this.contraseña = this.pedirValor("contraseña", 5, 22);
    if (this.contraseña === null) return;

    this.numero = this.validarNumero(this.numero);
    if (this.numero === null) return;

    alert("¡registro exitoso!");
  }
}

const formulario = new Formulario();
formulario.mostrar();`}/>}/>
      <Volver link={"../"}/>



      <div className="Page">
        asd
      </div>

    </>
  );
}

export default Cap4ProyJsV3;