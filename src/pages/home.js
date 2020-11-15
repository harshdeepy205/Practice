import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <div className="cont-color shadow-lg p-3 mb-5 bg-white rounded">
            <div className="container">
                <nav className="conatiner navbar navbar-expand-lg navbar-light " style={{ backgroundColor: "white" }}>
                    <a className="navbar-brand" href="#">🅸🅽🆂🆃🅰🅶🆁🅰🅼
                </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ flexDirection: "row-reverse" }}>
                        <form className="form-inline my-2 my-lg-0">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item ">
                                    <a className="nav-link mx-2" href="#">Home</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link mx-2" href="#">Profile</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link mx-2" href="#">Logout</a>
                                </li>
                            </ul>
                        </form>
                    </div>
                </nav>
            </div>
            aaa
        </div>
    )
}

export default Home;
