import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../componentes/menus/Footer";

function ObjNavJs() {
  return (  
    <>
      <main>
        <h1>Objeto Navigator</h1>
        <Conseptos texto={`Veamos lo estandar osea lo mas utilizado de navigator.`}/>
        <JavaScropt codigo={`navigator.appCodeName;
navigator.appName;
navigator.appVersion;
navigator.connection;
navigator.geolocation;
navigator.hardwareConcurrency;
navigator.language;
navigator.languages;
navigator.mimeTypes;
navigator.onLine;
navigator.userAgent;
navigator.cookieEnabled;
navigator.permissions;
navigator.platform;
navigator.plugins;
navigator.product;
navigator.serviceWorker;`}/>
        <h2>appCodeName y appName</h2>
        <Conseptos texto={`"appCodeName" nos servira para saber el nombre del navegador pero no siempre es asertado.

"appName" nos devolvera el nombre oficial del navegador.`}/>
        <JavaScropt codigo={`console.log(navigator.appCodeName);
    // resultado:
    // Mozilla.
console.log(navigator.appName);
    // resultado:
    // Netscape.`}/>
        <h2>connection</h2>
        <Conseptos texto={`Esto nos servira para saber si estamos conectados o no.`}/>
        <JavaScropt codigo={`console.log(navigator.connection);`}/>
        <h2>geolocation</h2>
        <Conseptos texto={`"geolocation" es para saber la localizacion ya trabajamos con esa api.`}/>
        <JavaScropt codigo={`console.log(navigator.geolocation);`}/>
        <h2>hardwareConcurrency</h2>
        <Conseptos texto={`"hardwareConcurrency" nos devuelve la cantidad de nucleos de procesador logico que hay.`}/>
        <JavaScropt codigo={`console.log(navigator.hardwareConcurrency);
    // resultado:
    // 2
    // en mi caso solo hay 2.`}/>
        <h2>language y languages</h2>
        <Conseptos texto={`"language" nos devolvera el idioma que el usuario eligio o el que trae por defecto en este caso "ES" de español.

"languages" nos devolvera un arreglo con la cantidad de lenguages que el usuario entienda en este caso solo español.`}/>
        <JavaScropt codigo={`console.log(navigator.language);
    // resultado:
    // es-ES
console.log(navigator.languages);
    // resultado:
    // ['es-ES']0: "es-ES" 
    // length: 1`}/>
        <h2>mimeTypes</h2>
        <Conseptos texto={`Esto nos devolvera lo que se envia en los encabezados.`}/>
        <JavaScropt codigo={`console.log(navigator.mimeTypes);`}/>
        <h2>online</h2>
        <Conseptos texto={`Esto nos devolvera si el sitio web esta online o no.`}/>
        <JavaScropt codigo={`console.log(navigator.onLine);
    // rresultado:
    // en este caso true.`}/>
        <h2>userAgent</h2>
        <Conseptos texto={`"userAgent" nos devolvera la informacion del navegador y no siempre nos dara la respuesta correcta.`}/>
        <JavaScropt codigo={`console.log(navigator.userAgent);
    // resultado:
    
    // Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36`}/>
        <h2>cookieEnabled</h2>
        <Conseptos texto={`"cookieEnabled" nos dira si las cookies estan activadas y si podemos trabajar con ellas.`}/>
        <JavaScropt codigo={`console.log(navigator.cookieEnabled);
    // resultado:
    // true.`}/>
        <h2>permissions</h2>
        <Conseptos texto={`"permissions" es un objeto que nos permite acceder a los permisos del navegador como microfono,camara,etc.`}/>
        <JavaScropt codigo={`console.log(navigator.permissions);`}/>
        <h2>platform</h2>
        <Conseptos texto={`Esto nos dira en que plataforma/sistema operativo estamos en este caso estamos en windows.`}/>
        <JavaScropt codigo={`console.log(navigator.platform);
    // resultado:
    // Win32`}/>
        <h2>plugins</h2>
        <Conseptos texto={`"plugins" nos mostrra los plugins instalados en el navegador.`}/>
        <JavaScropt codigo={`console.log(navigator.plugins);`}/>
        <h2>product</h2>
        <Conseptos texto={`"product" se usa por problemas de compatibilidad.`}/>
        <JavaScropt codigo={`console.log(navigator.product);
    // resultado:
    // Gecko`}/>
        <h2>serviceWorker</h2>
        <Conseptos texto={`"serviceWorker" trabaja de forma muy distinta a worker ya que este se puede ejecutar mientras el sitio web esta cerrado,etc.`}/>
        <JavaScropt codigo={`console.log(navigator.serviceWorker);`}/>
      </main>
      <Footer/>
    </>
  );
}

export default ObjNavJs;