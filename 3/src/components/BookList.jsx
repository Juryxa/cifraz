import React, {useEffect, useState} from "react";
import BookCard from "./BookCard";
import "./BookList.css";

const BookList = ({ onAddToCart }) => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => {
                const formattedBooks = data.slice(0, 10).map((book) => ({
                    title: book.title,
                    author: "Неизвестный автор",
                    description: book.body,
                    price: Math.floor(Math.random() * 500) + 100,
                }));
                setBooks(formattedBooks);
                setLoading(false);
            });
    }, []);

    return (
        <div className="book-list">
            <h2>Каталог книг</h2>
            {loading ? <p>Загрузка...</p> : books.map((book, index) => (
                <BookCard key={index} {...book} onAddToCart={() => onAddToCart(book)} />
            ))}
        </div>
    );
};

export default BookList;
