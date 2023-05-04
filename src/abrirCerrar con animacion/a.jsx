// import { NavLink } from "react-router-dom";
// import Footer from "../../../../../componentes/menus/Footer";
// import Menu2 from "../../../../../componentes/menus/Menu2";
// import "./overflow.css";
// import { useState, useEffect } from "react";
// import Confirmar from "./confirmar";

// function Overflow() {
//   const [irAlLing, setIrAlLing] = useState(false);

//   const preguntar = (event) => {
//     event.preventDefault();
//     setIrAlLing(true);
//   }
//   const confirmado = () => {
//     setIrAlLing(false);
//     window.open("../", "_blank");
//   }
//   const cancelar = () => {
//     setIrAlLing(false);
//   }

//   useEffect(() => {
//     let timeoutId;
//     if (irAlLing) {
//       timeoutId = setTimeout(() => {
//         cancelar();
//       }, 5000); // espera 5 segundos antes de cerrar automáticamente
//     }
//     return () => {
//       clearTimeout(timeoutId);
//     };
//   }, [irAlLing]);

//   return (  
//     <>
//       <Menu2 />
//       <main>
//         <NavLink target="_blank" onClick={preguntar} className={`overflow__title`} to={`../`}>overflow</NavLink>
//         <div className={`confirmar-container ${irAlLing ? "confirmar-appear" : ""}`}>
//           <Confirmar confirmado={confirmado} />
//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// }

// export default Overflow;



// .confirmar-container {
//   opacity: 0;
//   transition: opacity 0.5s ease-in-out;
// }

// .confirmar-appear {
//   opacity: 1;
// }
