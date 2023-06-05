import Conseptos from "../../../../componentes/conseptos/conseptos";
import Consola from "../../../../componentes/consola/consola";
import Python from "../../../../componentes/lenguajes/Python";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";
import Menu2 from "../../../../componentes/menus/Menu2";

function MetListPy() {
  return (  
    <>
      <Menu2/>
      <main>
        <h1>Metodos de listas</h1>
        <Conseptos texto={`Al igual que las cadenas los arreglos tambien tienen sus metodos propieos , estos tambien reciben la funcion dir(solo es un recordatorio).`}/>
        <h2>len</h2>
        <Conseptos texto={`len nos dira la cantidad de elementos que hay en nuestro lista/arreglo , recuerda que len tiene dos formas de ejecutarse: len() o __len__.`}/>
        <Python codigo={`musicas = [
  "labios rotos",
  "fondo profundo",
  "musica ligera",
  "hasta que pase el temblor"
]
print(len(musicas));
print(musicas.__len__());`}/>
        <Consola codigo={`4
4`}/>
        <h2>append</h2>
        <Conseptos texto={`Este metodo nos sirve para agregar mas elementos a un arreglo.`}/>
        <Sintaxis codigo={`variable.append("que elemento deseamos agregar");`}/>
        <Python codigo={`comida = [
  "frutas",
  "verduras",
  "carnes",
  "vegetales"
]

comida.append("golosinas");
print(comida);`}/>
        <Consola codigo={`['frutas', 'verduras', 'carnes', 'vegetales', 'golosinas'] `}/>
        <h2>insert</h2>
        <Conseptos texto={`Esto nos permite insertar un elemento en la posision del arreglo que le indiquemos.`}/>
        <Sintaxis codigo={`variable.insert(posision,"que queremos agregar");`}/>
        <Python codigo={`comida = [
  "frutas",
  "verduras",
  "carnes",
  "vegetales"
]

comida.insert(1,"golosinas");
print(comida);`}/>
        <Consola codigo={`['frutas', 'golosinas', 'verduras', 'carnes', 'vegetales']`}/>
        <h2>extend</h2>
        <Conseptos texto={`Esto nos permite agregas mas de dos elementos cosa que "append" no hace.`}/>
        <Sintaxis codigo={`variable.extend(["agregar","agregar"])`}/>
        <Python codigo={`juegos = [
  "left 4 dead",
  "gta",
  "red dead",
  "resident evis"
]

juegos.extend(["call of duty","genshin impact","pubg"]);
print(juegos);`}/>
        <Consola codigo={`['left 4 dead', 'gta', 'red dead', 'resident evis', 'call of duty', 'genshin impact', 'pubg']`}/>
        <h2>pop</h2>
        <Conseptos texto={`esto eliminara un elemento para hacer eso debemos indicar la posisio del elemento que queremos eliminar , y si queremos eliminar el ultimo elemento podemos poner -1 , -2 para el antepenultimo y asi sucesivamente.`}/>
        <Sintaxis codigo={`variable.pop(posision del elemento que queremos eliminar);`}/>
        <Python codigo={`juegos = [
  "left 4 dead",
  "gta",
  "red dead",
  "resident evis"
];

juegos.pop(2);
juegos.pop(-1);
print(juegos);`}/>
        <Consola codigo={`['left 4 dead', 'gta']`}/>
        <h2>remove</h2>
        <Conseptos texto={`Esto es igual a pop solo que en vez de pasarle la posision le ponemos el nombre del elemento que queremos remover.`}/>
        <Sintaxis codigo={`variable.remove("remover elemento");`}/>
        <Python codigo={`juegos = [
  "left 4 dead",
  "gta",
  "red dead",
  "resident evis"
]

juegos.remove("red dead");
print(juegos);`}/>
        <Consola codigo={`['left 4 dead', 'gta', 'resident evis']`}/>
        <h2>clear</h2>
        <Conseptos texto={`Esto eliminara todo de una lista no dejara nada.`}/>
        <Python codigo={`juegos = [
  "left 4 dead",
  "gta",
  "red dead",
  "resident evis"
]
juegos.clear();
print(juegos);`}/>
        <Consola codigo={`[]`}/>
        <h2>sort</h2>
        <Conseptos texto={`Esto ordenara todo la lista de forma alfabetica y numerica por ejemplo tenemos una lista ["musica","acustica"] a la hora de usar sort el arreglo se ordenara de forma alfabetica ["acustica","musica"] , es igual con los numeros inicia desde 0 1 2 3 4 y asi sucesivamente.

Tambien tenemos sort reverse que ordenara de misma manera solo que lo pondra al revez.`}/>
        <Python codigo={`juegos = [
  "left 4 dead",
  "gta",
  "red dead",
  "resident evis"
]
juegos.sort();
juegos.sort(reverse=True);
print(juegos);`}/>
        <Consola codigo={`['gta', 'left 4 dead', 'red dead', 'resident evis']`}/>
        <h2>reverse</h2>
        <Conseptos texto={`Esto a diferencia de sort reverse no ordenara nada solo pondra a los elemtos tal como estan pero al reves.`}/>
        <Python codigo={`juegos = [
  "left 4 dead",
  "gta",
  "red dead",
  "resident evis"
]
juegos.reverse();
print(juegos);`}/>
        <Consola codigo={`['resident evis', 'red dead', 'gta', 'left 4 dead']`}/>
      </main>
      <Footer/>
    </>
  );
}

export default MetListPy;