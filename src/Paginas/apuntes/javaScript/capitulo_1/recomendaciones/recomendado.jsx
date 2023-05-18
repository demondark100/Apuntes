import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";

function RecomendadoJs() {
  return (  
    <>
      <Menu2 />
      <main>
        <h1>Recomendaciones</h1>
        <Conseptos 
texto={`Te recomiendo que uses un editor de codigo como {visualStudioCode} para que sea mucho mas sensillo escribir codigo.

Pero puedes escribir el codigo en tu navegador debido a que javaScript se compila en la web.`}
enlaces={{
  visualStudioCode: {text:"visual studio code", url: "https://code.visualstudio.com/"}
}}
targetBlank={true}/>
        <h2>Consejos</h2>
        <Conseptos texto={`1. Saber html y css antes de aprender este lenguaje o por lo menos solo html para empezar , solo es necesario html y css a la hora de manejar el DOM pero como tal si puedes aprender el lenguaje hasta sierta parte yo te indicare cuando sera necesario usar html y css con javaScript.

2. Saber logica de programacion esto ya lo enseñe solo te enseñare conseptos del lenguaje mas no la logica de programacion.

3. este curso no tendra mucha teoria a excepcion de algunos temas.`}/>

      </main>
      <Footer />
    </>
  );
}

export default RecomendadoJs;