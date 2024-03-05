import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import Resumenes from "../../../../../componentes/resumenes/resumenes";


import "./Etiquetas.css";


function Etiquetas() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: "Las etiquetas solo son cajas y se estructura de esta forma:",
        lenguage: "Html",
        codigo: `<etiqueta>contenido</etiqueta>`
      }]}/>
      <main>
        <h1>Etiquetas</h1>
        
        <Conseptos texto={`Antes de iniciar cabe aclarar que los elementos que veras en estos ejemplos no son oficiales de html yo invente estos elementos como <boton> y asi para dar un ejemplo mas claro.`}/>

        <Conseptos texto={"Las etiquetas de HTML son elementos utilizados para estructurar y dar formato al contenido de una página web."}/>

        <Html codigo={`
          <etiqueta>hola mundo</etiqueta>
  
        `.trim()}/>

        <Conseptos texto={`como te habras dado cuenta estas etiquetas cuuentas con este simbolo <></> , dentro de esos simbolos debbemos poner el elemento que necesitemos poner y entre <></> debemos poner el contenido que deseamos poner.`}/>
        
        <Html codigo={`
          <elemento>aqui el contenido</elemento>
        `.trim()} />

        <h2 className="h2_atributos">atributos</h2>

        <Conseptos texto={`Los atributos nos sirven para darles un nombre osea identificar y hacer otras cosas a las etiquetas y esto nos sirve para dar estilos al elemento y programarle una funcion.`} />

        <Html codigo={`
          <etiqueta atributo="valor">hola mundo</etiqueta>
        `.trim()}/>

        <Conseptos texto={`mas adelante veremos una utilidad demasiado interesante para esta propiedad por ahora haremos un pequeño ejercicio.`}/>
        <Conseptos texto={`crear un boton que tenga letras negras y que de fondo sea verde`} />

        <Html codigo={`
          <boton>esto es un boton</boton>
        `.trim()}/>

        <div className="website">
          <button className="boton_ejemploHtml">esto es un boton</button>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Etiquetas;