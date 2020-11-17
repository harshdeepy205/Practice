import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'materialize-css';
import { Button, Card, Row, Col } from 'react-materialize';
// import PostCard from './postImage';

function Home() {
    return (
        <>
            <div className="cont-color shadow-lg p-3 mb-5 bg-white rounded">
                <div className="nav_bar">
                    <div className="logo">
                        {/* <img class="brand-logo" src="logo.PNG" alt="Not Found" /> */}
                        <h3 class="brand-logo mxy-5" >🅸🅽🆂🆃🅰🅶🆁🅰🅼</h3>
                    </div>
                    <div className="menu_items">
                        <li><a href="#" className="a mx-4">Home</a></li>
                        <li><a href="#" className="a mx-4">Profile</a></li>
                        <li><a href="#" className="a mx-4">Log Out</a></li>
                    </div>
                </div>
            </div>
            {/* <div className="row"> */}
            <div className="home">
                <div className="card post-card">
                    <h4 className="card-title">Card Title</h4>
                    <div className="card-image">
                        <img src="https://images.unsplash.com/photo-1591213595166-82c13a93b1c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                    </div>
                    <div className="card-action mx-2 my-2">
                        <a href="#" >This is a link</a>
                        <a href="#" className="mx-4">This is a link</a>
                    </div>
                    <div className="my-2 mx-2 card-content">
                        <h6>Title</h6>
                        <p>Nature's Beauty</p>
                        <input type="text" placeholder="Add a comment" style={{ border: "none", textDecoration: "none" }} />
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}

export default Home;
