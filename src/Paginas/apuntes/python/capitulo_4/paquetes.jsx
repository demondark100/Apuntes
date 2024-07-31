import Conseptos from "../../../../componentes/conseptos/conseptos";
import Consola from "../../../../componentes/consola/consola";
import ImagenLink from "../../../../componentes/ImagenLink/imagenLink";
import Python from "../../../../componentes/lenguajes/Python";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";

// imagenes
import img5 from "../imgs/img5.png";
import img6 from "../imgs/img6.png";
import img7 from "../imgs/img7.png";

export default function PaquetesPy(){
  return(
    <>
      <Resumenes contenido={[{
        "mensaje": `Un paquete y sub paquete guardan varios modulos, para que una carpeta se considere paquete o sub paquete siempre debe tener el archivo "__init__.py" y asi python lo considerara como un paquete o subpaquete.`
      }]}/>
      <main>
        <h1>Paquetes</h1>
        <Conseptos texto={`Un paquete es una carpeta que tiene muchos modulos, para que una carpeta se considere como un paquete debe tener adentro un archivo llamado "__init__.py"`}/>
        <ImagenLink imagen={img5} tipo={"imagen"} titulo={"archivo paquete"}/>
        <Conseptos texto={`En este caso creamos un archivo llamado "paquetes" y para que esa carpeta se considere un paquete tiene el archivo "__init__.py", no es necesario que tenga algo el archivo.

Los paquetes sirven para no andar importando los modulos de uno a uno sino que permite importar todos los modulos que esten dentro de un paquete.`}/>
        <h2>__path__</h2>
        <Conseptos texto={`Con este metodo veremos la ruta del paquete cuando lo importemos.`}/>
        <Python codigo={`import paquetes
print(paquetes.__path__)`}/>
        <Consola codigo={`['C:\\Users\\user\\OneDrive\\Escritorio\\Desk\\python\\paquetes']`}/>
        <h2>Uso de paquetes</h2>
        <Conseptos texto={`Ahora vamos a usar un paquete y a obtener la funcion de los modulos que queramos.`}/>
        <h3>Estructura</h3>
        <ImagenLink tipo={"imagen"} imagen={img6} titulo={"estructura"}/>
        <h3>Modulo 1</h3>
        <Python codigo={`def saludar1():
    print("hola usuario")`}/>
        <h3>Modulo 2</h3>
        <Python codigo={`def saludar2():
    print("Otro saludo")`}/>
        <h3>Archivo principal</h3>
        <Python codigo={`import paquetes.saludo1 # obtener el primer modulo
import paquetes.saludo2 # obtener el segundo modulo

paquetes.saludo1.saludar1()
paquetes.saludo2.saludar2()`} />
        <h2>sub paquetes</h2>
        <Conseptos texto={`Con los sub paquetes podemos tener paquetes dentro de un paquete, un sub paquete se le considerara siempre y cuando la carpeta tenga el archivo "__init__.py" de lo contrario python lo considerara como una carpeta normal.`}/>
        <h2>Estructura</h2>
        <ImagenLink tipo={`imagen`} imagen={img7} titulo={"Estructura"}/>
        <Conseptos texto={`Dentro de nuestra carpeta paquetes tenemos un sub paquete llamado "sub" donde guardamos otro modulo llamado "subPack1.py".`}/>
        <h3>modulo (subPack1.py)</h3>
        <Python codigo={`def subPaquete():
    print("Accedimos a un subPaquete")`}/>
        <h3>archivo principal</h3>
        <Python codigo={`import paquetes.sub.subPack1

paquetes.sub.subPack1.subPaquete()`}/>
      </main>
      <Footer />
    </>
  )
}