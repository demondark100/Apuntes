import { useState, useEffect } from 'react';
import './mensajeModal.css';

function MensajeModal({ texto }) {
  const [showMessage, setShowMessage] = useState(true);



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
      document.querySelector('main').classList.add('mainFilter');
      document.querySelector('aside').classList.add('mainFilter');
      document.querySelector('footer').classList.add('mainFilter');
      document.querySelector('header').classList.add('mainFilter');
    } else {
      document.body.classList.remove('noMover');
      document.querySelector('main').classList.remove('mainFilter');
      document.querySelector('aside').classList.remove('mainFilter');
      document.querySelector('footer').classList.remove('mainFilter');
      document.querySelector('header').classList.remove('mainFilter');
    }
  }, [showMessage]);

  return (
    <div className={`contentMensajeVariable ${showMessage ? '' : 'ocultarMessage'}`}>
      <div>
        <p>{texto}</p>
        <button onClick={() => setShowMessage(false)}>OK</button>
      </div>
    </div>
  );
}

export default MensajeModal;