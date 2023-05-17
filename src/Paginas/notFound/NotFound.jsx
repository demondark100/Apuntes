import Menu2 from "../../componentes/menus/Menu2";
import Footer from "../../componentes/menus/Footer";
import "./NotFound.css"

function NotFound() {
  return(
    <>
      <Menu2 />
      <main className="main-notFound">
        <div className="notFount-content">
          <h1>en desarrollo</h1>
          <p className="mensaje-error">
            Esto sigue en desarrollo... <br />
            disponible: logica,html,css
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default NotFound;
