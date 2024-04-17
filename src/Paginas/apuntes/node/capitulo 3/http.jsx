import Conseptos from "../../../../componentes/conseptos/conseptos";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";

function HttpNode() {
  return (
    <>
      <Resumenes contenido={[{
        "mensaje": `Http tiene varios protocolos de respuesta para indicar al cliente que paso con su peticion.`,
        "lenguage": "Txt",
        "codigo": `100-199 son respuestas informativas.
200-299 Respuestas satisfactorias.
300-399 Redirecciones.
400-499 Errores de los clientes.
500-599 Errores de los servidores.`
      }]}/>
      <main>
        <h1>http</h1>
        <Conseptos texto={`Esto es la comunicacion entre el cliente y el servidor , en este caso el cliente es el navegador esto porque el navegador hace las solicitudes al servidor para trabajar con el.
El servidor solo se queda escuchando todas las peticiones que haga el cliente si el cliente dice que quiere algun recurso el servidor escuchara y mandara ese recurso al cliente.`}/>
        <h2>metodos http</h2>
        <ol>
          <li>
            <h3>GET</h3>
            <Conseptos texto={`Sirve para solicitar un recurso en especifico del servidor.`}/>
          </li>
          <li>
            <h3>POST</h3>
            <Conseptos texto={`Esto sirve para agregn recurso en especifico por ejemplo agregar a un usuario nuevo en una base de datos.`}/>
          </li>
          <li>
            <h3>PUT</h3>
            <Conseptos texto={`Esto es para modificar algun recurso en especifico por ejemplo modificar una base de datos.`}/>
          </li>
          <li>
            <h3>DELETE</h3>
            <Conseptos texto={`Esto es para eliminar algun recurso en especifico.`}/>
          </li>
        </ol>
        <h2>respuestas http</h2>
        <Conseptos texto={`Asi como el cliente solicita recursos al servidor , el servidor debe de dar una respues o como se conoce comunmente "response" la respuesta va a retornar:`}/>
        <ol>
          <li>
            <h3>Codigo de estado</h3>
            <Conseptos texto={`Esto indica al cliente cual es el estado de la respuesta osea indicara si hay algun error o si la respuesta fue exitosa.`}/>
          </li>
          <li>
            <h3>Texto de estado</h3>
            <Conseptos texto={`Esto descriobe el codigo de estado con mas detalle.`}/>
          </li>
          <li>
            <h3>Version de HTTP</h3>
            <Conseptos texto={`Esto nos indicara cual es la version de HTTP.`}/>
          </li>
          <li>
            <h3>Cabeceras (headers)</h3>
            <Conseptos texto={`Estos son opcionales y proveen informacion adicional de la respuesta`}/>
          </li>
          <li>
            <h3>Cuerpo (body)</h3>
            <Conseptos texto={`Esto se retornara en caso de que el cliente requiera de algun recurso , esta es la informacion que se debe enviar del servidor hacia el cliente.`}/>
          </li>
        </ol>
        <h2>Codigos de estado</h2>
        <Conseptos texto={`Los codigos de estado sirven para indicar al cliente que sucedio con la solicitud de algun recurso al servidor por ejemplo si hubo algun error o si la la peticion fue un exito estos se categorizan de la siguiente forma.`}/>
        <ol>
          <li>100-199 son respuestas informativas.</li>
          <li>200-299 Respuestas satisfactorias.</li>
          <li>300-399 Redirecciones.</li>
          <li>400-499 Errores de los clientes.</li>
          <li>500-599 Errores de los servidores.</li>
        </ol>
        <h3>codigos de estado mas comunes</h3>
        <ol>
          <li>200(ok): La respuesta fue exitosa.</li>
          <li>400(bad request): El servidor no pudo interpretar la solicitud.</li>
          <li>404(not found): El servidor no pudo encontrar el recurso solicitado.</li>
          <li>500(internal server error): El servidor encontro una sitacion que no sabe como controlar.</li>
        </ol>
      </main>
      <Footer />
    </>
  );
}

export default HttpNode;