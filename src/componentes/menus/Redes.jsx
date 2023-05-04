import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './Menu.css';

function Redes() {
  const [showRedes, setShowRedes] = useState(false);

  const toggleRedes = () => {
    setShowRedes(!showRedes);
  };

  return (
    <div>
      <div className='content-redes'>
        <b className='redes'>Redes</b>
        <FontAwesomeIcon
          icon={faChevronDown}
          onClick={toggleRedes}
          className={showRedes ? 'icono-red girar' : 'icono-red'}
        />
      </div>

      <ul className={`link ${showRedes ? 'show' : 'hide'}`}>
        <li>
          <Link target='_blank' to="https://www.facebook.com/shadowkillerxe">Facebook</Link>
        </li>
        <li>
          <Link target='_blank' to="https://www.youtube.com/channel/UCA7e0Kh1CGQUEIOBFvm-jBQ">youtube</Link>
        </li>
        <li>
          <Link target='_blank' to="https://www.tiktok.com/@el_tio_dan_">tiktok</Link>
        </li>
        <li>
          <Link target='_blank' to="https://www.linkedin.com/in/daniel-champi-a1836523a/">Linkedin</Link>
        </li>
      </ul>
    </div>
  );
}

export default Redes;
