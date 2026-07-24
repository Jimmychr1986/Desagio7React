import React from 'react';

const CardPizza = ({ name, price, ingredients, img,onAddToCart}) => {
  return (
    <div className="card h-100 shadow-sm mx-auto" style={{ width: '18rem' }}>
      <img src={img} className="card-img-top" alt={`Pizza ${name}`} />
      <div className="card-body text-center">
        <h5 className="card-title fw-bold text-start">Pizza {name}</h5>
        <hr />
        
        <div><p className="card-text text-muted mb-1"> Ingredientes:</p></div>
<ul className="text-secondary list-unstyled text-center mb-3 small">
          {ingredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient}
            </li>
          ))}
        </ul>
        <hr />

        <h4 className="fw-bold text-dark my-3">
          Precio: ${price.toLocaleString('es-CL')}
        </h4>

        <div className="d-flex justify-content-around mt-3">
          <button className="btn btn-outline-dark btn-sm">
            <Link to={`/pizza/${id}`} className="btn btn-primary">Ver Más </Link>
             <i className="fa-solid fa-plus"></i>
          </button>
          <button className="btn btn-dark btn-sm" onClick={onAddToCart}>
            Añadir <i className="fa-solid fa-cart-arrow-down"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza

