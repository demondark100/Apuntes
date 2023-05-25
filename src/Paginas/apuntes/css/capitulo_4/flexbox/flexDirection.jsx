import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Html from "../../../../../componentes/lenguajes/Html";
import Css from "../../../../../componentes/lenguajes/Css";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";
import "./flexbox.css"
import { Link } from "react-router-dom";

function FlexDirection() {
  return (  
    <>
      <Menu2 />
      <main>
        <h1>flex direction</h1>
        <Conseptos texto={`Recuerdan que dije que flex es de (arriba a abajo) y de (derecha a izquierda)

Ahora veremos como fumciona las columnas y las filas.

flex viene por defecto con la propiedad de filas.`}/>

          <h2>fila</h2>
          <div className="website">
            <div className="flex_fila_ejemplo">
              <div>
                fila 1
              </div>
              <div>
                fila 2
              </div>
              <div>
                fila 3
              </div>
            </div>
          </div>

          <h2>columna</h2>
          <div className="website">
            <div className="flex_columna_ejemplo">
              <div>
                fila 1
              </div>
              <div>
                fila 2
              </div>
              <div>
                fila 3
              </div>
            </div>
          </div>

          <Conseptos texto={`Ahora para poder decidir como queremos que se comporten los elemntos tenemos a "flex-direction" este tiene como propiedades a:

flex-direction: row; = filas.
flex-direction: column; = columna.

ahora veremos como usarlo.`}/>
        
        <h2>filas</h2>
        
        <Html codigo={`<div class="filas_content">
  <div>
    fila.
  </div>
  <div>
    fila.
  </div>
  <div>
    fila.
  </div>
</div>`}/>
        
        <Css codigo={`.filas_content{
  display: flex;
}
.filas_content div{
  width: 120px;
  height: 120px;
  background-color: #50515f;
  color: #fff;
  margin: 15px;
}`}/>
        <div className="website">
          <div className="filas_content">
              <div>
                  fila.
              </div>
              <div>
                  fila.
              </div>
              <div>
                  fila.
              </div>
          </div>
        </div>

        <Conseptos texto={`En este caso no pongo "flex-direction: row" debido a que por defecto flex viene con esa propiedad pero la podemos poner en caso de que la propiedad este en columnas.`}/>


        <h2>columna</h2>
        
        <Html codigo={`<div class="column_content">
  <div>
    columna
  </div>
  <div>
    columna
  </div>
  <div>
    columna
  </div>
</div>`}/>
        
        <Css codigo={`.column_content{
  display: flex;
  flex-direction: column;
}
.column_content div{
  width: 120px;
  height: 120px;
  background-color: #50515f;
  color: #fff;
  margin: 15px;
}`}/>
        <div className="website">
          <div className="column_content">
              <div>
                  columna
              </div>
              <div>
                  columna
              </div>
              <div>
                  columna
              </div>
          </div>
        </div>


        <h2>nth-child()</h2>
        <Conseptos texto={`Para continuar debemos entender como funciona la pseudoclase "nth-child(mumero del hijo)".
esto nos servira para poder modificar al elemento hijo que queramos.

ejemplo de uso.`}/>

        
        <Html codigo={`<div class="nthContent1">
  <div>
    hijo 1.
  </div>
  <div>
    hijo 2.
  </div>
  <div>
    hijo 3.
  </div>
</div>`}/>
        
        <Css codigo={`.nthContent1 div:nth-child(1){
  width: 120px;
  height: 120px;
  margin: 15px;
  background-color: #000;
  color: #fff;
}
.nthContent1 div:nth-child(2){
  width: 120px;
  height: 120px;
  margin: 15px;
  background-color: #0a6fce;
  color: #fff;
}
.nthContent1 div:nth-child(3){
  width: 120px;
  height: 120px;
  margin: 15px;
  background-color: #971200;
  color: #fff;
}`}/>
        <Conseptos texto={`nth-child(1) hace referencia al primer div.
nth-child(2) hace referencia al segundo div.
nth-child(3) hace referencia al tercer div.
esta pseudoclase se debe poner siempre al contenedor para que pueda seleccionar a los hijos que queremos modificar.`}/>
        <div className="website">
          <div className="nthContent1">
              <div>
                  hijo 1.
              </div>
              <div>
                  hijo 2.
              </div>
              <div>
                  hijo 3.
              </div>
          </div>
        </div>


        <h2>reverse</h2>
        <Conseptos texto={`Tambien podemos ponerlos en reversa.

flex-direction: row-reverse;
flex-direction: column-revese;
ahora un ejemplo de uso.`}/>
        <h2>row-reverse</h2>
        
        <Html codigo={`<div class="reverse_content">
  <div>
    caja 1
  </div>
  <div>
    caja 2
  </div>
  <div>
    caja 3
  </div>
</div>`}/>
        
        <Css codigo={`.reverse_content{
  display: flex;
  flex-direction: row-reverse;
}
.reverse_content div{
  margin: 15px;
  width: 150px;
  height: 120px;
}
.reverse_content div:nth-child(1){
  background-color: #ff6868;
  color: #fff;
}
.reverse_content div:nth-child(2){
  background-color: #486fc4;
  color: #fff;
}
.reverse_content div:nth-child(3){
  background-color: #7155d8;
  color: #fff;
}`}/>
        <h2>con codigo reverse</h2>
        <div className="website">
          <div className="reverse_content">
              <div>
                  caja 1
              </div>
              <div>
                  caja 2
              </div>
              <div>
                  caja 3
              </div>
          </div>
        </div>
        <h2>sin codigo reverse</h2>
        <div className="website">
          <div className="reverse_contentSinCodigo">
              <div>
                  caja 1
              </div>
              <div>
                  caja 2
              </div>
              <div>
                  caja 3
              </div>
          </div>
        </div>


        <h2>column-reverse</h2>
        
        <Html codigo={`<div class="column_reverse">
  <div>
    caja 1
  </div>
  <div>
    caja 2
  </div>
  <div>
    caja 3
  </div>
</div>`}/>
        
        <Css codigo={`.column_reverse{
  display: flex;
  flex-direction: column-reverse;
}
.column_reverse div{
  margin: 15px;
  width: 150px;
  height: 120px;
}
.column_reverse div:nth-child(1){
  background-color: #ff6868;
  color: #fff;
}
.column_reverse div:nth-child(2){
  background-color: #486fc4;
  color: #fff;
}
.column_reverse div:nth-child(3){
  background-color: #7155d8;
  color: #fff;
}`}/>
        <h2>con codigo reverse</h2>
        <div className="website">
          <div className="column_reverse">
              <div>
                  caja 1
              </div>
              <div>
                  caja 2
              </div>
              <div>
                  caja 3
              </div>
          </div>
        </div>

        <h2>sin codigo reverse</h2>
        <div className="website">
          <div className="column_reverseSinCodigo">
              <div>
                  caja 1
              </div>
              <div>
                  caja 2
              </div>
              <div>
                  caja 3
              </div>
          </div>
        </div>

        <div className="siguiente__parte">
          <Link to={"flexWrap"}>flex wrap</Link>
        </div>
        
      </main>
      <Footer />
    </>
  );
}

export default FlexDirection;