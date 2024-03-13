import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Html from "../../../../../componentes/lenguajes/Html";
import JavaScropt from "../../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../../componentes/menus/Footer";
import Resumenes from "../../../../../componentes/resumenes/resumenes";

function AtributosGlobalesJs() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `Estos atributos van en todos los elementos html o en casi todos y se pueden editar como queramos.`,
        lenguage: "JavaScropt",
        codigo: `editarContenido.setAttribute("contentEditable","true"); // El usuario podra modificar un elemento HTML.
dir_1.setAttribute("dir","rtl"); // poner el texto de derecha a izquierda.
dir_2.setAttribute("dir","ltr"); // poner el texto de izquierda a derecha.
mostrar.removeAttribute("hidden"); // remueve el atributo "hidden" el cual se encarga de ocultar un elemento html.
titulo.setAttribute("title","hola mundo"); // cambia el titulo de un elemento html al pasar el cursor sobre ese elemento.`
      }]}/>
      <main>
        <h1>atributos globales</h1>
        <Conseptos texto={`Estos atributos se pueden poner en cualquier elemento HTML.`}/>
        <h2>atributos globales.</h2>
        <Html codigo={`<p contentEditable="true">esto se puede cambiar</p>

<p dir="rtl">las letras va de derecha a izquierda</p>
<p dir="ltr">las letras va de izquierda a derecha</p>

<p hidden>oculta el elemento</p>

<p title="un simple parrafo">esto tiene titulo.</p>`}/>
        <Conseptos texto={`contentEditable: Es para que se pueda modificar el contenido de un elemento prueba haciendo clock en el parrafo de ejemplo.

dir: Esto nos servira para cambiar la posision del texto de izquierda a derecha y vicesebersa 
(rtl) izquierda a derecha.
(ltr) derecha a izquierda.

hidden: Esto directamente oculta un elemento html.

title: Esto le da un titulo a cualquier elemento de html.`}/>
        <div className="website">
          <p contentEditable="true">esto se puede cambiar</p>

          <p dir="rtl">las letras va de derecha a izquierda</p>
          <p dir="ltr">las letras va de izquierda a derecha</p>

          <p hidden>oculta el elemento</p>

          <p title="un simple parrafo">esto tiene titulo.</p>
        </div>
        <h2>apliquemos javaScript</h2>
        <h2>contentEditable</h2>
        
        <Html codigo={`<p class="editarContenido"> hola </p>`}/>
        
        <JavaScropt codigo={`let editarContenido = document.querySelector(".editarContenido"); 
editarContenido.setAttribute("contentEditable","true");`}/>
        <div className="website">
          <p contentEditable="true"> hola </p>
        </div>
        <h2>dir</h2>
        
        <Html codigo={`<p class="dir_1"> hola </p> 
<p class="dir_2"> hola </p>`}/>
        
        <JavaScropt codigo={`let dir_1 = document.querySelector(".dir_1");
dir_1.setAttribute("dir","rtl"); 

let dir_2 = document.querySelector(".dir_2");
dir_2.setAttribute("dir","ltr");`}/>
        <div className="website">
          <p dir="rtl"> hola </p> 
          <p dir="ltr"> hola </p>
        </div>
        <h2>hidden</h2>
        
        <Html codigo={`<p class="ocultar" hidden> se mostrara </p> `}/>
        
        <JavaScropt codigo={`let mostrar = document.querySelector(".ocultar");
mostrar.removeAttribute("hidden")`}/>
        <div className="website">
        <p> se mostrara </p> 
        </div>
        <h2>title</h2>
        
        <Html codigo={`<p class="titulo"> hola </p> `}/>
        
        <JavaScropt codigo={`let titulo = document.querySelector(".titulo"); 
titulo.setAttribute("title","hola mundo");`}/>
        <div className="website">
          <p title="hola mundo"> hola </p> 
        </div>
        <Conseptos texto={`Hay mas pero estos son los mas usados al momento de programar.`}/>
      </main>
      <Footer/>
    </>
  );
}

export default AtributosGlobalesJs;