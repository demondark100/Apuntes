import Footer from "../../../../componentes/menus/Footer";
import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Consola from "../../../../componentes/consola/consola";


function OsNode() {
  return (  
    <>
      <main>
        <h1>Os</h1>
        <Conseptos texto={`Con OS(operating system) vamos a trabajar con el sistema operativo.
Esto no es un modulo global como process , necesitamos importar este modulo para poder trabajar con el.`}/>
        <JavaScropt codigo={`const os = require("os");`}/>
        <h2>type</h2>
        <Conseptos texto={`Esta funcion nos sirve para saber en que sistema operativo estamos trabajando.`}/>
        <JavaScropt codigo={`console.log(os.type());`}/>
        <Consola codigo={`Windows_NT`}/>
        <h2>homedir</h2>
        <Conseptos texto={`Esta funcion es para saber cual es el directorio principal.`}/>
        <JavaScropt codigo={`console.log(os.homedir());`}/>
        <Consola codigo={`C:\Users\HelicopteroApache`}/>
        <h2>upTime</h2>
        <Conseptos texto={`Esta funcion es sabes cuantos segundos a pasado desde que se inicio el sistema operativo`}/>
        <JavaScropt codigo={`console.log(os.upTime());`}/>
        <Consola codigo={`16411.343`}/>
        <h2>userInfo</h2>
        <Conseptos texto={`Esto nos sirve para saber la informacion del usuario.`}/>
        <JavaScropt codigo={`console.log(os.userInfo());`}/>
        <Consola codigo={`{
  uid: -1,
  gid: -1,
  username: 'HelicopteroApache',
  homedir: 'C:\\Users\\HelicopteroApache',
  shell: null
}`}/>
      </main>
      <Footer />
    </>
  );
}

export default OsNode;