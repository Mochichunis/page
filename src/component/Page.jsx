import React, { useState } from 'react';
import Modal from './Modal'
import { v4 as uuidv4 } from 'uuid';


const Page = () => {

  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState('none');

  const talles = [
    {
      nombre: 'M',
      largo: 42,
      contorno: 42,
      recomendacion: 'perros de tantos kilos'
    },
    {
      nombre: 'L',
      largo: 42,
      contorno: 42,
      recomendacion: 'perros de tantos kilos'
    },
    {
      nombre: 'XL',
      largo: 42,
      contorno: 42,
      recomendacion: 'perros de tantos kilos'
    }
  ];

  const figura = (t) => (
    <>
      <div className="img"></div>
      <img
        src={`${process.env.PUBLIC_URL}/assets/talle_${t.nombre.toLocaleLowerCase()}/${(count % 6) + 1}.jpg`}
        alt={t.nombre}
      />
    </>
  );

  const listaDeTalles = talles.map(
    talle => (
      <li key={uuidv4()} >
        <div className="containerCard">
          <div className="cardFront card">
            <figure>
              {figura(talle)}
              <figcaption>Talle {talle.nombre}</figcaption>
              <figcaption className="descripcion">
                <p>Largo: {talle.largo}</p>
                <p>Contorno: {talle.contorno}</p>
              </figcaption>
            </figure>
          </div>

          <article className="card">
            <figure>
              {figura(talle)}
            </figure>

            <button>Encargar</button>

            <div className="design-container">
              <span className="design design--1"></span>
              <span className="design design--2"></span>
              <span className="design design--3"></span>
              <span className="design design--4"></span>
              <span className="design design--5"></span>
              <span className="design design--6"></span>
              <span className="design design--7"></span>
              <span className="design design--8"></span>
            </div>
          </article>
        </div>
      </li>
    )
  );

  return (
    <div className="Page">
      <Modal isOpen={isOpen} />
      <span className="patitas patitas-1"></span>
      <span className="patitas patitas-2"></span>
      <span className="patitas patitas-3"></span>
      <span className="patitas patitas-4"></span>
      <header>
        <div
          className="neo-btn buscador"
          onClick={() => setIsOpen('unset')}
        >
          Buscar talle
            </div>
        <div className="neo-btn comomedir">¡Como medir a tu perrito!</div>
      </header>
      <article onClick={() => setIsOpen('none')}>
        <div onClick={() => setCount(count <= 0 ? 6 : count - 1)}>
          <i className="arrow left"></i>
        </div>

        <ul>
          {
            listaDeTalles
          }
        </ul>

        <div onClick={() => setCount(count + 1)}>
          <i className="arrow right"></i>
        </div>
      </article>
    </div>
  );
}


export default Page;
