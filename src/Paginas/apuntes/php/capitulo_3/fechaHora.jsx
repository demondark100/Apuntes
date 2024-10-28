import Conseptos from "../../../../componentes/conseptos/conseptos";
import Footer from "../../../../componentes/menus/Footer";
import Resumenes from "../../../../componentes/resumenes/resumenes";
import Php from "../../../../componentes/lenguajes/Php"
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";

function FechaHoraPhp(){
  return(
    <>
      <Resumenes contenido={[{
        "mensaje": `Ahora vamos a obtener la fecha y hora actual con php.`,
        "lenguage": `Php`,
        "codigo": `<?php
date_default_timezone_set("America/Lima"); // definir zona horaria
echo date("d"); // dia del mes // 02
echo date("D"); // nombre del dia del mes // Wed
echo date("l"); // dia de la semana // Wednesday
echo date("Y"); // año 4 digitos // 2024
echo date("y"); // año 2 digitos // 24
echo date("m"); // mes // 10
echo date("M"); // nombre del mes 3 digitos // Oct 
echo date("F"); // nombre completo del mes // October
echo date("h"); // hora formato 12 horas // 08
echo date("H"); // hora formato 24 horas // 20
echo date("i"); // minutos // 15
echo date("a"); // am o pm minuscula // pm
echo date("A"); // AM o PM minuscula // PM`
      }]}/>
      <main>
        <h1>Fecha y hora</h1>
        <Conseptos texto={`Php tiene funciones para poder saber cual es la fecha y hora exacta, esto puede ser util si se desea trabajar con un proyecto que guarde fechas y horas o cualquier otro proyecto.`}/>
        <h2>date_default_timezone_set</h2>
        <Conseptos texto={`Con esta funcion vamos a establecer una zona horaria en mi caso accederemos a la zona horaria de lima pero puedes elegir tu contienente y pais para acceder a su zona horaria.`}/>
        <Sintaxis codigo={`date_default_timezone_set("Contienete/Pais");`}/>
        <Php codigo={`<?php
date_default_timezone_set("America/Lima");`}/>
        <h2>date</h2>
        <Conseptos texto={`Con esta funcion vamos a obtener el dia el mes y el año segun el parametro que le pasemos a la funcion.`}/>
        <h2>dia</h2>
        <Conseptos texto={`Por ejemplo si le ponemos la letra "d" en minuscula nos mostrara el dia en el que estamos en este caso es 2 de octubre.`}/>
        <Php codigo={`<?php
date_default_timezone_set("America/Lima");
echo date("d");`}/>
        <div className="website">
          <p>02</p>
        </div>
        <Conseptos texto={`Ahora si le pasamos como parametro la letra "D" mayuscula nos mostrara el nombre del dia en el que nos encontramos.`}/>
        <Php codigo={`<?php
date_default_timezone_set("America/Lima");
echo date("D");`}/>
        <div className="website">
          <p>
            Wed
          </p>
        </div>
        <h2>dia de la semana</h2>
        <Conseptos texto={`Ahora si le pasamos como parametro la "l" nos mostrara el dia de la semana pero en ingles.`}/>
        <Php codigo={`<?php
date_default_timezone_set("America/Lima");
echo date("l");`}/>
        <div className="website">
          <p>Wednesday</p>
        </div>
        <h2>Año</h2>
        <Conseptos texto={`Ahora tambien podemos poner la letra "Y" mayuscula para obtener el año actual.`}/>
        <Php codigo={`<?php
date_default_timezone_set("America/Lima");
echo date("Y");`}/>
        <div className="website">
          <p>2024</p>
        </div>
        <Conseptos texto={`Pero si le pasamos como parametro la letra "y" minuscula solo nos mostrara los ultimos dos numeros del año en este caso al ser año 2024 solo mostrara 24.`}/>
        <div className="website">
          <p>24</p>
        </div>
        <h2>mes</h2>
        <Conseptos texto={`Si a date le pasamos como parametro la letra "m" minuscula obtendremos el mes actual en numeros en este caso el mes de octubre es el decimo mes.`}/>
        <Php codigo={`<?php
date_default_timezone_set("America/Lima");
echo date("m");`}/>
        <div className="website">
          <p>10</p>
        </div>
        <Conseptos texto={`Pero si le pasamos como parametro la letra "M" mayuscula vamos a obtener el nombre del mes.`}/>
        <Php codigo={`<?php
date_default_timezone_set("America/Lima");
echo date("M");`}/>
        <div className="website">
          <p>Oct</p>
        </div>
        <Conseptos texto={`Tambien podemos tener el nmbre del mes completo con la letra "F" mayuscula.`}/>
        <Php codigo={`<?php
date_default_timezone_set("America/Lima");
echo date("F");`}/>
        <div className="website">
          <p>October</p>
        </div>
        <h2>hora</h2>
        <Conseptos texto={`Tambien podemos tener la hora, tenemos dos formatos de hora.`}/>
        <ol>
          <li><Conseptos texto={`Formato de 12 horas.`}/></li>
          <li><Conseptos texto={`Formato de 24 horas.`}/></li>
        </ol>
        <Conseptos texto={`Con "h" minuscula vamos a obtener las horas en formato de 12 horas.`}/>
        <Php codigo={`<?php
date_default_timezone_set("America/Lima");
echo date("h");`}/>
        <div className="website">
          <p>08</p>
        </div>
        <Conseptos texto={`Con la "H" mayuscula vamos a obtener la hora pero en formato de 24 horas.`}/>
        <Php codigo={`<?php
date_default_timezone_set("America/Lima");
echo date("H");`}/>
        <div className="website">
          <p>20</p>
        </div>
        <h2>minutos</h2>
        <Conseptos texto={`Tambien podemos tener los minutos con la letra "i".`}/>
        <Php codigo={`<?php
date_default_timezone_set("America/Lima");
echo date("i");`}/>
        <div className="website">
          <p>15</p>
        </div>
        <h2>dia o noche</h2>
        <Conseptos texto={`Tambien podemos saber si es de dia o noche osea dia "am" y tarde o noche "pm" esto con la letra "a" minuscula o "A" mayuscula, ambas mostraran lo mismo solo que "A" mayuscula mostrara "AM" o "PM" en mayuscula.`}/>
        <Php codigo={`<?php
date_default_timezone_set("America/Lima");
echo date("a");`}/>
        <div className="website">
          <p>pm</p>
        </div>
        <Php codigo={`<?php
date_default_timezone_set("America/Lima");
echo date("A");`}/>
        <div className="website">
          <p>PM</p>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default FechaHoraPhp;