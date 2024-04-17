import Conseptos from "../../../../componentes/conseptos/conseptos";
import Consola from "../../../../componentes/consola/consola";
import Python from "../../../../componentes/lenguajes/Python";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";

function MetDiccPy() {
  return (  
    <>
      <Resumenes contenido={[{
        "mensaje": `Los diccionarios tambien tienen metodos muy utiles.`,
        "lenguage": "Python",
        "codigo": `user = {
  "nombre": "Ram",
  "edad": 21,
  "id": 157894234
}
user.keys() # Ver los nombre clave
user.get("nombre") # acceder a un elemento del diccionario
user.clear() # borrar todo el diccionario
user.pop("edad") # borrar un elemento del diccionario
user.items() # mostrar todo el objeto key y key-value`
      }]}/>
      <main>
        <h1>Metodos de diccionarios</h1>
        <Conseptos texto={`Los diccionarios tambien tienen metodo que podemos usar bueno empecemos.`}/>
        <h2>keys</h2>
        <Conseptos texto={`Este metodo nos sirve para ver los nombres clave por ejemplo si tenemos este diccionario: "nombre": "Nami".
Pues keys nos mostrara el nombre clave "nombre".
este metodo es iterable bueno mas adelante sabras a que me refiero con eso.`}/>
        <Python codigo={`diccionario = {
  "musica": "Pull Me Under",
  "genero": "rock",
  "artista": "Dream Theater"
}

print(diccionario.keys());`}/>
        <Consola codigo={`dict_keys(['musica', 'genero', 'artista'])`}/>
        <h2>get</h2>
        <Conseptos texto={`Esto es para acceder al valor de un diccionario es como decir variable["valor"], la diferencia es que si con variable["valor"] no encuentra nada saldra un error y dejara de ejecutarse el programa cosa que con get no pasa debido a que nos retornara "none".`}/>
        <Sintaxis codigo={`variable.get("nombre del valor que queremos obtener");`}/>
        <Python codigo={`diccionario = {
  "musica": "Pull Me Under",
  "genero": "rock",
  "artista": "Dream Theater"
}

print(diccionario.get("genero"));`}/>
        <Consola codigo={`rock `}/>
        <h2>clear</h2>
        <Conseptos texto={`Esto nos servira para borrar todo el diccionario.`}/>
        <Python codigo={`diccionario = {
  "musica": "Pull Me Under",
  "genero": "rock",
  "artista": "Dream Theater"
}

print(diccionario.clear());`}/>
        <Consola codigo={`None`}/>
        <h2>pop</h2>
        <Conseptos texto={`Esto nos servira para eliminar un elemento del diccionario.`}/>
        <Python codigo={`diccionario = {
  "musica": "Pull Me Under",
  "genero": "rock",
  "artista": "Dream Theater"
}

diccionario.pop("genero")

print(diccionario);`}/>
        <Consola codigo={`{'musica': 'Pull Me Under', 'artista': 'Dream Theater'}`}/>
        <h2>items</h2>
        <Conseptos texto={`El método items () junto con el ciclo for permite iterar de manera simultánea sobre los pares key-value de un diccionario Usando la función incorporada del o el método pop es posible eliminar uno o varios pares key-value de un diccionario.`}/>
        <Python codigo={`diccionario = {
  "musica": "Pull Me Under",
  "genero": "rock",
  "artista": "Dream Theater"
}

mostrar = diccionario.items()

print(mostrar);
print(diccionario);`}/>
        <Consola codigo={`dict_items([('musica', 'Pull Me Under'), ('genero', 'rock'), ('artista', 'Dream Theater')])
{'musica': 'Pull Me Under', 'genero': 'rock', 'artista': 'Dream Theater'}`}/>
      </main>
      <Footer/>
    </>
  );
}

export default MetDiccPy;