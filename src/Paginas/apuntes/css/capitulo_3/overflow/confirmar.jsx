function Confirmar({confirmado,cancelar}) {
  return (  
    <div className="overflow__fondo">
      <p>estas a punto de entrar a un h <br />
      ¿Estas seguro que quieres entrar?</p>
      <div className="overflow__fondo__botones">
        <button onClick={confirmado}>Sí</button>
        <button onClick={cancelar}>No</button>
      </div>
    </div>
  );
}

export default Confirmar;