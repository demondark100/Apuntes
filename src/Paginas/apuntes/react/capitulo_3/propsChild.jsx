import Conseptos from "../../../../componentes/conseptos/conseptos";
import ReactCode from "../../../../componentes/lenguajes/React";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";
import Menu2 from "../../../../componentes/menus/Menu2";

function PropsChildReact() {
  return (  
    <>
      <Menu2/>
      <main>
        <h1>props.children</h1>
        <Conseptos texto={`los props.children nos sirve para poder poner contenido en un componente pero no desde el componente mismo.

para entender mejor...`}/>
        <h2>antes</h2>
        <Sintaxis codigo={`export function Componente(){
 return(
  // todo el contenido
 )
}`}/>
        <Sintaxis codigo={`import {Componente} from "./Componente";
function App(){
  return(
    <div>
      <Componente />
    </div>
  )
}`}/>
        <h2>ahora con props.children</h2>
        <Sintaxis codigo={`export Componente({contenido}){
  return(
    {contenido}
 )
}`}/>
        <Sintaxis codigo={`import {Componente} from "./Componente";
function App(){
  return(
    <div>
      <Componente>
        // todo el contenido
      </Componente>
    </div>
  )
}`}/>
        <Conseptos texto={`Como te habras dado cuenta antes teniamos que poner todo el contenido en el mismo componente que creabamos , ahora podemos poner el contenido en el componente y llamarlo como prop gracias a props.children.`}/>
        <h2>veamos como se usa</h2>
        <ReactCode codigo={`export function Componente(children){
  return(
    <div>
      <h5>hola este es el componente</h5>
      <div>
        {props.children}
      </div>
    </div>
  )
}`}/>
        <ReactCode codigo={`import Componente from "./Componente";
export default function App(){
  return(
    <div>
      <Componente>
        <p>hola mundo de props.children</p>
        <p>aqui llamamos al componente y le ponemos contenido</p>
      </Componente>
    </div>
  )
}`}/>
        <Conseptos texto={`Bien si eres muy atento para poder usar props.children no es necesario ponerlos como atributo en el componente solo debemos ponerlo como parametro en el componente y podemos usarlo cuantas veces queramos.
Los props.children hace referencia al contenido del componente < > contenido < / >`}/>
        <div className="website">
          <h6>hola este es el componente</h6>
          <p>hola mundo de props.children</p>
          <p>aqui llamamos al componente y le ponemos contenido</p>
        </div>

        <h2>veamos un ejemplo de su uso</h2>
        <ReactCode codigo={`export function Componente({children,empresa,juego}){
  return(
    <article>
      <p>Empresa: {empresa}</p>
      <p>algun juego: {juego}</p>
    </article>
  )
}`}/>
        <ReactCode codigo={`import {Componente} from "./Componente";
export default function App(){
  return(
    <div>
      <Componente juego="Left 4 dead 2" empresa="Valve">
        <p>
          esto es un poco de la informacion de esta gran empresa la cual es demasiado conocida por hacer buenos juegos.
        </p>
       </Componente>
    </div>
  )
}`}/>
        <div className="website">
          <p>Empresa: Valve</p>
          <p>algun juego: Left 4 dead 2</p>
          <p>esto es un poco de la informacion de esta gran empresa la cual es demasiado conocida por hacer buenos juegos.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default PropsChildReact;