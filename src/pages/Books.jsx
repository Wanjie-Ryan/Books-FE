import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:3003/allbooks");
        // console.log(response)
        setBooks(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchBooks();
  }, []);

  const handleDelete = async (bookId) => {
    try {
      const response = await axios.delete(
        `http://localhost:3003/deletebook/${bookId}`
      );
      console.log(response);
      window.location.reload();
      // const newBooks = books.filter((item)=>item.id !== bookId)
      // setBooks(newBooks)
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <h3>Wanjie Books Shop</h3>

      <div className="books">
        {books.map((item) => (
          <div className="book" key={item.id}>
            {item.cover && <img src={item.cover} alt="book-image" />}
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button
              className="delete"
              onClick={() => {
                handleDelete(item.id);
              }}
            >
              Delete
            </button>
            <button className="update">
              <Link to={`/update/${item.id}`}>Update</Link>
            </button>
          </div>
        ))}
      </div>
      <button>
        <Link to="/add">Add New Book</Link>
      </button>
    </>
  );
}

export default Books;
