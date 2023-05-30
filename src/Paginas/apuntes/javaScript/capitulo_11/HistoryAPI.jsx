import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../componentes/menus/Footer";
import Menu2 from "../../../../componentes/menus/Menu2";

function HistoryAPIJs() {
  return (  
    <>
      <Menu2 />
      <main>
        <h1>History API</h1>
        <Conseptos texto={`Con el objeto "History" trabajaremos con el historial una api muy util.`}/>
        <JavaScropt codigo={`console.log(history.__proto__);
// con esto veremos el protoripo de este objeto.`}/>
        <h2>back</h2>
        <JavaScropt codigo={`history.back();`}/>
        <Conseptos texto={`Esto nos devolvera a una pagina atras.`}/>
        <h2>forward</h2>
        <JavaScropt codigo={`history.forward()`}/>
        <Conseptos texto={`Con esto iremos un sitio mas adelante de donde estamos.`}/>
        <h2>length</h2>
        <JavaScropt codigo={`history.length()`}/>
        <Conseptos texto={`Con esto veremos el tamaño del historial.`}/>
        <h2>go</h2>
        <JavaScropt codigo={`history.go()`}/>
        <Conseptos texto={`Con esto recargaremos la pagina.`}/>
        <JavaScropt codigo={`history.go(-1)`}/>
        <Conseptos texto={`Con esto recargaremos la pagina anterior a la que estamos.`}/>
        <JavaScropt codigo={`history.go(1)`}/>
        <Conseptos texto={`Con esto recargaremos la pagina despues en la que estamos.`}/>
        <h2>pushState</h2>
        <Conseptos texto={`Estas son entradas de historial por ejemplo si abrimos un sitio y modificamos la entrada como en el codigo y abres el historias se abrira esa entrada de historial.`}/>
        <JavaScropt codigo={`console.log(location.href);

//fijate en la url que te dejara href
history.pushState(
    {nombre: "historial"},
    "prueba historial",
    "?prueba"
);
console.log(location.href);
//ahora nos daremos cuenta que el link de href cambio.`}/>
        <h2>state</h2>
        <JavaScropt codigo={`console.log(history.state);`}/>
        <Conseptos texto={`Con esto veremos el nombre , que pusimos en este caso "historial"`}/>
        <h2>popstate</h2>
        <JavaScropt codigo={`addEventListener("popstate",(e)=>{
    console.log(e.state)
})`}/>
        <Conseptos texto={`Esto es como el state solo que nos evitaremos poner cada rato "history.state" a la hora de movernos en el historial.`}/>
        <h2>replaceState</h2>
        <JavaScropt codigo={`history.replaceState(
    {nombre: "historial"},
    "prueba historial",
    "?prueba"
);`}/>
        <Conseptos texto={`Esto es lo mismo que "pushState" solo que no deja entradas en el historial.`}/>

      </main>
      <Footer />
    </>
  );
}

export default HistoryAPIJs;