import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Header() {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand omega" to={""}>Omega</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link active-link" to={""}>Demoes</Link>
                        </li>
                        <li className="nav-item px-3">
                            <Link className="nav-link unactive-link" to={""}>Pages</Link>
                        </li>

                        <li className="nav-item px-3">
                            <Link className="nav-link unactive-link" to={""}>Support</Link>
                        </li>

                        <Link to={""} className={"btn btn-danger px-3"}>
                            Get Started
                        </Link>

                    </ul>

                </div>
            </nav>
        </Router>
    )
}

export default Header
