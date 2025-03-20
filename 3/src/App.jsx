import React, {useState} from "react";
import BookList from "./components/BookList";
import Cart from "./components/Cart";
import "./App.css";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
      <div className="app">
        <h1>Добро пожаловать в наш книжный магазин!</h1>
        <div className="content">
          <BookList onAddToCart={addToCart} />
          <Cart cartItems={cart} onRemoveFromCart={removeFromCart} />
        </div>
      </div>
  );
};

export default App;
