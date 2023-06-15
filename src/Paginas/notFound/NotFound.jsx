import Footer from "../../componentes/menus/Footer";
import "./NotFound.css"

function NotFound() {
  return(
    <>
      <div className="main-notFound">
        <div className="notFount-content">
          <h1>en desarrollo</h1>
          <p className="mensaje-error">
            Esto sigue en desarrollo... <br />
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default NotFound;
