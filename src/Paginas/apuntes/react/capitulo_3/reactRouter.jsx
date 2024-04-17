import Conseptos from "../../../../componentes/conseptos/conseptos";
import ReactCode from "../../../../componentes/lenguajes/React";
import Terminal from "../../../../componentes/lenguajes/Terminal";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";

function ReactRouterDom() {
  return (
    <>
      <Resumenes contenido={[{
        "mensaje": `Con esto haremos las rutas en react.

Instalacion`,
        "lenguage": "Terminal",
        "codigo": `npm install react-router-dom`
      },
      {
        "mensaje": "Crear las rutas.",
        "lenguage": "ReactCode",
        "codigo": `import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/About' element={<div>otro</div>} />
        <Route path='/' element={<div>principal</div>} />
        <Route path='/Users' element={<div>usuarios</div>} />
      </Routes>
    </Router>
  )
}
export default App;`
      },
      {
        "mensaje": "Redireccionar a una ruta.",
        "lenguage": "ReactCode",
        "codigo": `import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Home(){
  return(
    <div>
      <NavLink className={(data)=>data.isActive ? "active":"desactive"} to="About">otro</NavLink>
      <Link to="Users">usuarios</Link>
    </div>
  )
}`
      }]}/>
      <main>
        <h1>React router dom</h1>
        <Conseptos texto={`react router dom nos sirve para enrutar a otras secciones de nuestra aplicacion porque en react ya no podemos andar creando otro html para ir a otra seccion de nuestra pagina.`}/>
        <h2>antes(no se debe hacer en react)</h2>
        <ReactCode codigo={`function App(){
  return(
    <div>
  	  <a href="/About.html">About.html</a>
    </div>
  )
}`}/>
        <Conseptos texto={`Esto no es aseptable porque la idea es que react sea una sola aplicacion para eso esque nos salvara react router dom.`}/>
        <h2>instalar react router dom</h2>
        <Conseptos texto={`Esto debemos instalarlo en nuestra aplicacion.`}/>
        <Terminal codigo={`npm install react-router-dom`}/>
        <Conseptos texto={`Listo ya podemos usar react-router-dom para verificar ve a "package.json".`}/>
        <h2>basico</h2>
        <Conseptos texto={`Listo ahora importaremos:
BrowserRouter en React = navegar según URL del navegador y mostrar componentes según la ruta.
Routes de React Router = definir rutas y acciones según la URL para mostrar componentes.
Route en React = define una ruta y muestra un componente específico según la URL.

Dato interesante! al momento de importar BrowserRouter podemos cambiar el nombre de "BrowserRouter" por solo "Router" con el simbolo "as" ejemplo.`}/>
        <ReactCode codigo={`import {BrowserRouter as Router} from "react-router-dom";`}/>
        <Conseptos texto={`De esta manera nos evitaremos llamar al "BrowserRouter" y solo llamaremos a "Router".`}/>
        <ReactCode codigo={`import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/About' element={<div>otro</div>} />
        <Route path='/' element={<div>principal</div>} />
        <Route path='/Users' element={<div>usuarios</div>} />
      </Routes>
    </Router>
  )
}

export default App;`}/>
        <Conseptos texto={`path: es para definir la ruta donde queremos que se reenderice el componente.
element: es lo que queremos pintar el la interfaz.
dato curioso si ponemos path="*" podremos pintar un componente de error debido a que "*" se refiere a las paginas no existentes.

Para navegar entre rutas debemos ir a la url y poner "/ruta" por ejemplo nuestra app tiene la ruta "localhost3000" ese seria el inicio "/" pero si en path ponemos "path=/About" al momento de poner "localhost/About" nos redirigira a la pagina About como le dijimos a "path" pero obviamente el usuario en su vida va escribir una url para navegar para eso llega ...`}/>
        <h2>NavLink</h2>
        <Conseptos texto={`Esto es el reemplazo de la etiqueta a "a" porque si lo hacemos con esa etiqueta la pagina ira refrescandose cada que el usuario se cambie de ruta lo cual no es la idea de react lo que react desea esque no se refresque la pagina si no que cargue de forma instantanea.
primero debemos importar "NavLink".`}/>
        <ReactCode codigo={`mport { NavLink } from "react-router-dom";`}/>
        <Conseptos texto={`Listo ahora reemplazaremos la etiqueta "a + href" por "NavLink + to".`}/>
        <h3>antes (no usar en react)</h3>
        <ReactCode codigo={`export function Home(){
  return(
    <div>
      <h2>pagina principal</h2>
      <nav>
   	    <ul>
   	      <li><a href="/About">About</a></li>
   	      <li><a href="/Users">Users</a></li>
       	</ul>
      </nav>
    </div>
  )
}`}/>
        <h3>ahora (usar en react)</h3>
        <ReactCode codigo={`import { NavLink } from "react-router-dom";

export function Home(){
  return(
    <div>
      <h2>pagina principal</h2>
      <nav>
   	    <ul>
   	      <li><NavLink to="/About">About</NavLink></li>
   	      <li><NavLink to="/Users">Users</NavLink></li>
   	    </ul>
      </nav>
    </div>
  )
}`}/>
        <Conseptos texto={`Ahora veremos la data de nuestro link ya que es un objeto pero miremos esto.`}/>
        <ReactCode codigo={`import { NavLink } from "react-router-dom";

export function Home(){
  return(
    <div>
      <NavLink className={(data)=>console.log(data.isActive)} to="About">otro</NavLink>
    </div>
  )
}`}/>
        <Conseptos texto={`data.isActive nos devolvera entre true o false true si estamos en la pagina About y false si nos vamos a otra pagina. esto nos puede servir para indicar al usuario que esta en un enlace o no.`}/>
        <ReactCode codigo={`import { NavLink } from "react-router-dom";

export function Home(){
  return(
    <div>
      <NavLink className={(data)=>data.isActive ? "active":"desactive"} to="About">otro</NavLink>
    </div>
  )
}`}/>
        <Conseptos texto={`Nosotros podemos dar un estilo si esta activado o no el link.`}/>
        <h2>Link</h2>
        <Conseptos texto={`Esto es igual a una etiqueta "a" solo que evita que la pagina se refresque al igual que NavLink pero la diferencia esque es literalmente un "a" ya que no tiene isActive o otros objeto como si los tiene NavLink.`}/>
        <ReactCode codigo={`import { Link } from "react-router-dom";`}/>
        <Conseptos texto={`Este componente al igual que NavLink en vez de usar "href" usa "to".`}/>
        <ReactCode codigo={`import { Link } from "react-router-dom";
export function Home(){
  return(
    <div>
      <Link to="usuarios">usuarios</Link>
    </div>
  )
}`}/>
        <h2>Params</h2>
        <Conseptos texto={`Los parámetros en react-router-dom son valores dinámicos que se pueden pasar en la URL de una ruta y que se utilizan para identificar de manera única un recurso o una página específica en una aplicación de React.`}/>
        <ReactCode codigo={`import { useParams } from "react-router-dom";`}/>
        <Conseptos texto={`useParams es la funcion que obtiene el parametro que se pase en el url.`}/>
        <ReactCode codigo={`import { useParams } from "react-router-dom";
function UserPage(){
  return(
    const {id} = useParams();
    <div>
      User: {id}
    </div>
  )
}`}/>
        <div className="website">
          <p style={{color: "#00f"}}>http:/localhost/user/Marin</p>
          <p>user: Marin</p>
        </div>

      </main>
      <Footer/>
    </>
  );
}

export default ReactRouterDom;