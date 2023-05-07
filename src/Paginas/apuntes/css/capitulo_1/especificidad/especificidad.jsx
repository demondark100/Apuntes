import Capitulos from "../../../../../aside";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";
import "./especificidad.css";

function Especificidad() {
  return (  
    <>
      <Menu2 />
      <Capitulos />
      <main>
        <h1>Especificidad</h1>
        <Conseptos texto={`la especificidad es como rangos para evitar conflictos con los estilos de css ahora una igamen para poder entender mejor la especificidad.`}/>
        <div className="img_especificidad">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuIEBYNQDSbiYptScUtmbc7431YvLpOncICDG0HbTG6wydTItrbG-Kt0FEmWT1ArDzFaA&usqp=CAU" alt="especificidad" />
        </div>
        <Conseptos texto={`para continuar debemos saber que son las cascadas en css bueno las cascadas toman importancia al ultimo estilo que hayamos definido.
ejemplo:`}/>
        <h2>Cascadas</h2>
        <h3>html</h3>
        <Html codigo={`<b>
  esto no sera verde
</b>
<b>
  esto tampoco sera verde
</b>`}/>
        <Css codigo={`b{
  color: green;
}
b{
  color: blue;
}`}/>
        <Conseptos texto={`si nos damos cuenta tomara el ultimo estilo que le dimos sin importarle el primer estilo que pusimos al elemento b.`} />
        <div className="website">
          <b className="especificidad_b">
            esto no sera verde
          </b>
          <b className="especificidad_b">
            esto tampoco sera verde
          </b>
        </div>

        <Conseptos texto={`bueno la especificidad viene a solucionar un problema de cascadas por ejemlo si queremos que un elemento no cambie por nada del mundo la especificidad nos permite hecer eso ahora veremos del menos importante al mas importante.`}/>
        <h2>elementos</h2>
        <Conseptos texto={`aqui veras como es que class tiene mas poder que una seleccion por elemento.`} />
        <h2>html</h2>
        <Html codigo={`<h6 subtitulo="feliz" class="subtitulo_1">
  este es un subtitulo feliz :D.
</h6>`}/>
        <h3>css</h3>
        <Css codigo={`[subtitulo="feliz"]{
  color: gray;
}
h6{
  color: red;
}
.subtitulo_1{
  color: blue;
}

/* aqui se esta aplicando el metodo de cascada 
con el selector de atributo y de clase debido 
a que estan em la misma gerarquia y al h2/slector 
por pesudoclase / elemento no le hizo ni caso debido 
a que su gerarquia es demasiado baja. */`} />

        <div className="website">
          <h6 className="subtitulo_1">
              este es un subtitulo feliz :D.
          </h6>

        </div>

        <h2>ID</h2>
        <Conseptos texto={`si nos damos cuenta en la imagen el id es superior a las clases , atributos y elementos/pseudoclases.`}/>
        <h3>html</h3>
        <Html codigo={`<h6 id="otro_subtitulo_feliz" class="subtitulo_2">
  otro subtitulo feliz :D.
</h6>`}/>
        <Css codigo={`#otro_subtitulo_feliz{
  color: orange;
}
.subtitulo_2{
  color: blue;
}
h6{
  color: red;
}

/* no importa cual sea la posision el id es 
superior a la clase esto se aplica para todos
siempre el superior tendra mas poder como nos
damos cuenta no le hace caso al estilo de la 
clase pero si al del id ya que es superior.  */`}/>
        <div className="website">
          <h6 id="otro_subtitulo_feliz">
            otro subtitulo feliz :D.
          </h6>
        </div>

        <h2>estilo en linea</h2>
        <Conseptos texto={`los estilos en linea se usan con el atributo style y es superior a los demas osea los id , clases , atributos , elementos , universal.
no es recomendable trabajar con esto debido a que es mejor darle estilo a travez de css y no desde html ya que se formara un codigo espagueti osea un dodigo poco legible.`} />
        
        <h3>html</h3>
        <Html codigo={`<h6  class="subtitulo_clase" id="subtitulo_3" style="color: red;">
  un subtitulo medio feliz :D.
</h6>`}/>
        <h3>css</h3>
        <Css codigo={`.subtitulo_clase{
  color: yellow;
}
#subtitulo_3{
  color: blue;
}
h6{
  color: gray;
}

/* no hara caso a los estilos css debido
a que los estilos en linea son 
superiores a los demas  */
`}/>
        <div className="website">
          <h6  style={{color: "red"}}>
            un subtitulo medio feliz :D.
          </h6>
        </div>

        <h2>important</h2>
        <Conseptos texto={`el important le gana a todos absolutamente a todos incluso a Goku no importa si lo pones en el mas debil siempre hara caso al important.`}/>
        <h3>html</h3>
        <Html codigo={`<h6 id="ultilo_subtitulo" class="otro_subtitulo" style="color: blue;">
  este subtitulos solo hara caso al important
</h6>`}/>
        <h3>css</h3>
        <Css codigo={`#ultilo_subtitulo{
  color: green;
}
.otro_subtitulo{
  color: yellow;
}
h6{
  color: gray !important;
}

/* como nos damos cuenta no importa que 
sea el rango mas bajo si le ponemos 
!importatnt siempre ganara por mas que 
sea la gerarquia mas baja. */`}/>

        <div className="website">
          <h6 style={{color: "gray"}}>
            este subtitulos solo hara caso al important
          </h6>
        </div>

      </main>
      <Footer />
    </>
  );
}

export default Especificidad;