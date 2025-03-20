import React from "react";
import "./BookCard.css";

const BookCard = ({ title, author, description, price, onAddToCart }) => {
    return (
        <div className="book-card">
            <h2>{title}</h2>
            <p className="author">Автор: {author}</p>
            <p className="description">{description}</p>
            <p className="price">Цена: {price} руб.</p>
            <button onClick={onAddToCart} className="add-to-cart-btn">
                Добавить в корзину
            </button>
        </div>
    );
};

export default BookCard;
