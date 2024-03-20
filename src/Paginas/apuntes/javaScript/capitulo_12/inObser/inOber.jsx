import { unstable_usePrompt } from "react-router-dom";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import JavaScropt from "../../../../../componentes/lenguajes/JavaScript";
import Sintaxis from "../../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../../componentes/menus/Footer";
import "./inObser.css";
import { useRef,useEffect } from "react";
import Resumenes from "../../../../../componentes/resumenes/resumenes";

function InObserJs() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `Con esto verificamos si algun elemento esta siendo mostrado en la pantalla.`,
        lenguage: "JavaScropt",
        codigo: `const observar = (entry, observer) => {
  entry.forEach((i) => {
    if (i.isIntersecting) {
      const cajas = i.target;
      observer.unobserve(i.target);
    }
  });
};
  
const observer = new IntersectionObserver(observar);
pruebas.forEach((i) => {
  observer.observe(i); // mandar algun elemento o elementos html para observar.
});`
      }]}/>
      <main>
        <h1>Interseccion observer</h1>
        <Conseptos texto={`Esta api es para saber cuando esque una caja se esta viendo en pantalla , esto nos puede servir para muchas cosas como:`}/>
        <ol>
          <li>Agregar animaciones: Cuando el usuario haga scroll podemos agregar una pequeña animacion para que se vayan mostrando el contenido de una forma mas elegante.</li>
          <li>Lazy loading: Esta tecnica obtimiza el tiempo de carga ya que carga los datos de forma progresiva y obtimiza mucho la web.</li>
        </ol>
        <h2>observer</h2>
        <Conseptos texto={`Esta api necesita de algunos parametros para trabajar con ella.`}/>

        <h2>llamado de api</h2>
        <Sintaxis codigo={`const observer = new IntersectionObserver(funcion para observar);`}/>
        <Conseptos texto={`new IntersectionObserver debe recibir una funcion para que mas adelante pueda ser observada.`}/>
        <JavaScropt codigo={`const observer = new IntersectionObserver(observar);`}/>

        <h2>una funcion</h2>
        <Conseptos texto={`La funcion servira para saber si una caja esta en la pantalla o no , aqui podremos hacer lo que sea con el elemento que este siendo visto en pantalla.
        
        Esta funcion recibira dos parametros:`}/>
        <ol>
          <li>entry: que elemento sera observado.</li>
          <li>observer: Esto no lo pondremos explicitamente como parametro pero sera muy importante ponerlo en la funcion.</li>
        </ol>
        <Conseptos texto={`Cuando leamos las cajas que seran observadas usaremos tres cosas muy importantes para trabajar con observer.`}/>
        <ol>
          <li>
            isIntersecting: Esto devolvera true o false segun si el elemento se esta viendo en la pantalla o no.
          </li>
          <li>
            target: Con esto podremos modificar el elemento como si seleccionaramos con querySelector osea que podremos agregar clases o modificar su contenido del elemento que se esta viendo en pantalla.
          </li>
          <li>
            unobserve: Esto es para que una vez un elemento fue observado ya no se vuelva a observar una y otra vez , en simples palabras si un elemento ya se mostro en pantalla no volvera a hacer el proceso de verificar si esta siendo observado ese elemento.
          </li>
        </ol>
        <JavaScropt codigo={`const observar=(entry,observer)=>{
  if(entry.isIntersecting){
    entry.target.textContent = "hola mundo";
    observer.unobserve(entry.target)
  }
}`}/>
        <h2>observar</h2>
        <Conseptos texto={`Por ultimo debemos observar el elemento que queramos.`}/>
        <JavaScropt codigo={`observer.observe(que div o elemento html quieres que sea observado);`}/>

        <h2>practica</h2>
        <Conseptos texto={`Probablemente te mareaste un poco pero con la practica veremos que es muy facil de usar si no entiendes algo del codigo vuelve a leer , todo lo que usaremos ya esta explicado.`}/>
        <Html codigo={`<div class="pruebas caja1">contenido cargado</div>
<div class="pruebas caja2"></div>
<div class="pruebas caja3">contenido cargado</div>`}/>
        <Css codigo={`*{
  margin: 0;
  padding: 0;
}
.pruebas{
  width: 100vw;
  height: 100vh;
  background-color: #000;
  border: 2px solid #0f0;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.caja2{
  transform: translate(-100%,0);
}
.load{
  transform: translate(0,0);
  transition-duration: .5s;
}`}/>
        <JavaScropt codigo={`const caja2 = document.querySelector(".caja2");

const observar=(entry,observer)=>{
  console.log(entry)
  if (entry[0].isIntersecting) {
    const caja = entry[0].target;
    caja.textContent = "lazy load cargado";
    caja.classList.add("load");
    observer.unobserve(caja)
  }
}

const observer = new IntersectionObserver(observar);
observer.observe(caja2)`}/>
        <Conseptos texto={`Aqui simplemente estamos observando el div que tiene la clase "caja2" , le agregamos un contenido para que la carga sea mas rapida y ademas le ponemos una animacion cuando el elemento esta siendo observado en simples palabras estamos aplicando lazy load.`}/>

        <h2>observar varias cajas.</h2>
        <Conseptos texto={`Tambien podemos observar varias cajas para darles una animacion o aplicar lazy load.`}/>
        <Html codigo={`<div class="pruebas"></div>
<div class="pruebas"></div>
<div class="pruebas"></div>`}/>
        <Css codigo={`*{
  margin: 0;
  padding: 0;
}
.pruebas{
  width: 100vw;
  height: 100vh;
  background-color: #000;
  border: 2px solid #0f0;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-100%,0);
}

.load{
  transform: translate(0,0);
  transition-duration: .5s;
}`}/>
        <JavaScropt codigo={`const pruebas = document.querySelectorAll(".pruebas");
const nombres = ["Emilia", "Lanmis", "Sylvie"];
let indiceNombres = 0;
  
const observar = (entry, observer) => {
  entry.forEach((i) => {
    if (i.isIntersecting) {
      const cajas = i.target;
  
      if (nombres[indiceNombres] !== undefined) {
        cajas.innerHTML = nombres[indiceNombres];
        cajas.classList.add("load")
        indiceNombres++;
      }
  
      observer.unobserve(i.target);
    }
  });
};
  
const observer = new IntersectionObserver(observar);
pruebas.forEach((i) => {
  observer.observe(i);
});`}/>
        <Conseptos texto={`Aqui hacemos lo mismo que el otro codigo solo que observamos todas las cajas y agregamos el contenido de un arreglo llamado nombres.`}/>
      </main>
      <Footer/>
    </>
  );
}

export default InObserJs;