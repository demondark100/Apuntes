import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./imgs.css";


function Cap11ProyGaleriaImgs({
  setIndex,
  contenido,
  msgAny,
  setImg,
  funcion1,
  funcion2
}) {
  const func=(e,funcion,index)=>{
    funcion == "content" ? funcion1(e):funcion2(e)
    setIndex(index);
  }
  
  return (  
    <div className="cap11GaleriaProy__imgs">
      {
        contenido.length === 0 ? <div className="cap11GaleriaProy__imgs--msg">
          <p>{msgAny}</p>
        </div>
        :
        contenido.map((i,index)=>(
          <div onClick={(e)=>func(e,"content",index)} key={index} className="cap11GaleriaProy__imgsContent">
            <img src={i[0]} alt="imagen" />
            <button
              className="cap11GaleriaProy__imgsContent--btn"
              onClick={(e)=>{
                e.stopPropagation();
                setImg(i)
                func(e,"button",index)
              }}
            ><FontAwesomeIcon icon={faEllipsisV}/></button>
          </div>
        ))
      }
    </div>
  );
}

export default Cap11ProyGaleriaImgs;