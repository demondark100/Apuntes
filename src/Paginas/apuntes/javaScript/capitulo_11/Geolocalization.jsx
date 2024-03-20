import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";

function GeolocalizationJs() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `Con esto trabajaremos con la ubicacion del usuario.`,
        lenguage: "JavaScropt",
        codigo: `const geolocatio = navigator.geolocation; // variable que guarda las funciones de la api.
// En este caso es mejor leer todo el contenido ya que no ayudara nada un resumen.`
      }]}/>
      <main>
        <h1>Geolocalization</h1>
        <Conseptos texto={`Con esta api podremos trabajar con la ubicacion del usuario para poder hacer aplicaciones que necesiten de la ubicacion del usuario.`}/>
        <JavaScropt codigo={`const geolocatio = navigator.geolocation;
console.log(geolocatio.__proto__);
// con esto veremos el prototipo de esta api.`}/>
        <h2>getCurrentPosition</h2>
        <Conseptos texto={`Esto obtiene todos los datos de la posicion actual.`}/>
        <JavaScropt codigo={`const geolocation = navigator.geolocation;
function mostrar(pos) {
    console.log(pos)
}
geolocation.getCurrentPosition(mostrar);`}/>
          <Conseptos texto={`Estamos creando una funcion para que nos muestre las cordenadas de la ubicacion de la persona que le dio a permitir.`}/>
          <JavaScropt codigo={`const geolocatiom = navigator.geolocation;
const mostrar = (pos) => {
    //console.log(pos.coords)
    //con esto veremos las coordenadas del mapa.
    //console.log(pos.coords.latitude)
    //con esto veremos la solo la latitud
    //console.log(pos.coords.longitude)
    //con esto veremos solo la longitud
}
geolocatiom.getCurrentPosition(mostrar)`}/>
        <Conseptos texto={`Con esto veremos las coordenadas de la ubicacion.`}/>
        <JavaScropt codigo={`let geolocalizacion = navigator.geolocation; 
const posicion = (pos) => { 
    console.log(pos)
} 
const err = () => console.log(e); 
const options = {
    maximunAge: 0,
    //cuanto tiempo quieres guardar la posicion en cache? en este caso con 0 decimos que cada que cambiemos de posicion se actualice.
    timeOut: 3000,
    //esto nos dira en cuanto tiempo tardara en devolvernos la data en este caso 3s.
    enableHeightAccuracy: true
    //esto nos activa la alta presicion.
}
geolocalizacion.getCurrentPosition(posicion,err,options)`}/>
        <h2>watchPosition</h2>
        <Conseptos texto={`Esto muestra los cambios de la posicion , por ejemplo si estamos en un telefono y nos movemos esto nos mostrara el cambio de posicion.`}/>
        <JavaScropt codigo={`const geolocatio = navigator.geolocation; 
const succces = (pos) =>{
    console.log(pos)
}
geolocatio.watchPosition(succces)`}/>
        <Conseptos texto={`Con esto estamos accediendo al prototipo de watchPosition.`}/>
        <h2>parametros</h2>
        <Conseptos texto={`success, error, options:

success:
Una función de devolución de llamada que toma un objeto de posición(Position) como parámetro de entrada.

error Opcional
Una función de devolución de llamada opcional que toma un objeto PositionError (en-US) como parámetro de entrada.

options Opcional
Un objeto opcional PositionOptions.`}/>
        <JavaScropt codigo={`let id, target, option;
function success(pos) {
    let crd = pos.coords;
    console.log(pos)
    if (target.latitude === crd.latitude &&
        target.longitude === crd.longitude){

        console.log('Congratulations, you reached the target');
        navigator.geolocation.clearWatch(id);
    }
};

function error(err) {
    console.warn(e);
}; 
target = {
    latitude : 0,
    longitude: 0
}; 
let options = {
    enableHighAccuracy: true,
    timeout: 3000,
    maximumAge: 0
};
navigator.geolocation.watchPosition(success, error, options);`}/>
      </main>
      <Footer/>
    </>
  );
}

export default GeolocalizationJs;