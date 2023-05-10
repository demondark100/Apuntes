import "./variable.css"

function MensajeVariable({mostrarMessage}) {
  return (  
      <div>
        <p>
          todo el codigo escrito en esta parte lo puedes ejecutar en tu consola del navegador para comprobar los resultado. <br />
          para eso presiona f12 y pega los codigos que aparecen o puedes escribirlo tu mism@.
        </p>
        <button onClick={mostrarMessage}>ok</button>
      </div>
  );
}

export default MensajeVariable;