import { Link } from "react-router-dom";
import Volver from "../../../../../../componentes/volver/volver";

function ResponRes3() {
  return (  
    <>
      <div id="bodyResponsiveEjemplo">
        <Volver link={"../css/responsive design"}/>
        <div id="headerResponsive">
                <b className="logoResponsive">proyecto!</b>
                <nav>
                    <ul>
                        <li><a href="#">un menu</a></li>
                        <li><a href="#">otra opcion</a></li>
                        <li><a href="#">una cosa</a></li>
                        <li><a href="#">otra cosa</a></li>
                    </ul>
                </nav>
            </div>

            <div className="contenedorResponsive">
                <div id="mainResponsive">
                    <h1>una pagina web</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eos sed excepturi minima. Veniam blanditiis dolorum nobis atque tenetur aspernatur voluptates eum, exercitationem quia. Nulla ab repellat nobis autem a!
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto rem soluta voluptas facilis quisquam ipsam cumque, sit voluptatum? Quod numquam quia amet delectus voluptatibus veniam beatae atque accusamus dolorem nam!
                        </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur veritatis nisi tenetur! Aut quam, nihil voluptatibus eius mollitia rerum asperiores placeat obcaecati dolores vitae corrupti nam, ad autem libero aspernatur!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non laudantium saepe rerum, libero quisquam delectus sit blanditiis, cumque laboriosam placeat necessitatibus iste expedita vero quod, fuga aliquid tempore esse? Veniam.
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolores suscipit vitae, aperiam voluptates fuga possimus, ipsam quas, atque libero dolorum magnam necessitatibus! Esse quo aliquid sed, tempora qui ipsam.
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam a molestiae culpa aliquam vero magnam voluptate, est, accusamus placeat mollitia quo maiores neque! Tempora quasi saepe officiis aut laboriosam maiores!
                    </p>
                </div>
                
                <div id="asideResponsive">
                    <h2>publicidad</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, eveniet ullam consequuntur odio deserunt veritatis saepe quae autem aperiam, nesciunt fugiat reprehenderit eaque necessitatibus dignissimos, magni beatae aut tempora cum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis aspernatur maxime dicta harum tempora velit at veniam aperiam, nostrum facilis. Unde, totam excepturi numquam deserunt at placeat consectetur facere! Unde!
                    </p>
                    <p>
                        no duraras ni 5 minutos jugando a este juego.
                    </p>
                </div>
            </div>

            <div id="footerResponsive">
                <h3>pie de pagina</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ea harum dolor eum nam ad quas, earum cumque repudiandae ut officia libero maiores eos soluta mollitia eius quisquam numquam molestias.
                </p>
            </div>
      </div>
    </>
  );
}

export default ResponRes3;