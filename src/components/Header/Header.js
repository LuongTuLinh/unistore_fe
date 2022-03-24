import React, { useState } from 'react'
import 'assets/styles/custom.css'

import { Link } from "react-router-dom";

export default function Header() {

    const [url, setUrl] = useState(window.location.pathname);
    const handleUrl = (value) => {
        setUrl(value);
    }

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        window.location.reload();
    }
    console.log(url); // Test url
    return (
        <div>
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <button
                            type="button"
                            className="navbar-toggle collapsed"
                            data-toggle="collapse"
                            data-target="#navbar"
                            aria-expanded="false"
                            aria-controls="navbar"
                        >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <Link className="navbar-brand" to="/home" onClick={() => handleUrl("/home")}>
                                <i className="ion-cube" /> Unistore
                        </Link>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li onClick={() => handleUrl("/home")} className={url === "/home" ? "active" : ""}>
                                {/* <a href="/home">Home</a> */}
                                <Link to="/home">Home</Link>
                            </li>
                            <li onClick={() => handleUrl("/catalog")} className={url === "/catalog" ? "active" : ""}>
                                {/* <a href="/catalog">Catalog</a> */}
                                <Link to="/catalog">Catalog</Link>
                            </li>
                            <li onClick={() => handleUrl("/blog")} className={url === "/blog" ? "active" : ""}>
                                {/* <a href="/blog">Blog</a> */}
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li onClick={() => handleUrl("/gallery")} className={url === "/gallery" ? "active" : ""}>
                                {/* <a href="/gallery">Gallery</a> */}
                                <Link to="/gallery">Gallery</Link>
                            </li>
                            <li onClick={() => handleUrl("/cart")} className={url === "/cart" ? "active" : ""}>
                                {/* <a href="/cart">Cart</a> */}
                                <Link to="/cart">Cart</Link>
                            </li>
                            {/* <li className="dropdown">
                                <a
                                    href={this}
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    More <span className="caret" />
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href={this}>Product</a>
                                    </li>
                                    <li>
                                        <a href={this}>Cart</a>
                                    </li>
                                    <li>
                                        <a href={this}>Checkout</a>
                                    </li>
                                    <li>
                                        <a href={this}>FAQ</a>
                                    </li>
                                    <li>
                                        <a href={this}>Contacts</a>
                                    </li>
                                    <li role="separator" className="divider" />
                                    <li className="dropdown-header">Variations</li>
                                    <li>
                                        <a href={this}>Home</a>
                                    </li>
                                    <li>
                                        <a href={this}>Article Photo</a>
                                    </li>
                                    <li>
                                        <a href={this}>Article Video</a>
                                    </li>
                                    <li>
                                        <a href={this}>Article Review</a>
                                    </li>
                                </ul>
                            </li> */}
                        </ul>
                        {
                            (localStorage.getItem('token') != null && localStorage.getItem('name') != null)?
                                <ul className="nav navbar-nav navbar-right">
                                    <li>
                                        <a href="#name">Hi, {localStorage.getItem('name')}</a>
                                    </li>
                                    <li>
                                        <a href="#logout" onClick={() => logout()}>Logout</a>
                                    </li>
                                </ul>
                            : 
                                <ul className="nav navbar-nav navbar-right">
                                    <li onClick={() => handleUrl("/login")} className={url === "/login" ? "active" : ""}>
                                        <Link to="/login"><i className="ion-android-person"/>&nbsp;Login</Link>
                                    </li>
                                    <li onClick={() => handleUrl("/signup")} className={url === "/signup" ? "active" : ""}>
                                        {/* <a href="/signup"> Sign Up</a> */}
                                        <Link to="/signup"> Sign Up</Link>
                                    </li>
                                </ul>
                        }
                    </div>
                    {/*/.nav-collapse */}
                </div>
                {/*/.container-fluid */}
            </nav>
        </div>
    )
}
