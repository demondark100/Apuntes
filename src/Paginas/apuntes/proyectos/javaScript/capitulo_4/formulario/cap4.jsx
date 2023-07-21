import MensajeModal from "../../../../../../componentes/MensajeModal/mensajeModal";
import CodigoFuenteSinInt from "../../../../../../componentes/codigoFuente/code";
import JavaScropt from "../../../../../../componentes/lenguajes/JavaScript";
import Volver from "../../../../../../componentes/volver/volver";
import React, { useState } from 'react';

import "./cap4.css";



function Mensaje({
  setShowMensaje,
  showMensaje,
  titleMostrar,
  mensajeMostrar
}){
  return(
    <div className={`contenedorMensjaesProuJsCap4V3 ${showMensaje ? "":"contenedorMensjaesProuJsCap4V3Hide"}`}>
      <div className="contenedorMensjaesProuJsCap4V3Content">
        <h4>{titleMostrar}</h4>
        <p>{mensajeMostrar}</p>
        <button onClick={()=>setShowMensaje(false)}>ok</button>
      </div> 
    </div>
  )
}



function Cap4ProyJsV3() {
  const [datos, setDatos] = useState({});
  const [mensajes, setMensajes] = useState({
    nombres: '',
    apellidos: '',
    correo: '',
    telefono: '',
    contraseña: ''
  });

  const manejarCambios = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    });

    validarCampo(e.target.name, e.target.value);
  };

  const validarCampo = (campo, valor) => {
    switch (campo) {
      case 'nombres':
        if (valor.length < 3 || valor.length > 50) {
          setMensajes({ ...mensajes, nombres: 'El nombre debe tener entre 3 y 50 caracteres' });
        }  else {
          setMensajes({ ...mensajes, nombres: '' });
        }
        break;
      case 'apellidos':
        if (valor.length < 3 || valor.length > 50) {
          setMensajes({ ...mensajes, apellidos: 'El apellido debe tener entre 3 y 50 caracteres' });
        } else {
          setMensajes({ ...mensajes, apellidos: '' });
        }
        break;
      case 'correo electronico':
        if (!valor.includes('@gmail.com') || valor.length > 100) {
          setMensajes({ ...mensajes, correo: 'El correo debe contener una @gmail.com y tener máximo 100 caracteres' });
        } else {
          setMensajes({ ...mensajes, correo: '' });
        }
        break;
      case 'telefono':
        if (isNaN(valor) || valor.length < 7 || valor.length > 15) {
          setMensajes({ ...mensajes, telefono: 'El número de teléfono debe contener solo números y tener entre 7 y 15 caracteres' });
        } else {
          setMensajes({ ...mensajes, telefono: '' });
        }
        break;
      case 'contraseña':
        if (valor.length < 6 || valor.length > 20) {
          setMensajes({ ...mensajes, contraseña: 'La contraseña debe tener entre 6 y 20 caracteres' });
        } else {
          setMensajes({ ...mensajes, contraseña: '' });
        }
        break;
      default:
        break;
    }
  };
  const objeto = {...datos};
  const registrar = () => {
    setShowMensaje(true)
    
    const hayErrores = Object.values(mensajes).some((mensaje) => mensaje !== '');
    console.log(objeto)
    if (
      objeto.nombres == undefined ||
      objeto.apellidos == undefined || 
      objeto["correo electronico"] == undefined ||
      objeto.telefono == undefined ||
      objeto.contraseña == undefined
    ) {
      setTitleMostrar("¡Incompleto!")
      setMensajeMostrar("Por favor, rellene los campos para registrarse.")
    } else {
      if (hayErrores) {
        setTitleMostrar("Error al registrarse")
        setMensajeMostrar("Por favor, corrija los errores antes de registrarse.")
      } else {
        setTitleMostrar("¡Registrado correctamente!")
        setMensajeMostrar("")
      }
    }

  };



  const [datosLogin, setDatosLogin] = useState({});
  const manejarCambioLogin=(e)=>{
    setDatosLogin({
      ...datosLogin,
      [e.target.name]: e.target.value
    })

    validarLogin(e.target.name,e.target.value)
  }
  const [mensajesLogin, setMensajesLogin] = useState({
    correo: "",
    contraseña: ""
  });
  const validarLogin=(campo,valor)=>{
    switch(campo){
      case "correo electronico":
        if (!valor.includes('@gmail.com') || valor.length > 100) {
          setMensajesLogin({ ...mensajesLogin, correo: 'El correo debe contener una @gmail.com y tener máximo 100 caracteres' });
        } else {
          setMensajesLogin({ ...mensajesLogin, correo: '' });
        }
        break;
      case "contraseña":
        if (valor.length < 6 || valor.length > 20) {
          setMensajesLogin({ ...mensajesLogin, contraseña: 'La contraseña debe tener entre 6 y 20 caracteres' });
        } else {
          setMensajesLogin({ ...mensajesLogin, contraseña: '' });
        }
        break;
      default:
        break;
    }
  }

  const objeto2 = {...datosLogin}
  const iniciarSesion=()=>{
    setShowMensaje(true)
    const hayErrores = Object.values(mensajesLogin).some((mensaje) => mensaje !== '');

    if (      
      objeto2["correo electronico"] == undefined ||
      objeto2.contraseña == undefined
    ) {
      setTitleMostrar("¡Incompleto!")
      setMensajeMostrar("Por favor, rellene los espacios en blanco antes de iniciar sesion.")
    } else {
      if (hayErrores) {
        setTitleMostrar("Error al iniciar sesion")
        setMensajeMostrar("Por favor, corrija los errores antes de iniciar sesion.")
      } else {
        setTitleMostrar("sesion iniciada")
        setMensajeMostrar("")
      }
    }

  }


  const [showRegOrLog, setShowRegOrLog] = useState(true); // esto es para cambiar entre el login y el register del website

  const [showMensaje, setShowMensaje] = useState(false); // esto es para mostrar los mensajes correspondientes en un componente.
  const [mensajeMostrar, setMensajeMostrar] = useState("");
  const [titleMostrar, setTitleMostrar] = useState("");
  

  return (
    <div className="Page">
      <Mensaje
        setShowMensaje={setShowMensaje}
        showMensaje={showMensaje}
        titleMostrar={titleMostrar}
        mensajeMostrar={mensajeMostrar}
      />
      <div className="ContenedorProyJsCap4V3Input">

        <div className={`ContenedorProyJsCap4V3Botones`}>
          <button onClick={()=>setShowRegOrLog(true)}>Resgistrarse</button>
          <button onClick={()=>setShowRegOrLog(false)}>iniciar sesion</button>
        </div>


        <div className={`ContenedorProyJsCap4V3General ContenedorProyJsCap4V3Resistrarse ${showRegOrLog ? 
          "ShowContenedorProyJsCap4V3Resistrarse":
          "HideContenedorProyJsCap4V3Resistrarse"
          }`}>
          <h4>Registrarse</h4>
          <input
            type="text"
            placeholder="nombres completos"
            name="nombres"
            onChange={manejarCambios}
          />
          {mensajes.nombres && <p>{mensajes.nombres}</p>}
          <input
            type="text"
            placeholder="apellidos"
            name="apellidos"
            onChange={manejarCambios}
          />
          {mensajes.apellidos && <p>{mensajes.apellidos}</p>}
          <input
            type="text"
            placeholder="correo electronico"
            name="correo electronico"
            onChange={manejarCambios}
          />
          {mensajes.correo && <p>{mensajes.correo}</p>}
          <input
            type="number"
            placeholder="numero telefonico"
            name="telefono"
            onChange={manejarCambios}
          />
          {mensajes.telefono && <p>{mensajes.telefono}</p>}
          <input
            type="password"
            placeholder="contraseña"
            name="contraseña"
            onChange={manejarCambios}
          />
          {mensajes.contraseña && <p>{mensajes.contraseña}</p>}

          <b onClick={()=>setShowRegOrLog(false)}>¿ya tienes una cuenta?</b>
          <button onClick={registrar}>Registrarse</button>
        </div>

        <div className={`ContenedorProyJsCap4V3General ContenedorProyJsCap4V3Login ${showRegOrLog ? 
          "HideContenedorProyJsCap4V3Login":
          "ShowContenedorProyJsCap4V3Login"}
        `}>
          <h4>iniciar sesion</h4>
          <input 
            type="text"
            name="correo electronico"
            placeholder="correo electronico"
            onChange={manejarCambioLogin} 
          />
          {mensajesLogin.correo && <p>{mensajesLogin.correo}</p>}
          <input 
            type="password"
            name="contraseña"
            placeholder="contraseña"
            onChange={manejarCambioLogin} 
          />
          {mensajesLogin.contraseña && <p>{mensajesLogin.contraseña}</p>}
          <b onClick={()=>{
            setShowMensaje(true);
            setTitleMostrar("404 not found");
            setMensajeMostrar("No me pagaron lo suficiente para programar esto , Espera!! ni siquiera me pagan.")
          }}>¿Olvidaste tu contraseña?</b>
          <b onClick={()=>setShowRegOrLog(true)}>¡No tienes cuenta?</b>
          <button onClick={iniciarSesion}>iniciar sesion</button>
        </div>


      </div>
    </div>
  );
}

