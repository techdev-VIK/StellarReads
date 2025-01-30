import useFetch from "../hooks/useFetch";



function HomePage(){


    const {data, loading, error} = useFetch('http://localhost:3000/allBooks')

    if(loading) return <p>Loading...</p>


    if(error) return <p>{error}</p>

    return(
        <>
        <div className="container mt-3">

          <h1>Library</h1>

          <hr />

          <div className="row mt-3">

          {data && data?.map((book, index) => (
            <div className="col-md-3" key={index}>
                <div className="card mt-3 p-0">
                    <img className="img-top" src={`https://placehold.co/600x400?text=Book+${index + 1}`} />

                    <div className="card-body">
                        <h5 className="card-title">{book.title}</h5>

                        <p><strong>Author: </strong>{book.author}</p>

                        <p><strong>Status:</strong>{book.status ? "Read" : "Unread"}</p>

                        <button className="btn btn-dark">
                            Delete
                        </button>
                    </div>  
                </div>
            </div>
            ))}
            
          </div>
    </div>
        </>
    )
}


export default HomePage;