import React from 'react';
import perfil from '../assets/perfil.jpg';

function Menu() {
  return (
    <div className="Menu">
      
      <div className="perfil">
        <img src={perfil} alt="perfil"/>
      </div>
      
      <ul className="items">
        <li className="neo-btn">Talles</li>
        <li className="neo-btn">Costo de envio</li>
        <li className="neo-btn">Talles especiales</li>
      </ul>
      
      <a  
        href="https://www.facebook.com/" 
        rel="noopener noreferrer" 
        target="_blank" 
        className="face">
          &nbsp;
      </a>
      <a 
        href="https://www.instagram.com/" 
        rel="noopener noreferrer" 
        target="_blank" 
        className="instagram">
          &nbsp;
      </a>

    </div>
  );
}

export default Menu;
