import React, { useState, useEffect } from "react";
import { BookContext } from "./context/BookContext";
import HomePage from "./components/HomePage";

function BookProvider() {
    const [books, setBooks] = useState([]);

    // Fetch books initially
    useEffect(() => {
        async function fetchBooks() {
            const response = await fetch("http://localhost:3000/allBooks");
            const data = await response.json();
            setBooks(data);
        }
        fetchBooks();
    }, []);

    // Delete a book and update the state
    const deleteBook = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/book/delete/${id}`, {
                method: "DELETE",
            });

            if (response.ok) {
                setBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
            } else {
                console.error("Failed to delete book");
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <BookContext.Provider value={{ books, deleteBook }}>
            <HomePage />
        </BookContext.Provider>
    );
}

export default BookProvider;
