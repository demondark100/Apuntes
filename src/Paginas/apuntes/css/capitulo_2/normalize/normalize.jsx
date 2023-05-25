import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Css from "../../../../../componentes/lenguajes/Css";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";
import "./normalize.css";

function Normalize() {
  return (  
    <>
      <Menu2 />
      <main>
        <h1>Normalize</h1>
        <Conseptos texto={`Para empezar los navegadores siempre traen un estilo por defecto por ejemplo si escribimos algo te daras cuenta que las letras son de color negro debido a que asi lo quizo el navegador.

ahora observa esto.`}/>

        
        <Html codigo={`
<p>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad cupiditate tempora deleniti minima quidem sequi, rerum eos libero repudiandae. Praesentium neque quod earum id nesciunt ipsa consequatur inventore consectetur quibusdam?
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint dolores quibusdam ducimus, cumque in, consequuntur a necessitatibus distinctio qui corporis officiis amet assumenda quae eligendi? Fugiat mollitia deleniti doloremque perspiciatis.
</p>`}/>
        <Conseptos texto={`como te das cuenta hay como un espacio al rededor del contenido esto es debido a que el navegador lo puso asi por defecto.`}/>
        <div className="website normalize_website">
          <h5>un titulo feliz :D</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad cupiditate tempora deleniti minima quidem sequi, rerum eos libero repudiandae. Praesentium neque quod earum id nesciunt ipsa consequatur inventore consectetur quibusdam?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint dolores quibusdam ducimus, cumque in, consequuntur a necessitatibus distinctio qui corporis officiis amet assumenda quae eligendi? Fugiat mollitia deleniti doloremque perspiciatis.
          </p>
        </div>

        <h2>normalize</h2>
        <Conseptos texto={`normalize se encargara de reiniciar todos los estilos que vienen por defecto del navegador para que nostros podamos estilizar de la forma que queramos.

{normalize} para descargar/usar normalize.css.

1. click donde dice download.
2. click derecho.
3. click en guardar como.
4. enlazar el archivo normalize en el sitio web se enlaza de la misma forma que css.

luego debemos entrar a "normalize.css" y cambiar algunas propiedades.

1. en la parte de arriba poner un selector universal "*" y poner "box-sizing: border-box;" esto es para que las cajas tengan el tamaño exacto que nosotros le digamos osea que le quitamos el estilos por defecto del navegador.

2. buscar la propiedad img y poner "max.width: 100%;" esto es para que en los mobiles las imagenes aparezcan al 100%.`} 
enlaces={{
  normalize: {text: "click aqui",url: "https://necolas.github.io/normalize.css/"}
}}
targetBlank={true} />
        
        <Css codigo={`*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}`}/>
        
        <Css codigo={`img{
  border-style: none;
  max-width: 100%;
}`}/>

        <div className="website normalize_website2">
          <h5>un titulo feliz :D</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad cupiditate tempora deleniti minima quidem sequi, rerum eos libero repudiandae. Praesentium neque quod earum id nesciunt ipsa consequatur inventore consectetur quibusdam?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint dolores quibusdam ducimus, cumque in, consequuntur a necessitatibus distinctio qui corporis officiis amet assumenda quae eligendi? Fugiat mollitia deleniti doloremque perspiciatis.
          </p>
        </div>


      </main>
      <Footer />
    </>
  );
}

export default Normalize;