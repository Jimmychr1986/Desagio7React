import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);

  const url = "http://localhost:5000/api/pizzas/${id}";

  const getPizzaData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPizza(data);
    } catch (error) {
      console.error("Error al obtener la pizza:", error);
    }
  };

  useEffect(() => {
    getPizzaData();
  }, [id]);

  if (!pizza) {
    return (
      <div className="container text-center my-5">
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p className="mt-2">Cargando los detalles de tu pizza...</p>
      </div>
    );
  }

  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="card mb-3 shadow" style={{ maxWidth: "840px" }}>
        <div className="row g-0 align-items-center">
          <div className="col-md-6">
            <img 
              src={pizza.img} 
              className="img-fluid rounded-start h-100 object-fit-cover" 
              alt={pizza.name} 
            />
          </div>
          <div className="col-md-6">
            <div className="card-body p-4">
              <h2 className="card-title text-capitalize fw-bold mb-3">{pizza.name}</h2>
              
              <p className="card-text text-muted mb-4">{pizza.desc}</p>
              
              <div className="mb-4">
                <h5 className="fw-bold">🍕 Ingredientes:</h5>
                <ul className="text-secondary ps-4">
                  {pizza.ingredients?.map((ingredient, index) => (
                    <li key={index} className="text-capitalize">{ingredient}</li>
                  ))}
                </ul>
              </div>

              <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                <h3 className="text-danger fw-bold m-0">
                  ${pizza.price?.toLocaleString('es-CL')}
                </h3>
                <button className="btn btn-dark px-4 py-2 rounded-pill shadow-sm">
                  Añadir al Carrito 🛒
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;