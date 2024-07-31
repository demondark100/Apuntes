import Footer from "../../../../componentes/menus/Footer";
import Conseptos from "../../../../componentes/conseptos/conseptos"
import Txt from "../../../../componentes/lenguajes/Txt";
import Resumenes from "../../../../componentes/resumenes/resumenes";


function ChenMySql(){
  return(
    <>
9      <Resumenes contenido={[
      {
        "mensaje": "La notacion chen ayudara a entender de mejor forma lo mas complejo que vendra mas adelante."
      },
      {
        "mensaje": "atributo simple: guarda un solo tipo de dato.",
        "lenguage": "Txt",
        "codigo": `(precio)`
      },
      {
        "mensaje": "atributos compuestos: Estos tienen sub atributos.",
        "lenguage": "Txt",
        "codigo": `                 (habilidades)
                      |
        -------------------------   
        |                       |
(aprendizaje rapido)    (trabajo en equipo)`
      },
      {
        "mensaje": "atributos multivalor: Estos tienen mas de un valor",
        "lenguage": "Txt",
        "codigo": `(mesas) (sillas) (trapos)`
      },
      {
        "mensaje": "atributos derivados: Estos son datos que se pueden obtener a travez de otro dato.",
        "lenguage": `Txt`,
        "codigo": `(antiguedad) (fecha de creacion)`
      },
      {
        "mensaje": "Key: Es el identificador unico que tiene cada entidad.",
        "lenguage": "Txt",
        "codigo": `(dni)`
      }]}/>
      <main>
        <h1>Notacion chen</h1>
        <Conseptos texto={`MySql es una base de datos que se usa para poder guardar todo tipo de datos y luego poder recuperarlos.`}/>
        <h2>Entidades</h2>
        <Conseptos texto={`Las entidades son la representacion de algo por ejemplo una persona, un objeto, cualquier cosa.

Un ejemplo un centro comercial, este puede tener las siguientes entidades.`}/>
        <ol>
          <li>clientes</li>
          <li>productos</li>
          <li>ordenes de compra</li>
          <li>proveedores</li>
        </ol>
        <Conseptos texto={`Una entidad se puede representar por la palabra dentro de un cuadrado.`}/>
        <Txt codigo={`|************|
|  Entidad   |
|____________|`}/>
        <Conseptos texto={`Una entidad tiene atributos pongamos como ejemplo una casa.`}/>
        <Txt codigo={`
        | tamaño      propietario
(---)   | direccion   fecha de construccion
| 1 |   | ambientes   antiguedad
-----   | ubicacion   ventanas
        | precio      puertas`}/>
        <Conseptos texto={`A estos atributos los podemos representar con obalos.`}/>
        <Txt codigo={`(ventana)     ((ventanas))    ((puertas))
    |              |                |
    ----------- -------- ------------
(diceccion)---- | casa |----- (antiguedad)
       -------- -------- ----------
      |       |    |       |      |
      |       | (precio)   |      |
      |       |            |      |
  (ambiente)  |            |  (propietario)
              |            |
        (ubicacion)     (fecha de construccion)`}/>
        <h2>atributos simples</h2>
        <Conseptos texto={`Estos solo tienen datos unicos, por ejemplo el precio de la casa que seria solo $100000.`}/>
        <h2>atributos compuestos</h2>
        <Conseptos texto={`Un dato compuesto tiene otros sub atributos tomemos como ejemplo el ambiente de una casa, este puede variar en el tamaño del ambiente o tambien en el tipo de ambiente.

Esto se puede representar con ramitas.`}/>
        <Txt codigo={`       (  Ambiente  )
       |            |
  ( tamaño )     ( tipo )`}/>
        <h2>Atributos multivalor</h2>
        <Conseptos texto={`Estos tienen mas de un valor
Un ejemplo seria.`}/>
        <ol>
          <li>el ambiente</li>
          <li>las ventanas</li>
          <li>las puertas</li>
        </ol>
        <Conseptos texto={`Esto debido a que hay mas de un ambiente , hay mas de una puerta y hay mas de una ventana.
A estos se les representa con dos obalos.`}/>
        <Txt codigo={`((ambiente)) ((puertas)) ((ventanas))`}/>
        <h2>Atributos derivados</h2>
        <Conseptos texto={`Estos pueden obtener una informacion a partir de otra informacion.
En el ejemplo de la casa seria la antiguedad y la fecha de construccion o la direccion y la ubicacion.`}/>
        <ol>
          <li><Conseptos texto={`antiguedad/fecha de construccion: En este si la casa se construyo el 1 de enero del 2000 podemos saber que actualmente la casa tiene una antiguedad de 24 añoss.`}/></li>
          <li><Conseptos texto={`direccion/ubicacion: A la ubicacion la podemos obtener a partir de la direccion.`}/></li>
        </ol>
        <h2>Key</h2>
        <Conseptos texto={`los key son un identificador unico que no se pueden repetir por ejemplo al registrar una casa en registro de propiedad se te da un identificador unico osea que pueden haber dos casas completamente iguales pero no seran los mismo porque sus identificadores cambiaran.`}/>
      </main>
      <Footer />
    </>
  )
}

export default ChenMySql;