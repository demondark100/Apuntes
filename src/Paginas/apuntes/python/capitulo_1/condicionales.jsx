import Conseptos from "../../../../componentes/conseptos/conseptos";
import Consola from "../../../../componentes/consola/consola";
import Python from "../../../../componentes/lenguajes/Python";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";

function CondicionalesPy() {
  return (  
    <>
      <main>
        <h1>Condicionales</h1>
        <Conseptos texto={`Aqui las condicionales tienen una sintaxis demasiado facil.`}/>
        <Sintaxis codigo={`si condicional:
  #hacer algo
sino si condicional:
  #hacer algo
sino:
  #hacer algo`}/>
        <Conseptos texto={`Aqui el bloque de codigo se manejara por identaciones osea los espacios que se dejan en las lineas.
"si" se cambia por "if".
"sino si" se cambia por "elif".
"sino" se cambia por "else"`}/>
        <Python codigo={`if condicion:
  #ejecutar algo
elif condicion:
  #ejecutar algo
else:
  #ejecutar algo`}/>
        <h2>ejercicio para entender mejor</h2>
        <Conseptos texto={`Crear un programa que evalue si una persona puede sacar permiso de conducir.
Si tiene menos de 17 años decirle que "es muy menor para sacar licensia".
Si tiene 17 años decirle que falta poco para sacar una licensia.
Si tiene 18 o mas decirle que ya puede sacar locensia.`}/>
        <Python codigo={`usuario = 18;
if usuario < 18:
  print("eres muy menor de edad no puedes sacar lisencia")
elif usuario <= 17:
  print("ya falta poco para que tengas tu lisencia")
elif usuario >= 18:
  print("ya puedes tener tu lisencia")
else:
  print("debes poner tu edad no un caracter")
`}/>
        <Consola codigo={`ya puedes tener tu lisencia`}/>
      </main>
      <Footer/>
    </>
  );
}

export default CondicionalesPy;