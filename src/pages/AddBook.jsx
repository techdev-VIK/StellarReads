


function AddBook(){

    return(
        <>


            <div className="d-flex flex-column align-items-center">


            <div className="card mt-5 shadow" style={{width:"40%"}}>

            <h2 className="mb-3 text-center">Add <span className="text-primary">Book</span></h2>
            
            <form>
            <div className="mb-2">
                <label htmlFor="bookTitle">Book Title</label>
                <input type="text"  className="form-control text-center" required/>
            </div>
                
            <div className="mb-2">
                <label htmlFor="bookAuthor">Book Author:</label>
                <input type="text" className="form-control text-center" required/>
            </div>
                
                <div className="mb-2">
                    <label htmlFor="bookStatus">Book Status</label>
                    <input type="text" value="Unread" disabled className="form-control text-center"/>
                </div>
                <button className="btn btn-primary mt-3 ">Submit</button>

                </form>

                </div>
            </div>
        </>
    )
}

export default AddBook;