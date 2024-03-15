import Conseptos from "../../../../componentes/conseptos/conseptos";
import Html from "../../../../componentes/lenguajes/Html";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";

function AxiosJs() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `"Axios" es una libreria que facilita aun mas el codigo.`,
        lenguage: "Html",
        codigo: `<head>
  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
</head>`
      },
      {
        lenguage: `JavaScropt`,
        codigo: `// leer datos de una api
axios("https://reqres.in/api/users/2")
  .then(res=>console.log(res))


// Enviar datos a una api
axios("https://reqres.in/api/users/2",{ 
  method: "post",
  data: {
    "music": "A Sky Full of Stars",
    "artista": "Coldplay"
  }
}) 
  .then(res=>console.log(res))
`
      }]}/>
      <main>
        <h1>Axios</h1>
        <Conseptos texto={`Axios es una libreria que nos facilita mas el uso de "ajax" y "fetch".

Esto se basa en ajax solo que lo facilita demasiado incluso mas que fetch pero mucho mas facil aun.`}/>
        <h2>importante</h2>
        <Conseptos texto={`Para usar esta libreria es necesario importarlo en nuestro proyecto para eso te dejare el link de la libreria para que lo importes es tu proyecto.

link:
{axios}`}
  enlaces={{axios:{text:"https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js",url: "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"}}}
  targetBlank={true}
/>
      <h2>importar libreria</h2>
      <Html codigo={`<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>`}/>
      <Html codigo={`<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
</head>
<body>
  <!-- El resto de tu código HTML -->
  <script src="archivo.js"></script>
</body>
</html>`}/>
        <Conseptos texto={`Dato curioso: axios trabaja con el metodo "GET" por defecto.

link de la API:
{api}`}
  enlaces={{api:{text:"https://reqres.in/api/users/2",url:"https://reqres.in/api/users/2"}}}
  targetBlank={true}
/>
        <h2>trabajemos con axios</h2>
        <JavaScropt codigo={`axios("https://reqres.in/api/users/2")
    .then(res=>console.log(res))
`}/>
        <Conseptos texto={`Con esto ya desencapsulamos toda la informacio json.`}/>
        
        <h2>metodos</h2>
        <Conseptos texto={`Ahora si queremos trabajar con otro metodo hay dos formas de hacerlo.`}/>
        <h2>forma 1</h2>
        <JavaScropt codigo={`axios.post("https://reqres.in/api/users/2",{
    "music": "A Sky Full of Stars",
    "artista": "Coldplay"
})
    .then(res=>console.log(res))`}/>
        <h2>forma 2</h2>
        <JavaScropt codigo={`axios("https://reqres.in/api/users/2",{ 
    method: "post",
    data: {
        "music": "A Sky Full of Stars",
        "artista": "Coldplay"
    }
}) 
    .then(res=>console.log(res))
`}/>
      </main>
      <Footer/>
    </>
  );
}

export default AxiosJs;