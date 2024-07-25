import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className='position-fixed w-100 top-0' style={{ left: 0 , zIndex : 999}}>
            <nav className="navbar navbar-expand bg-body-tertiary">
                <div className="container">
                    <Link to="/" className='btn'>YM</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink 
                                    className={({ isActive }) => 
                                        `btn ${isActive ? "btn-outline-primary" : ""}`
                                    } 
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink 
                                    className={({ isActive }) => 
                                        `btn ${isActive ? "btn-outline-primary" : ""}`
                                    } 
                                    to="/currency-converter"
                                >
                                    Currency Converter
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink 
                                    className={({ isActive }) => 
                                        `btn ${isActive ? "btn-outline-primary" : ""}`
                                    } 
                                    to="/password-generator"
                                >
                                    Password Generator
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink 
                                    className={({ isActive }) => 
                                        `btn ${isActive ? "btn-outline-primary" : ""}`
                                    } 
                                    to="/quiz-application"
                                >
                                    Quiz Application
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink 
                                    className={({ isActive }) => 
                                        `btn ${isActive ? "btn-outline-primary" : ""}`
                                    } 
                                    to="/fetch-api"
                                >
                                    Fetch API
                                </NavLink>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit" onClick={(e) => e.preventDefault()}>Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
