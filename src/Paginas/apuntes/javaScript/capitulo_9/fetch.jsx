import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Txt from "../../../../componentes/lenguajes/txt";
import Footer from "../../../../componentes/menus/Footer";
import Menu2 from "../../../../componentes/menus/Menu2";

function FetchJs() {
  return (  
    <>
      <Menu2/>
      <main>
        <h1>fetch</h1>
        <Conseptos texto={`Con "fetch" podemos trabajar de forma mas sensilla y con menos codigo que "ajax".
En simples palabras es mas facil , eficiente , nejor que ajax :v.`}/>
        <Conseptos texto={`link necesario:
{fetch}`}
        enlaces={{fetch:{text:"https://reqres.in/api/users/2",url:"https://reqres.in/api/users/2"}}}
        targetBlank={true}
        />
        <Sintaxis codigo={`fetch("enlace de la api.")`}/>
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
      </main>
      <Footer/>
    </>
  );
}

export default FetchJs;