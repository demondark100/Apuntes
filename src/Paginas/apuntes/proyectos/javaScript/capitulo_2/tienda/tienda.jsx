import MensajeModal from "../../../../../../componentes/MensajeModal/mensajeModal";
import CodigoFuenteSinInt from "../../../../../../componentes/codigoFuente/code";
import JavaScropt from "../../../../../../componentes/lenguajes/JavaScript";
import Volver from "../../../../../../componentes/volver/volver";
import "./tienda.css";


function Cap3ProyJsV3() {
  return (  
    <>
      <MensajeModal texto={`¡proyecto! capitulo 3:

Hacer una tienda de helados.`}/>
      <Volver link={"../"}/>
      <CodigoFuenteSinInt codigo={<JavaScropt codigo={`// Necesitamos el dinero del usuario.
// necesitamos el precio de los helados.
// necesitamos ver cuanto dinero le queda al usuario.

let dineroUsuario = 100; //esta variable simula el dinero del usuario puedes poner cualquier cantidad wahahaha hackea el sistema y pon un millon XD.
let helados = {      // el 1mer valor de los arreglos es el id , el 2do es el precio
  chocolate: [1,25],
  lucuma: [2,22],
  vainilla: [3,25],
  fresa: [4,20],
  chispitas: [5,36],
  heladoFrito: [6,40]
}
let cantidadHelados = prompt("Hola ¿Cuantos helados desea comprar?")

for (let i = 0; i < parseInt(cantidadHelados); i++) {
  let comprar = prompt(\`¿Que helado desearia comprar?
cantidad de helados: helado n${"${i + 1}"}.
1. chocolate (costo 25$)
2. lucuma (costo 15$)
3. vainilla (costo 20$)
4. fresa (costo 20$)
5. chispas de chocolate (costo 36$)
6. helado frito (costo 40$)\`)

  if (dineroUsuario <= 0) {
    console.log("lo siento ya no cuentas con dinero suficiente")
  } else {
    for(let i in helados){
      if (comprar == helados[i][0]) {
        dineroUsuario -= helados[i][1]
        console.log(\`compraste helado de ${"${i}"} te queda $${"${dineroUsuario}"}\`)
      } else if (comprar != helados[i][0]) {
        console.log(\`Opcion no valida.\`)
      }
    }
  }
}

// este sistema es muy dinamico porque puedes 
// agregar mas helados y se detectara automaticamente 
// si hay mas helados para vender y todo xd.`}/>}/>
    
      <div className="Page">
        
        <div>
          <h1>heladerias Piko</h1>
        </div>
        
      </div>
    </>
  );
}

export default Cap3ProyJsV3;