import { useRef, useState } from 'react';
import "./codificar.css";

// iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faHtml5 } from '@fortawesome/free-brands-svg-icons';

function HtCsJs() {

  // esta funcion se encarga de actualizar html
  const [codeHtml, setCodeHtml] = useState(``);
  const handleCodeChangeHtml = (event) => {
    setCodeHtml(event.target.value);
  };
  const textIngresado = useRef(null);
  const paginaHtml = useRef(null)
  const actualizar=()=>{
    paginaHtml.current.srcdoc = textIngresado.current.value
  }


  // toso esto renderiza la salida de la consola
  const codeJs = useRef(null);
  const showConsole = useRef(null); // esto sera para mostrar la consola en el dom en versiones mobiles.
  
  
  const [code, setCode] = useState('');
  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };



  const [consoleOutput, setConsoleOutput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRunCode = () => {
    try {
      const originalConsoleLog = console.log;
      let consoleOutput = '';

      console.log = (message) => {
        consoleOutput += message + '\n';
      };

      eval(code);

      console.log = originalConsoleLog;

      setConsoleOutput(consoleOutput);
      setErrorMessage('');
    } catch (error) {
      console.error("");
      setConsoleOutput('');
      setErrorMessage('Hubo un error en tu código.');
    }
  };


  // esto es para mostrar los editeores de texto

  const [html, setHtml] = useState(false);
  const [javaScript, setJavaScript] = useState(false);

  const showHtml = () => {
    setHtml(!html);
    setJavaScript(false);
  };



  const showJavaScript = () => {
    setJavaScript(!javaScript);
    setHtml(false);
  };

  return (
    <div className='contenedorTodoJsHtCs'>
      <div className='botondesCodeContent'>
        <button onClick={showHtml}><FontAwesomeIcon icon={faHtml5}/></button>
        <button onClick={showJavaScript}><FontAwesomeIcon icon={faJs}/></button>
      </div>
      
      {
        html && (
          <div className='contenedorJsCodificar contenedorJsCodificarHtml'>
            <div className='contenedorJsCodificar__contenedor'>
              <textarea  
                ref={textIngresado} 
                value={codeHtml} 
                onKeyUp={actualizar} 
                className='codificacionTexto codificacionTextoHt' 
                onChange={handleCodeChangeHtml}
                defaultValue={"<style></style>"}
              />
            </div>
            <iframe id='paginaCodigoHtml' ref={paginaHtml}></iframe>
          </div>
        )
      }

      {
        javaScript && (
          <div className='contenedorJsCodificar'>
            <div className='contenedorJsCodificar__contenedor'>
              <textarea  ref={codeJs} value={code} onChange={handleCodeChange} className='codificacionTexto'/>
              <div className='compilarJs'>
                <button onClick={handleRunCode}>ejecutar</button>
                <button onClick={() => { codeJs.current.value = ""; }}>borrar todo</button>
              </div>
            </div>

            <div className="output" ref={showConsole}>
              <div className="console-output">
                <h3>Salida de consola:</h3>
                {errorMessage ? (
                  <p className="error-message">{errorMessage}</p>
                ) : (
                  <pre>{consoleOutput}</pre>
                )}
              </div>
            </div>
          </div>
        )
      }


    </div>
  );
}

export default HtCsJs;