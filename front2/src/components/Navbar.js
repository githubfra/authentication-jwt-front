import { React, useContext } from "react";
import { Context } from "../store/Context"
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.js';
import { Link, useNavigate } from "react-router-dom";




export function Navbar() {

    const navigate = useNavigate()
    const { store, actions } = useContext(Context);


    return (
        <nav class="navbar navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <div className="navbar-nav">
                    <Link className="nav-link active" aria-current="page" to="/registration">Registrate</Link>
                    <Link className="nav-link active" href="/login">Login</Link>
              
                    <button onClick={()=> actions.logout(navigate)}  className="nav-link-dark"> Cerrar sesión </button>               
                </div>
                </div>
            
        </nav>
            
        
    )
};


