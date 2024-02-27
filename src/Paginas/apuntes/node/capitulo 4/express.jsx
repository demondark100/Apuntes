import Conseptos from "../../../../componentes/conseptos/conseptos";
import Footer from "../../../../componentes/menus/Footer";

function ExpressNode() {
  return (  
    <>
      <main>
        <h1>Express</h1>
        <Conseptos texto={`Este framework es el mas popular para desarrollar aplicaciones con node.js , esto nos facilitara mucho el proceso de creacion de servidores.`}/>
        <h2>CRUTD</h2>
        <Conseptos texto={`Estas son las operaciones basicas para poder manejar una base de datos.`}/>
        <Conseptos texto={`C: create(crear)`}/>
        <Conseptos texto={`R: read(leer)`}/>
        <Conseptos texto={`U: update(actualizar)`}/>
        <Conseptos texto={`D: delete(eliminar)`}/>
        <Conseptos texto={`Para cada operacion que se hace en crud cada accion tiene su equivalente en los metodos HTTP.`}/>
        <ol>
          <li><Conseptos texto={`C: create(crear) = POST`}/></li>
          <li><Conseptos texto={`R: read(leer) = GET`}/></li>
          <li><Conseptos texto={`U: update(actualizar) = PUT`}/></li>
          <li><Conseptos texto={`D: delete(eliminar) = DELETE`}/></li>
        </ol>
      </main>
      <Footer />
    </>
  );
}

export default ExpressNode;