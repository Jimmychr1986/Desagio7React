import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const total = 25000;
  const token = false; 

  

  const formattedTotal = total.toLocaleString('es-CL');

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 justify-content-between">
      <div className="d-flex align-items-center">
        <span className="navbar-brand text-white me-3">¡Pizzería Mamma Mia!</span>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-white btn-sm text-white border-white">
            <i className="fa-regular fa-house"></i> Home 
          </button>

          {token ? (
            <>
              <button className="btn btn-outline-white btn-sm text-white border-white">
                <i className="fa-solid fa-lock-open"></i> Profile 
              </button>
              <button className="btn btn-outline-white btn-sm text-white border-white">
                <i className="fa-solid fa-right-from-bracket"></i> Logout 
              </button>
            </>
          ) : (
            <>
              <button className="btn btn-outline-white btn-sm text-white border-white">
                <i className="fa-regular fa-user"></i> Login
              </button>
              <button className="btn btn-outline-white btn-sm text-white border-white">
                <i className="fa-solid fa-lock"></i> Registro
              </button>
            </>
          )}
        </div>
      </div>

      <div>
        <button className="btn btn-outline-info btn-sm fw-bold">
          <i className="fa-solid fa-cart-arrow-down"></i> Total: ${formattedTotal}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;