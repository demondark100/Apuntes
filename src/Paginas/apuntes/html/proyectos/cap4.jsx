import MensajeModal from "../../../../componentes/MensajeModal/mensajeModal";
import Volver from "../../../../componentes/volver/volver";

function Cap4ProyecHtml() {
  return (  
    <>
      <MensajeModal texto={`Hacer una tienda web bien estructurado para este punto ya se puede usar header , main , footer , aside , center y mas para estructurar de forma semantica un sitio web.`}/>
      <Volver link={"../"}/>
      <div className="Page">
        <div>
          <nav>
            <h4 className="pageElement">menu</h4>
            <ul>
              <li><a className="pageElement" href="#">otro</a></li>
              <li><a className="pageElement" href="#">contactanos</a></li>
              <li><a className="pageElement" href="#">productos</a></li>
              <li><a className="pageElement" href="#">mas sobre nosotros</a></li>
            </ul>
          </nav>
        </div>
        <div>
          <h1 className="pageElement">Productos Dan</h1>
          <p>Aqui encontrar <b>productos anime</b> de calidad tanto figuras , ropa ,etc todo tipo de articulos de anime.</p>
          <center>
            <img src="https://th.bing.com/th/id/OIP.FkzTm8oc1osRpK4lpXMJDgHaHa?w=177&h=180&c=7&r=0&o=5&pid=1.7" alt="atack on titan" />
            <p>posters de animes</p>
          </center>
          <center>
            <img src="https://th.bing.com/th/id/OIP.OMrNX_ssPa7iNMUksh43ugHaFP?w=263&h=186&c=7&r=0&o=5&pid=1.7" alt="kimetsu no yaiba" />
            <p>figuras anime</p>
          </center>
          <center>
            <img src="https://th.bing.com/th/id/OIP.mF8RqJQx-SvJDHxMhZrFBAHaED?w=336&h=184&c=7&r=0&o=5&pid=1.7" alt="dragon ball" />
            <p>ropa de animes</p>
          </center>
        </div>
        <div>
          <h3 className="pageElement">otros productos</h3>
          <ul>
            <li>telefonos</li>
            <li>atencion en softwere</li>
            <li>atencion en hardwere</li>
            <li>atencion en telefonos y pc</li>
            <li>venta de consolas</li>
          </ul>
        </div>
        <div>
          <h2 className="pageElement">copuright</h2>
          <p>derechos reservados para empresasDan.</p>
        </div>
      </div>
    </>
  );
}

export default Cap4ProyecHtml;