import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";



function HomePage(){


    const {data, loading, error} = useFetch('http://localhost:3000/allBooks');

    const [books, setBooks] = useState([]);

    const [filterBooks, setFilterBooks] = useState(books);

    useEffect(() => {
        if(data){
            setBooks(data)
        }
    }, [data])

    const handleDelete = async (id) => {

        try {
            const response = await fetch(`http://localhost:3000/book/delete/${id}`,{
                method: "DELETE"
            })

            if(response.ok){
                setBooks(books.filter((book) => book._id !== id));
            }
        } catch (error) {
            console.error(error.message)
        }
    }


    const getFilterBooks = (status) => {

        if(status === 'All'){
            setFilterBooks(books)
        }else if (status === 'Read') {
            const filtered = books.filter((book) => book.status === true);
            setFilterBooks(filtered);
        } else if (status === 'Unread') {
            const filtered = books.filter((book) => book.status === false);
            setFilterBooks(filtered);
        }
        
    }


    if(loading) return <p>Loading...</p>


    if(error) return <p>{error}</p>

    return(
        <>
        <div className="container py-5">

          <h1 className="text-light">Library</h1>

          <hr />

          <h2 className="text-light">Filters</h2>

          <button className="btn btn-light me-2" onClick={() => getFilterBooks('All')} value="All">All ({books.length})</button>
          <button className="btn btn-light me-2" onClick={() => getFilterBooks('Read')} value="Read">Read</button>
          <button className="btn btn-light" onClick={() => getFilterBooks('Unread')} value="Unread">Unread</button>
          <div className="row">



          {filterBooks && filterBooks.length>0 ? (filterBooks?.map((book, index) => (
            <div className="col-md-3" key={index}>
                <div className="card mt-3 p-0">
                    <img className="img-top" src={`https://placehold.co/600x400?text=Book+${index + 1}`} />

                    <div className="card-body">
                        <h5 className="card-title ellipsis">{book.title}</h5>

                        <p><strong>Author: </strong>{book.author}</p>

                        <p><strong>Status:</strong>{book.status ? "Read" : "Unread"}</p>

                        <button className="btn btn-dark" onClick={() => handleDelete(book._id)}>
                            Delete
                        </button>
                    </div>  
                </div>
            </div>
            ))): (<p>No books available</p>)}
            
          </div>
    </div>
        </>
    )
}


export default HomePage;