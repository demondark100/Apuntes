import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Footer from "../../../../../componentes/menus/Footer";
import Html from "../../../../../componentes/lenguajes/Html";
import Css from "../../../../../componentes/lenguajes/Css";
import "./propiedadesText.css"

function PropiedadesTexto() {
  return (  
    <>
      <main>
        <h1>propiedades de texto</h1>
        <Conseptos texto={`Aqui veremos las propiedades de las letras empecemos con:

{fontSize}
esta propiedad ya la vimos en la parte de unidades pero por si no lo recuerdas era para cambiar el tamaño de una letra.`} 
enlaces={
  {
    fontSize: {text: "font-size", url: "../css/capitulo 1/unidades"}
  }
} 
  targetBlank={true} />

        <h2>font-family</h2>
        <Conseptos texto={`esta pripiedad es la tipografia de las letras.`}/>
        
        <Html codigo={`<p class="tipografia">
  esto es la tipografia.
</p>`}/>
        
        <Css codigo={`.tipografia{
  font-family: cursive;
}`}/>
        <div className="website">
          <p className="tipografia">
            esto es la tipografia.
          </p>
        </div>

        <h2>line-height</h2>
        <Conseptos texto={`Esta propiedad es cuanto ocupara de arriba a abajo una oracion o palabra por ejemplo si ponemos 2 ocupara mas espacio y las letras se centraran.`}/>
        <h2>ejemplo</h2>
        
        <Html codigo={`<p class="line_height">
  esto ocupara mas espacio en cuention de altura.
</p>`}/>
        
        <Css codigo={`.line_height{
  line-height: 2;
}`}/>
        <div className="website">
          <p className="line_height">
            esto ocupara mas espacio en cuention de altura.
          </p>
        </div>

        <h2>font-weight</h2>
        <Conseptos texto={`Esta propiedad hace que las letras sean mas gruesas osea que las lineas que dibujan las letras no sean tan delgadas.`}/>
        
        
        <Html codigo={`<p id="grosor">
  estas letras seran mas gruesas.
</p>`}/>
        
        <Css codigo={`#grosor{
  font-weight: 800;
}`}/>
        <Conseptos texto={`puedes ir jugando con los valores en vez de 800 ponerle 300 o 400 tu decides.`}/>
        <div className="website">
          <p id="grosor">
            estas letras seran mas gruesas.
          </p>
        </div>


        <h2>importar tipografias de google</h2>
        <Conseptos texto={`{tipografia} para ir a las tipografias de google.

1. buscar una tipografia que te guste.

2. hacer click en la tipografia.

3. una vez dentro de la tipografia hacer click en el ultimo icono de la parte de arriba a la derecha su le pasas el mouse por encima debe decir "viwe selected families".

4. copiar donde dice "use on the web" eso se debe pegar en el "head" del sitio web.

5. copiar la parte de abajo donde dice "CSS rules to specify families" ese sera para darle la tipografia a las letras.`}
enlaces={
  {
    tipografia: {text: "click aqui", url: "https://fonts.google.com/"}
  }
} 
  targetBlank={true}
/>
        
        <Html codigo={`<head>
  <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Rubik+Gemstones&display=swap" rel="stylesheet">
</head>
<body>
  <main>
    <p class="tipografia_google">
      esta tipografia me gusto :D
    </p>
  </main>
</body>`}/>
        <Css codigo={`.tipografia_google{
  font-family: 'Rubik Gemstones', cursive;
}`}/>
        <Conseptos texto={`si te das cuenta hay una coma con otra tipografia bueno esa tipografia esta por defecto en css en el caso de que la tipografia de google no funcione se pondra la tipografia de css que puesimos.`}/>
        <div className="website">
          <p className="tipografia_google">
            esta tipografia me gusto :D
          </p>
        </div>

      </main>
      <Footer />
    </>
  );
}

export default PropiedadesTexto;