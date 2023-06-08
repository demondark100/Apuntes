import Conseptos from "../../../../componentes/conseptos/conseptos";
import Html from "../../../../componentes/lenguajes/Html";
import ReactCode from "../../../../componentes/lenguajes/React";
import Footer from "../../../../componentes/menus/Footer";





function FrameCssReact() {
  return (  
    <>
      <main>
        <h1>frameworks css</h1>
        <Conseptos texto={`Los frameworks de css son estilos que vienen ya hechos para que tu solo te preocupes de la logica de tu sitio web o tambien por si te da flojera escribir los estilos.
En este caso usaremos el framework fron end Bootstrap pero esto se aplica para todos los frameworks.

{Bootstrap}`}
enlaces={{Bootstrap:{text:"Bootstrap",url:"https://getbootstrap.com/"}}}
targetBlank={true}/>
        <h2>implementar framework</h2>
        <Conseptos texto={`Para poder implemetar un framework necesitamos hacer lo siguiente.

1. ingresar a la carpeta public
2. ingresar a index.html
3. y en la parte de head se ponen los links de estilo necesarios del framework
4. en la parte de body poner los scrips que necesita el framework.`}/>
        <h2>como usar Bootstrap?</h2>
        <Conseptos texto={`Aqui implementaremos un menu de navegacion de Bootstrap.

1. a la hora de ingresar al sitio de Bootstrap ingresamos a Docs
2. despues buscar CDN links en la parte de introduction
3. alli aparecera dos links uno css y otro js.
4. el link css lo ponemos con la etiqueta link en head
5. el link js lo ponemos en el body con la etiqueta script
6. en la barra de navegacion de introduction bajamos hasta donde diga "Components" y entramos ahi.
7. alli tenemos muchas plantillas en este caso usaremos NavBar.
8. bajando un poco encontraras un codigo html eso lo copiamos en un componente que crearemos en react.
9. una vez alli cambiamos los class por className , los input los cerramos con />< al igual que los ht para evitar errores ya que estamos en codigo jsx no html.
10. una vez hecho eso ya deberia aparecer nuestro menu.`}/>
        <h2>codigo index.html</h2>
        <Html codigo={`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>una app xd</title>

    <!-- el link de abajo es el cdn de bootstrap. -->

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css">
  </head>

  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>

    <!-- el scrip de aqui abajo es el script de bootstrap. -->

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>


  </body>
</html>`}/>
        <h2>componente que creamos</h2>
        <ReactCode codigo={`import react from "react";
import styled from "styled-components";


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="https://getbootstrap.com/docs/5.3/components/navbar/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="https://getbootstrap.com/docs/5.3/components/navbar/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://getbootstrap.com/docs/5.3/components/navbar/">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="https://getbootstrap.com/docs/5.3/components/navbar/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="https://getbootstrap.com/docs/5.3/components/navbar/">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://getbootstrap.com/docs/5.3/components/navbar/"
                  >
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="buscar" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};


export default function Hooks() {
  const Contenedor = styled.div\`
    background-color: #000;
    color: #fff;
    width: 100vw;
    height: 100vh;
  \`;
  
  return(
    <Contenedor>
      <NavBar />
    </Contenedor>
  )
}`}/>

        <Conseptos texto={`De esta manera implementamos de forma exitosa una plantilla de boostrap de forma exitosa , pero esto sirve para cualquier framework solo es cuestion de leer su documentacion para implementarlo en react.`}/>
      </main>
      <Footer/>
    </>
  );
}

export default FrameCssReact;