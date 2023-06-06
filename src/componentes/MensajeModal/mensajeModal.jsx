import { useState,useRef, useEffect } from 'react';
import './mensajeModal.css';
import ReactDOM  from 'react-dom';

function MensajeModal({ texto }) {
  const [showMessage, setShowMessage] = useState(true);
  const contenedor = useRef(null);


  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter' || event.key === 'Escape') {
        setShowMessage(false);
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    if (showMessage) {
      document.body.classList.add('noMover');
      contenedor.current.style.left = `${window.scrollX}px`;
    } else {
      document.body.classList.remove("noMover")
      contenedor.current.classList.add("quitarMensaje")
    }
  }, [showMessage]);

  return (
    <div ref={contenedor} className={`contentMensajeVariable ${showMessage ? '' : 'ocultarMessage'}`}>
      <div className='contenedoMensaje'>
          <p>{texto}</p>
          <button onClick={() => setShowMessage(false)}>OK</button>
      </div>
    </div>
  );
}

export default MensajeModal;