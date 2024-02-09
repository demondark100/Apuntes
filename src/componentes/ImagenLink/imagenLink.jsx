import "./imagenLink.css"

function ImagenLink({tipo,imagen,titulo,link}) {
  return (  
    <div className="imagenLinkContent">
      <div className="imagenLinkContentCont">
        {
          tipo === "imagen" ?
            <img src={imagen} alt={titulo} />
            :
            <a target="_blank" href={link}>
              <img 
                src={imagen} 
                alt={titulo} 
                className="imagenLinkContentContHover"
              />

            </a>
        }
      </div>
    </div>
  );
}

export default ImagenLink;