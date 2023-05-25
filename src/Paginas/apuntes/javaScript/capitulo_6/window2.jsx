import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../componentes/menus/Footer";
import Menu2 from "../../../../componentes/menus/Menu2";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";


function Window2Js() {
  return (  
    <>
      <Menu2 />
      <main>
        <h1>window 2</h1>
        <h2>sintaxis</h2>
        <Sintaxis codigo={`ventana.metodo.propiedad`}/>
        <h2>screen</h2>
        <JavaScropt codigo={`window.screen;`}/>
        <Conseptos texto={`Esto nos servira para ver las propiedades de la pantalla.`}/>
        <h2>screenLeft</h2>
        <JavaScropt codigo={`window.screenLeft;`}/>
        <Conseptos texto={`Esto nos mostrara la disctancia que hay entre la pantalla del monitor y la ventana del sitio web del lado izquierdo.`}/>
        <h2>screenTop</h2>
        <JavaScropt codigo={`window.screenTop;`}/>
        <Conseptos texto={`Esto nos mostrara la distancia entre la pantalla del monitor y el navegador de la parte de arriba.`}/>
        <h2>scrollY</h2>
        <JavaScropt codigo={`window.scrollY;`}/>
        <Conseptos texto={`Esto nos servira para saber cuanto nos desplazamos de arriba a abajo.`}/>
        <h2>scrollX</h2>
        <JavaScropt codigo={`window.scrollX;`}/>
        <Conseptos texto={`Esto nos servira para ver cuanto nos desplazamos de derecha a izquierda.`}/>
        <h2>abreviar scroll</h2>
        
        <Sintaxis codigo={`window.scroll(
    parametro 1 moverse de arriba a abajo ,
    parametro 2 moverse de izquierda a derecha
);`}/>
        
        <JavaScropt codigo={`window.scroll(50,10);`}/>
        <h2>innerWidth y innerHeight</h2>
        <JavaScropt codigo={`window.innerWidth; // ver ancho
window,innerHeight; // ver alto`}/>
        <Conseptos texto={`Con estos dos objetos podremos ver el ancho y el alto del sitio web.`}/>
      </main>
      <Footer />
    </>
  );
}

export default Window2Js;