import React, { useState } from "react";
import "./cap3.css";
import MensajeModal from "../../../../../../componentes/MensajeModal/mensajeModal";
import ShowOptions from "../../../../../../componentes/showOptions/show";


function Cap3ProyJsV1() {

  const [cantidadAlumnos, setCantidadAlumnos] = useState(0);
  const [nombres, setNombres] = useState([]);
  const [presentes, setPresentes] = useState([]);
  const [faltan, setFaltan] = useState([]);
  const [indexPresentes, setIndexPresentes] = useState(0);
  const [indexFaltan, setIndexFaltan] = useState(0);

  const handleCantidadAlumnos = (event) => {
    const cantidad = parseInt(event.target.value);
    setCantidadAlumnos(cantidad);
  };

  const handleNombreAlumno = (event, index) => {
    const updatedNombres = [...nombres];
    updatedNombres[index] = event.target.value;
    setNombres(updatedNombres);
  };

  const handleAsistenciaAlumno = (event, index) => {
    const asistencia = event.target.value;
    if (asistencia === "1") {
      const updatedPresentes = [...presentes];
      updatedPresentes[index] = nombres[index];
      setPresentes(updatedPresentes);
      setIndexPresentes(indexPresentes + 1);
    } else if (asistencia === "2") {
      const updatedFaltan = [...faltan];
      updatedFaltan[index] = nombres[index];
      setFaltan(updatedFaltan);
      setIndexFaltan(indexFaltan + 1);
    } else {
      alert("Opción no válida");
    }
  };

  const renderPresentes = () => {
    return presentes.map((el, index) => <li key={index}>{el}</li>);
  };

  const renderFaltan = () => {
    return faltan.map((el, index) => <li key={index}>{el}</li>);
  };

  return (
    <>
      <ShowOptions 
        link={`../`}
        html={`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Asistencia de alumnos</title>
  </head>
  <body>
    <script src="codigo.js"></script>
  </body>
</html>`}
        javaScript={`function obtenerPresentes() {
  const nombres = [];
  const presentes = [];
  const faltan = [];
  let indexPresentes = 0;
  let indexFaltan = 0;
  let cantidadAlumnos = parseInt(prompt("¿Cuántos alumnos hay?"));
  
  if (isNaN(cantidadAlumnos)) {
    alert("¡Lo siento! Inserta un número válido. Gracias.");
  }

  while (isNaN(cantidadAlumnos)) {
    cantidadAlumnos = parseInt(prompt("¿Cuántos alumnos hay?"));
    
    if (isNaN(cantidadAlumnos)) {
      alert("¡Lo siento! Inserta un número válido. Gracias.");
    }
  }

  for (let i = 0; i < cantidadAlumnos; i++) {
    nombres[i] = prompt(\`Nombre del alumno n${"${i + 1}"}\`);
    let preguntar = parseInt(prompt(\`¿${"${nombres[i]}"} está presente? 1. Sí 2. No.\`));

    if (preguntar === 1) {
      presentes[indexPresentes] = nombres[i];
      indexPresentes++;
    } else if (preguntar === 2) {
      faltan[indexFaltan] = nombres[i];
      indexFaltan++;
    } else {
      alert("Opción no válida");
    }
    
    while (isNaN(preguntar)) {
      preguntar = parseInt(prompt(\`¿${"${nombres[i]}"} está presente? 1. Sí 2. No.\`));
      
      if (preguntar === 1) {
        presentes[indexPresentes] = nombres[i];
        indexPresentes++;
      } else if (preguntar === 2) {
        faltan[indexFaltan] = nombres[i];
        indexFaltan++;
      } else {
        alert("Opción no válida");
      }
    }
  }
  
  console.log("Alumnos presentes:", presentes);
  console.log("Alumnos ausentes:", faltan);
}

obtenerPresentes();`}
      />
      
      <MensajeModal texto={`¡Proyecto! capitulo 3:

Hacer un programa que tome asistencia de alumnos y mostrar los alumnos presentes y los que no estan presentes.

Recuerda que aprendimos:

1. Condicionales.
2. Arreglos.
3. Arreglos asociativos.
4. bucles.
5. funciones.

¡Aclaracion!
El codigo se puede escribir con prompts y alert yo solo le estoy dando una interfaz grafica.`}/>
      <div className="Page">
        <div className="cap3-container">
          <div className="cap3-form">
            <label htmlFor="cantidadAlumnos">¿Cuántos alumnos hay?</label>
            <input
              type="number"
              id="cantidadAlumnos"
              value={cantidadAlumnos}
              onChange={handleCantidadAlumnos}
            />
            {cantidadAlumnos > 0 && (
              <>
                <h4 className="cap3-container__h3">Registro de asistencia</h4>
                {[...Array(cantidadAlumnos)].map((_, index) => (
                  <div className="cap3-alumno" key={index}>
                    <input
                      type="text"
                      placeholder={`Nombre del alumno n${index + 1}`}
                      value={nombres[index] || ""}
                      onChange={(e) => handleNombreAlumno(e, index)}
                    />
                    <select
                      value={presentes[index] ? "1" : faltan[index] ? "2" : ""}
                      onChange={(e) => handleAsistenciaAlumno(e, index)}
                    >
                      <option value="">Seleccionar asistencia</option>
                      <option value="1">Sí</option>
                      <option value="2">No</option>
                    </select>
                  </div>
                ))}
              </>
            )}
          </div>
          <div className="cap3-resultados">
            {presentes.length > 0 && (
              <div className="cap3-presentes">
                <h4 className="cap3-presentes__h4">Alumnos presentes</h4>
                <ul>{renderPresentes()}</ul>
              </div>
            )}
            {faltan.length > 0 && (
              <div className="cap3-faltan">
                <h4 className="cap3-faltan__h4">Alumnos que faltan</h4>
                <ul>{renderFaltan()}</ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>

  );
}

export default Cap3ProyJsV1;

















// import MensajeModal from "../../../../../../componentes/MensajeModal/mensajeModal";
// import Volver from "../../../../../../componentes/volver/volver";
// import "./cap3.css";





// import React, { useState } from 'react';

// function PromptDialog({ onClose }) {
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleSubmit = () => {
//     onClose(inputValue);
//   };

//   return (
//     <div>
//       <input type="text" value={inputValue} onChange={handleInputChange} />
//       <button onClick={handleSubmit}>Aceptar</button>
//     </div>
//   );
// }








// function Cap3ProyJsV1() {




//   const [promptVisible, setPromptVisible] = useState(false);
//   const [promptValue, setPromptValue] = useState('');

//   const handlePromptClose = (value) => {
//     setPromptVisible(false);
//     setPromptValue(value);
//   };

//   const handleOpenPrompt = () => {
//     setPromptVisible(true);
//   };



  





//   return (
//     <>
//       
//       <Volver link={"../"}/>
//       <div className="Page">
//         <div className="contenedorProyJsCap_2V1">
//           <button onClick={obtenerPrsentes}>alumnos</button>
//           <div className="contenedorProyJsCap_2V1__lista">
//             <p>
//               los alumnos presentes son:
//             </p>
//             <ul>
//               {
//                 presentes.map(el=>(
//                   <li>{el}</li>
//                 ))
//               }
//             </ul>
//           </div>
//         </div>

//         <button onClick={handleOpenPrompt}>Abrir prompt</button>
//       {promptVisible && <PromptDialog onClose={handlePromptClose} />}
//       {promptValue && <p>El valor ingresado fue: {promptValue}</p>}

//       </div>
//     </>
//   );
// }

// export default Cap3ProyJsV1;