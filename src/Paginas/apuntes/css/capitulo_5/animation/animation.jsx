import Capitulos from "../../../../../componentes/capitulos/aside";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";
import "./animation.css";

function Animation() {
  return (  
    <>
      <Menu2 />
      <Capitulos />
      <main>
        <h1>Animation</h1>
        <Conseptos texto={`Esto es similar a transition pero lleva otras reglas.

para trabajar con animaciones se debe trabajar con:

@keyframes.`}/>
        
        <h2>pseudocodigo</h2>
        <Css codigo={`@keyframes nombre de animacion {

}`}/>
        <Conseptos texto={`Para poder hacer las animaciones tenemos dos forma de trabajar que seria con (from y to) y porcentajes.`}/>

        <h2>from y to</h2>
        <Conseptos texto={`from: son las propiedades al comenzar la animacion.
to: son las propiedades al finalizar la animacion.`}/>
        <Css codigo={`@keyframes Animacion {
    from{
        hacer esta animacion al inicio
    }
    to{
        hacer esta animacion al final
    }
}`}/>
      <h2>porcentajes</h2>
      <Conseptos texto={`0%: son las propiedades que tiene una caja al comenzar.
100%: las propiedades que tiene una caja al finalizar.

La ventaja que tiene los porcentajes es que se pueden dar animaciones en cualquier parte del momento por ejemplo:
al 20% que se haga esta animacion.
al 78% se haga esta animacion.`}/>
        <Css codigo={`@keyframes Animacion {
    0%{
        hacer esta animacion al inicio
    }
    55%{
        hacer otra animacion en este momento
    }
    100%{
        hacer esta animacion al final
    }
}`}/>
        <h2>animation-name</h2>
        <Conseptos texto={`Esta propiedad es para ponerle el nombre al elemento que queremos que tenga esa animacion.`}/>
        <h3>pseudocodigo</h3>
        <Css codigo={`.elemento{
    animation-name: nombre de la animacion;
}
@keyframes nombre de la animacion{
    hacer animacion
}`}/>
        <h3>css</h3>
        <Css codigo={`.elemento{
    animation-name: mover;
}
@keyframes mover{
    from{
        background-color: #000;
    }
    to{
        background-color: #fff;
    }
}`}/>
        <h2>animation-duration</h2>
        <Conseptos texto={`Esta propiead es similar a transition-duration.`}/>
        <h3>html</h3>
        <Html codigo={`<div class="ContentAnimation__duratio">
    <div class="animation__duratio">

    </div>
</div>`}/>
        <h3>css</h3>
        <Css codigo={`.ContentAnimation__duratio{
    width: 100%;
    height: 50%;
    background-color: #9eb6ff;
    padding: 20px;
}
.animation__duration{
    width: 110px;
    height: 110px;
    border: 2px solid #000;
    background-color: inherit;
    position: relative;

    animation-name: mover_caja;
    animation-duration: 2s;
}

@keyframes mover_caja {
    from{
        left: 0;
        background-color: #000;
    }
    to{
        left: 100%;
        background-color: #fff;
    }
}`}/>
        <div className="website">
          <div className="ContentAnimation__duratio">
              <div className="animation__duration">

              </div>
          </div>
        </div>

        <h2>animation-timing-function</h2>
        <Conseptos texto={`Esto tiene las mismas propiedades que "transition-timing-function" y funciona igual que transition.`}/>

        <h2>animation-iteration-count</h2>
        <Conseptos texto={`Esto es para indicarle cuantas veces se hara la animacion.

Aqui podemos ponerle cuantas veces queremos que se repita la animacio o si queremos que se haga de forma infinita.

animation-iteration-count: 3;
animation-iteration-count: infinite;`}/>
        <h3>html</h3>
        <Html codigo={`<div class="iteracion_content">
    <div class="iteracion_content_div">

    </div>
</div>`}/>
      <h3>css</h3>
      <Css codigo={`.iteracion_content{
    width: 100%;
    height: 50%;
    background-color: #9eb6ff;
}
.iteracion_content_div{
    top: 15px;
    width: 110px;
    height: 110px;
    border: 2px solid #000;
    background-color: inherit;
    position: relative;

    animation-name: iteracion;
    animation-duration: 1s;
    animation-iteration-count: 3;
}

@keyframes iteracion {
    from{
        left: 0;
        background-color: #000;
    }
    to{
        left: 100%;
        background-color: #fff;
    }
}`}/>
      <div className="website">
        <div className="iteracion_content">
            <div className="iteracion_content_div">

            </div>
        </div>
      </div>

      <h2>animation-direction</h2>
      <Conseptos texto={`Esto es para indicarle a que direccion queremos que se haga la animacion o como queremos que se comporte.
Esto tiene las siguientes propiedades:

normal: esta propiedad viene por defecto.
reverse: esta propiedad hace la animacion pero en reversa.
alternate: es como un ir y volver es como la mescla de norma y reverse.
alternate-reverse: es igual que alternate pero empieza del otro lado osea como si fuese en reversa.`}/>

        <h2>reverse</h2>
        <h3>html</h3>
        <Html codigo={`<div class="reverse_content">
    <div class="reverse_content_div">

    </div>
</div>`}/>
        <h3>css</h3>
        <Css codigo={`.reverse_content{
    width: 100%;
    height: 50%;
    background-color: #9eb6ff;
}
.reverse_content_div{
    top: 15px;
    width: 110px;
    height: 110px;
    border: 2px solid #000;
    background-color: inherit;
    position: relative;

    animation-name: reverse;
    animation-duration: 1s;
    animation-iteration-count: 3;
    animation-direction: reverse;
}

@keyframes reverse {
    from{
        left: 0;
        background-color: #000;
    }
    to{
        left: 100%;
        background-color: #fff;
    }
}`}/>
        <div className="website">
          <div className="reverse_content">
              <div className="reverse_content_div">

              </div>
          </div>
        </div>

        <h1>alternate</h1>
        <h3>html</h3>
        <Html codigo={`<div class="alternate_content">
    <div class="alternate_content_div">

    </div>
</div>`}/>
        <h3>css</h3>
        <Css codigo={`.alternate_content{
    width: 100%;
    height: 50%;
    background-color: #9eb6ff;
}
.alternate_content_div{
    top: 15px;
    width: 110px;
    height: 110px;
    border: 2px solid #000;
    background-color: inherit;
    position: relative;

    animation-name: reverse;
    animation-duration: 1s;
    animation-iteration-count: 3;
    animation-direction: alternate;
}

@keyframes reverse {
    from{
        left: 0;
        background-color: #000;
    }
    to{
        left: 100%;
        background-color: #fff;
    }
}`}/>
        <div className="website">
          <div className="alternate_content">
              <div className="alternate_content_div">

              </div>
          </div>
        </div>

        <h2>alternate-reverse</h2>
        <h3>html</h3>
        <Html codigo={`<div class="alternate_reverse_content">
    <div class="alternate_reverse_content_div">

    </div>
</div>`}/>
        <h3>css</h3>
        <Css codigo={`.alternate_reverse_content{
    width: 100%;
    height: 50%;
    background-color: #9eb6ff;
}
.alternate_reverse_content_div{
    top: 15px;
    width: 110px;
    height: 110px;
    border: 2px solid #000;
    background-color: inherit;
    position: relative;

    animation-name: reverse;
    animation-duration: 1s;
    animation-iteration-count: 3;
    animation-direction: alternate-reverse;
}

@keyframes reverse {
    from{
        left: 0;
        background-color: #000;
    }
    to{
        left: 100%;
        background-color: #fff;
    }
}`}/>
        <div className="website">
          <div className="alternate_reverse_content">
              <div className="alternate_reverse_content_div">

              </div>
          </div>
        </div>

        <h2>animation-fill-mode</h2>
        <Conseptos texto={`Esta propiedad define como se quedara al final la animacion.
esta tiene las siguientes propiedades.

none: esto hace que la animacion vuelva a la normalidad.
forwards: esta hace que la animacion se quede como finaliza.
both: arranca con la propiedad que le indicamos al inicion de la animacion.`}/>
        <h3>html</h3>
        <Html codigo={`<!-- none -->

<div class="none_content">
    <div class="none_hijo">

    </div>
</div>

<!-- forwards -->

<div class="forwards_content">
    <div class="forwards_hijo">

    </div>
</div>

<!-- both -->

<div class="both_content">
    <div class="both_hijo">

    </div>
</div>`}/>
        <Css codigo={`/* none */

.none_content{
    width: 100%;
    height: 25%;
    background-color: #9eb6ff;
    margin-bottom: 15px;
}
.none_hijo{
    top: 15px;
    width: 110px;
    height: 110px;
    border: 2px solid #000;
    background-color: inherit;
    position: relative;

    animation-name: none_a;
    animation-duration: 1s;
    animation-iteration-count: 3;
    animation-direction: alternate;

    animation-fill-mode: none;
}

@keyframes none_a {
    from{
        left: 0;
        background-color: #000;
    }
    to{
        left: 100%;
        background-color: #fff;
    }
}



/* forwards */

.forwards_content{
    width: 100%;
    height: 25%;
    background-color: #9eb6ff;
    margin-bottom: 15px;
}
.forwards_hijo{
    top: 15px;
    width: 110px;
    height: 110px;
    border: 2px solid #000;
    background-color: inherit;
    position: relative;

    animation-name: forwards_a;
    animation-duration: 1s;
    animation-iteration-count: 3;
    animation-direction: alternate;

    animation-fill-mode: forwards;
}

@keyframes forwards_a {
    from{
        left: 0;
        background-color: #000;
    }
    to{
        left: 70%;
        background-color: #fff;
    }
}


/* both */

.both_content{
    width: 100%;
    height: 25%;
    background-color: #9eb6ff;
    margin-bottom: 15px;
}
.both_hijo{
    top: 15px;
    width: 110px;
    height: 110px;
    border: 2px solid #000;
    background-color: inherit;
    position: relative;

    animation-name: both_a;
    animation-duration: 1s;
    animation-iteration-count: 3;
    animation-direction: normal;

    animation-fill-mode: both;
}

@keyframes both_a {
    from{
        left: 0;
        background-color: #000;
    }
    to{
        left: 70%;
        background-color: #fff;
    }
}`}/>


      </main>
      <Footer />
    </>
  );
}

export default Animation;