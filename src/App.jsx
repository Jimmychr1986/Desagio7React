import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer  from './Components/Footer';
import Pizza from './Pages/Home';
import Pizza from './Pages/Register';
import Pizza from './Pages/Login';
import Pizza from './Pages/Cart';
import Pizza from './Pages/Pizza';
import Pizza from './Pages/Profile';
import Pizza from './Pages/NotFound';
import { UserContext } from "./context/UserContext";

const App = () => {
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={!token ? <Register /> : <Navigate to="/"/>} />
        <Route path="/login" element={!token ? <Login /> : <Navigate to="/"/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path="/profile" element={token ?<Profile /> : <Navigate to="/login"/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;