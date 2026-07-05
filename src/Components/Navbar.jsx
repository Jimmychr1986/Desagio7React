import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { totalAmount } = useContext(CartContext);
  const { token, logout } = useContext(UserContext);
  const formattedTotal = total.toLocaleString('es-CL');

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 justify-content-between">
      <div className="d-flex align-items-center">
        <Link to="/" className="navbar-brand text-white me-3">¡Pizzería Mamma Mia!</Link>
        <div className="d-flex gap-2">
          <Link to="/" className="btn btn-outline-white btn-sm text-white border-white">
            <i className="fa-regular fa-house"></i> Home 
          </Link>

          {token ? (
            <>
              <Link to="/profile" className="btn btn-outline-white btn-sm text-white border-white">
                <i className="fa-solid fa-lock-open"></i> Profile 
              </Link>
              <button onClick={logout} className="btn btn-outline-white btn-sm text-white border-white">
                <i className="fa-solid fa-right-from-bracket"></i> Logout 
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline-white btn-sm text-white border-white">
                <i className="fa-regular fa-user"></i> Login
              </Link>
              <Link to="register" className="btn btn-outline-white btn-sm text-white border-white">
                <i className="fa-solid fa-lock"></i> Registro
              </Link>
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