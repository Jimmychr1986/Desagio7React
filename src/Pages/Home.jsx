import React, { useState, useEffect , useContext} from 'react';
import Header from './Header';
import CardPizza from './CardPizza';
import Pizzas from './Pizzas';
import { CartContext } from "../context/CartContext";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const url = "http://localhost:5000/api/pizzas";
  const { addToCart } = useContext(CartContext);

  const getPizzas = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPizzas(data); 
    } catch (error) {
      console.error("Error al obtener las pizzas:", error);
    }
  };
  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <div>
      <Header />
      <div className="container my-5">
        <div className="row g-4 justify-content-center">
          {pizzas.map((pizza) => (
            <div className="col-12 col-md-4" key={pizza.id}>
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
                onAddToCart={() => addToCart(pizza)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
