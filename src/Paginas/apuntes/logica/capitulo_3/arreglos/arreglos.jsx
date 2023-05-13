import MensajeModal from "../../../../../componentes/MensajeModal/mensajeModal";
import Capitulos from "../../../../../componentes/capitulos/aside";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Python from "../../../../../componentes/lenguajes/Python";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";

function ArreglosLogica() {
  return (  
    <>
      <Menu2 />
      <Capitulos />
      <MensajeModal texto={`Todo este codigo podras ejecutarlo en tu consola del navegador.`}/>
      <main>
        <h1>Arreglos</h1>
        <Conseptos texto={`Los arreglos son similares a las variables solo que a diferencia de las variables los arreglos pueden guardar mas de un dato.`}/>
        <h2>variables</h2>
        <Python codigo={`variable = "solo se puede guardar un dato no se puede guardar mas de un dato";`}/>
        <h2>arreglo</h2>
        <h3>pseudocodigo</h3>
        <Python codigo={`nombre del arreglo = ["dato 1" , "dato 2"]`}/>

        <Conseptos texto={`Como te das cuenta el arreglo necesita de "[]" y "," para poder guardar mas de un dato.`}/>
        <h3>ejemplo real</h3>
        <Python codigo={`arreglo = [15 , 25 , 30 , 35]`}/>
        <Conseptos texto={`Los arreglos al igual que las variables pueden guardar todo tipo de datos strings , numeros , booleanos.`}/>
        <h2>recorrer</h2>
        <Conseptos texto={`Si queremos acceder a un dato en especifico de un arreglo podemos hacer esto.`}/>
        <h3>pseudocodigo</h3>
        <Python codigo={`arreglo[posision que queremos obtener]`}/>
        <Conseptos texto={`Las posisiones de los arreglos siempre se cuentan desde 0 nunca empieces a contar desde uno siempre desde 0.`}/>
        <Python codigo={`arreglo["posision 0" , "posision 1" , "posision 2"]
mostrar(arreglo[0])
mostrar(arreglo[1])
mostrar(arreglo[2])`}/>
        <Conseptos texto={`Ahora un ejemplo mas.`}/>
        <Python codigo={`juegos = [
  "left 4 dead",
  "gta",
  "halo",
  "top gear",
  "Mario bros"
]`}/>
        <Conseptos texto={`Obtengamos el juego que queremos.`}/>
        <Python codigo={`favorito = juegos[0] + " es mi juego favorito";`}/>
        <h2>posisiones</h2>
        <Conseptos texto={`Entendamos mejor las posisiones de los arreglos.`}/>
        <h3>pseudocodigo</h3>
        <h3>crear arreglo</h3>
        <Python codigo={`arr = ["string1" , "string2" , "string3" , "string4"]
           0           1           2            3`}/>
        <h3>llamar valor</h3>
        <Python codigo={`mostrar(arr[3])
resultado "string4"`}/>
        
      </main>
      <Footer />
    </>
  );
}

export default ArreglosLogica;