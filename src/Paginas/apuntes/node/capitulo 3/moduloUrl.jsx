import Conseptos from "../../../../componentes/conseptos/conseptos";
import Consola from "../../../../componentes/consola/consola";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../componentes/menus/Footer";

function ModuloUrlNode() {
  return (  
    <>
      <main>
        <h1>Modulo url</h1>
        <Conseptos texto={`Con este modulo vamos a poder trabajar con las url en este caso crearemos una url imaginaria para poder trabajar con ella.`}/>
        <Conseptos texto={`Para poder trabajar con ella necesitaremos la sintaxis de un objeto.`}/>
        <JavaScropt codigo={`const miUrl = new URL("https://www.ejemplo.com/cursos?tema=programacion&lenguage=javascript");`}/>
        <Conseptos texto={`Ahora veremos los metodos que tiene esete modulo.`}/>
        <ol>
          <li>
            <h3>general</h3>
            <JavaScropt codigo={`console.log(miUrl);`}/>
            <Consola codigo={`> node app.js
URL {
  href: 'https://www.ejemplo.com/cursos?tema=programacion&lenguage=javascript',
  origin: 'https://www.ejemplo.com',
  protocol: 'https:',
  username: '',
  password: '',
  host: 'www.ejemplo.com',
  hostname: 'www.ejemplo.com',
  port: '',
  pathname: '/cursos',
  search: '?tema=programacion&lenguage=javascript',
  searchParams: URLSearchParams { 'tema' => 'programacion', 'lenguage' => 'javascript' },
  hash: ''
}`}/>
          </li>
          <li>
            <h3>hostname</h3>
            <Conseptos texto={`Con esto vamos a saber el nombre del dominio de la url.`}/>
            <JavaScropt codigo={`console.log(miUrl.hostname);`}/>
            <Consola codigo={`> node app.js
www.ejemplo.com`}/>
          </li>
          <li>
            <h3>pathname</h3>
            <Conseptos texto={`Con esto podremos ver los directorios(caminos) de la url.`}/>
            <JavaScropt codigo={`console.log(miUrl.pathname);`}/>
            <Consola codigo={`> node app.js
/cursos`}/>
          </li>
          <li>
            <h3>searchParams</h3>
            <Conseptos texto={`Con esto veremos los parametros que se estan pasando en los parametros query de la url.`}/>
            <JavaScropt codigo={`console.log(miUrl.searchParams);`}/>
            <Consola codigo={`> node app.js
URLSearchParams { 'tema' => 'programacion', 'lenguage' => 'javascript' }`}/>
            <Conseptos texto={`Para acceder a algun identificador del objeto de los parametros query debemos usar el metodo "get("idnetificador")".`}/>
            <JavaScropt codigo={`console.log(miUrl.searchParams.get("tema"));`}/>
            <Consola codigo={`> node app.js
programacion`}/>
          </li>
        </ol>
      </main>
      <Footer />
    </>
  );
}

export default ModuloUrlNode;3