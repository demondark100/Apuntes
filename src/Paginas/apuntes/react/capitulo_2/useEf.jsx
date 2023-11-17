import Conseptos from "../../../../componentes/conseptos/conseptos";
import ReactCode from "../../../../componentes/lenguajes/React";
import Sintaxis from "../../../../componentes/lenguajes/Sintaxis";
import Footer from "../../../../componentes/menus/Footer";

import {React,useState,useEffect} from "react"

function Scroll(){

  const [scrollY,setScrollY] = useState(0);

  useEffect(()=>{
    console.log("fase de actualizacion");

    const mostrarScroll=()=> setScrollY(window.pageYOffset);
    window.addEventListener("scroll",mostrarScroll)

    return()=>{
      window.removeEventListener("scroll",mostrarScroll)
    }

  } , [scrollY])

  return(
    <div>
      <h6>scroll nav</h6>
      <p>el scrolleo y es de: {scrollY}px</p>
    </div>
  )
}


function Hora({hora}) {
  return <h5>{hora}</h5>
}

function Reloj(){

  const [hour,setHour] = useState(new Date().toLocaleTimeString());
  const [visible,setVisible] = useState(false);


  useEffect(()=>{
    let temporizador;

    if (visible) {
      temporizador = setInterval(() => {
        setHour(new Date().toLocaleTimeString())
      }, 1000);
    } else{
      clearInterval(temporizador)
    }

    return ()=>{
      console.log("se demonto")
      clearInterval(temporizador)
    }

  },[visible])

  return(
    <div>
      <h4>reloj con hoks</h4>
      {visible && <Hora hora={hour}/>}
      <button onClick={()=>setVisible(true)}>iniciar</button>
      <button onClick={()=>setVisible(false)}>detener</button>
    </div>
  )
}



function Pokemon({ image, name }) {
  return (
    <div>
      <img src={image} alt={name} />
      <h6>{name}</h6>
    </div>
  );
}

function PokemonApi() {
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const json = await response.json();

      const pokemonesData = await Promise.all(
        json.results.map(async (poke) => {
          const res = await fetch(poke.url);
          const data = await res.json();

          return {
            id: data.id,
            name: data.name,
            image: data.sprites.front_default,
          };
        })
      );

      setPokemones(pokemonesData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h5>pokemones</h5>
      {
        pokemones.length === 0
          ? "cargando..."
          : pokemones.map((el) => (
              <Pokemon key={el.id} name={el.name} image={el.image} />
            ))
      }
    </div>
  );
}



function UseEfReact() {
  return (  
    <>
      <main>
        <h1>useEffect</h1>
        <h2>tiempo de vida en los compinentes</h2>
        <Conseptos texto={`Nacemos, crecemos y luego morimos. Casi todo sigue este ciclo en su vida, y los componentes de React también lo hacen. Los componentes se crean (se montan en el DOM), crecen mediante la actualización y luego mueren (se desmontan en el DOM). Esto se conoce como ciclo de vida de un componente.

Con useEdffect podremos representar el tiempo de vida de los componentes en clase , en simples palabras podremos simular las 3 fases.`}/>
        <ol>
          <li>componentDidMount: el montaje es el proceso por medio del cual el componente es construido y renderizado en pantalla por primera vez, por lo tanto, se considera montado solo cuando el componente ya es visible en pantalla y ya es parte del Document Object Model (DOM).</li>
          <li>componentDidUpdate: la actualización es el proceso por medio del cual un componte ya montado es actualizado, ya sea por cambiar el state o las props.</li>
          <li>componentWillUnmount: el desmontaje es el proceso por medio del cual un componte es destruido y finalmente removido del Document Object Model (DOM), lo que implica que no sea visible en pantalla.</li>
        </ol>
        <Sintaxis codigo={`useEffect(()=>{
  
  // fase de actualizacion / componentDidUpdate:

  // effect: para renderizar useEffect ejecutara todo lo que este en esta funcion.
  
  return(){

    // fase de desmontaje / componentWillUnmount


  }

},[input / fase de montaje / componentDidMount])`}/>
        <h2>detectar scroll</h2>
        <Conseptos texto={`Para entender mejor hagamos un ejercicio que es detectar el desplazamiento del scrollY usando useState y useRffect.`}/>
        <ReactCode codigo={` import {React,useState,useEffect} from "react"

function Scroll(){

  const [scrollY,setScrollY] = useState(0);

  useEffect(()=>{
    console.log("fase de actualizacion");

    const mostrarScroll=()=> setScrollY(window.pageYOffset);
    window.addEventListener("scroll",mostrarScroll)

    return()=>{
      window.removeEventListener("scroll",mostrarScroll)
    }

  } , [scrollY])

  return(
    <div>
      <h1>scroll nav</h1>
      <p>el scrolleo y es de: {scrollY}px</p>
    </div>
  )
}

export default Scroll;`}/>
        <ReactCode codigo={`import React from "react";
import Scroll from "./ruta";
export default function App(){
  return <Scroll />
}`}/>
        <div className="website">
          <Scroll />
        </div>

        <h2>hacer un reloj con useEffect</h2>
        <ReactCode codigo={` import {React,useState,useEffect} from "react"

function Hora({hora}) {
  return <h5>{hora}</h5>
}

function Reloj(){

  const [hour,setHour] = useState(new Date().toLocaleTimeString());
  const [visible,setVisible] = useState(false);


  useEffect(()=>{
    let temporizador;

    if (visible) {
      temporizador = setInterval(() => {
        setHour(new Date().toLocaleTimeString())
      }, 1000);
    } else{
      clearInterval(temporizador)
    }

    return ()=>{
      console.log("se demonto")
      clearInterval(temporizador)
    }

  },[visible])

  return(
    <div>
      <h4>reloj con hoks</h4>
      {visible && <Hora hora={hour}/>}
      <button onClick={()=>setVisible(true)}>iniciar</button>
      <button onClick={()=>setVisible(false)}>detener</button>
    </div>
  )
}

export default Reloj;`}/>
        <ReactCode codigo={`import React from "react";
import Reloj from "./ruta";
export default function App(){
  return <Reloj />
}`}/>
        <div className="website">
          <Reloj />
        </div>

        <h2>Api Pokemon</h2>
        <ReactCode codigo={`import React, { useState, useEffect } from "react";

function Pokemon({ image, name }) {
  return (
    <div>
      <img src={image} alt={name} />
      <h6>{name}</h6>
    </div>
  );
}

function PokemonApi() {
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const json = await response.json();

      const pokemonesData = await Promise.all(
        json.results.map(async (poke) => {
          const res = await fetch(poke.url);
          const data = await res.json();

          return {
            id: data.id,
            name: data.name,
            image: data.sprites.front_default,
          };
        })
      );

      setPokemones(pokemonesData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h5>pokemones</h5>
      {
        pokemones.length === 0
          ? "cargando..."
          : pokemones.map((el) => (
              <Pokemon key={el.id} name={el.name} image={el.image} />
            ))
      }
    </div>
  );
}

export default PokemonApi;`}/>
        <ReactCode codigo={`import React from "react";
import PokemonApi from "./ruta";
export default function App(){
  return <PokemonApi />
}`}/>
        <div className="website">
          <PokemonApi />
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default UseEfReact;