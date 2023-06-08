import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../componentes/menus/Footer";

function OpeTernaJs() {
  return (  
    <>
      <main>
        <h1>Operador ternario</h1>
        <Conseptos texto={`El operador ternario mejora el if y obtimiza el codigo , es recomendable usarlo solo cuando se hara un "si" y "sino" aqui no existe "sino si".`}/>
        <h2>if</h2>
        <JavaScropt codigo={`let fruta = "naranja";
if (fruta == "naranja") console.log("es una deliciosa naranja");
else console.log("no es una naranja")
`}/>
        <h3>ternario</h3>
        <JavaScropt codigo={`let fruta = "naranja";
(fruta == "naranja")
    ?
      console.log("es una naranja")
    : console.log("no es una rananja`}/>
        <Conseptos texto={`Si queremos hacer mas de una cosa o afirmacion se debe poner entre parentesis.`}/>
        <h2>ejemplo</h2>
        <JavaScropt codigo={`let fruta = "naranja";
(fruta == "naranja")
    ?
    ( 
        console.log("es una naranja"),
        console.log("definitivamente es una naranja")
    )
    :
    ( 
        console.log("no es una rananja"),
        console.log("definitivamente no es una naranja")
    )`}/>
        <Conseptos texto={`La ventaja de esto es que usa menos recursos que un if.
La desventaja esque puedes hacer mucho menos cosas que un if , estos se usan demasiado al momento de trabajar con react por ejemplo.`}/>
      </main>
      <Footer/>
    </>
  );
}

export default OpeTernaJs;