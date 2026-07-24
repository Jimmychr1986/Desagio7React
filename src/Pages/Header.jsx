import React from 'react';

const Header = () => {

  return (
    <div 
      className="text-center text-white d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://w6h5a5r4.delivery.rocketcdn.me/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '250px'
      }}
    >
      <h1 className="fw-bold">¡Pizzería Mamma Mia!</h1>
      <p className="fs-5">¡Tenemos las mejores pizzas que podrás encontrar!</p>
      <hr className="w-75 border-white" />
    </div>
  );
;
}

export default Header
