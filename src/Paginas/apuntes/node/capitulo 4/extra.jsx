import Footer from "../../../../componentes/menus/Footer";
import Conseptos from "../../../../componentes/conseptos/conseptos";
import JavaScropt from "../../../../componentes/lenguajes/JavaScript";

function ExtraNode(){
  return (
    <>
      <main>
        <h1>Cosas extra de express.</h1>
        <Conseptos texto={`Ahora veremos cosas extra de express que seran muy utiles.`}/>
        <h2>json</h2>
        <Conseptos texto={`En vez de usar "res.send(contenido)" podriamos usar un metodo para asegurarnos de siempre mandar un archivo json al cliente.`}/>
        <JavaScropt codigo={`ruta.get("/",(req,res)=>{
  res.json(base);
})`}/>
        <h2>Consumir</h2>
        <Conseptos texto={`Ahora vamos a configurar nuestro servidor para que pueda ser consumido por el front-end.`}/>
        <JavaScropt codigo={`app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});`}/>
      </main>
      <Footer />
    </>
  )
}

export default ExtraNode;