import Conseptos from "../../../../componentes/conseptos/conseptos";
import Consola from "../../../../componentes/consola/consola";
import Python from "../../../../componentes/lenguajes/Python";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";
import Menu2 from "../../../../componentes/menus/Menu2";

function EntrDatosPy() {
  return (  
    <>
      <Menu2/>
      <main>
        <h1>Entrada de datos</h1>
        <Conseptos texto={`Con esto pediremos datos al usuario para procesarlos y mostrarles un resultado , los inputs siempre devolveran una string por eso es que existen unos metodos para poder cambiar esos datos a numeros pero bueno empecemos.`}/>
        <h2>input</h2>
        <Sintaxis codigo={`input("mensaje que queremos dar");`}/>
        <Python codigo={`nombre = input("dime tu nombre: ");
print(nombre);`}/>
        <Consola codigo={`dime tu nombre:`}/>
        <h2>convertir datos</h2>
        <Conseptos texto={`Y que pasa si intentamos hacer operaciones?
recuerda que cuando nosotros pasamos datos a un input siempre nos devolvera una string por ejemplo si le pasamos como dato 15 el input nos devolvera "15" por lo cual no podremos hacer operaciones.

1. int(): esto nos servira para convertir los datos a datos numericos
2. float(): esto convertira los datos a datos flotantes`}/>
        <Sintaxis codigo={`int(variable o dato);
float(variable o dato);`}/>
        <h3>con int y float</h3>
        <Python codigo={`numero_1 = input("dime el primer numero: ");
numero_2 = input("dime el segundo numero: ");

print(int(numero_1) + int(numero_2));


flotante_1 = input("dime el primer flotante: ");
flotante_2 = input("dime el segundo flotante: ");

print(float(flotante_1) + float(flotante_2));`}/>
        <Consola codigo={`dime el primer numero: 15
dime el segundo numero: 15
30
dime el primer flotante: 15
dime el segundo flotante: 15
30.0`}/>
        <h3>sin int y float</h3>
        <Python codigo={`numero_1 = input("dime el primer numero: ");
numero_2 = input("dime el segundo numero: ");

print(numero_1 + numero_2);


flotante_1 = input("dime el primer flotante: ");
flotante_2 = input("dime el segundo flotante: ");

print(flotante_1 + flotante_2);`}/>
        <Consola codigo={`dime el primer numero: 15
dime el segundo numero: 15
1515
dime el primer flotante: 15.0
dime el segundo flotante: 15.0
15.015.0`}/>
      </main>
      <Footer/>
    </>
  );
}

export default EntrDatosPy;