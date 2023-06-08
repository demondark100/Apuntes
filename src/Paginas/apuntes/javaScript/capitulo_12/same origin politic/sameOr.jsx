import Conseptos from "../../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../../componentes/menus/Footer";
import "./same.css";

function SameOrJs() {
  return (  
    <>
      <main>
        <h1>Same Origin Politic</h1>
        <Conseptos texto={`Un enlace se compone por 3 partes`}/>
          <div className="enlaces_content">
                <div className="enlace enlace_1">protocolo</div>
                <div className="enlace enlace_2">host</div>
                <div className="enlace enlace_3">puerto</div>
            </div>
            <div className="enlaces_content">
                <div className="enlace enlace_1">http//</div>
                <div className="enlace enlace_2">localhost</div>
                <div className="enlace enlace_3">:5500</div>
            </div>

        <Conseptos texto={`Same Origin Politic solo nos permitira acceder a los worker o a otras cosas siempre y cuando el origen sea el mismo y el correcto.

aqui un ejemplo: puerto correcto.
aqui todo estara correcto en este caso el puerto es el 5500 y al final agregamos worker.js para acceder porque es el mismo protocolo el mismo host y el mismo puerto.`}/>
        <JavaScropt codigo={`const worker = new Worker("http://127.0.0.1:5500/worker.js");
`}/>
        <h2>puerto incorrecto</h2>
        <Conseptos texto={`Sin embargo aqui estamos cambiando el puerto de 5500 a 8090 por lo cual no accedera al worker ya que se esta cambiando el puerto con lo cual el origin no es el mismo/correcto por lo tanto no accedera al worker.`}/>
        <JavaScropt codigo={`const worker = new Worker("http://127.0.0.1:5500/worker.js");`}/>
        <h2>un ejemplo mas</h2>
        <Conseptos texto={`correcto.
    Si todo esta correcto funcionara.`} />
                <div className="enlaces_content">
                <div className="enlace enlace_1">protocolo</div>
                <div className="enlace enlace_2">host</div>
                <div className="enlace enlace_3">puerto</div>
            </div>
            <div className="enlaces_content">
                <div className="enlace enlace_1">http//</div>
                <div className="enlace enlace_2">127.0.0.1</div>
                <div className="enlace enlace_3">:5500</div>
            </div>
        <Conseptos texto={`incorrecto.
      Si algo esta incorrecto no funcionara no accedera.`}/>
               <div className="enlaces_content">
                <div className="enlace enlace_1">protocolo</div>
                <div className="enlace enlace_2">host</div>
                <div className="enlace enlace_3">puerto</div>
            </div>
            <div className="enlaces_content">
                <div className="enlace enlace_1">http//</div>
                <div className="enlace enlace_2">127.0.0.1</div>
                <div className="enlace enlace_3">:8080</div>
            </div>
        <h2>de forma resumida</h2>
        <Conseptos texto={`Si solo ponemos.`}/>
        <JavaScropt codigo={`const worker = new Worker("worker.js");`}/>
        <Conseptos texto={`Se da a entender de forma automatica que el:`}/>
        <div className="enlaces_content">
            <div className="enlace enlace_1">protocolo</div>
            <div className="enlace enlace_2">host</div>
            <div className="enlace enlace_3">puerto</div>
          </div>
        <Conseptos texto={`Son los correctos.`}/>
      </main>
      <Footer/>
    </>
  );
}

export default SameOrJs;