import { Link } from "react-router-dom";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import "./position.css";

function PositionFixed() {
  return (  
    <>
      <main>
        <h1>position-fixed</h1>
        <Conseptos texto={`Esto es similar a position absolute osea que no ocupa un espacio como tal en el sitio web la diferencia esque el elemento se queda en un lugar fijo del sitio web esto se suele usar para menus o publicidades estaticas un ejemplo si sigues bajando notaras como es que el menu esta bajando contigo.`} />
        <Conseptos texto={`Para continuar debemos entender como funciona opacity.`}/>
        <h2>opacity</h2>
        <Conseptos texto={`Esta propiedad nos permite controlar la opacidad de un elemento esta propiedad se mueve entre 0 y 1 puedes ir jugando con los valores de la opcidad.`}/>
        
        <Html codigo={`<div class="todo">
  todo.
</div>
<div class="medio">
  medio.
</div>
<div class="nada">
  nada.
</div>`}/>
        
        <Css codigo={`.todo{
  background-color: lightblue;
  color: black;
  margin: auto;
  margin-top: 15px;
  width: 45%;
  height: 45px;
  opacity: 1;
}
.medio{
  background-color: lightblue;
  color: black;
  margin: auto;
  margin-top: 15px;
  width: 45%;
  height: 45px;
  opacity: 0.5;
}
.nada{
  background-color: lightblue;
  color: black;
  margin: auto;
  margin-top: 15px;
  width: 45%;
  height: 45px;
  opacity: 0.1;
}`}/>
        <Conseptos texto={`En el ultimo si le ponemos 0 no se vera nada por eso le puse 0.1 para que se vea por lo menos un poco en la parte que dice "nada".`}/>
        <div className="website">
          <div class="todo">
            todo.
          </div>
          <div class="medio">
            medio.
          </div>
          <div class="nada">
            nada.
          </div>
        </div>
        
        <h2>position-fixed</h2>
        <Conseptos texto={`Aqui vamos a emular una pagina con un menu para poder usar la propiedad fixed.`}/>
        
        <Html codigo={`<body>
  <div class="menu">
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
  </div>
  <div class="pagina">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quisquam dolorem non similique unde distinctio! A repellat perferendis molestiae rerum similique natus! Quae, numquam commodi? Dolor voluptate doloremque accusamus impedit?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis dolores nemo dolor est, veniam perferendis alias neque omnis debitis tempore enim officiis ab! Ab perspiciatis doloribus est eaque quibusdam cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nam culpa necessitatibus temporibus nesciunt dolor, nostrum voluptatem consequatur corporis nemo totam consequuntur quod, nobis modi deserunt quasi architecto, facilis ea?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quisquam dolorem non similique unde distinctio! A repellat perferendis molestiae rerum similique natus! Quae, numquam commodi? Dolor voluptate doloremque accusamus impedit?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis dolores nemo dolor est, veniam perferendis alias neque omnis debitis tempore enim officiis ab! Ab perspiciatis doloribus est eaque quibusdam cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nam culpa necessitatibus temporibus nesciunt dolor, nostrum voluptatem consequatur corporis nemo totam consequuntur quod, nobis modi deserunt quasi architecto, facilis ea?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vero perferendis dicta quae harum iusto, repudiandae reiciendis illo aspernatur. Dolor architecto cupiditate labore nostrum modi ducimus nisi distinctio Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quos laudantium maiores. Earum, temporibus laborum maxime illum iusto sequi saepe delectus harum officiis quidem veritatis, debitis laudantium culpa provident alias. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae ipsam vero perspiciatis rerum asperiores reiciendis, hic ea laudantium odit, vel eius tenetur sapiente odio assumenda, perferendis nostrum accusantium. Rem, ab?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ex molestias nemo error, sed suscipit, magni repellendus et aliquid maxime unde. Excepturi nemo veritatis illo explicabo doloribus, distinctio aut recusandae.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quisquam dolorem non similique unde distinctio! A repellat perferendis molestiae rerum similique natus! Quae, numquam commodi? Dolor voluptate doloremque accusamus impedit?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis dolores nemo dolor est, veniam perferendis alias neque omnis debitis tempore enim officiis ab! Ab perspiciatis doloribus est eaque quibusdam cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nam culpa necessitatibus temporibus nesciunt dolor, nostrum voluptatem consequatur corporis nemo totam consequuntur quod, nobis modi deserunt quasi architecto, facilis ea?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vero perferendis dicta quae harum iusto, repudiandae reiciendis illo aspernatur. Dolor architecto cupiditate labore nostrum modi ducimus nisi distinctio Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quos laudantium maiores. Earum, temporibus laborum maxime illum iusto sequi saepe delectus harum officiis quidem veritatis, debitis laudantium culpa provident alias. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae ipsam vero perspiciatis rerum asperiores reiciendis, hic ea laudantium odit, vel eius tenetur sapiente odio assumenda, perferendis nostrum accusantium. Rem, ab?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ex molestias nemo error, sed suscipit, magni repellendus et aliquid maxime unde. Excepturi nemo veritatis illo explicabo doloribus, distinctio aut recusandae.                
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quisquam dolorem non similique unde distinctio! A repellat perferendis molestiae rerum similique natus! Quae, numquam commodi? Dolor voluptate doloremque accusamus impedit?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis dolores nemo dolor est, veniam perferendis alias neque omnis debitis tempore enim officiis ab! Ab perspiciatis doloribus est eaque quibusdam cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nam culpa necessitatibus temporibus nesciunt dolor, nostrum voluptatem consequatur corporis nemo totam consequuntur quod, nobis modi deserunt quasi architecto, facilis ea?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vero perferendis dicta quae harum iusto, repudiandae reiciendis illo aspernatur. Dolor architecto cupiditate labore nostrum modi ducimus nisi distinctio Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quos laudantium maiores. Earum, temporibus laborum maxime illum iusto sequi saepe delectus harum officiis quidem veritatis, debitis laudantium culpa provident alias. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae ipsam vero perspiciatis rerum asperiores reiciendis, hic ea laudantium odit, vel eius tenetur sapiente odio assumenda, perferendis nostrum accusantium. Rem, ab?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ex molestias nemo error, sed suscipit, magni repellendus et aliquid maxime unde. Excepturi nemo veritatis illo explicabo doloribus, distinctio aut recusandae.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quisquam dolorem non similique unde distinctio! A repellat perferendis molestiae rerum similique natus! Quae, numquam commodi? Dolor voluptate doloremque accusamus impedit?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis dolores nemo dolor est, veniam perferendis alias neque omnis debitis tempore enim officiis ab! Ab perspiciatis doloribus est eaque quibusdam cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nam culpa necessitatibus temporibus nesciunt dolor, nostrum voluptatem consequatur corporis nemo totam consequuntur quod, nobis modi deserunt quasi architecto, facilis ea?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vero perferendis dicta quae harum iusto, repudiandae reiciendis illo aspernatur. Dolor architecto cupiditate labore nostrum modi ducimus nisi distinctio Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quos laudantium maiores. Earum, temporibus laborum maxime illum iusto sequi saepe delectus harum officiis quidem veritatis, debitis laudantium culpa provident alias. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae ipsam vero perspiciatis rerum asperiores reiciendis, hic ea laudantium odit, vel eius tenetur sapiente odio assumenda, perferendis nostrum accusantium. Rem, ab?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ex molestias nemo error, sed suscipit, magni repellendus et aliquid maxime unde. Excepturi nemo veritatis illo explicabo doloribus, distinctio aut recusandae.                
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quisquam dolorem non similique unde distinctio! A repellat perferendis molestiae rerum similique natus! Quae, numquam commodi? Dolor voluptate doloremque accusamus impedit?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis dolores nemo dolor est, veniam perferendis alias neque omnis debitis tempore enim officiis ab! Ab perspiciatis doloribus est eaque quibusdam cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nam culpa necessitatibus temporibus nesciunt dolor, nostrum voluptatem consequatur corporis nemo totam consequuntur quod, nobis modi deserunt quasi architecto, facilis ea?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vero perferendis dicta quae harum iusto, repudiandae reiciendis illo aspernatur. Dolor architecto cupiditate labore nostrum modi ducimus nisi distinctio Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quos laudantium maiores. Earum, temporibus laborum maxime illum iusto sequi saepe delectus harum officiis quidem veritatis, debitis laudantium culpa provident alias. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae ipsam vero perspiciatis rerum asperiores reiciendis, hic ea laudantium odit, vel eius tenetur sapiente odio assumenda, perferendis nostrum accusantium. Rem, ab?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ex molestias nemo error, sed suscipit, magni repellendus et aliquid maxime unde. Excepturi nemo veritatis illo explicabo doloribus, distinctio aut recusandae.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quisquam dolorem non similique unde distinctio! A repellat perferendis molestiae rerum similique natus! Quae, numquam commodi? Dolor voluptate doloremque accusamus impedit?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis dolores nemo dolor est, veniam perferendis alias neque omnis debitis tempore enim officiis ab! Ab perspiciatis doloribus est eaque quibusdam cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nam culpa necessitatibus temporibus nesciunt dolor, nostrum voluptatem consequatur corporis nemo totam consequuntur quod, nobis modi deserunt quasi architecto, facilis ea?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vero perferendis dicta quae harum iusto, repudiandae reiciendis illo aspernatur. Dolor architecto cupiditate labore nostrum modi ducimus nisi distinctio Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quos laudantium maiores. Earum, temporibus laborum maxime illum iusto sequi saepe delectus harum officiis quidem veritatis, debitis laudantium culpa provident alias. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae ipsam vero perspiciatis rerum asperiores reiciendis, hic ea laudantium odit, vel eius tenetur sapiente odio assumenda, perferendis nostrum accusantium. Rem, ab?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ex molestias nemo error, sed suscipit, magni repellendus et aliquid maxime unde. Excepturi nemo veritatis illo explicabo doloribus, distinctio aut recusandae.                
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quisquam dolorem non similique unde distinctio! A repellat perferendis molestiae rerum similique natus! Quae, numquam commodi? Dolor voluptate doloremque accusamus impedit?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis dolores nemo dolor est, veniam perferendis alias neque omnis debitis tempore enim officiis ab! Ab perspiciatis doloribus est eaque quibusdam cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nam culpa necessitatibus temporibus nesciunt dolor, nostrum voluptatem consequatur corporis nemo totam consequuntur quod, nobis modi deserunt quasi architecto, facilis ea?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vero perferendis dicta quae harum iusto, repudiandae reiciendis illo aspernatur. Dolor architecto cupiditate labore nostrum modi ducimus nisi distinctio Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quos laudantium maiores. Earum, temporibus laborum maxime illum iusto sequi saepe delectus harum officiis quidem veritatis, debitis laudantium culpa provident alias. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae ipsam vero perspiciatis rerum asperiores reiciendis, hic ea laudantium odit, vel eius tenetur sapiente odio assumenda, perferendis nostrum accusantium. Rem, ab?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ex molestias nemo error, sed suscipit, magni repellendus et aliquid maxime unde. Excepturi nemo veritatis illo explicabo doloribus, distinctio aut recusandae.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quisquam dolorem non similique unde distinctio! A repellat perferendis molestiae rerum similique natus! Quae, numquam commodi? Dolor voluptate doloremque accusamus impedit?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis dolores nemo dolor est, veniam perferendis alias neque omnis debitis tempore enim officiis ab! Ab perspiciatis doloribus est eaque quibusdam cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nam culpa necessitatibus temporibus nesciunt dolor, nostrum voluptatem consequatur corporis nemo totam consequuntur quod, nobis modi deserunt quasi architecto, facilis ea?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vero perferendis dicta quae harum iusto, repudiandae reiciendis illo aspernatur. Dolor architecto cupiditate labore nostrum modi ducimus nisi distinctio Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quos laudantium maiores. Earum, temporibus laborum maxime illum iusto sequi saepe delectus harum officiis quidem veritatis, debitis laudantium culpa provident alias. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae ipsam vero perspiciatis rerum asperiores reiciendis, hic ea laudantium odit, vel eius tenetur sapiente odio assumenda, perferendis nostrum accusantium. Rem, ab?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ex molestias nemo error, sed suscipit, magni repellendus et aliquid maxime unde. Excepturi nemo veritatis illo explicabo doloribus, distinctio aut recusandae.
    </p>
  </div>
</body>`}/>
        
        <Conseptos texto={`En este ejemplo veras como funciona fixed pero traera un pequeño problema...`}/>
        <Css codigo={`.menu{
  background-color: red;
  opacity: 0.4;
  position: fixed;
  width: 100%;
  color: white;
}`}/>
        <Conseptos texto={`En este primer resultado te daras cuenta que el menu se queda al principio pero esta sobre el contenido de la pagina web.`}/>
        <div className="siguiente__parte">
          <Link to={`../css/position/position absolute/z-index/position-fixed/resultado1`}>resultado</Link>
        </div>

        
        <Conseptos texto={`Ahora aqui solucionaremos para que el menu no se ponga sobre el contenido de la pagina.`}/>
        <Css codigo={`.menu{
  background-color: red;
  opacity: 0.4;
  position: fixed;
  width: 100%;
  color: white;
  margin-top: -85px;
}
.pagina{
  margin-top: 85px;
}`}/>
        <div className="siguiente__parte">
          <Link to={`../css/position/position absolute/z-index/position-fixed/resultado2`}>resultado</Link>
        </div>


        <div className="siguiente__parte">
          <Link to={`../css/position/position absolute/z-index/position-fixed/position-sticky`}>position-sticky</Link>
        </div>



      </main>
      <Footer />
    </>
  );
}

export default PositionFixed;