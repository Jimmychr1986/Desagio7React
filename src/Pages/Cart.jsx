import React, { useContext } from 'react'; 
import { CartContext } from "../context/CartContext"; 
import { UserContext } from "../context/UserContext";

const Cart = () => {
  const { cart, increaseCount, decreaseCount, totalAmount } = useContext(CartContext);
  const { token } = useContext(UserContext); 

  return (
    <div className="container my-5 shadow p-4 rounded bg-white" style={{ maxWidth: '600px' }}>
      <h3 className="fw-bold mb-4 text-dark text-center">Detalles del pedido:</h3>
      
      {cart.length === 0 ? (
        <p className="text-center text-muted">Tu carrito está vacío.</p>
      ) : (
        <div>

          {cart.map((Pizza) => (
            <div key={Pizza.id} className="d-flex align-items-center justify-content-between border-bottom py-3">
              <div className="d-flex align-items-center gap-3">
                <img 
                  src={Pizza.img} 
                  alt={Pizza.name} 
                  style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }}
                />
                <div>
                  <h5 className="mb-0 fw-bold text-capitalize">{Pizza.name}</h5>
                  <small className="text-muted">
                    ${Pizza.price.toLocaleString('es-CL')} c/u
                  </small>
                </div>
              </div>

              <div className="d-flex align-items-center gap-2">
                <button 
                  className="btn btn-sm btn-outline-danger px-2 py-1"
                  onClick={() => decreaseCount(Pizza.id)}
                >
                  -
                </button>
                <span className="fw-bold px-2">{Pizza.count}</span>
                <button 
                  className="btn btn-sm btn-outline-primary px-2 py-1"
                  onClick={() => increaseCount(Pizza.id)}
                >
                  +
                </button>
              </div>
            </div>
          ))}

          <div className="mt-4 pt-3 border-top text-center text-md-start d-md-flex justify-content-between align-items-center">
            <h2 className="fw-bold text-dark m-0">
              Total: ${totalAmount.toLocaleString('es-CL')}
            </h2>
            <button className="btn btn-dark mt-3 mt-md-0 px-4 fw-bold"
            disabled={!token}>
              {token ? "Pagar " : "Inicia sesión para pagar "} 
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;