import Capitulos from "../../../../../aside";
import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Html from "../../../../../componentes/lenguajes/Html";
import Footer from "../../../../../componentes/menus/Footer";
import Menu2 from "../../../../../componentes/menus/Menu2";

function Formularios() {
  return (  
    <>
      <Menu2 />
      <Capitulos />
      <main>
        <h1>formularios</h1>
        <Conseptos texto={`Formularios en HTML: permiten enviar información al servidor. Se crean con <form> y tienen campos de entrada. Al hacer clic en enviar, la información se envía al servidor para ser procesada.

Tambien nosotros mismos podemos procesar la informacion de los inputs para hacer una que otra cosa interesante con javaScript.

Estos tienen un proceso ordenado que pasa cuando se interactua con los inputs.

1: input es lo que envia el usuario osea una entrada de datos.
2: procesamiento es lo que pasa o se hace con los datos.
3: output es lo que recibira el usuario o una escucha.

Ahora veremos como es la estructura de los formularios.
1. Se crea form
2. Input siempre ira dentro de form`}/>

        <Html codigo={`<form>
  <input>
  <input>
</form>
`}/>
        <div className="website">
          <form>
            <input />
            <input />
          </form>
        </div>
        <Conseptos texto={`ahora explicaremos los atributos del input y de form.
  1: "name" aqui va el nombre del input para trabajar con un lenguaje backend por ahora sera irrelevante.
  2: "action" bueno esto tambien es para un lenguaje backend.
  3: "type" es para poner el tipo de formulario que sera de hecho ahora mismo veremos los tipos de inputs.`}/>
        <Html codigo={`<form action="dato">
  <input type="text" name="dato">
</form>`}/>

        <h2>type</h2>
        <Conseptos texto={`1: text esto es para textos.
2: password este es para poder poner contraseñas osea que ocultara los caracteres que se escriban sobre el input.
3: number este es para poner salemente numeros no se podran escribir letras sobre este input.
4: email este es para poner solamente emails si no lo hace saltara un mensaje que debes poner un email.
5: color este es para seleccionar un color.
6: range este es para seleccionar un rango esto a su vez tiene 2 aributos que son "min" y "max" en estos pondremos el minimo y el maximo.
7: date este es para poner una fecha.
8: time este es para poner una hora.
9: button este es para poner un boton este tiene una propiedad llamada "value" que es lo que queremos que diga el boton.
10: submit este es un boton que se encargara de enviar los datos tambien tienen el atributo value.`}/>
        <Html codigo={`<form>
  <input type="text">
  <input type="password">
  <input type="number">
  <input type="email">
  <input type="color">
  <input type="range" min="2" max="25">
  <input type="date">
  <input type="time">
  <input type="button" value="boton">
  <input type="submit">
</form>
`}/>
        <div className="website">
          <form>
            <input type="text" />
            <input type="password" />
            <input type="number" />
            <input type="email" />
            <input type="color" />
            <input type="range" min="2" max="25" />
            <input type="date" />
            <input type="time" />
            <input type="button" value="boton" />
            <input type="submit" />
          </form>

        </div>

        <h2>atributos de input</h2>
        <Conseptos texto={`1: required es para que el usuario tenga que llenar ese input de forma obligatoria.
2: placeholder es para poner un texto indicativo al usuario.`}/>
        <Html codigo={`<form>
  <input type="text" required placeholder="nombre">
  <input type="email"  required placeholder="correo">
  <input type="password" required placeholder="contraseña">
  <input type="text" placeholder="nombre (opcional)">
  <input type="submit" value="enviar todos los datos">
</form>
`}/>
        <div className="website">
          <form>
              <input type="text" required placeholder="nombre" />
              <input type="email"  required placeholder="correo" />
              <input type="password" required placeholder="contraseña" />
              <input type="text" placeholder="nombre (opcional)" />
              <input type="submit" value="enviar todos los datos" />
          </form>
        </div>
        
        <h2>textArea</h2>
        <Conseptos texto={`En este input se puede escribir lo que sea y ademas se puede agrandar o achicar como queramos.

readonly es una propiedad que evita que el usuario pueda escribir sobre ella.`}/>
        <Html codigo={`<textarea>
  aqui si puedes escribir
</textarea>
<textarea readOnly>
  aqui no puedes escribir
</textarea>`}/>
        <div className="website">
          <textarea>
            aqui si puedes escribir
          </textarea>
          <textarea readOnly>
            aqui no puedes escribir
          </textarea>
        </div>
          
          <h1>value</h1>
          <Conseptos texto={`Esta propiedad es muy importante y la usaremos con javaScript.
value es una propiedad que asepta el valor de los input por ejemplo si el usuario escribe "hola" el value captara a ese input como "hola".`}/>
        
        <Html codigo={`<form>
  <input type="text" value="esto es un valor">
  <input type="text" value="">
</form>`}/>

        <div className="website">
          <form>
            <input type="text" defaultValue="esto es un valor" />
            <input type="text" defaultValue="" />
          </form>
        </div>

      </main>
      <Footer />
    </>
  );
}

export default Formularios;