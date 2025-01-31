import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";



function HomePage(){


    const {data, loading, error} = useFetch('http://localhost:3000/allBooks');

    const [books, setBooks] = useState([]);

    const [filterBooks, setFilterBooks] = useState(books);

    const [selectedFilter, setSelectedFilter] = useState("All");

    useEffect(() => {
        if(data){
            setBooks(data)
            setFilterBooks(data);
        }
    }, [data])

    const handleDelete = async (id) => {

        try {
            const response = await fetch(`http://localhost:3000/book/delete/${id}`,{
                method: "DELETE"
            })

            if(response.ok){
                setBooks((prevBooks) => {
                    const updatedBooks = prevBooks.filter((book) => book._id !== id)
                    setFilterBooks(updatedBooks)
                })
            }
        } catch (error) {
            console.error(error.message)
        }
    }


    const statusFilterHandler = (filter) => {

        setSelectedFilter(filter);

        if(filter === "All"){
            setFilterBooks(books)
        }else if (filter === "Read") {
            setFilterBooks(books.filter((book) => book.status === true));  // Read books
        } else {
            setFilterBooks(books.filter((book) => book.status === false)); // Unread books
        }
       
    }


    

    if(loading) return <p>Loading...</p>


    if(error) return <p>{error}</p>

    return(
        <>
        <div className="container py-4">

        <div className="text-center">
        <h1 className="text-light">Library</h1>
        </div>
          

          <hr />

          <h2 className="text-light">Filters</h2>


            <div className="d-flex gap-2">
                {['All', 'Read', 'Unread'].map((filter) => (
                    <button key={filter} onClick={() => statusFilterHandler(filter)} className={`btn  rounded ${selectedFilter === filter ? "btn-primary" : "btn-light"} `}>
                    {filter}
                    </button>
                ))}
            </div>


          <div className="row">

          {filterBooks && filterBooks.length>0 ? (filterBooks?.map((book, index) => (
            <div className="col-md-4" key={index}>
                <div className="card mt-3 p-0">
                    <img className="img-top" src={`https://placehold.co/600x400?text=Book+${index + 1}`} />

                    <div className="card-body">
                        <h5 className="card-title ellipsis">{book.title}</h5>

                        <p><strong>Author: </strong>{book.author}</p>

                        <div className="d-flex justify-content-between">
                        

                        <button className={`btn btn-sm ${!book.status ? "btn-success" : "btn-secondary"}`}>{!book.status ? "Mark As Read" : "Mark As Unread"}</button>

                        <button className="btn btn-dark" onClick={() => handleDelete(book._id)}>
                            Delete
                        </button>
                        </div>
                        

                        
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