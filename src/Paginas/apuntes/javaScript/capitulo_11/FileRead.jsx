import Conseptos from "../../../../componentes/conseptos/conseptos";
import Html from "../../../../componentes/lenguajes/Html";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";
import Footer from "../../../../componentes/menus/Footer";
import { useRef } from "react";

function FileReadJs() {
  const archivo = useRef(null);
  const multiple = useRef(null);
  const multimedia = useRef(null);
  const leer =()=>{
    leerArchivo(archivo.files[0])
  }
  const leerArchivo = archivo =>{
    const reader = new FileReader;
    reader.readAsText(archivo);
    reader.addEventListener("load",(e)=>{
        console.log(e.currentTarget.result)
    });
  }

  const leer2 =()=>{
    leerArchivo2(archivo.files[0])
  }
  const leerArchivo2 =archivo=>{
    for(let i in archivo){
      const reader = new FileReader;
      reader.readAsText(archivo[i]);
      reader.addEventListener("load",(e)=>{
          console.log(e.currentTarget.result)
      });
    }
  }

  const leer3 =()=>{
    leerArchivo3(archivo.file[0])
  }
  const leerArchivo3 =archivo=>{
    for(let i in archivo){
      const reader = new FileReader();
      reader.readAsDataURL(archivo[i]);
      reader.addEventListener("load",(E)=>{
          console.log(e.currentTarget.result);
      })
    }
  }

  return (  
    <>
      <main>
        <h1>FileReader</h1>
        <Conseptos texto={`A FileReader lo usamos cuando trabajamos con eventos por ejemplo si llamamos a "FileReader" nos mostrara todo null.`}/>
        <h2>ejemplo</h2>
        <JavaScropt codigo={`const reader__ = new FileReader;
console.log(reader__);
//estamos creando un nuevo objeto.`}/>
        <Conseptos texto={`entes de continuar explicaremos la diferencia entre "fetch" y "FileReader".
fetch:
Esto leera archivos qye ya estan predefinidos en un servidor.
FileReader:
Esto leera archivos que el usuario escoja osea archivos que no estan predefinidos.

El evento "change" detectara si hay un cambio en algun evento.

Con esto solo estamos leendo solo un archivo que el usuario selecciono.`}/>
        <Html codigo={`<input type="file" id="archivo">`}/>
        <JavaScropt codigo={`const archivo = document.getElementById("archivo")
archivo.addEventListener("change",(e)=>{
    console.log(archivo.files[0])
})
//con esto estamos leendo el archivo que el usuario escogio.`}/>
        <h2>readAsText</h2>
        <Conseptos texto={`Esto solo puede leer archivos de texto.`}/>
        <Html codigo={`<input type="file" id="archivo">`}/>
        <JavaScropt codigo={`const archivo = document.getElementById("archivo")
archivo.addEventListener("change",(e)=>{
    leerArchivo(archivo.files[0])
}) 
const leerArchivo = archivo =>{
    const reader = new FileReader;
    reader.readAsText(archivo);
    reader.addEventListener("load",(e)=>console.log(e));
}
//con esto veremos el prototipo del archivo que el usuario selecciono.`}/>
        <JavaScropt codigo={`const archivo = document.getElementById("archivo")
archivo.addEventListener("change",(e)=>{
    leerArchivo(archivo.files[0])
})
const leerArchivo = archivo =>{
    const reader = new FileReader;
    reader.readAsText(archivo);
    reader.addEventListener("load",(e)=>{
        console.log(e.currentTarget.result)
    });
}`}/>
        <Conseptos texto={`Con esto veremos el resultado de un archivo que tenga texto.`}/>
        <div className="website">
          <input type="file" ref={archivo} onChange={leer}/>
        </div>
        <Conseptos texto={`Con esto estamos leendo varios archivos de texto que el usuario selecciono.

Consejo para seleccionar multiples archivos debemos apretar ctrl.`}/>
        <Html codigo={`<input type="file" id="archivo" multiple>`}/>
        <JavaScropt codigo={`const archivo = document.getElementById("archivo")
archivo.addEventListener("change",(e)=>{
    leerArchivo(archivo.files[0])
})
const leerArchivo = archivo =>{
    for(let i in archivo){
        const reader = new FileReader;
        reader.readAsText(archivo[i]);
        reader.addEventListener("load",(e)=>{
            console.log(e.currentTarget.result)
        });
    }
}`}/>
        <Conseptos texto={`Con esto estamos leendo multiples archivos que selecciono el usuario.`}/>
        <div className="website">
          <input type="file" ref={multiple} multiple onChange={leer2} />
        </div>

        <h2>readAsDataUrl</h2>
        <Conseptos texto={`Esto lee archivos como imagenes , videos , etc.`}/>
        <Html codigo={`<input type="file" id="archivo" multiple>`}/>
        <JavaScropt codigo={`const archivo = document.getElementById("archivo");
archivo.addEventListener("change",(e)=>{
    leerArchivo(archivo.file[0])
})
const leerArchivo = archivo => {
    for(let i in archivo){
        const reader = new FileReader();
        reader.readAsDataURL(archivo[i]);
        reader.addEventListener("load",(E)=>{
            console.log(e.currentTarget.result);
        })
    }
}`}/>
        <div className="website">
          <input type="file"  ref={multimedia} multiple onChange={leer3} />
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default FileReadJs;