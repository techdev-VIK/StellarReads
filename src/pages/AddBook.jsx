import { useState } from "react";



function AddBook(){

    const [bookTitle, setTitle] = useState('');

    const [bookAuthor, setAuthor] = useState('');



    const formHandler = async (e) => {
        e.preventDefault();

        const bookData = {
            title: bookTitle,
            author: bookAuthor,
            status: false
        }

        try{
            const response = await fetch('http://localhost:3000/book/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bookData)
            })

            if (response.ok) {
                console.log("Book added successfully!");
              } else {
                console.error("Failed to add book.");
              }

              setTitle('')
              setAuthor('')
        }catch(error){
            console.error(error.message)
        }

    }


    return(
        <>

            <div className="d-flex flex-column align-items-center">

            <div className="card mt-5 shadow" style={{width:"40%"}}>

            <h2 className="mb-3 text-center">Add <span className="text-primary">Book</span></h2>
            
            <form onSubmit={formHandler}>
            <div className="mb-4">
                <label className="fw-semibold mb-2" htmlFor="bookTitle">Book Title:</label>
                <input type="text"  className="form-control text-center" onChange={(e) => setTitle(e.target.value)} value={bookTitle} required/>
            </div>
                
            <div className="mb-4">
                <label className="fw-semibold mb-2" htmlFor="bookAuthor">Book Author:</label>
                <input type="text" className="form-control text-center" onChange={(e) => setAuthor(e.target.value)} value={bookAuthor} required/>
            </div>
                
                <div className="mb-4">
                    <label className="fw-semibold mb-2" htmlFor="bookStatus">Book Status:</label>
                    <input type="text" value="Unread" disabled className="form-control text-center"/>
                </div>

                <hr /> 

                <button type="submit" className="btn btn-primary mt-3 ">Submit</button>

                </form>

                </div>
            </div>
        </>
    )
}

export default AddBook;