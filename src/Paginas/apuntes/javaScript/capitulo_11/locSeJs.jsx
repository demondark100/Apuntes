import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../componentes/menus/Footer";
import Menu2 from "../../../../componentes/menus/Menu2";

function LocSeJs() {
  return (  
    <>
      <Menu2/>
      <main>
        <h1>LocalStorage y SessionStorage</h1>
        <Conseptos texto={`Esta api se encarga de guardar la informacion de la pagina web.`}/>
        <h2>LocalStorage</h2>
        <Conseptos texto={`Esto guardara la informacion pero a la hora de cerrar la pagina web si se guardara la informacion a la hora de volver a entrar al sitio.`}/>
        <h2>SessionStorage</h2>
        <Conseptos texto={`Esto guardara la informacion de forma local osea que a la hora de cerrar la pagina la informacion se perdera.`}/>
        <JavaScropt codigo={`console.log(localStorage);
console.log(sessionStorage);`}/>
        <Conseptos texto={`A la hora de ejecutarlo nos daremos cuenta que ambos son un objeto.`}/>
        <h2>usando localStorage</h2>
        <h2>setItem</h2>
        <JavaScropt codigo={`localStorage.setItem("musica","DAMAGE • Devil");`}/>
        <Conseptos texto={`Con "setItem" estamos almacenando el dato de forma local es como hacer esto.`}/>
        <JavaScropt codigo={`let musica = "DAMAGE • Devil";`}/>
        <h2>getItem</h2>
        <JavaScropt codigo={`localStorage.getItem("musica");
//con esto estamos accediendo al dato que guardamos , es como decir.
//acceder a la propiedad musica.
//pero es mejor guardar el dato en una variable para hacerlo mas sensillo,
let musica = localStorage.getItem("musica");
console.log(musica)`}/>
        <Conseptos texto={`recordatorio con localStorage si salimos de la pagina los datos se guardaran.`}/>
        <h2>usando SessionStorage</h2>
        <h2>setItem</h2>
        <JavaScropt codigo={`sessionStorage.setItem("musica","Show Me The Will")
//con "setItem" estamos almacenando el dato de forma local es como hacer esto.
let musica = "Show Me The Will";`}/>
        <h2>getItem</h2>
        <JavaScropt codigo={`sessionStorage.getItem("musica");
//con esto estamos accediendo al dato que guardamos , es como decir.
//acceder a la propiedad musica.
//pero es mejor guardar el dato en una variable para hacerlo mas sensillo,
let musica = sessionStorage.getItem("musica");
console.log(musica)`}/>
        <Conseptos texto={`Recordatorio con sessionStorage si salimos de la pagina no se guardaran los datos.`}/>
        <h2>removeItem</h2>
        <h3>ejemplo</h3>
        <JavaScropt codigo={`localStorage.setItem("musica","DAMAGE • Devil"); 
localStorage.removeItem("musica"); 
sessionStorage.setItem("musica","Show Me The Will"); 
sessionStorage.removeItem("musica");`}/>
        <Conseptos texto={`Con "removeItem" removeremos/eliminaremos el dato que queramos , esto se aplica tanto para "localStorage" y "sessionStorage".`}/>
        <h2>clear</h2>
        <h3>ejemplo</h3>
        <JavaScropt codigo={`localStorage.clear();`}/>
        <Conseptos texto={`Con "clear" borraremos todo , esto se aplica para los dos "sessionStorage" y "localStorage".`}/>
      </main>
      <Footer/>
    </>
  );
}

export default LocSeJs;