export default Cap4ProyJsV3;











// <MensajeModal texto={`¡Proyecto! capitulo 4

// Hacer un formulario que valide las entradas que de el usuario.`}/>

//       <CodigoFuenteSinInt codigo={<JavaScropt codigo={`alert("Bienvenido/a al registro para esta red social por favor rellene los campos para continuar.")
// class Formulario {
//   constructor() {
//     this.nombre = "";
//     this.apellido = "";
//     this.correo = "";
//     this.contraseña = "";
//     this.numero = "";
//   }

//   pedirValor(campo, min, max) {
//     let valor;
//     do {
//       valor = prompt(\`Ingrese ${"${campo}"}:\`);
//       if (valor === null) {
//         return null;
//       }

//       valor = valor.trim();

//       if (valor.length < min) {
//         alert(\`La cantidad de caracteres en ${"${campo}"} es insuficiente (mínimo ${"${min}"} caracteres).\`);
//       } else if (valor.length > max) {
//         alert(\`Excediste la cantidad de caracteres en ${"${campo}"} (máximo ${"${max}"} caracteres).\`);
//       }
//     } while (valor.length < min || valor.length > max);

//     return valor;
//   }

//   validarCorreo(correo) {
//     while (true) {
//       correo = this.pedirValor("correo electrónico", 5, 50);
//       if (correo === null) {
//         // User clicked 'Cancel' on the prompt
//         return null;
//       }

//       if (correo.indexOf("@gmail.com") === -1) {
//         alert("El correo debe contener '@gmail.com'.");
//       } else {
//         return correo;
//       }
//     }
//   }

//   validarNumero(numero) {
//     while (true) {
//       numero = this.pedirValor("número telefónico", 6, 9);
//       if (numero === null) {
//         return null;
//       }

//       if (isNaN(numero)) {
//         alert("Debes ingresar solo números, no letras.");
//       } else {
//         return numero;
//       }
//     }
//   }

//   mostrar() {
//     this.nombre = this.pedirValor("nombres", 3, 22);
//     if (this.nombre === null) return;

//     this.apellido = this.pedirValor("apellidos", 3, 22);
//     if (this.apellido === null) return;

//     this.correo = this.validarCorreo(this.correo);
//     if (this.correo === null) return;

//     this.contraseña = this.pedirValor("contraseña", 5, 22);
//     if (this.contraseña === null) return;

//     this.numero = this.validarNumero(this.numero);
//     if (this.numero === null) return;

//     alert("¡registro exitoso!");
//   }
// }

// const formulario = new Formulario();
// formulario.mostrar();`}/>}/>
//       <Volver link={"../"}/>