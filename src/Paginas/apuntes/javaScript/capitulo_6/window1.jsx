import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../componentes/menus/Footer";
import Menu2 from "../../../../componentes/menus/Menu2";

function Window1Js() {
  return (  
    <>
      <Menu2/>
      <main>
        <h1>window 1</h1>
        <h3>pseudocodigo</h3>
        <JavaScropt codigo={`ventana.metodo();`}/>
        <h2>open</h2>
        <JavaScropt codigo={`window.open("https://youtube.com");`}/>
        <Conseptos texto={`Esto nos servira para abrir una nueva ventana en otro navegador o en uno ya existenete.`}/>
        <h2>close</h2>
        <JavaScropt codigo={`window.close("https://youtube.com");`}/>
        <Conseptos texto={`Esto nos servira para cerrar una ventana que se haya abierto.`}/>
        <h2>closed</h2>
        <JavaScropt codigo={`window.closed("https://youtube.com");`}/>
        <Conseptos texto={`Esto nos servira para saber si la ventana indicada se cerro o no.`}/>
        <h2>stop</h2>
        <JavaScropt codigo={`window.stop("https://youtube.com");`}/>
        <Conseptos texto={`Esto nos servira para detener la carga de un sitio web.`}/>
        <h2>¿Necesario?</h2>
        <Conseptos texto={`Al momento de trabajar con:
alert(),
print(),
prompt(),
confirm()
no es necesario hacer esto.`}/>
        <JavaScropt codigo={`window.alert();
window.print();
window.prompt();
window.confirm();`}/>
        <Conseptos texto={`Simplemente podemos hacer esto.`}/>
        <JavaScropt codigo={`alert();
print();
prompt();
confirm();`}/>
        <Conseptos texto={`A por sierto me olvide de mencionar que alert y de mas son propiedades del objeto window.`}/>
      </main>
      <Footer/>
    </>
  );
}

export default Window1Js;