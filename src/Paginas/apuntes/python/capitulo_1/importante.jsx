import Conseptos from "../../../../componentes/conseptos/conseptos";
import Footer from "../../../../componentes/menus/Footer";

function ImportantePy() {
  return (  
    <>
      <main>
        <h1>Importante de python</h1>
        <h2>como usar</h2>
        <Conseptos texto={`Para usar python debemos crear un archivo con la extencion ".py".
algo asi:
"primer_proyecto.py"
Si estamos en vscode y queremos ver los resultados debemos de presionar F5 y seleccionar la primera opcion luego el resultado de nuestro programa aparecera en la terminal , para abrir la terminal se debe presionar "ctrl + ñ" si el teclado esta en español o "ctrl + \`" si el teclado esta en ingles.`}/>
      </main>
      <Footer/>
    </>
  );
}

export default ImportantePy;