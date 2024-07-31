import Conseptos from "../../../../componentes/conseptos/conseptos";
import Python from "../../../../componentes/lenguajes/Python";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Consola from "../../../../componentes/consola/consola";
import Resumenes from "../../../../componentes/resumenes/resumenes";
import Footer from "../../../../componentes/menus/Footer";

function SlicingPy() {
  return (  
    <>
      <Resumenes contenido={[{
        "mensaje": "Tenemos una forma sensilla de recorrer cadenas o arreglos de forma especifica sensillamente.",
        "lenguage": "Python",
        "codigo": `string = "0123456789"
arr = list(string)

string(5:) # "56789" desde donde inicia
string(:5) # "01234" hasta donde finaliza
string(2:7) # "23456" de donde inicia y donde finaliza`
      }]}/>
      <main>
        <h1>Slicibg</h1>
        <Conseptos texto={`Con esto podremos acceder de forma mas sensillas a elementos especificos tanto de cadenas de texto como arreglos.`}/>
        <Sintaxis codigo={`string = "0123456789"
# print(string[desde donde inicia:hasta donde termina])
print(string[2:5])
# resultado
# "234"`}/>
        <Python codigo={`string = "0123456789"
arr = list(string)

print(string[2:5]) # mostrando cadena
print(arr[2:5]) # mostrando arreglo`}/>
          <Consola codigo={`234
['2', '3', '4']`}/>
        <Conseptos texto={`Tambien podemos especificar desde donde iniciar el recorrido o tambien donde terminara el recorrido.`}/>
        <Sintaxis codigo={`string = "0123456789"
# print(desde donde empezara a recorrer:)
print(4:)
# resultado
"456789"`}/>
        <Sintaxis codigo={`string = "0123456789"
# print(:hasta donde finalizara el recorrido)
print(:6)
# resultado
# "012345"`}/>
        <Python codigo={`string = "0123456789"
arr = list(string)

print(string[2:]) # mostrando cadena
print(arr[:5]) # mostrando arreglo`}/>
        <Consola codigo={`23456789
['0', '1', '2', '3', '4']`}/>
      </main>
      <Footer />
    </>
  );
}

export default SlicingPy;