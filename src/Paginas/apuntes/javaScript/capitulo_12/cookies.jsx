import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";

function CookiesJs() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `Guarda la informacion del usuario en el navegador.`,
        lenguage: "JavaScropt",
        codigo: `const newFechaUTC = dias =>{
  let fecha = new Date();
  fecha.setTime(fecha.getTime() + dias*1000*60*60*24);
  return fecha.toUTCString();
}
const crearCookie = (nombre,dias) =>{
  let expires = newFechaUTC(dias);
  document.cookie = \`${"${nombre}"};expires=${"${expires}"}\`;
}

crearCookie("user_cookie",4)

const obtenerCokkie = cookiesName =>{
  let cookies = document.cookie;
  cookies = cookies.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.startsWith(cookiesName)) {
      return cookie.split("=")[0]
    }
  }
  return "no hay cookies";
}`
      }]}/>
      <main>
        <h1>Cookies</h1>
        <Conseptos texto={`Las "Cookies" se encargan de guardar informacion del ususario en el navegador.`}/>
        <Sintaxis codigo={`Cookies clave=valor; atributo;`}/>
        <h2>crear cookies</h2>
        <JavaScropt codigo={`document.cookie = "primera cookie";
document.cookie = "segunda cookie";
document.cookie = "tercera cookie";

// de esta manera estamos creando nuestra primera cookie.`}/>
        <h2>acceder a las cookies</h2>
        <JavaScropt codigo={`const crearCookies = (nombre,expira,path,age) =>{
    document.cookie = \`nombre=${"${nombre}"};expira=${"${expira}"};path=${"${path}"};age=${"${age}"}\`;
}
crearCookies(
    // primero va el nombre de la cookie.
    "usuario",
    // en expirar se debe poner en formato utc.
    "Mon 28 Nov 2022 12:00:00 UTC",
    // luego path que es donde se guardara normalmente no se pone nada ya que se almacena por defecto en el dominio.
    "/",
    // age cuanto dura en segundos.
    "200"
)`}/>
        <h2>codigo completo</h2>
        <JavaScropt codigo={`const newFechaUTC = dias =>{
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + dias*1000*60*60*24);
    return fecha.toUTCString();
}
const crearCookie = (nombre,dias) =>{
    let expires = newFechaUTC(dias);
    document.cookie = \`${"${nombre}"};expires=${"${expires}"}\`;
}

crearCookie("user_cookie",4)

const obtenerCokkie = cookiesName =>{
    let cookies = document.cookie;
    cookies = cookies.split(";");
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.startsWith(cookiesName)) {
            return cookie.split("=")[0]
        }
    }
    return "no hay cookies";
}`}/>
        <Conseptos texto={`Ahora para eliminar una cookie es tan simple como:`}/>
        <JavaScropt codigo={`document.cookie = "user_cookie;max-age=0";
// aqui creamos/remplazamos una cookie exostente y le decimos que se elimine en 0 segundos.
`}/>
      </main>
      <Footer/>
    </>
  );
}

export default CookiesJs;