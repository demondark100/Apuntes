import Conseptos from "../../../../componentes/conseptos/conseptos";
import Footer from "../../../../componentes/menus/Footer";
import Terminal from "../../../../componentes/lenguajes/Terminal";
import Resumenes from "../../../../componentes/resumenes/resumenes";

function CreacionReact() {
  return (  
    <>
      <Resumenes contenido={[{
        "mensaje": "Crear una app de react con create-react-app.",
        "lenguage": "Terminal",
        "codigo": `#crear app de react
npx create-react-app mi-app
# iniciar servidor
npm start`
      },
      {
        "mensaje": "Crear una app de react con vite.",
        "lenguage": "Terminal",
        "codigo": `# crear aplicacion de react
npm create vite@latest
# instalar dependencias
npm install
# iniciar servidor
npm run dev`
      }]}/>
      <main>
        <h1>creacion de react</h1>
        <Conseptos texto={`Para poder crear una aplicacion de react necesitamos de {node} para poder usar esta libreria.
Una vez tengamos node.js instalado en vs code podemos abrir la terminal con "ctr + \`" si el teclado esta en ingles pero si esta en español con "ctr + ñ" es como usar git xd.`}
          enlaces={{node:{text:"node.js",url:"https://nodejs.org/en"}}}
          targetBlank={true}/>
          <h2>create-react-app</h2>
          <Terminal codigo={`npx create-react-app nombre de la aplicacion`}/>
          <h3>ejemplo</h3>
          <Terminal codigo={`npx create-react-app primer_proyecto`}/>
          <Conseptos texto={`Luego podemos iniciar el servidor local con npm start , para eso debes de estar dentro de la carpeta de la aplicacion de react.`}/>
          <Terminal codigo={`npm start`}/>

          <h2>vite</h2>
          <Conseptos texto={`Esta es otra forma de crear una app en react es mas rapida m pero puedes usar create-react-app es lo mismo.`}/>
          <Terminal codigo={`npm create vite@latest`}/>
          <Conseptos texto={`Probablemente te preguntes deseas continuar tu pones en "Y" , y alli eliges el tipo de proyecto en este caso react.

Una vez se creo el proyecto debes poner.`}/>
        <Terminal codigo={`npm install`}/>
        <Conseptos texto={`Esto para que se instalen las dependencias de react.
Luego para correr el servidor local debemos ejecutar el comando.`}/>
          <Terminal codigo={`npm run dev`}/>
      </main>
      <Footer/>
    </>
  );
}

export default CreacionReact;