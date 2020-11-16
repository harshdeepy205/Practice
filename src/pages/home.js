import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
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
    )
}

export default Home;
