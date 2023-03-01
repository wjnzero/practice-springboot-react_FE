import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Weapons</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <Link className="btn btn-outline-light" to="/weapons/add">Add Weapon</Link>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
