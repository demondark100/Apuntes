import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../componentes/menus/Footer";
import Menu2 from "../../../../componentes/menus/Menu2";

function ObjDateJs() {
  return (  
    <>
      <Menu2 />
      <main>
        <h1>objeto Date</h1>
        <Conseptos texto={`Esto es una api de javaScript para mostrar la hora y fecha.`}/>
        <JavaScropt codigo={`console.log(Date())`}/>
        <Conseptos texto={`Para contextualizar mejor Date es un constructor osea es un objeto, asi que podemos ponerle propiedades.`}/>
        <JavaScropt codigo={`const fecha = new Date()
console.log(fecha)`}/>
        <h2>getDate</h2>
        <JavaScropt codigo={`const fecha = new Date();
console.log(fecha.getDate())`}/>
        <Conseptos texto={`Esto nos devolvera el dia del mes osea si estamos el 1 de agosto nos dira 1 si estamos el 15 de agossto nos devolvera 15.`}/>
        <h2>getDay</h2>
        <JavaScropt codigo={`const fecha = new Date();
console.log(fecha.getDay())

//esto nos mostrara el dia de la semana por ejemplo si estamos domingo mostrara 0 , lunes 1 y asi sucesivamente , porque trabaja como si fuese un arreglo.

//domingo 0 
//lunes 1 
//martes 2
//miercoles 3
//jueves 4
//viernes 5
//sabado 6`}/>
        <h2>getMonth</h2>
        <JavaScropt codigo={`const fecha = new Date();
console.log(fecha.getMonth())`}/>
        <Conseptos texto={`Con esto veremos el mes en el que estamos , trabaja igual que los dias enero 0 , febrero 1 y asi sucesivamente.`}/>
        <h2>getYear</h2>
        <JavaScropt codigo={`const fecha = new Date();
console.log(fecha.getYear())
//esto nos mostrara el año en el que estamos pero restado por 1900, ejemplo.

//2022 - 1900 = 122
//2023 - 1900 = 123
//2024 - 1900 = 124`}/>
        <h2>getFullYear</h2>
        <JavaScropt codigo={`const fecha = new Date();
console.log(fecha.getFullYear())`}/>
        <Conseptos texto={`Esto si nos mostrara el año exacto en el que estamos.`}/>
        <h2>getHours</h2>
        <h2>getMinutes</h2>
        <h2>getSeconds</h2>
        <JavaScropt codigo={`const fecha = new Date();
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());`}/>
        <Conseptos texto={`Esto nos mostrara la hora,minuto y segundo.`}/>
      </main>
      <Footer />
    </>
  );
}

export default ObjDateJs;