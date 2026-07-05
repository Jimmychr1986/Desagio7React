import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";

import Navbar from './Components/Navbar';
import Footer  from './Components/Footer';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Cart  from './Pages/Cart';
import Pizza from './Pages/Pizza';
import Profile from './Pages/Profile';
import NotFound from './Pages/NotFound';
import { UserContext } from "./context/UserContext";

const App = () => {
  const { token } = useContext(UserContext);
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