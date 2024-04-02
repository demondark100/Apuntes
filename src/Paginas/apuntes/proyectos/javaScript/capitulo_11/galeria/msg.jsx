import "./msg.css";

function MsgsGaleriaCap11Proy({mostrar,msg}) {
  return (
    <div className="cap11GaleriaProy__msgContent">
      <b className={`cap11GaleriaProy__msg--parrafo ${mostrar ? "":"cap11GaleriaProy__msg--parrafoHide"}`}>{msg}</b>
    </div>
  )

}
export default MsgsGaleriaCap11Proy;