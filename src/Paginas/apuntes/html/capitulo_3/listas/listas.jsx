import Capitulos from "../../../../../aside";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";

function Listas() {
  return (  
    <>
      <Menu2 />
      <Capitulos />
      <main>
        <h1>Listas</h1>
        <Conseptos texto={`Existen dos tipos de listas las ordenada y las desordenadas.
Ordenada:
<ol></ol>
Desordenada:
<ul></ul>
Estos tienen una etiqueta que es obligatoria poner la cual es <li> ahora veremos como es la estructura.`}/>
        <Html codigo={`<!-- Ordenadas -->
<ol>
  <li>contenido</li>
  <li>podemos poner cuantos "li" queramos</li>
</ol>
<!-- Desordenadas -->
<ul>
  <li>contenido</li>
  <li>podemos poner cuantos "li" queramos</li>
<ul>`}/>
        <h2>ejercicio 1</h2>
        <Conseptos texto={`crear una lista ordenada que muestre animes populares.`}/>
        <Html codigo={`<!DOCTYPE html>
<html>
  <head>
    <title>lista ordenada</title>
  </head>
  <body>
    <h1>Animes populares lista</h1>
    <ol>
      <li>Re zero</li>
      <li>Hight school dxd</li>
      <li>Blood c</li>
      <li>Tate no yuusha</li>
      <li>Shingeki no kyojin</li>
    </ol>
  </body>
</html>`}/>
        <div className="website">
          <h5>Animes populares lista</h5>
          <ol>
            <li>1. Re zero</li>
            <li>2. Hight school dxd</li>
            <li>3. Blood c</li>
            <li>4. Tate no yuusha</li>
            <li>5. Shingeki no kyojin</li>
          </ol>
        </div>

        <h2>ejercicio 2</h2>
        <Conseptos texto={`Hacer el mismo ejercicio pero con listas desordenadas.`}/>
        <Html codigo={`<!DOCTYPE html>
<html>
  <head>
    <title>lista desordenada</title>
  </head>
  <body>
    <h1>Animes populares lista</h1>
    <ul>
      <li>Re zero</li>
      <li>Hight school dxd</li>
      <li>Blood c</li>
      <li>Tate no yuusha</li>
      <li>Shingeki no kyojin</li>
    </ul>
  </body>
</html>`}/>
        <div className="website">
        <h5>Animes populares lista</h5>
          <ul>
            <li>• Re zero</li>
            <li>• Hight school dxd</li>
            <li>• Blood c</li>
            <li>• Tate no yuusha</li>
            <li>• Shingeki no kyojin</li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Listas;