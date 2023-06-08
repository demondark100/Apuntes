import Conseptos from "../../../../componentes/conseptos/conseptos";
import ReactCode from "../../../../componentes/lenguajes/React";
import Footer from "../../../../componentes/menus/Footer";
import { Component } from "react";

function Pokemon({ avatar, name }) {
  return(
    <div>
      <img src={avatar} alt={name} />
      <p>{name}</p>
    </div>
  );
}

export class APIs extends Component {
  state = {
    pokemones: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const json = await response.json();

      const pokemones = await Promise.all(
        json.results.map(async (poke) => {
          const res = await fetch(poke.url);
          const data = await res.json();

          return {
            id: data.id,
            name: data.name,
            avatar: data.sprites.front_default,
          };
        })
      );

      this.setState({ pokemones });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { pokemones, isLoading, error } = this.state;

    if (isLoading) {
      return <p>Cargando 😎😎😎</p>;
    }

    if (error) {
      return <p>ocurrio un error el que hizo esto esta pendejo XD {error.message}</p>;
    }

    return (
      <div>
        {pokemones.map((pokemon) => (
          <Pokemon key={pokemon.id} avatar={pokemon.avatar} name={pokemon.name} />
        ))}
      </div>
    );
  }
}



function ApiPODReact() {
  
  return (  
    <>
      <main>
        <h1>Api con (POD)</h1>
        <Conseptos texto={`Recuerdan que dijimos que en "componentDidMount" se hacian las peticiones bueno ahora lo pondremos a prueba consumiendo la API de pokemon.`}/>
        <h2>consumir la APi de pokemon</h2>
        <h3>codigo explicado</h3>
        <ReactCode codigo={`
// importamos react y component

import React from "react";
import { Component } from "react";


// creamos una funcion que recibira dos parametros uno sera el avatar y otro el nombre para poder mostrarlo en la interfaz.

// despues destructuramos avatar y name para evitar poner pros.avatar y pros.name

function Pokemon({ avatar, name }) {

  // retornamos un div con la imagen y el nombre que actualizara de forma dinamica segun recorra el arreglo. 

  return(
    <div>

      // esta imagen cambia de forma dinamica y el atributo alt recibira el mismo nombre que el parametro name.

      <img src={avatar} alt={name} />

      // este parametro recibira el nombre de los pokemones para mostrarlo en la interfaz.

      <p>{name}</p>
    </div>
  );
}

// creamos y exportamos la clase APIs.

export class APIs extends Component {

  // creamos el estado con tres variables.
  
  // 1: pokemones al principio sera un arreglo vacio que guardara los nombres y las imagenes para mostrar en la interfaz.
  
  // 2: isLoading lo crearemos con false para usarlo despues en conclucion lo usaremos para mostrar un mensaje de "cargando" mienras se van mostrando en la interfaz si tienes una pc rapida no saldra el mensje pero si tienes una patata como yo si saldra :v.

  // 3: error sera la variable que nos mostrara un mensaje en el caso de que algo de la APi no cargue.

  state = {
    pokemones: [],
    isLoading: false,
    error: null,
  };

  // creamos el componente "componentDidMount(recuerda que en este componente se deben hacer las peticiones)" de forma asincrona para que se cargue de forma correcta todo y no de forma aleatoria.

  async componentDidMount() {

    // actualizamos el estado para que "isLoading" sea true luego veras para que el false y el true :v

    this.setState({ isLoading: true });

    // ahora usaremos la estructura de "try catch" para poder mostrar el error en caso de que pase algo inesperado.

    try {

      // creamos la variable response de forma asincrona y usamos fetch para acceder a la APi de pokemon.

      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");

      // ahora creamos una variable json para que guarde response con el metodo json para poder obtener los datos.

      const json = await response.json();

      // creamos la variable pokemones para poder leer todos los datos de forma asincrona.

      const pokemones = await Promise.all(

      // ahora recorremos la variable json que guarda en una promesa encapsulada los datos que queremos.
      
      // despues accedemos a la parte de results donde se encuentra el id para la key , el nombre del pokemon y la imagen del pokemon.
      
      // usamos el metodo forEach para recorrer estos datos , a este le ponemos como parametro poke para poder trabajar con los datos.

        json.results.map(async (poke) => {

          // creamos la variable res que hara una nueva peticion de la APi para acceder a la propiedad url donde se encuentra todo puedes ver todo eso con console.log y veras que estamos accediendo a las propiedades de la APi de forma ordenada.

          const res = await fetch(poke.url);
          
          // creamos data para poder leer los datos de res el cual guarda la url la id y el nombre.
          
          const data = await res.json();

          // retornamos un objeto que creara 3 variables que accedera a la id , nombre y la imagen.

          return {
            id: data.id,
            name: data.name,
            avatar: data.sprites.front_default,
          };
        })
      );

      // ahora actualizamos el estado con la variable "pokemones" para que se pinten en la interfaz.

      this.setState({ pokemones });

      // luego con catch actualizamos el estado para que se muestre en la interfaz si ah ocurrido un error.

    } catch (error) {
      this.setState({ error });

      // en finally actualizamos el estado para que "isLoading" sea falso y deje de mostrar el mensaje de cargando , recuerda finally siempre se ejecutara.

    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {

    // destructuramos todas las variables y le decimos que se guarden en el estado ya con los datos guardados.

    const { pokemones, isLoading, error } = this.state;

    // si isLoading es true se ejecutara un mensaje que dira cargando y cuando sea falso quitara el mensaje.

    if (isLoading) {
      return <p>Cargando 😎😎😎</p>;
    }

    // en caso de que haya erroe retornara un mensaje

    if (error) {
      return <p>ocurrio un error el que hizo esto esta pendejo XD {error.message}</p>;
    }

    // ahora pintamos en la interfaz lo que corresponde las imagenes , los nombres y las id en el kay.

    return (
      <div>
        {

          // recorremos pokemones con map para renderizar todo en la interfaz a este le ponemos de parametro "pokemon" para poder mostrar los datos que necesitamos.

          pokemones.map((pokemon) => (

          // ahora llamamos al componente Pokemon para pasarle las props correspondientes.

          <Pokemon 
            key={pokemon.id} 
            avatar={pokemon.avatar} 
            name={pokemon.name} 
          />
        ))}
      </div>
    );
  }
}`}/>
        <h3>codigo sin comentarios</h3>
        <ReactCode codigo={`import React from "react";
import { Component } from "react";

function Pokemon({ avatar, name }) {
  return(
    <div>
      <img src={avatar} alt={name} />
      <p>{name}</p>
    </div>
  );
}

export class APIs extends Component {
  state = {
    pokemones: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const json = await response.json();

      const pokemones = await Promise.all(
        json.results.map(async (poke) => {
          const res = await fetch(poke.url);
          const data = await res.json();

          return {
            id: data.id,
            name: data.name,
            avatar: data.sprites.front_default,
          };
        })
      );

      this.setState({ pokemones });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { pokemones, isLoading, error } = this.state;

    if (isLoading) {
      return <p>Cargando 😎😎😎</p>;
    }

    if (error) {
      return <p>ocurrio un error el que hizo esto esta pendejo XD {error.message}</p>;
    }

    return (
      <div>
        {pokemones.map((pokemon) => (
          <Pokemon key={pokemon.id} avatar={pokemon.avatar} name={pokemon.name} />
        ))}
      </div>
    );
  }
}`}/>
        <ReactCode codigo={`import React from "react";
import {APIs} from "./ruta";
export default function App(){
  return <APIs />
}`}/>
        <div className="website">
          <APIs />
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default ApiPODReact;