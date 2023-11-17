import { Link } from "react-router-dom";
import Conseptos from "../../../../componentes/conseptos/conseptos";
import Json from "../../../../componentes/lenguajes/Json";
import ReactCode from "../../../../componentes/lenguajes/React";
import Footer from "../../../../componentes/menus/Footer";

function RenEleReact() {

  return (  
    <>
      <main>
        <h1>renderizado de elementos</h1>
        <Conseptos texto={`Nosotros podemos renderizar arreglos pero a la hora de ejecutar habra una pequeña advertencia de que necesita un "key" que seria un equivalente al "id" en html esto es para poder buscar de mejor forma en la virtual dom.`}/>
        <h2>key</h2>
        <ReactCode codigo={`import React from "react";
import {Component} from "react";

export class RenderizarE extends Component{
  constructor(props){
    super(props);
    this.state = {
      seasions: ["spring","summer","fall","winter"]
    }
  }

  render(){
    return(
      <div>
        <h3>seasons</h3>
        <ol>
          {
            this.state.seasions.map((id,indice)=>(
              <li key={indice}>{id}</li>
            ))
          }
        </ol>
      </div>
    )
  }
}`}/>
        <ReactCode codigo={`import React from "react";
import RenderizarE from "./ruta";
export default function App(){
  return <RenderizarE />
}`}/>
        <Conseptos texto={`Si a este codigo le quitamos el "key" veras que hay una advertencia en la consola indicando que para renderizar de mejor manera se necesita un key pero usar el indice como "key" no es muy recomendable pero por ahora esta bien mas adelante usaremos una libreria para poner una key unica para cada elemento.`}/>
        <div className="website">
          <h6>seasons</h6>
          <ul>
            <li>spring</li>
            <li>summer</li>
            <li>fall</li>
            <li>winter</li>
          </ul>
        </div>
        <h2>explicando codigo</h2>
        <ol>
          <li>creamos un objeto con una variable llamada "seasion"("estaciones").</li>
          <li>luego usamos el metodo map para recorrer el arreglo de forma dinamica.</li>
          <li>usamos una key para poder renderizar los elementos.</li>
        </ol>
        <h2>simulacion API</h2>
        <Conseptos texto={`Ahora vamos a renderizar un objeto json para simular una API.`}/>
        <Conseptos texto={`Crearemos un archivo jsoon con eel nombre "data".`}/>
        <Json codigo={`{
  "frameworks": [
    {
      "id": 1,
      "name": "react",
      "web": "https://reactjs.org"
    },
    {
      "id": 2,
      "name": "Angular",
      "web": "https://angular.io"
    },
    {
      "id": 3,
      "name": "Vue",
      "web": "https://vuejs.org/"
    },
    {
      "id": 4,
      "name": "Polymer",
      "web": "https://polymer-library.polymer-project.org/"
    },
    {
      "id": 5,
      "name": "Svelte",
      "web": "https://svelte.dev/"
    }
  ]
}`}/>
          <ReactCode codigo={`import React from "react";
import {Component} from "react";

import data from "./ruta"


function ListIntem(props){
  return(
    <li>
      <a href={props.el.web} target="_blank">{props.el.name}</a>
    </li>
  )
}

export class RenderE extends Component{

  render(){
    return(
      <div>
        <h3>frameworks</h3>
        <ul>
          {
            data.frameworks.map(el=>(
              <ListIntem key={el.id} el={el}/>
            ))
          }
        </ul>
      </div>
    )
  }
}`}/>
        <ReactCode codigo={`import React from "react";
import RenderE from "./ruta";
export default function App(){
  return <RenderE />
}`}/>
        <div className="website">
          <h6>frameworks</h6>
          <ul>
            <li><Link style={{color:"#000"}} target="_blank" to={"https://reactjs.org/"}>react</Link></li>
            <li><Link style={{color:"#000"}} target="_blank" to={"https://angular.io/"}>Angular</Link></li>
            <li><Link style={{color:"#000"}} target="_blank" to={"https://vuejs.org/"}>Vue</Link></li>
            <li><Link style={{color:"#000"}} target="_blank" to={"https://polymer-library.polymer-project.org/"}>Polymer</Link></li>
            <li><Link style={{color:"#000"}} target="_blank" to={"https://svelte.dev/"}>Svelte</Link></li>
          </ul>
        </div>

        <h2>explicando codigo</h2>
        <ol>
          <li>importamos el archivo json-</li>
          <li>creamos una funcion que agregye los enlaces del json de forma dinamica</li>
          <li>ponelos un ul para recorrer de forma dinamica con map al archivo json</li>
          <li>llamamos a la funcion/componente para darle el key las id que pusimos en nuestro archivo json</li>
          <li>luego le ponemos el un atributo que sera el elemento</li>
        </ol>
      </main>
      <Footer/>
    </>
  );
}

export default RenEleReact;