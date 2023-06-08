import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import "./variables.css";

function VariablesCss() {
  return (  
    <>
      <main>
        <h1>variables</h1>
        <Conseptos texto={`Las variables nos sirve para guardas estilos en css.`}/>
      
        <h2>pseudocodigo crear variable:</h2>
        <Css codigo={`--un-rojo: #f00;`}/>
        <h2>pseudocodigo llamar variable:</h2>
        <Css codigo={`var(--un-rojo);`}/>
        
        <h2>variables globales</h2>
        <Conseptos texto={`Las variables globales nos permitira usar la variable en cualquier elemento que queramos.

Para usarlas es necesario crear un "root".`}/>
        
        <Html codigo={`<div class="variable_global">

</div>
<div class="un_parrafo1">
    <p>
        un parrafo cualquiera XD.
    </p>
</div>`}/>
      
      <Css codigo={`/* esto es el :root siempre se debe crear asi para usar variales globales */

:root{
    --un-rojo: #f00;
}


.variable_global{
    width: 45%;
    height: 45%;
    background-color: var(--un-rojo);
}
.un_parrafo1{
    margin-top: 15px;
    background-color: #000;
    padding: 15px;
}
.un_parrafo1 p {
    color: var(--un-rojo);
}`}/>
        <div className="website">
        <div className="variable_global">
        </div>
        <div className="variable_global__p">
            <p>
                un parrafo cualquiera XD.
            </p>
        </div>
        </div>

        <h2>variable locales</h2>
        <Conseptos texto={`Estas a diferencia de las variables globales no necesitan de "root" pero estos solo se aplicaran para el elemento que le indiquemos por ejemplo si creamos la variable para un "p" esa variable solo funcionara con los "p" y no con los otros elementos debido a que es una variable local.`}/>
        
        <Html codigo={`<p>
    esto cambiara.
</p>
<p>
    tambien cambiara.
</p>
<div>
    no cambiara :c
</div>
<b>
    no cambiara.
</b>`}/>
        
        <Css codigo={`body{
    background-color: #000000ea;
}
p{
    --un-verde: #0f0;
}
p{
    color: var(--un-verde);
}
div{
    background-color: var(--un-verde);
}
b{
    background-color: var(--un-verde);
}`}/>
        <div className="website">
          <div className="bodyVariableCss">
            <p className="variableParrafo">
                esto cambiara.
            </p>
            <p className="variableParrafo">
                tambien cambiara.
            </p>
            <div>
                no cambiara :c
            </div>
            <b>
                no cambiara.
            </b>
          </div>
        </div>

      
      </main>
      <Footer />
    </>
  );
}

export default VariablesCss;