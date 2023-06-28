import { useState } from 'react';
import "./codificar.css";

function HtCsJs() {
  // esta funcion es para escribir codigo js
  const [code, setCode] = useState('');
  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };
  const handleRunCode = () => {
    try {
      eval(code);
    } catch (error) {
      console.log(error)
    }
  };

  const [html, setHtml] = useState(false); //esto muestra y quita html
  const [css, setCss] = useState(false); //esto muestra y quita css
  const [javaScript, setJavaScript] = useState(false); //esto muestra y quita javaScript
  // estas funciones son para mostrar o quitar los lenguajes para codificar
  const showHtml=()=>{
    setHtml(!html)
    setCss(false)
    setJavaScript(false)
  }
  const showCss=()=>{
    setCss(!css)
    setHtml(false)
    setJavaScript(false)
  }
  const showJavaScript=()=>{
    setJavaScript(!javaScript)
    setCss(false)
    setHtml(false)
  }


  return (
    <div>
      <div className='botondesCodeContent'>
        <button onClick={showHtml}>html</button>
        <button onClick={showCss}>css</button>
        <button onClick={showJavaScript}>javaScript</button>
      </div>
      {
        javaScript && <div>
          <textarea value={code} onChange={handleCodeChange} className='codificacionTexto'/>
          <div className='compilarJs'>
            <button onClick={handleRunCode}>Run Code</button>
          </div>
        </div>
      }
    </div>
  );
}
export default HtCsJs;