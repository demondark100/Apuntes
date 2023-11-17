import Conseptos from "../../../../componentes/conseptos/conseptos";
import ReactCode from "../../../../componentes/lenguajes/React";
import Footer from "../../../../componentes/menus/Footer";

function HooksPerReact() {
  return (  
    <>
      <main>
        <h1>Hooks personalizador</h1>
        <Conseptos texto={`Esto nos sirve para poder crear una funcion que usaremos muchas veces en nuestra aplicacion de react.`}/>
        <h2>pasos par usar los hooks personalizados</h2>
        <ol>
          <li>crear una nueva carpeta.</li>
          <li>al archivo que creemos siempre su nombre debe iniciar con use ejemplo "useFunction" o "useComponent" puede ser cualquier nombre solo asegurate que lleve use para que react detecte que es un hooks personalizado.</li>
        </ol>
        <h2>ejercicio</h2>
        <Conseptos texto={`Hacer una funcion que haga una peticion con fetch , recuerda que ya hicimos esa funcion podemos reusarla pero quitaremos la logica de ingresar las imagenes , el nombre y la funcion solo llamara a la API y controlaremos los posibles errores.`}/>
        <h2>hook personalizado</h2>
        <ReactCode codigo={` export const useFetch=(url)=>{
  const [data,setData] = useState(null);
  const [estaPendiente,setEstaPendiente] = useState(true);
  const [error,setError] = useState(null);

  useEffect(()=>{
    const getData=async(url)=>{
      let res = await fetch(url)
      try {
        if (!res.ok) {
          throw {
            error: true,
            status: res.status,
            statusText: res.statusText ? "ocurrio un error": res.statusText
          }
        }  
        let data = await res.json();
        setEstaPendiente(false)
        setData(data)
        setError(null)

      } catch (error) {
        setEstaPendiente(true)
        setError(error)
      }
    }
    getData(url)
  }, [url])

  return {data , estaPendiente , error}

}`}/>
        <h2>componente que usara la funcion</h2>
        <ReactCode codigo={`import React from "react";

import { useFetch } from "../peticion/useFetch";

function Hooks() {

  let url = "https://pokeapi.co/api/v2/pokemon/"

  const {data,estaPendiente,error} = useFetch(url)  

  return (
    <div>
      <h3>{JSON.stringify(estaPendiente)}</h3>
      <h3>{JSON.stringify(error)}</h3>
      <h3>{JSON.stringify(data)}</h3>
    </div>
  )
}

export default Hooks;`}/>
      </main>
      <Footer/>
    </>
  );
}

export default HooksPerReact;