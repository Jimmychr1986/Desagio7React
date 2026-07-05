import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from "./context/CartContext";
import Cart from "./pages/Cart";
import { UserProvider } from './context/UserContext.jsx'

const App = () => {
  return (
    <CartProvider>
      <Navbar />
      <Home /> 
      <Cart />
    </CartProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
