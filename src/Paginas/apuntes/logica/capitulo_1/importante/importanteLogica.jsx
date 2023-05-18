import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Python from "../../../../../componentes/lenguajes/Python";
import JavaScript from "../../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";

function ImportanteLogica() {
  return (  
    <>
      <Menu2 />
      <main>
        <h1>Bases</h1>
        <Conseptos texto={`Todo lo que aprenderas aqui se aplican para todos los lenguajes de programacion java,python,c#,javaScript,c++,etc.

Todo lo que se aprendera en la parte de logica se aplica para todos absolutamente todos los lenguajes de programacion asi que es muy importante que aprendas la logica de programacion para aprender un lenguaje.

Para convencerte te mostrare como se hara en la parte logica y como se aplica en 3 lenguajes de programacion distintos.`}/>
        <h2>logica</h2>
        <Python codigo={`variable = "guarda algo";`}/>
        <h2>python</h2>
        <Python codigo={`juego = "Left 4 Dead";`}/>
        <h2>javaScript</h2>
        <JavaScript codigo={`const numero = 50;`}/>
        <h2>c#</h2>
        <Python codigo={`int numero = 18;`}/>
        <Conseptos texto={`Como te das cuenta es lo mismo tanto en la logica como en los lenguajes lo unico que cambia es la sintaxis de los lenguajes pero las bases de lo que aprendas en la logica se aplicaran en todos los lenguajes.`}/>
      </main>
      <Footer />
    </>
  );
}

export default ImportanteLogica;