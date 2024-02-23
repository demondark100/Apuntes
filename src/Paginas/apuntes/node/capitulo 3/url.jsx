import Conseptos from "../../../../componentes/conseptos/conseptos";
import Txt from "../../../../componentes/lenguajes/txt";
import Footer from "../../../../componentes/menus/Footer";


function UrlNode() {
  return (  
    <>
      <main>
        <h1>Url</h1>
        <Conseptos texto={`Ahora veremos como funciona realmente las url a profundidad para poder trabajar con este modulo.`}/>
        <h2>Estructura de una url</h2>
        <Txt codigo={`https://www.apuntes.com/proyectos`}/>
        <ol>
          <li>
            <h3>https</h3>
            <Conseptos texto={`Esto es el proyocolo , este lo vamos a usar en la comunicacion para acceder a un recurso en especifico , en este caso es "https" lo cual  hace que tenga una capa de seguridad extra en la informacion.`}/>
          </li>
          <li>
            <h3>www.</h3>
            <Conseptos texto={`Esto reprtesenta un subdominio , el subdominio es informacion adicional agregada al inicio del dominio de una pagina web.`}/>
            <Conseptos texto={`Esto permite organizar y separar la informacion para distintos propositos por ejemplo si tenemos una web de distintos lenguages podriamos usar "spanish.apuntes.com".`}/>
          </li>
          <li>
            <h3>apuntes</h3>
            <Conseptos texto={`Esto es el dominio de la web , este es el nombre de la pagina con el que el navegador se encarga de buscar la web , solo puede existir un dominio unico en internet , no pueden existir dos paginas llamadas "apuntes" asi que el dominio es unico y es la forma de buscar la web con la que se desea interactuar.`}/>
          </li>
          <li>
            <h3>.com</h3>
            <Conseptos texto={`A esto se le denomina como dominio de nivel superior , otros dominios son:
1. .com
2. .net
3. .int
4. .edu
5. .gov`}/>
          </li>
          <li>
            <h3>/proyectos</h3>
            <Conseptos texto={`A esto se le conoce como ruta(caminos/path/directorio) cualquier cosa que se agregue despues de "/" se considera ruta , y amedida que se agregan mas cosas vamos especificando que recurso estamos solicitando , esto tiene 2 tipos de parametros.`}/>
            <h3>parametros</h3>
            <Conseptos texto={`Estos se separan por una barra inclinada "/" ,  a esto se denomina como parametro de url , nosotros podemos indicar que sierta parte de la url reciba algun parametro.`}/>
            <Txt codigo={`https://www.registo.com/usuarios/66`}/>
            <h3>parametros query</h3>
            <Conseptos texto={`Es un parametro de busqueda que no es como tal parte de la url`}/>
            <Txt codigo={`https://www.google.com/search?q=apuntes+de+programacion`}/>
            <Conseptos texto={`Estos son usados para tener contenido dinamico`}/>
            <Txt codigo={`https://www.google.com/search?q=apuntes+de+programacion`}/>
            <Txt codigo={`  ?q    =    apuntes+de+programacion
{clave    :   valor}`}/>
            <Conseptos texto={`Esto recuerda a un ojeto de javaScript verdad solo que en vez de poner una llave ponemos ? y en vez de ":" ponemos "=" , tambien podemos poner varios parametros esto se logra con "&" veamos un ejemplo.`}/>
            <Txt codigo={`?curso=programacion&tema=javascript&paradicma=orientado+a+objetos`}/>
            <Conseptos texto={`Normalmente esto se usa para hacer peticiones GET osea solo para solicitar recursos.`}/>
          </li>
        </ol>
      </main>
      <Footer />
    </>
  );
}

export default UrlNode;