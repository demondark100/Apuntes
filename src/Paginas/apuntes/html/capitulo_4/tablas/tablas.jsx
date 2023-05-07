import Capitulos from "../../../../../aside";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";

function Tablas() {
  return (  
    <>
      <Menu2 />
      <Capitulos />
      <main>
        <h1>tablas</h1>
        <Conseptos texto={`las tablas son estructuras que tienen columnas y filas.

<table> con esto decimos al navegador que se cree una tabla.. 
<tr> y <td> asignamos los campos por fila.`}/>

        <h2>ejercicio</h2>

        <Html codigo={`<h2>usuarios</h2>
<table>
  <tr>
    <td>nombr</td>
    <td>apellido</td>
    <td>edad</td>
  </tr>
  <tr>
    <td>Paquito</td>
    <td>Maraza</td>
    <td>18</td>
  </tr>

  <tr>
    <td>nombr</td>
    <td>apellido</td>
    <td>edad</td>
  </tr>
  <tr>
    <td>Maryn</td>
    <td>Kitagawa</td>
    <td>18</td>
  </tr>
</table>`}/>

        <div className="website">
          <h2>usuarios</h2>
          <table>
            <tr>
              <td>nombr</td>
              <td>apellido</td>
              <td>edad</td>
            </tr>
            <tr>
              <td>Paquito</td>
              <td>Maraza</td>
              <td>18</td>
            </tr>

            <tr>
              <td>nombr</td>
              <td>apellido</td>
              <td>edad</td>
            </tr>
            <tr>
              <td>Maryn</td>
              <td>Kitagawa</td>
              <td>18</td>
            </tr>
          </table>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Tablas;