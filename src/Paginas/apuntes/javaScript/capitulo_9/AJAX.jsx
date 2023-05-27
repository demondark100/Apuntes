import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Txt from "../../../../componentes/lenguajes/txt";
import Footer from "../../../../componentes/menus/Footer";
import Menu2 from "../../../../componentes/menus/Menu2";

function AjaxJs() {
  return (  
    <>
      <Menu2 />
      <main>
        <h1>AJAX</h1>
        <Conseptos texto={`Para esto abriremos un archivo ".txt" y un servidor local usando: {xampp} o ("Live Server" extencion de vscode) esto para poder enviar y recibir peticiones y ademas porque es compatible con una gran cantidad de sistemas operativos.`}
          enlaces={{xampp:{text:"xampp",url:"https://www.apachefriends.org/"}}}
          targetBlank={true}
        />
        <Conseptos texto={`en el caso de xampp abrimos las 2 primeras opciones y luego nuestros archivos donde trabajaremos lo ponemos en una carpeta llamada "htdocs" puedes buscarlo en tu buscador de tu sistema operativo.

En el caso de Live Server solo creas una carpeta y abres el servidor local.`}/>
        <h2>XMLHttpRequest</h2>
        <JavaScropt codigo={`const peticion = new XMLHttpRequest;`}/>
        <Conseptos texto={`Con "XMLHttpRequest" podemos enviar peticiones "GET" , "POST" , etc.`}/>

        <h2>archivo txt</h2>
        <Conseptos texto={`Nombre del archivo txt "datos.txt" , puedes ponerle cualquier nombre al archivo pero debe terminar en ".txt".`}/>
        <Txt codigo={`{
    "musica": "fiesta pagana",
    "genero": "rock"
}`}/>
        <h2>abrir archivo y metodo:</h2>
        <Sintaxis codigo={`const peticion = new XMLHttpRequest;

peticion.abrir("metodo","url archivo o sitio web");`}/>
        <JavaScropt codigo={`const peticion = new XMLHttpRequest;
peticion.open("GET","datos.txt");`}/>
        <Conseptos texto={`Con "open" abriremos el archivo o url para poder enviar o recibir datos.`}/>
        <h2>enviar datos</h2>
        <Sintaxis codigo={`const peticion = new XMLHttpRequest;
peticion.abrir("metodo","url archivo o sitio web");
peticion.enviar()`}/>
        <JavaScropt codigo={`const peticion = new XMLHttpRequest;
peticion.open("GET","datos.txt");
peticion.send()`}/>
        <Conseptos texto={`Con "send()" podemos enviar los datos.`}/>
        <h2>metodos de ajax</h2>
        <JavaScropt codigo={`const peticion = new XMLHttpRequest; 

peticion.addEventListener("readystatechange",()=>{
    console.log(peticion.readyState);
    console.log(peticion.response)
    console.log(peticion.status)
}) 
peticion.open("GET","datos.txt") 
peticion.send()`}/>
        <Conseptos texto={`Con "readystatechange" abriremos el evento para poder trabajar con los datos.`}/>

        <h2>readyState</h2>
        <Conseptos texto={`con "readyState" veremos los estados.`}/>
        <Sintaxis codigo={`estado 1: la solicitud se creo correctamente. 
estado 2: la solicitud se envio correctamente. 
estado 3: la solicitud se esta procesando. 
estado 4: todo esta listo y ya se puede usar el resultado.`}/>
        
        <h2>response</h2>
        <Conseptos texto={`Con "response" mostraremos el resultado en este caso:`}/>
        <Txt codigo={`{
    "musica": "fiesta pagana",
    "genero": "rock"
}`}/>
        
        <h2>status</h2>
        <Conseptos texto={`con "status" veremos el estado del sitio un ejemplo claro 404 y asi.`}/>

        <h2>ejemplo</h2>
        <h2>readystatechange</h2>
        <JavaScropt codigo={`const peticion = new XMLHttpRequest 
peticion.addEventListener("readystatechange",()=>{
    if(peticion.readyState == 4 && 
        peticion.status == 200
    ){  
        console.log(peticion.response)
    }
})
peticion.open("GET","datos.txt") 
peticion.send()`}/>
        <Conseptos texto={`Como nos damos cuenta con "readyState" tendremos que hacer muuchas validaciones pero se puede evitar con "load".`}/>

        <h2>load</h2>
        <JavaScropt codigo={`const peticion = new XMLHttpRequest 
peticion.addEventListener("load",()=>{ 
    console.log(peticion.response)
}) 
peticion.open("GET","datos.txt") 
peticion.send()`}/>
        <Conseptos texto={`Nos mostrara el mismo resultado solo que nos evitamos las validaciones y es mas rapido.`}/>

        <h2>diferencia get y post</h2>
        <Conseptos texto={`{clickAqui} para ver las diferencias entre get y post.`}
        enlaces={{clickAqui:{text:"click aqui",url: "https://pc-solucion.es/wp-content/uploads/2018/06/deferencias-entre-metodo-post-y-get.jpg"}}}
        targetBlank={true}/>
        <h2>ajax</h2>
        <JavaScropt codigo={`let peticion = new XMLHttpRequest 
peticion.addEventListener("load",()=>{ 
    let trabajar;
    if(peticion.status == 200 ||
        peticion.status == 201) trabajar = peticion.response
    else trabajar = "no se encontro la peticion"
    console.log(JSON.parse(trabajar))

    //aqui estamos validando los estados para que se muestren los resultados segun sea.

}) 
peticion.open("POST","https://reqres.in/api/users") 
peticion.setRequestHeader("Content-type","application/json;charset=UTF8") 

    //con "setRequestHeader" estamos enviando los nuevos datos al servidor.

peticion.send(JSON.stringify({ 
    "name": "no se",
    "lastname": "tampoco se"
}))`}/>
      </main>
      <Footer />
    </>
  );
}

export default AjaxJs;