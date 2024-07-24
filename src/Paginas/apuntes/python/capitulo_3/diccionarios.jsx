import Footer from "../../../../componentes/menus/Footer";
import Python from "../../../../componentes/lenguajes/Python";
import Conseptos from "../../../../componentes/conseptos/conseptos";
import Resumenes from "../../../../componentes/resumenes/resumenes";
import Consola from "../../../../componentes/consola/consola";

function Diccionarios2Python() {
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `Hay otras forma de trabajar con diccionarios.`,
        lenguage: "Python",
        codigo: `# forma alternativa de crear diccionario
diccionario1 = dict(dato1 = "valor",dato2 = "valor")
# crear un diccionario con valores indefinidos.
diccionario2 = dict.fromkeys(["dato1","dato2"])
# crear un diccionario con un valor que indiquemos. 
diccionario3 = dict.fromkeys(["dato1","dato2"],"un valor")
`
      }]}/>
      <main>
        <h1>diccionarios 2</h1>
        <Conseptos texto={`Tenemos otra forma de crear diccionarios a parte de la forma tradicional, esto se asemeja mas a crear variable con valor, el resultado sera el mismo diccionario de siempre.`}/>
        <h3>Antes</h3>
        <Python codigo={`diccionario = {
  "dato1": "valor",
  "dato2": "valor",
  "dato3": "valor"
}`}/>
        <h3>Metodo dict</h3>
        <Python codigo={`diccionario = dict(
  dato1 = "valor",
  dato2 = "valor",
  dato3 = "valor"
)
print(diccionario)`}/>
        <Consola codigo={`{'dato1': 'valor', 'dato2': 'valor', 'dato3': 'valor'}`}/>
        <h2>fromkeys</h2>
        <Conseptos texto={`Tambien podemos crear diccionarios pero que no tengan valores definidos esto con el metodo "fromkeys"`}/>
        <Python codigo={`diccionario = dict.fromkeys(["dato1","dato2"])
print(diccionario)`}/>
        <Consola codigo={`{'dato1': None, 'dato2': None}`}/>
        <Conseptos texto={`Este metodo es iterable osea que recorre cada elemento del arreglo y en el caso anterior al no pasarle ningun valor le asigna a cada dato del diccionario con "None" pero nosotros podemos asignarle un valor a cada dato del diccionario.`}/>
        <Python codigo={`diccionario = dict.fromkeys(["dato1","dato2"],"valor")
print(diccionario)`}/>
        <Consola codigo={`{'dato1': 'valor', 'dato2': 'valor'}`}/>
      </main>
      <Footer />
    </>
  );
}

export default Diccionarios2Python;