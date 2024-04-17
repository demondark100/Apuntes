import Conseptos from "../../../../componentes/conseptos/conseptos";
import Consola from "../../../../componentes/consola/consola";
import Python from "../../../../componentes/lenguajes/Python";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";

function OperadoresPy() {
  return (  
    <>
      <Resumenes contenido={[{
        "mensaje": `Python maneja varias operaciones.`,
        "lenguage": "Python",
        "codigo": `# aritmeticas
sumar = 5 + 5;
restar = 15 - 5;
dividir = 20 / 2;
multiplicar = 5 * 5;
resto = 45 % 2;

# concatenar
name1 = "Hinata";
oracion = "hola " + name1 + " como va konoja?";
name2 = "Azuna";
oracion = f"hola {name2} como va la realidad virtual :v";

# comparacion
mayor = 15 > 8
menor = 12 < 25
igualdad = 25 == 25

# logicos
ambos = 25 < 35 and 87 > 12
soloUno = 12 < 5 or 25 > 5
distinto = !true`
      }]}/>
      <main>
        <h1>Operadores</h1>
        <h2>operadores aritmeticos</h2>
        <Conseptos texto={`Los operadores aritmeticos son de toda la vida suma , resta . division , multiplicacion , etc.`}/>
        <Python codigo={`sumar = 5 + 5;
restar = 15 - 5;
dividir = 20 / 2;
multiplicar = 5 * 5;
resto = 45 % 2;

print(sumar);
print(restar);
print(dividir);
print(multiplicar);
print(resto);`}/>
        <Consola codigo={`10
10
10
25
1`}/>
        <h2>concatenacion</h2>
        <Conseptos texto={`Este lenguaje tiene distintas formas de concatenar las cadenas de texto.`}/>
        <h3>tradicional</h3>
        <Conseptos texto={`Para concatenar de la forma tradicional se usa "+".`}/>
        <Python codigo={`waifu = "Hinata";
oracion = "hola " + waifu + " como va konoja?";
print(oracion);`}/>
          <Consola codigo={`hola Hinata como va konoja?`}/>
          <h3>f strings(la mas facil)</h3>
          <Conseptos texto={`Para usar f strings se debe poner una f antes de la cadena que queramos por ejemplo:`}/>
        <Sintaxis codigo={`f"esta es una {concatenar variable}";`}/>
        <Conseptos texto={`Esto se puede aplicar para " " y """ """.`}/>
        <Python codigo={`waifu = "Azuna";
oracion = f"hola {waifu} como va la realidad virtual :v";
print(oracion);`}/>
        <Consola codigo={`hola Azuna como va la realidad virtual :v`}/>
        <h3>operadores de comparacion</h3>
        <Conseptos texto={`Los operadores son los mismos de toda la vida.
<: menor que
>: mayor que
<=: menor igual que
>=: mayor igual que
!=: distinto de
==: igual que`}/>
        <Python codigo={`numero_1 = 5;
numero_2 = 5;
numero_3 = 15;


# < >
print(numero_1 < numero_3);
print(numero_1 > numero_3);

# <= >=

print(numero_1 >= numero_2);
print(numero_2 <= numero_1);
print(numero_1 >= numero_3);

# !=

print(numero_1 != numero_2);
print(numero_1 != numero_3);

# ==

print(numero_1 == numero_3);
print(numero_1 == numero_2);`}/>
        <Consola codigo={`true 
false
true
true
false
false
true
false
true`}/>

        <h2>operadores logicos</h2>
        <Conseptos texto={`Aqui tambien tenemos a los operadores logicos de toda la vida.
amd(y)
or(o)
distinto`}/>
        <h2>ejemplo de uso</h2>
        <h3>and</h3>
        <Conseptos texto={`And aqui se representa con "and".`}/>
        <Python codigo={`compararAnd = 5 > 2 and 4 < 8;
print(compararAnd);`}/>
        <Consola codigo={`true`}/>
        <h3>or</h3>
        <Conseptos texto={`Or aqui se representa con "or".`}/>
        <Python codigo={`compararOr = 5 > 8 or 3 > 1;
print(compararOr);`}/>
        <Consola codigo={`true`}/>
        <h3>mot</h3>
        <Conseptos texto={`Aqui se representa con "!=" osea se refiere a distinto de.`}/>
        <Python codigo={`verdad = true;
print(!verdad);`}/>
        <Consola codigo={`false`}/>

      </main>
      <Footer/>
    </>
  );
}

export default OperadoresPy;