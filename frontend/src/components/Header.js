import React from 'react'
import {App} from '../App'
import {EditUser} from './EditUser/EditUser'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export const Header = () => {
    return  <>
               <Router>
                    <nav className="navbar navbar-dark bg-primary">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">Actividad 2</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/details">Details</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <Switch>
                        <Route exact path="/">
                            <App />
                        </Route>
                        <Route exact path="/details/:id">
                            <EditUser />
                        </Route>
                    </Switch>
                </Router>
            </>
}