import Conseptos from "../../../../componentes/conseptos/conseptos";
import Txt from "../../../../componentes/lenguajes/txt";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes"

function Cap1MatV1() {
  return (  
   <>
    <Resumenes contenido={[{
      "lenguage": "Txt",
      "codigo": `+ x - , - x + es igual a -
+ x + , - x - es igaual a +

al restar numeros positivos puedes salir numeros negativos
5 - 15 = -10
Si multiplicamos o hacemos operaciones con numeros negativos
el resultado sera un numero negativo
-15 x 2 = -30`
    }]}/>
    <main>
      <h1>Basico</h1>
      <h2>suma</h2>
      <Conseptos texto={`Solo es incrementar un valor por otro.`}/>
      <Txt codigo={`50 + 50 = 100
25 + 157 + 987 = 1169`}/>
      <h2>resta</h2>
      <Conseptos texto={`Solo es quitar un valor por otro.`}/>
      <Txt codigo={`754 - 658 = 96
1587 - 748 = 839`}/>
      <h2>Numeros negativos</h2>
      <Conseptos texto={`Tambien podemos tener numeros negativos en una resta por ejemplo.`}/>
      <Txt codigo={`8 - 15 = -7`}/>
      <Conseptos texto={`Eso es demasiado facil hasta se puede hacer con intuicion pero si son numeros mas grandes debemos conoces.`}/>
      <h2>Regla de los signos</h2>
      <Txt codigo={`+ . + = +
+ . - = -
- . + = -
- . - = +`}/>
      <Conseptos texto={`Apliquemos esa regla de las reglas de los signos con este ejemplo.`}/>
      <Txt codigo={`15 + (-5) = x;
entonces tenemos (+ . -) = -;
entonces seria 15 - 5;
15 - 5 = 10
x = 10`}/>
      <Conseptos texto={`Hagamoslo mas complicado wahaha.`}/>
      <Txt codigo={`4 + (-2) + (-5) = x;
entonces ( + . - = -) 4 - 2 = 2;
entonces ( + . - = -) 2 - 5 = -3;
x = 3;`}/>
      <Conseptos texto={`Ahora vamos a simplificarlo.`}/>
      <Txt codigo={`4 + (-2) + (-5) = x;
4 - 2 - 5 = -3;
x = -3;`}/>
      <Conseptos texto={`Ahora compliquemos esto un poco mas.`}/>
      <Txt codigo={`-2 - (+1) - (+4) = x;
x = -2 - 1 - 4;
x = -7`}/>
      <Txt codigo={`-5 + (-1) - 4 + (-2) + 3 = x;
-5 - 1 - 4 - 2 + 3 = x;
x = -9;`}/>
      <h2>multiplicacion</h2>
      <Conseptos texto={`En operaciones matematicas siempre se resolvera la multiplicacion antes que las sumas y restas ejemplo.
      
      Aqui la multiplicacion la representaremos por " * " reemplazando a " x " , esto debido a que usaremos mucho " x " para representar el resultado , ademas " * " es el simbolo oficial de la programacion para representar multiplicacion.`}/>
      <Txt codigo={`5 - ( 2 * 5 ) = x;
entonces es como decir: 5 - 10 = x;
x = -5;`}/>
      <Conseptos texto={`Como te das cuenta primero resolvimos la multiplicacion y despues la resta esto se aplica en cualquier parte no importa cual sea la posision de la multiplicacion..`}/>
      <Txt codigo={`25 - 7 * 8 + (-8) * 2 = x;
25 - (7 x 8) - (8 x 2) = x;
25 - 56 - 16 = x;  
x = -47;`}/>
      <Txt codigo={`3 * (-1) + 3 = x;
3 al multiplicarse por numero negativo se vuelve en numero negativo -3;
-3 + 3 = 0;
x = 0;`}/>
      <Txt codigo={`4 * (-1) + 2 * (-6) = x;
x = -4 + -12;
x = 16;`}/>
      <Txt codigo={`5 - (-3) * (-5) = x;
x = 5 - 15;
x = -10`}/>
      <h2>numeros positivos</h2>
      <Conseptos texto={`Si dos numeros negativos se llegan a multiplicar se convierten en numeros positivos.`}/>
      <Txt codigo={`3 * (-1) + 5 [4 - 3 * (-2)] = x;
x = -3 + 5 * [4 - (-6)];
x = -3 + 5 * [4 + 6];
x = -3 + 5 * 10;
x = -3 + 50;
x = 47;`}/>
      <h2>Importante</h2>
      <Conseptos texto={`En conslusion lo mas importante hasta ahora es que:`}/>
      <ol>
        <li>si multiplicamos o dividimos 2 numeros negativos se convierten en positivos.</li>
        <li>si multiplicamos o dividimos 1 numero negativo por un numero positivo se quedara en negativo.</li>
        <li>si multiplicamos o dividimos 1 numero positivo por un numero negativo se vuelve en numero negativo.</li>
      </ol>
    </main>
    <Footer />
    </>
  );
}

export default Cap1MatV1;