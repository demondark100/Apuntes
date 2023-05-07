import { Link } from "react-router-dom";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";
import Capitulos from "../../../../../aside";

function GridArea() {
  return (  
    <>
      <Menu2 />
      <Capitulos />
      <main>
        <h1>grid area</h1>
        <h3>html</h3>
        <Html codigo={`<div class="grid_content">
    <div class="grid_item grid_header">
        <nav>
            <ul>
                <li><a href="#">xd</a></li>
                <li><a href="#">no click</a></li>
                <li><a href="#">tengo hambre</a></li>
                <li><a href="#">it"s hot</a></li>
                <li><a href="#">mi no enterder ingles</a></li>
            </ul>
        </nav>
    </div>
    <div class="grid_item grid_main">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptates deleniti magnam saepe iste et nemo? Perferendis quos laborum optio quasi deserunt itaque. Sequi eos accusamus iste. Aut, officia quas.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aspernatur, temporibus ipsum consequuntur accusamus quo laborum! Excepturi repellendus ullam ab adipisci deleniti, veritatis quam vero. Omnis voluptatibus ratione eaque at!
        </p>
    </div>
    <div class="grid_item grid_aside">
        <b>
            publicidad.
        </b>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aut laboriosam magnam consequatur quaerat incidunt molestiae eveniet dolor, odio aperiam consectetur eaque velit, facere quisquam animi nam quos nostrum. Culpa.
        </p>
    </div>
    <div class="grid_item grid_footer">
        <p>
            nunca se que poner aqui xd.
        </p>
    </div>
</div>`}/>
        <h3>css</h3>
        <Css codigo={`.grid_content{
    background-color: #000;
    margin: 10px;
    display: grid;
    grid-template-rows: repeat(auto-fill,1fr);
    border: 2px solid #000;
    height: 90%;


    grid-template-areas: 
    "header header header"
    "aside main main"
    "aside main main"
    "footer footer footer"
    ;
}

.grid_header{
    background-color: #91ff38;
    grid-area: header;
}
.grid_main{
    background-color: #ff650c;
    grid-area: main;
    padding: 15px;
}
.grid_aside{
    background-color: #34afe7;
    grid-area: aside;
    padding: 15px;
}
.grid_footer{
    background-color: #69ff2e;
    grid-area: footer;
}`}/>
        <div className="website">
          <div className="grid_contentArea">
            <div className="grid_item grid_header">
                <nav>
                    <ul>
                        <li><a href="#">xd</a></li>
                        <li><a href="#">no click</a></li>
                        <li><a href="#">tengo hambre</a></li>
                        <li><a href="#">it"s hot</a></li>
                        <li><a href="#">mi no enterder ingles</a></li>
                    </ul>
                </nav>
            </div>
            <div className="grid_item grid_main">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptates deleniti magnam saepe iste et nemo? Perferendis quos laborum optio quasi deserunt itaque. Sequi eos accusamus iste. Aut, officia quas.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aspernatur, temporibus ipsum consequuntur accusamus quo laborum! Excepturi repellendus ullam ab adipisci deleniti, veritatis quam vero. Omnis voluptatibus ratione eaque at!
                </p>
            </div>
            <div className="grid_item grid_aside">
                <b>
                    publicidad.
                </b>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aut laboriosam magnam consequatur quaerat incidunt molestiae eveniet dolor, odio aperiam consectetur eaque velit, facere quisquam animi nam quos nostrum. Culpa.
                </p>
            </div>
            <div className="grid_item grid_footer">
                <p>
                    nunca se que poner aqui xd.
                </p>
            </div>
          </div>
        </div>
        <Conseptos texto={`"grid-template-areas" asignaremos las areas para los elementos.
"grid-area" es para asignarle un area a un elemento.`} />
        
        <div className="siguiente__parte">
          <Link to={"nombrarGrid"}>nombrar lineas grid</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default GridArea;