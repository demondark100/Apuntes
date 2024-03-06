import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Html from "../../../../../componentes/lenguajes/Html";
import Css from "../../../../../componentes/lenguajes/Css";
import Footer from "../../../../../componentes/menus/Footer";
import "./margin.css";
import Resumenes from "../../../../../componentes/resumenes/resumenes";

function Margin() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `El margin es el espacio exterior de una caja/elemento hhtml.`,
        lenguage: "Css",
        codigo: `margin: aunto; /*dejar espacios arriba abajo derecha e izquierda segun el contenedor*/
margin-top: 15px; /*dejar espacio hacia arriba*/
margin-left: 15px;  /*dejar espacio hacia la izquierda*/
margin-right: 15px; /*dejar espacio hacia la derecha*/
margin-bottom: 15px; /*dejar espacio hacia abajo*/`
      }]}/>
      <main>
        <h1>margin</h1>
        <Conseptos texto={`Margin en HTML es un espacio externo añadido alrededor del borde de un elemento, separándolo de otros elementos.`}/>
        <img className="imageMargin" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfyITuYnHozccMOWw1Q0AbqTGF0PArIuMXKlWtR9esF7LDxT0lyyFRRWCC5sqxMSULIVw&usqp=CAU" alt="margin" />
        
        <Conseptos texto={`Posdata no prestes atencion a la propiedad border y content por ahora lo aprenderemos mas adelante.

Si te fijas margin es el espacio de afuera y padding como ya vimos es el espacio de adentro de la caja.

margin al igual que padding tiene:
margin-top: 15px;
margin-right: 15px;
margin-bottom: 15px;
margin-left: 15px;`}/>

        
        <Html codigo={`<div class="m_content">
  
  <div class="arriba">
    arriba
  </div>
  
  <div class="derecha">
    derecha
  </div>
  
  <div class="abajo">
    abajo
  </div>
  
  <div class="izquierda">
      izquierda
  </div>

</div>`}/>

        
        <Css codigo={`.m_content{
  display: block;
  margin: auto;
}
.m_content .arriba{
  background-color: blue;
  margin-top: 8px;
}
.m_content .derecha{
  background-color: blue;
  margin-right: 12px;
}
.m_content .abajo {
  background-color: blue;
  margin-bottom: 8px;
}
.m_content .izquierda{
  background-color: blue;
  margin-left: 12px;
}`}/>
        <div className="website">
          <div className="m_content">
            
            <div className="arriba">
              arriba
            </div>
            
            <div className="derecha">
              derecha
            </div>
            
            <div className="abajo">
              abajo
            </div>
            
            <div className="izquierda">
                izquierda
            </div>

          </div>
        </div>

        <Conseptos texto={`Luego tenemops a la propiedad auto que es para centrar elementos es como de decir...
margin-top ,
margin-right ,
margin-bottom ,
 margin-left.`}/>

        
        <Html codigo={`<div class="content_margin">
  contenido
</div>`}/>
        
        <Css codigo={`.content_margin{
  margin: auto;
  background-color: red;
  color:  white;
  width: 20%;
}`}/>
        <div className="website">
          <div class="content_margin">
              contenido
          </div>
        </div>

        <Conseptos texto={`Ahora otro ejemplo del como usar margin.`}/>
        
        <Html codigo={`<div class="caja_1">
  caja 1
</div>
<div class="caja_2">
  caja 2
</div>
<div class="caja_3">
  caja 3
</div>
<div class="caja_4">
  caja 4
</div>`}/>
        
        <Css codigo={`.caja_1{
  color: white;
  background-color: blue;
  margin: auto;
  margin-top: 15px;
  width: 15%;
}
.caja_2{
  color: white;
  background-color: blue;
  margin: auto;
  margin-top: 15px;
  width: 15%;
}
.caja_3{
  color: white;
  background-color: blue;
  margin: auto;
  margin-top: 15px;
  width: 15%;
}
.caja_4{
  color: white;
  background-color: blue;
  margin: auto;
  margin-top: 15px;
  width: 15%;
}`}/>
        <div className="website">
          <div className="caja_1">
              caja 1
          </div>
          <div className="caja_2">
              caja 2
          </div>
          <div className="caja_3">
              caja 3
          </div>
          <div className="caja_4">
              caja 4
          </div>
        </div>


      </main>
      <Footer />
    </>
  );
}

export default Margin;