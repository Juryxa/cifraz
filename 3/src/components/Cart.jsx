import React from "react";
import "./Cart.css";

const Cart = ({cartItems, onRemoveFromCart}) => {
    return (
        <div className="cart">
            <h2>Корзина</h2>
            {cartItems.length === 0 ? (
                <p>Корзина пуста</p>
            ) : (
                <ul>
                    {cartItems.map((book, index) => (
                        <li key={index} onClick={() => onRemoveFromCart(index)}>
                            {book.title} - {book.price} руб. (Нажмите для удаления)
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
