import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Txt from "../../../../componentes/lenguajes/txt";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";


import LinkPersonalizado from "../../../../componentes/links/link";
import Html from "../../../../componentes/lenguajes/Html";
import Consola from "../../../../componentes/consola/consola";

function FetchJs() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `De esta manera podemos hacer peticiones con menos codigo.`,
        lenguage: "JavaScropt",
        codigo: `// leer datos de una api
fetch("https://reqres.in/api/users/2") 
  .then(res=>res.json())
  .then(res=>console.log(res))

// Enviar datos a una api
fetch("https://reqres.in/api/users/2",{ 
  method: "POST",
    body: JSON.stringify({ 
    musica": "molinos de viento",
    "genero": "rock"
  }), 
  headers: {"Content-type" : "application/json"} 
})
.then(res=>res.json())
.then(res=>console.log(res))`
      },{
        "mensaje": "Aqui una forma mas optima de enviar datos de un formulario.",
        "lenguage": "JavaScropt",
        "codigo": `enviar.addEventListener("click",(e)=>{
    e.preventDefault();

    const data = new FormData(miform); // obtener todos los datos de un formulario
    data.get("clave"); // obtener el valor de un input
    
    fetch("https://reqres.in/api/users/2",{
        method: "POST",
        body: data
    })
    .then(res=>res.text())
    .then(res=>console.log(res))
    .catch(()=>console.log("hubo un error"))
})
`
      }]}/>
      <main>
        <h1>fetch</h1>
        <Conseptos texto={`Con "fetch" podemos trabajar de forma mas sensilla y con menos codigo que "ajax".
En simples palabras es mas facil , eficiente , nejor que ajax :v.`}/>
        <Conseptos texto={`link necesario:`}/>
        <LinkPersonalizado link={`https://reqres.in/api/users/2",url:"https://reqres.in/api/users/2`} texto={`https://reqres.in/api/users/2",url:"https://reqres.in/api/users/2`}/>
        
        <Sintaxis codigo={`fetch("enlace a donde enviar datos.")`}/>
        <JavaScropt codigo={`const peticion = fetch("https://reqres.in/api/users/2")`}/>
        <Conseptos texto={`Dato curioso fetch viene por defecto con el metodo "GET". y son promesas con datos encapsulados.`}/>
        
        <h2>then</h2>
        <JavaScropt codigo={`fetch("https://reqres.in/api/users/2")
.then(res=>console.log(res))`}/>
        <Conseptos texto={`Aqui se puede ver que se muestra con datos encapsulados ya que usamos "then" para ver resultados.`}/>
        
        <h2>metodos</h2>
        <JavaScropt codigo={`text():
json():`}/>
        <h3>text</h3>
        <JavaScropt codigo={`fetch("https://reqres.in/api/users/2")
    .then(res=>res.text())
    .then(res=>console.log(res))`}/>
        <Conseptos texto={`"text" se encarga de devolver los datos serializados por lo cual debemos usar "parse()" para descerializar los datos y poder trabajar con esos datos.`}/>
        <JavaScropt codigo={`fetch("https://reqres.in/api/users/2")
    .then(res=>res.text())
    .then(res=>console.log(JSON.parse(res)))`}/>
        <h2>json</h2>
        <JavaScropt codigo={`fetch("https://reqres.in/api/users/2") 
    .then(res=>res.json())
    .then(res=>console.log(res))`}/>
        <Conseptos texto={`Con json() nos mostrara directamente el objeto json no es necesario usar "parse()" para descerializar.`}/>

        <h2>cambiar metodo de envio</h2>
        <JavaScropt codigo={`Como sabemos fetch viene por defecto con el metodo "GET", pero si queremos poner otro metodo si es necesario poner otro parametro que seria un objeto.`}/>
        <h2>metodos para fetch.</h2>
        <Txt codigo={`method: "metodo",   esto sera para poner el metodo. 
body: "enviar",     esto sera para poner el contenido que queremos mandar. 
headers: "enviar"   esto sera para enviar los datos que queramos`}/>
        <JavaScropt codigo={`fetch("https://reqres.in/api/users/2",{ 
    method: "POST",
    body: JSON.stringify({ 
        "musica": "molinos de viento",
        "genero": "rock"
    }), 
    headers: {"Content-type" : "application/json"} 
})
    .then(res=>res.json())
    .then(res=>console.log(res))`}/>
        <h2>FormData</h2>
        <Conseptos texto={`Con este objeto vamos a poder enviar los datos de un formulario a un servidor.`}/>
        <Sintaxis codigo={`const data = new FormData(formulario);`}/>
        <Conseptos texto={`Esto es un objeto que recibe como parametro el selector de un elemento "form".`}/>
        <Html codigo={`<form id="form"></form>`}/>
        <JavaScropt codigo={`const form = document.getElementById("form");
const data = new FormData(form);`}/>
        <Conseptos texto={`Este objeto nos devuelve clave y valor osea nos devuelve algo como esto.`}/>
        <Txt codigo={`{
  clave1: "valor",
  clave2: "valor"
}`}/>
        <Conseptos texto={`Esta clave valor sera dependiendo de los datos del formulario por ejemplo:`}/>
        <Html codigo={`<form id="form">
    <input type="text" name="nombre">
    <input type="text" name="edad">
    <button class="enviar">Enviar</button>
</form>`}/>
        <Txt codigo={`{
    nombre: "valor",
    edad: "valor"
}`}/>
        <h2>get</h2>
        <Conseptos texto={`Con este metodo vamos a obtener un valor en especifico del formulario por ejemplo si queremos mostrar el nombre y la edad hariamos algo como esto.`}/>
        <JavaScropt codigo={`const enviar = document.querySelector(".enviar");
const miform = document.getElementById("miform");

enviar.addEventListener("click",(e)=>{
    e.preventDefault();
    const data = new FormData(miform);
    let nombre = data.get("nombre");
    let edad = data.get("edad");
    console.log(\`nombre: ${"${nombre}"} edad: ${"${edad}"}\`);
})`}/>
        <Consola codigo={`nombre: valor edad: valor`}/>
        <Conseptos texto={`Con este objeto sera mucho mas sensillo enviar datos a un servidor ya que no tendremos que usar "JSON.stringify" y evitaremos el uso de headers.`}/>
        <JavaScropt codigo={`const enviar = document.querySelector(".enviar");
const miform = document.getElementById("miform");
enviar.addEventListener("click",(e)=>{
    e.preventDefault();
    const data = new FormData(miform);
    fetch("https://reqres.in/api/users/2",{
        method: "POST",
        body: data
    })
    .then(res=>res.text())
    .then(res=>console.log(res))
    .catch(()=>console.log("hubo un error"))
})`}/>
        <Consola codigo={`{"id":"239","createdAt":"2024-10-15T03:11:13.239Z"}`}/>
        <Conseptos texto={`Como nos damos cuenta hemos enviado los datos de forma mas sensilla sin destructurar campo por campo del formulario sin indicar los headers.`}/>
      </main>
      <Footer/>
    </>
  );
}

export default FetchJs;