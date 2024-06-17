import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import Conseptos from "../../../../componentes/conseptos/conseptos";
import MySql from "../../../../componentes/lenguajes/MySql";
import Footer from "../../../../componentes/menus/Footer";

function ComentariosMySql() {
  return (  
    <>
      <main>
        <h1>Comentarios</h1>
        <Conseptos texto={`Los comentarios son lineas de codigo para que el programador pueda leer , sin embargo SQL no va a poder leer y ejecutar las lineas de codigo que esten comentados.`}/>
        <h2>Comentarios de una sola linea</h2>
        <Conseptos texto={`Con esto solo se podra comentar una linea de codigo y no se podra poner comentarios en otra linea para comentarios muy largos, esto se suele usar para dar indicaciones muy breves y precisas.`}/>
        <MySql codigo={`-- seleccionar estudiantes
SELECT * FROM estudiantes
-- indicar que edad de estudiantes queremos.
WHERE edad = 18`}/>
        <h2>Comentarios de mas de una linea</h2>
        <Conseptos texto={`Con esto podemos hacer comentarios mas detallados e indicativos ya que permiten comentar en mas de una linea.`}/>
        <MySql codigo={`/*
  seleccionar solo el promedio de los estudiantes para
  poder sacar un promedio general de todos los
  estudiantes y hacer comparacion con otras universidades.
*/
SELECT round(avg(promedio)) FROM estudiantes`}/>
      </main>
      <Footer />
    </>
  );
}

export default ComentariosMySql;