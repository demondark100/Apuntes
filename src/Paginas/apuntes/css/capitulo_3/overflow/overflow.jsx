import { NavLink } from "react-router-dom";
import Footer from "../../../../../componentes/menus/Footer";
import "./overflow.css";
import { useState , useRef  } from "react";
import Confirmar from "./confirmar";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Html from "../../../../../componentes/lenguajes/Html";
import Css from "../../../../../componentes/lenguajes/Css";

function Overflow() {
  const contenedor_overflow = useRef(null);
  const [irAlLing, setIrAlLing] = useState(false);



  const preguntar = (event) => {
    event.preventDefault();
    setIrAlLing(true);
    contenedor_overflow.current.style.top = `${window.scrollY}px`;
    document.body.classList.add("modal-open")
  }
  const confirmado = () => {
    setIrAlLing(false);
    window.open("https://hentaila.tv/ver/Overflow/", "_blank");
    document.body.classList.remove("modal-open")
  }
  const cancelar = () => {
    setIrAlLing(false);
    document.body.classList.remove("modal-open")
  }

  

  return (  
    <>
      <main>
        <h2><NavLink target="_blank" onClick={preguntar} className={`overflow__title`} >overflow</NavLink></h2>
        <div ref={contenedor_overflow} className={`confirmar-container ${irAlLing ? "confirmar-appear" : ""}`}>
          <Confirmar confirmado={confirmado} cancelar={cancelar} />
        </div>
        <Conseptos texto={`Esta propiedad nos sirve para que el contenido no se sobrepase de su contenedor por ejmplo.`}/>
        <div className="overflow__texto">
          <Conseptos texto={`como te das cuenta hay demasiado contenido pero el contendedor es demasiado pequeño pero puedes hacer scroll debido a que estamos usando la propiedad {emlaceOverflow} la cual nos permite controlar para que el contenido no se salga de su contenedor ahora veremos como usar esta propiedad.`}
          enlaces={{
            emlaceOverflow: {text: "Overflow guiño guiño",url: "https://hentaila.tv/ver/Overflow/"}
          }}
          targetBlank={true}/>
        </div>

        <h2>sin <NavLink target="_blank" onClick={preguntar} className={`overflow__title`} >overflow</NavLink></h2>
        <div ref={contenedor_overflow} className={`confirmar-container ${irAlLing ? "confirmar-appear" : ""}`}>
          <Confirmar confirmado={confirmado} cancelar={cancelar} />
        </div>

        
        <Html codigo={`<div class="contenedor_o">
  <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ratione, quod asperiores, aut, nesciunt dolorem quasi ea itaque unde facilis tenetur veritatis. Quia, laboriosam voluptatibus velit id numquam deserunt! Ea. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum quia suscipit accusamus voluptates a? Error minus sed molestiae dicta laborum vitae rerum nostrum incidunt quasi officiis tempora, ullam quo blanditiis.
  </p>
</div>`}/>
        
        <Css codigo={`.contenedor_o{
  background-color: gray;
  width: 200px;
  height: 200px;
  margin: auto;
  margin-top: -15px;
}`}/>
      <div className="website">
        <div className="contenedor_o">
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ratione, quod asperiores, aut, nesciunt dolorem quasi ea itaque unde facilis tenetur veritatis. Quia, laboriosam voluptatibus velit id numquam deserunt! Ea. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum quia suscipit accusamus voluptates a? Error minus sed molestiae dicta laborum vitae rerum nostrum incidunt quasi officiis tempora, ullam quo blanditiis.
          </p>
        </div>
      </div>

      <Conseptos texto={`Overflow tiene las siguientes propieades:

auto: con esto detectara si el contenido se sobresale del contenedor y le pone un scroll de forma automatica.

scroll: esta propiedad pondra de forma obligatoria la barrita de scroll sea necesario o no.

hidden: oculta un elemento que esta fuera del contenedor y no hace scroll.`}/>

        <h2><NavLink target="_blank" onClick={preguntar} className={`overflow__title`} >overflow</NavLink> scroll 1</h2>
        <div ref={contenedor_overflow} className={`confirmar-container ${irAlLing ? "confirmar-appear" : ""}`}>
          <Confirmar confirmado={confirmado} cancelar={cancelar} />
        </div>
        <div className="website">
          <div className="scroll1">
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptas dignissimos a magnam ratione repudiandae, pariatur sit! Quam, quos sapiente tempora ipsa quas dolore a quae, unde sint magnam libero?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ipsum odio vel harum, omnis veritatis ut non sed exercitationem reprehenderit, est aspernatur! Veniam consequuntur recusandae consectetur laudantium voluptates quaerat nam.
              </p>
          </div>
        </div>

        <h2><NavLink target="_blank" onClick={preguntar} className={`overflow__title`} >overflow</NavLink> scroll 2</h2>
        <div ref={contenedor_overflow} className={`confirmar-container ${irAlLing ? "confirmar-appear" : ""}`}>
          <Confirmar confirmado={confirmado} cancelar={cancelar} />
        </div>
        
        <Html codigo={`<div class="scroll2">
  <p>
      que viva 
      <a target="blank" href="https://hentaila.tv/ver/Overflow/">Overflow</a>.
  </p>
</div>
`}/>
        <Css codigo={`.scroll2{
  margin: auto;
  width: 55%;
  background-color: gray;
  height: 200px;
  overflow: scroll;
}`}/>
        <div className="website">
          <div className="scroll2">
            <p>
                que viva 
                <a target="blank" href="https://hentaila.tv/ver/Overflow/">Overflow</a>.
            </p>
          </div>
        </div>
        <Conseptos texto={`Como te das cuenta pone la barra de scroll sea necesario o no.`}/>

        <h2><NavLink target="_blank" onClick={preguntar} className={`overflow__title`} >overflow</NavLink> auto</h2>
        <div ref={contenedor_overflow} className={`confirmar-container ${irAlLing ? "confirmar-appear" : ""}`}>
          <Confirmar confirmado={confirmado} cancelar={cancelar} />
        </div>
        
        <Html codigo={`<div class="overflow_auto">
  <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ratione, quod asperiores, aut, nesciunt dolorem quasi ea itaque unde facilis tenetur veritatis. Quia, laboriosam voluptatibus velit id numquam deserunt! Ea. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum quia suscipit accusamus voluptates a? Error minus sed molestiae dicta laborum vitae rerum nostrum incidunt quasi officiis tempora, ullam quo blanditiis.
  </p>
</div>
`}/>
        
        <Css codigo={`.overflow_auto{
  margin: auto;
  width: 55%;
  background-color: gray;
  height: 80px;
  overflow: auto;
}`}/>
          <div className="website">
            <div className="overflow_auto">
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ratione, quod asperiores, aut, nesciunt dolorem quasi ea itaque unde facilis tenetur veritatis. Quia, laboriosam voluptatibus velit id numquam deserunt! Ea. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum quia suscipit accusamus voluptates a? Error minus sed molestiae dicta laborum vitae rerum nostrum incidunt quasi officiis tempora, ullam quo blanditiis.
              </p>
            </div>
        </div>


        <h2><NavLink target="_blank" onClick={preguntar} className={`overflow__title`} >overflow</NavLink> hidden</h2>
        <div ref={contenedor_overflow} className={`confirmar-container ${irAlLing ? "confirmar-appear" : ""}`}>
          <Confirmar confirmado={confirmado} cancelar={cancelar} />
        </div>
        
        <Html codigo={`<div class="overflowHideen">
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ratione, quod asperiores, aut, nesciunt dolorem quasi ea itaque unde facilis tenetur veritatis. Quia, laboriosam voluptatibus velit id numquam deserunt! Ea. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum quia suscipit accusamus voluptates a? Error minus sed molestiae dicta laborum vitae rerum nostrum incidunt quasi officiis tempora, ullam quo blanditiis.
  </p>
</div>`}/>
        
        <Css codigo={`.overflowHideen{
  margin: auto;
  width: 55%;
  background-color: gray;
  height: 200px;
  overflow: hidden;
}`}/>
        <div className="website">
          <div className="overflowHideen">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ratione, quod asperiores, aut, nesciunt dolorem quasi ea itaque unde facilis tenetur veritatis. Quia, laboriosam voluptatibus velit id numquam deserunt! Ea. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum quia suscipit accusamus voluptates a? Error minus sed molestiae dicta laborum vitae rerum nostrum incidunt quasi officiis tempora, ullam quo blanditiis.
            </p>
          </div>
        </div>
        <Conseptos texto={`Como te das cuenta no se puede scrolear , hidden ocultara el contenido que este fuera de su contenedor.`}/>
        
      </main>
      <Footer />
    </>
  );
}

export default Overflow;