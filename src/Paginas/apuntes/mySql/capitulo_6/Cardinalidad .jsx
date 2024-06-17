import Conseptos from "../../../../componentes/conseptos/conseptos";
import ImagenLink from "../../../../componentes/ImagenLink/imagenLink"; 
import ShowOptions from "../../../../componentes/showOptions/show";

// imagenes
import img4 from "../capitulo_5/imgs/img4.png";

export default function CardinalidadMySql(){
  return (
    <>
      <main>
        <h1>Cardinalidadd</h1>
        <Conseptos texto={`La cardinalidad sirve para saber como se relacionan las claves foraneas entre si, existen cuatro formas de cardinalidad.`}/>
        <ol>
          <li>
            <Conseptos texto={`uno a uno: Esto es cuando un registro se relaciona con solo un registro en una tabla.`}/>
            <ImagenLink tipo={"imagen"} imagen={"https://soniaykarina2010.files.wordpress.com/2010/12/relaciones1.png"} titulo={"relacion 1 a 1"}/>
            <Conseptos texto={`Un ejemplo seria que un curso solo puede tener un profesor que enseña ese curso.`}/>
          </li>
          <li>
            <Conseptos texto={`uno a muchos: Es cuando un registro en una tabla se relaciona con muchos registros de otra tabla.`}/>
            <ImagenLink tipo={"imagen"} imagen={"https://help.claris.com/archive/help/18/fmp/es/FMP_Help/images/relational.07.04.2.png"} titulo={"uno a muchos"}/>
            <Conseptos texto={`Un ejemplo seria un estudiante puede tomar muchos cursos.`}/>
          </li>
          <li>
            <Conseptos texto={`muchos a uno: Es cuando muchos regustros en una tabla se relaciona con un registro de otra tabla.`}/>
            <ImagenLink tipo={"imagen"} imagen={"https://learn.microsoft.com/es-es/analysis-services/multidimensional-models/media/ssas-m2m-dsvpkeys.png?view=asallproducts-allversions"} titulo={"muchos a uno"}/>
            <Conseptos texto={`Un ejemplo seria que varios cursos hagan referencia a un estudiante.`}/>
          </li>
          <li>
            <Conseptos texto={`muchos a muchos: Es cuando varios registros de una tabla se relacionan con varios registros de otra tabla.`}/>
            <ImagenLink tipo={"imagen"} imagen={"https://learn.microsoft.com/es-es/analysis-services/multidimensional-models/media/ssas-m2m-dsvpkeys.png?view=asallproducts-allversions"} titulo={"muchos a muchos."}/>
            <Conseptos texto={`Un ejemplo seria que muchos estudiantes pueden tomar muchos cursos.`}/>
          </li>
        </ol>

      </main>
    </>
  )
}