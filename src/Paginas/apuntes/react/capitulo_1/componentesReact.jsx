import Conseptos from "../../../../componentes/conseptos/conseptos";
import ReactCode from "../../../../componentes/lenguajes/React";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";
import Menu2 from "../../../../componentes/menus/Menu2";

function ComponentesReact() {
  return (  
    <>
      <Menu2/>
      <main>
        <h1>componentes</h1>
        <Conseptos texto={`Los componentes son muy utiles para poder usar un codigo que ya habiamos escrito anteriormente sin necesidad de volver a escribirlo.
import: esto es para poder importar los componentes.
export: esto es para exportar los componentes.`}/>
        <Sintaxis codigo={`import nombre del componente de "direccion del archivo"`}/>
        <Sintaxis codigo={`export defecto nombre de la funcion o objeto.`}/>
        <h2>export</h2>
        <Conseptos texto={`Antes de continuar tambien podemos exportar al mismo tiempo que creamos el objeto o funcion.`}/>
        <h3>funcion</h3>
        <ReactCode codigo={`export function Exportar()`}/>
        <h3>objeto</h3>
        <ReactCode codigo={`export class Exportar extends Component{}`}/>
        <h2>archivo externo</h2>
        <ReactCode codigo={`import { component } from "react";

function ImportameXD_1(){
  return <h1>importar esto xd</h1>
}

class ImportameXD_2 extends component{
  render(){
    return <h2>importa esto tambien</h2>
  }
}

export default ImportameXD_1;
export default ImportameXD_2;`}/>
        <h2>import</h2>
        <h2>app.js</h2>
        <Conseptos texto={`app.js es el archivo principal es como si fuese el index.html de react aqui es donde trabajaremos todo el tiempo.`}/>
        <Conseptos texto={`Aqui importaremos y llamaremos a los archivos importados.`}/>
        <ReactCode codigo={`import ImportameXD_1 from "./ruta";
import ImportameXD_2 from "./ruta";

<ImportameXD_1 />
<ImportameXD_2 />`}/>
        <Conseptos texto={`En app.js el codigo completo se veria asi.`}/>
        <h2>estructura app.js</h2>
        <ReactCode codigo={`import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      {/* Aquí puedes agregar más componentes y contenido */}
    </div>
  );
}

export default App;`}/>
        <h2>codigo completo</h2>
        <ReactCode codigo={`import React from 'react';
import ImportameXD_1 from "./ruta";
import ImportameXD_2 from "./ruta";

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      
      <ImportameXD_1 />
      <ImportameXD_2 />

    </div>
  );
}

export default App;`}/>
        <div className="website">
          <h5>importar esto xd</h5>
          <h5>importa esto tambien</h5>
        </div>
        <Conseptos texto={`Podemos llamar a los componentes cuantas veces queramos osea esto.`}/>
        <ReactCode codigo={`import React from 'react';
import ImportameXD_1 from "./ruta";
import ImportameXD_2 from "./ruta";

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      
      <ImportameXD_1 />
      <ImportameXD_1 />
      <ImportameXD_1 />
      <ImportameXD_1 />
      <ImportameXD_2 />

    </div>
  );
}

export default App;`}/>
        <div className="website">
          <h5>importar esto xd</h5>
          <h5>importar esto xd</h5>
          <h5>importar esto xd</h5>
          <h5>importar esto xd</h5>
          <h5>importa esto tambien</h5>
        </div>

        <Conseptos texto={`Los componentes siempre se deben crear con una mayuscula al inicio ejemplo.`}/>
        <ReactCode codigo={`funcition Funcion(){}
export Funcion`}/>
        <ReactCode codigo={`import { component } from "react";
class Objeto extends Component{}
export Objeto;`}/>

      </main>
      <Footer/>
    </>
  );
}

export default ComponentesReact;