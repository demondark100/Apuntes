import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Footer from "../../../../../componentes/menus/Footer";
import "./conseptos_basicos.css";

function ConseptosBasicos() {
  return (  
    <>
      <main>
        <h1>conseptos basicos</h1>
        <Conseptos texto="Html es un lenguaje de maquetacion para estructurar sitios web y es escensial para porder trabajar con lenguajes comno css y javaScript."/>
        <Conseptos texto="Este lenguaje se basa en etiquetas en simples palabras son cajas que ponemos en un sitio web para despues poder interactuar con dichas cajas para darles funcionalidad y estilos." />
        <Conseptos texto={"Las cajas tienen unas cuantas propiedades que las veremos a continuacion."} />
        <Conseptos texto={`Margin: El margin es el espacio que hay en la parte de afuera de una caja.`} />
        <Conseptos texto={`Border: El "border" es el borde que tiene una caja.`} />
        <Conseptos texto={"Padding: Es similar a margin solo que este deja el espacio por dentro de la caja no por fuera como lo hace Margin."}/>
        <Conseptos texto={`Contenido: El contenido es lo que ponemos dentro de esa caja.`}/>

        <div className="content_imageCbasicos">
          <img src="data:image/png;base64,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" /> 
        </div>

        <Conseptos texto={"Ahora proporcionare mas ejemplos para que entiendas mejor."}/>

        <div className="Content_Cbasicos">
          <div className="Content_conseptosBasicos">
            <h3>Margin / Margen</h3>
            <div>
              <div className="margin_caja1">caja 1</div>
              <div className="margin_caja2">caja 2</div>
            </div>
          </div>
          <div className="Content_conseptosBasicos">
            <h3>Border / borde</h3>
            <div className="border_ejemplo">
              borde
            </div>
          </div>
          <div className="Content_conseptosBasicos">
            <h3>Padding / relleno</h3>
            <div className="padding_ejemplo">
              relleno
            </div>
          </div>
          <div className="Content_conseptosBasicos">
            <h3>Contenido</h3>
            <div className="contenido_ejemplo">
              contenido
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}

export default ConseptosBasicos;