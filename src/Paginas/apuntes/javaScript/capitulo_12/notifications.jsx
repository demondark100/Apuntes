import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";

function NotificationJs() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `Con esto podremos enviar notificaciones al usuario claro siempre y cuando el usuario acepte que le enviemos notificaciones.`,
        lenguage: "JavaScropt",
        codigo: `if (!"Notification" in window) {
  alert("las notificaciones no estan disponibles para este dispositivo.");
} else{
  Notification.requestPermission(()=>{
    if (Notification.permission == "granted") {
      console.log("se ha otorhado el permiso.")
      new Notification("esta es nuestra primera notificacion")
    } else if (Notification.permission == "denied") {
      console.log("se han rechazado las notificaciones")
    } else if (Notification.permission == "default") {
      console.log("el usuario ignoro las notificaciones")
    } 
  })
}`
      }]}/>
      <main>
        <h1>Notifications</h1>
        <Conseptos texto={`Consejo si por accidente das click en donde dice bloquear debes dirigirte donde esta la url y dar click en el signo de exclamacion que aparece al principio de la url.

Aqui vamos a validar si un navegador es compatible o no con esta API.`}/>
        <JavaScropt codigo={`if (!"Notification" in window) {
    alert("las notificaciones no estan disponibles para este dispositivo.");
} else{
    alert("las notificaciones si estan disponibles.")
}`}/>
        <Conseptos texto={`Con esto estamos preguntando si el usuario desea recibir notificaciones o no notificaciones.`}/>
        <ol>
          <li>granted: el usuario permitio el uso de las notificacione.</li>
          <li>denied: el usuario rechazo el uso de las notificaciones.</li>
          <li>default: el ususario no selecciono/ignoro las notificaciones por lo tanto el navegador lo tomara como denied.</li>
        </ol>
        <JavaScropt codigo={`Notification.requestPermission(()=>{
    if (Notification.permission == "granted") {
        console.log("se ha otorhado el permiso.")
    } else if (Notification.permission == "denied") {
        console.log("se han rechazado las notificaciones")
    } else if (Notification.permission == "default") {
        console.log("el usuario ignoro las notificaciones")
    } 
})

// aqui estamos validando si el ususario dio permisos para
// mostrar notificaciones si las denego o si las ignoro.`}/>
        <Conseptos texto={`Aqui enviaremos notificaciones.`}/>
        <JavaScropt codigo={`Notification.requestPermission(()=>{
    if (Notification.permission == "granted") {
        new Notification("esta es nuestra primera notificacion")

        // con esto estamos dando un mensaje al usuario a traves de
        // Notificationes
    }
})`}/>
        
      </main>
      <Footer/>
    </>
  );
}

export default NotificationJs;