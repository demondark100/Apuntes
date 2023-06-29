import { useRef, useState } from 'react';
import "./codificar.css";

// iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faCss3Alt, faHtml5 } from '@fortawesome/free-brands-svg-icons';

function HtCsJs() {
  const codeJs = useRef(null);

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
      console.error(error);
      setConsoleOutput('');
      setErrorMessage('Hubo un error en tu código.');
    }
  };

  const [html, setHtml] = useState(false);
  const [css, setCss] = useState(false);
  const [javaScript, setJavaScript] = useState(false);

  const showHtml = () => {
    setHtml(!html);
    setCss(false);
    setJavaScript(false);
  };

  const showCss = () => {
    setCss(!css);
    setHtml(false);
    setJavaScript(false);
  };

  const showJavaScript = () => {
    setJavaScript(!javaScript);
    setCss(false);
    setHtml(false);
  };

  return (
    <div className='contenedorTodoJsHtCs'>
      <div className='botondesCodeContent'>
        <button onClick={showHtml}><FontAwesomeIcon icon={faHtml5}/></button>
        <button onClick={showCss}><FontAwesomeIcon icon={faCss3Alt}/></button>
        <button onClick={showJavaScript}><FontAwesomeIcon icon={faJs}/></button>
      </div>
      {javaScript && (
        <div className='contenedorJsCodificar'>
          <textarea ref={codeJs} value={code} onChange={handleCodeChange} className='codificacionTexto'/>
          <div className='compilarJs'>
            <button onClick={handleRunCode}>ejecutar</button>
            <button onClick={() => { codeJs.current.value = ""; }}>borrar todo</button>
            <button>ver pagina</button>
          </div>
          <div className="output">
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
      )}
    </div>
  );
}

export default HtCsJs;
