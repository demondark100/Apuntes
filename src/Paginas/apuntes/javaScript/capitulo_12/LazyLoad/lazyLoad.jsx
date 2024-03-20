import React, { useEffect, useRef, useState } from 'react';
import Conseptos from '../../../../../componentes/conseptos/conseptos';
import Css from '../../../../../componentes/lenguajes/Css';
import Html from '../../../../../componentes/lenguajes/Html';
import JavaScropt from '../../../../../componentes/lenguajes/JavaScript';
import Json from '../../../../../componentes/lenguajes/Json';
import Footer from '../../../../../componentes/menus/Footer';
import texto from './lazyLoad.json';
import './lazyLoad.css';
import Resumenes from "../../../../../componentes/resumenes/resumenes";

const Publication = ({ name, content }) => (
  <div className="publicacion">
    <h3>{name}</h3>
    <p>{content}</p>
    <div className="comentarios">
      <input type="text" className="comentario" placeholder="introduce un comentario" />
      <input type="submit" className="enviar" />
    </div>
  </div>
);

const LazyLoadJs = () => {
  const publicacionesRef = useRef(null);
  const [publicaciones, setPublicaciones] = useState([]);
  let contador = 0;
  let observer = null;

  const createPublicationCode = (name, content) => {
    return (
      <Publication key={contador} name={name} content={content} />
    );
  };

  const cargarMasPublis = (entries) => {
    if (entries[0].isIntersecting) {
      cargarPublicaciones(4);
    }
  };

  useEffect(() => {
    const options = {
      rootMargin: '50px',
      threshold: 1.0,
    };

    observer = new IntersectionObserver(cargarMasPublis, options);
    observer.observe(publicacionesRef.current);

    return () => {
      if (observer) {
        observer.disconnect();
        observer = null;
      }
    };
  }, []);

  const cargarPublicaciones = async (num) => {
    const arr = texto.contenedor;
    const nuevasPublicaciones = [];
    for (let i = 0; i < num; i++) {
      if (arr[contador] !== undefined) {
        const newPublicacion = createPublicationCode(arr[contador].nombre, arr[contador].content);
        nuevasPublicaciones.push(newPublicacion);
        contador++;
      } else {
        break;
      }
    }
    setPublicaciones(prevPublicaciones => [...prevPublicaciones, ...nuevasPublicaciones]);
  };

  useEffect(() => {
    cargarPublicaciones(5);
  }, []);

  return (
    <>
      <Resumenes contenido={[{
        mensaje: `Con esta tecnica haremos que los recursos de una web se carguen a medida que el usuario lo solicite, esto bemeficia en el rendimiento.`
      }]}/>
      <main>
        <h1>Lazy Load</h1>
<Conseptos texto={`Esto nos servira para ir cargando contenido de poco a poco ahora un ejemeplo.`}/>
<Html codigo={`<div class="publicaciones">
  <div class="publicacion">
    <h3>red social falsa</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis laborum ab quo, architecto sed adipisci sunt iusto qui fuga ipsum, magnam, aut id optio commodi ullam eaque facilis autem doloribus?
    </p>
    <div class="comentarios">
      <input type="text" class="comentario" placeholder="introduce un comentario">
      <input type="submit" class="enviar">
    </div>
  </div>
</div>`}/>
<Json codigo={`{
"contenedor":[
    {
      "nombre": "usuario 1",
      "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt perferendis adipisci deleniti soluta quam, possimus pariatur quos officiis, qui necessitatibus. Dolorem illo hic deserunt. Fugit, numquam."
    },
    {
      "nombre": "usuario 2",
      "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt perferendis adipisci deleniti soluta quam, possimus pariatur quos officiis, qui necessitatibus. Dolorem illo hic deserunt. Fugit, numquam."
    },
    {
      "nombre": "usuario 3",
      "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt perferendis adipisci deleniti soluta quam, possimus pariatur quos officiis, qui necessitatibus. Dolorem illo hic deserunt. Fugit, numquam."
    },
    {
      "nombre": "usuario 4",
      "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt perferendis adipisci deleniti soluta quam, possimus pariatur quos officiis, qui necessitatibus. Dolorem illo hic deserunt. Fugit, numquam."
    },
    {
      "nombre": "usuario 5",
      "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt perferendis adipisci deleniti soluta quam, possimus pariatur quos officiis, qui necessitatibus. Dolorem illo hic deserunt. Fugit, numquam."
    },
    {
      "nombre": "usuario 6",
      "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt perferendis adipisci deleniti soluta quam, possimus pariatur quos officiis, qui necessitatibus. Dolorem illo hic deserunt. Fugit, numquam."
    },
    {
      "nombre": "usuario 7",
      "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt perferendis adipisci deleniti soluta quam, possimus pariatur quos officiis, qui necessitatibus. Dolorem illo hic deserunt. Fugit, numquam."
    },
    {
      "nombre": "usuario 8",
      "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt perferendis adipisci deleniti soluta quam, possimus pariatur quos officiis, qui necessitatibus. Dolorem illo hic deserunt. Fugit, numquam."
    },
    {
      "nombre": "usuario 6",
      "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt perferendis adipisci deleniti soluta quam, possimus pariatur quos officiis, qui necessitatibus. Dolorem illo hic deserunt. Fugit, numquam."
    },
    {
      "nombre": "usuario 10",
      "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt perferendis adipisci deleniti soluta quam, possimus pariatur quos officiis, qui necessitatibus. Dolorem illo hic deserunt. Fugit, numquam."
    },
    {
      "nombre": "usuario 11",
      "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt perferendis adipisci deleniti soluta quam, possimus pariatur quos officiis, qui necessitatibus. Dolorem illo hic deserunt. Fugit, numquam."
    },
    {
      "nombre": "usuario 12",
      "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt perferendis adipisci deleniti soluta quam, possimus pariatur quos officiis, qui necessitatibus. Dolorem illo hic deserunt. Fugit, numquam."
    }
  ]
}`}/>
<Css codigo={`h3{
  padding: 20px;
}
.publicaciones{
  text-align: left;
  margin: 20px;
  color: #50cbe0;
  animation: aparecer 1s forwards 0.5s;
  opacity: 0;
}
.publicaciones h3{
  border-bottom: 2px solid #48e;
  display: inline block;
}
.publicaciones p {
  padding: 10px 20px;
  border-left: 2px solid #48e;
}
.comentarios{
  display: flex;
}
.comentarios input{
  padding: 0 10px;
}
.comentarios input::placeholder{
  color: #eee;
}
.comentarios .comentario {
  flex-grow: 1;
  border: none;
  outline: none;
  color: #e7e4ff;
  background-color: #8b899c;
}
.comentarios .enviar{
  min-width: 50px;
  padding: 8px;
  border: none;
  outline: none;
  color: #e7e4ff;
  background-color: #8b899c;
}

@keyframes aparecer {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}`}/>
<JavaScropt codigo={`const publicaciones = document.querySelector(".publicaciones");
let contador = 0;

const createPublicationCode = (name,content) => {
  const container = document.createElement("DIV");
  const comentarios = document.createElement("DIV");
  const nombre = document.createElement("H3");
  const contenido = document.createElement("P")
  const btnEnviar = document.createElement("INPUT");
  const btnComentario = document.createElement("INPUT");

  container.classList.add("publicacion");
  comentarios.classList.add("comentarios");
  btnEnviar.classList.add("enviar");
  btnComentario.classList.add("comentario");
  btnEnviar.type = "submit";

  btnComentario.setAttribute("placeholder","Introduce un comentario.");
  nombre.textContent = name;
  contenido.textContent = content;
  comentarios.appendChild(btnComentario);
  comentarios.appendChild(btnEnviar);

  container.appendChild(nombre);
  container.appendChild(contenido);
  container.appendChild(comentarios);

  return container;
}


const cargarMasPublis = entry =>{
  if (entry[0].isIntersecting) {
    cargarPublicaciones(4)
  }
}
const observer = new IntersectionObserver(cargarMasPublis)

const cargarPublicaciones = async num =>{
  const request = await fetch("LazyLoad.txt");
  const content = await request.json();
  let arr = content.contenedor;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < num; i++) {
    if (arr[contador] != undefined) {
      const newPublicacion = createPublicationCode(arr[contador].nombre,arr[contador].content)
      fragment.appendChild(newPublicacion)
      contador++;
      if (i = num - 1) {
          observer.observe(newPublicacion)
      }   
    } else{
      let noMore = document.createElement("H3");
      noMore.textContent = "no hay mas publicaciones";
      fragment.appendChild(noMore)
      publicaciones.appendChild(fragment)
      break;
    }
  }
  publicaciones.appendChild(fragment)
}
cargarPublicaciones(5)`}/>



        <div className="publicaciones" ref={publicacionesRef}>
          {publicaciones}
        </div>
      </main>
      <Footer/>
    </>
  );
};

export default LazyLoadJs;