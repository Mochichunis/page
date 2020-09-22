import React from 'react';

const Page = (props) => {

  const talles = [
    {
      'img': '',
      'nombre': 'M'
    },
    {
      'img': '',
      'nombre': 'L'
    },
    {
      'img': '',
      'nombre': 'XL'
    }
  ];

  const listaDeTalles = talles.map(
    talle => (
      <li>
        <img src={talle.img} alt="" />
        <span>{talle.nombre}</span>
        <button className="neo-btn">Comprar</button>
      </li>
    )
  );
  
  return (
    <div className="Page">
      <span className="patitas patitas-1"></span>
      <span className="patitas patitas-2"></span>
      <span className="patitas patitas-3"></span>
      <span className="patitas patitas-4"></span>
      <header>
        <div className="neo-btn buscador">Buscar talle</div>
        <div className="neo-btn comomedir">¡Como medir a tu perrito!</div>
      </header>
      <article>
        <ul>
          {
            listaDeTalles
          }
        </ul>
      </article>
    </div>
  );
}


export default Page;
