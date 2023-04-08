import React from 'react';
import { useRef } from 'react';
import "./Menu1.css"
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';



function Menu1() {
  const move = useRef(null);
  const fondo = useRef(null);
  const quitar = useRef(null)
  const mover=()=>{
    move.current.classList.toggle("mover");
    fondo.current.classList.add("fondo-menu")
    quitar.current.classList.add("quitar")
  }
  const closeMenu = () => {
    move.current.classList.add("mover-salida");
    fondo.current.classList.toggle("fondo")
    setTimeout(() => {
      move.current.classList.remove("mover");
      move.current.classList.remove("mover-salida");
      fondo.current.classList.remove("fondo-menu");
      fondo.current.classList.remove("fondo")
      quitar.current.classList.remove("quitar")
    }, 500);
  };
  

  return (
    <nav ref={quitar} className='contenedor-nav'>
      <FontAwesomeIcon
        onClick={mover}
        icon={faBars} 
        flip 
        className='menu'
      />
      <ul className='contenedor-li' ref={move}>
        <li><Link target='_blank' to="#">contactame</Link></li>
        <li><Link target='_blank' to="#">gitHub</Link></li>
        <li><Link target='_blank' to="#">Facebook</Link></li>
      </ul>
      <div
        ref={fondo}
        onClick={closeMenu}
      ></div>
    </nav>
  );
}

export default Menu1;