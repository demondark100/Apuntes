import Conseptos from "../../../../componentes/conseptos/conseptos";
import ReactCode from "../../../../componentes/lenguajes/React";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";

function ProprsReact() {
  return (  
    <>
      <Resumenes contenido={[{
        "mensaje": "Los props nos sirven para pasar parametros a los componentes y asi sean dinamicos."
      },
      {
        "mensaje": "Componente que recibe los props.",
        "lenguage": "ReactCode",
        "codigo": `function Componente(props){
  return(
    <div>
      <h1>{props.titulo}</h1>
      <p>{props.concepto}</p>
    </div>
  )
}
export default Componente;`
      },{
        "mensaje": "Componente principal que importa al componente.",
        "lenguage": "ReactCode",
        "codigo": `import React from 'react';
import Componente from "./ruta";
function App() {
  return (
    <div>
      <Componente 
        titulo={"Mi titulo"}
        concepto={"Pasando parametros a componentes."}
      />
    </div>
  );
}

export default App;`
      }]}/>
      <main>
        <h1>propiedades props</h1>
        <Conseptos texto={`Con las propiedades podemos hacer que un componente sea dinamico para poder modificar como queramos estos reciben cualquier tipo de dato:
objeto , arreglos , strings , numeros , booleanos , etc.
Esto se pone como un parametro a la funcion y asi modificarlos de manera dinamica.`}/>
        <Sintaxis codigo={`{props.mensaje}`}/>
        <Conseptos texto={`En los props podemos poner cualquier nombre como atributo para poder modificarlos.`}/>
        <h2>componente</h2>
        <ReactCode codigo={`export function Dinamico(props){
  return(
    <div>
      <ul>
        <li>{props.texto}</li>
        <li>{props.arreglo.join(" - ")}</li>
        <li>{props.numero}</li>
        <li>{props.booleano?"verdadero":"falso"}</li>
        <li>{\`el nombre de la musica es ${"${props.objeto.nombre}"} y el genero es ${"${props.objeto.genero}"}\`}</li>
      </ul>
    </div>
  )
}`}/>
        <h2>archivo principal</h2>
        <ReactCode codigo={`import React from 'react';
import Dinamico from "./ruta";
function App() {
  return (
    <div>
      <Dinamico 
        texto="hola mundo"
        arreglo=[0,1,2,3]
        numero={15}
        arreglo={
          {
            nombre: "waste Sped Up Version",
            genero: "no se la verdad"  
          }
        }
        booleano={true}
      />
    </div>
  );
}

export default App;`}/>
        <div className="website">
          <ul>
            <li>hola mundo</li>
            <li>0 - 1 - 2 - 3</li>
            <li>15</li>
            <li>el nombre de la musica es waste Sped Up Version y el genero es no se la verdad</li>
            <li>verdadero</li>
          </ul>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default ProprsReact;