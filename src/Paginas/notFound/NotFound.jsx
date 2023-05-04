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
            esto sigue en desarrollo lo siento pero aun no agregue eso :c <br />
            disponible html y css
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default NotFound;
