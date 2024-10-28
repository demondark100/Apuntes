import "./link.css";

function LinkPersonalizado({link,texto}){
  return(
    <div className="contentLinkPersonalizado">
      <a target="_blank" href={link} className="linkPersonalizadoBtn">
        {texto}
      </a>
    </div>
  )
}

export default LinkPersonalizado;