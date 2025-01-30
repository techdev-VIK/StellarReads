import { NavLink } from "react-router-dom"


export default function Nav(){

    return(
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">

            
            <NavLink to="/" className="navbar-brand display-2 fw-semibold fs-3">Stellar<span className="text-primary">Reads</span></NavLink>

            <ul className="nav navbar-nav d-flex flex-row gap-3">
                <NavLink className="nav-link" to="/">
                    <li className="nav-item active">
                        Home
                    </li>
                </NavLink>

                <NavLink className="nav-link" to="/addBook">
                    <li className="nav-item">
                        Add Book
                    </li>
                </NavLink>
            </ul>
            </div>
        </nav>
    )
}