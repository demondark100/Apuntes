import Conseptos from "../../../../../componentes/conseptos/conseptos";
import Footer from "../../../../../componentes/menus/Footer";
import "./dragDrop.css";
import JavaScropt from "../../../../../componentes/lenguajes/JavaScript";
import Html from "../../../../../componentes/lenguajes/Html";
import Css from "../../../../../componentes/lenguajes/Css";
import Resumenes from "../../../../../componentes/resumenes/resumenes";

function DragDropJs() {
  const deagOver =(e)=>{
    e.preventDefault();
    console.log("me estoy moviendo dentro del rectangulo");
  }
  const transferir =(e)=>{
    e.dataTransfer.setData("class",e.target.className)
    let mostrar = e.dataTransfer.getData("class")
    console.log(mostrar)
  }
  return (  
    <>
      <Resumenes contenido={[{
        mensaje: `Esta api sirve para arrastrar y soltar un elemento html y a mediada que hacemos eso que se ejecute alguna funcion.`,
        lenguage: "JavaScropt",
        codigo: `addEventListener("dragstart",()=>console.log(1)) // inicio del arrastre
addEventListener("drag",()=>console.log(2)) // arrastre
addEventListener("dragend",()=>console.log(3)) // final del arrastre
addEventListener("dragenter",()=>console.log(2)) // verifica que un elemento arrastrado esta siendo arrastrado a otro elemento.
addEventListener("dragover",()=>console.log(2)) // verifica que el elemento arrastrado se muesva dentro del elemento donde se ejecutara "dragend".
addEventListener("drop",()=>console.log(2)) // verifica que se suelte un elemento.
addEventListener("dragleave",()=>console.log(2)) // se ejecuta cuando el elemento que se esta arrastrando se sale del elemento donde se recibira el arrastre.`
      }]}/>
      <main>
        <h1>Drag y Drop</h1>
        <Conseptos texto={`Drag y Drop es el arrastre y desplazamiento de los elementos , todos los objetos tienen drag osea que si arrastras cualquier objeto el ebjeto sentira el drag a la hora de desplazarlo.`}/>
        <h2>dragstart</h2>
        <Conseptos texto={`Esto es el inicio del arrastre.`}/>
        <h2>drag</h2>
        <Conseptos texto={`Esto es el desplazamiento.`}/>
        <h2>dragend</h2>
        <Conseptos texto={`Esto es cuando el desplazamiento finaliza`}/>
        <Html codigo={`<div class="content">
  <div class="circulo"></div>
  <div class="cuadrado"></div>
</div>`}/>
        <Css codigo={`.content{
    margin: auto;
    background-color: whitesmoke;
    width: 250px;
    height: 150px;
    padding: 10px;
}
.circulo{
    background-color: #f00;
    width: 45px;
    height: 35px;
    border-radius: 100%;
}
.cuadrado{
    margin-top: 20px;
    width: 95%;
    height: 65px;
    background-color: #00f;
}
.content b {
    color: #000;
}

@media(min-width:800px){
    .content{
        margin: auto;
        background-color: whitesmoke;
        width: 450px;
        height: 200px;
        padding: 20px;
    }
    .circulo{
        background-color: #f00;
        width: 82px;
        height: 55px;
        border-radius: 100%;
    }
    .cuadrado{
        margin-top: 50px;
        width: 95%;
        height: 85px;
        background-color: #00f;
    }
}`}/>
        <JavaScropt codigo={`const circulo = document.querySelector(".circulo"); 
circulo.addEventListener("dragstart",()=>console.log(1))
circulo.addEventListener("drag",()=>console.log(2))
circulo.addEventListener("dragend",()=>console.log(3))`}/>
        <Conseptos texto={`Desplaza el circulo y veras como aparece 1,2,3 posdata manten el click en el circulo por un momento para que funcione.`}/>
        <div className="website">
          <div className="content">
              <div 
                onDragStart={()=>console.log(1)} 
                onDrag={()=>console.log(2)}
                onDragEnd={()=>console.log(3)} 
                className="circulo">
              </div>
              <div  className="cuadrado"></div>
          </div> 
        </div>

        <h2>dragenter</h2>
        <Conseptos texto={`Esto verifica que el elemento este entrando.`}/>
        <h2>dragover</h2>
        <Conseptos texto={`Este verifica que se mueva dentro del elemento osea que el elemento que arrastramos siga dentro del otro elemento.`}/>
        <h2>drop</h2>
        <Conseptos texto={`Verifica cuando se suelta el elemento que estamos arrastrando.`}/>
        <h2>dragleave</h2>
        <Conseptos texto={`Esto verifica cuando el elemento se va osea se sale del elemento.`}/>
        <Html codigo={`<div class="content">
  <div class="circulo"></div>
  <div class="cuadrado"></div>
</div>`}/>
        <Css codigo={`.content{
    margin: auto;
    background-color: whitesmoke;
    width: 250px;
    height: 150px;
    padding: 10px;
}
.circulo{
    background-color: #f00;
    width: 45px;
    height: 35px;
    border-radius: 100%;
}
.cuadrado{
    margin-top: 20px;
    width: 95%;
    height: 65px;
    background-color: #00f;
}
.content b {
    color: #000;
}

@media(min-width:800px){
    .content{
        margin: auto;
        background-color: whitesmoke;
        width: 450px;
        height: 200px;
        padding: 20px;
    }
    .circulo{
        background-color: #f00;
        width: 82px;
        height: 55px;
        border-radius: 100%;
    }
    .cuadrado{
        margin-top: 50px;
        width: 95%;
        height: 85px;
        background-color: #00f;
    }
}`}/>
        <JavaScropt codigo={`const cuadrado = document.querySelector(".cuadrado") 
cuadrado.addEventListener("dragenter",()=>console.log("me desplazaron dentro del rectangulo")) 
cuadrado.addEventListener("dragover",(e)=>{ 
    e.preventDefault();
    console.log("me estoy moviendo dentro del rectangulo")
})
cuadrado.addEventListener("drop",()=>console.log("me soltaste dentro del rectangulo")) 
cuadrado.addEventListener("dragleave",()=>console.log("me sali del rectangulo"))`}/>
        <div className="website">
          <div className="content">
              <div className="circulo"></div>
              <div
                onDragEnter={console.log("me desplazaron dentro del rectangulo")}
                onDragOver={deagOver}
                onDrop={console.log("me soltaste dentro del rectangul")}
                onDragLeave={console.log("me sali del rectangulo")}
                className="cuadrado">
              </div>
          </div>
        </div>
        <h2>setData y getData</h2>
        <Conseptos texto={`Con esto transferiremos los datos en este caso transferiremos el nombre de la clase del contenido.`}/>
        <Html codigo={`<div class="content">
  <div class="circulo"></div>
  <div class="cuadrado"></div>
</div>`}/>
        <Css codigo={`.content{
    margin: auto;
    background-color: whitesmoke;
    width: 250px;
    height: 150px;
    padding: 10px;
}
.circulo{
    background-color: #f00;
    width: 45px;
    height: 35px;
    border-radius: 100%;
}
.cuadrado{
    margin-top: 20px;
    width: 95%;
    height: 65px;
    background-color: #00f;
}
.content b {
    color: #000;
}

@media(min-width:800px){
    .content{
        margin: auto;
        background-color: whitesmoke;
        width: 450px;
        height: 200px;
        padding: 20px;
    }
    .circulo{
        background-color: #f00;
        width: 82px;
        height: 55px;
        border-radius: 100%;
    }
    .cuadrado{
        margin-top: 50px;
        width: 95%;
        height: 85px;
        background-color: #00f;
    }
}`}/>
        <JavaScropt codigo={`const circulo = document.querySelector(".circulo");
circulo.addEventListener("dragstart",(e)=>{
    e.dataTransfer.setData("class",e.target.className)
    let mostrar = e.dataTransfer.getData("class")
    console.log(mostrar)
})`}/>
        <div className="website">
        <div className="content">
            <div onDragStart={transferir} className="circulo"></div>
            <div className="cuadrado"></div>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default DragDropJs;