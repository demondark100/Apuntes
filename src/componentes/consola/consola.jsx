import "./consola.css";
function Consola({codigo}) {
  return (  
    <div className="consola">
      {codigo} <b id="palito"></b>
    </div>
  );
}

export default Consola;