import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useHistory } from 'react-router-dom'
// import 'materialize-css';
import { Link } from 'react-router-dom'
// import { UserContext } from '../App';

function NavHome() {

    return (
        <>
            <div className="cont-color shadow-lg p-3 mb-5 bg-white rounded">
                <div className="nav_bar">
                    <div className="logo">

                        <h3 class="brand-logo mxy-5" >🅸🅽🆂🆃🅰🅶🆁🅰🅼</h3>
                    </div>
                    <div className="menu_items">

                        <li><a href="#" className="a mx-4">Home</a></li>
                        <li><a href="#" className="a mx-4">Profile</a></li>
                        <li><Link to="/createPost" className="a mx-4">Create Post</Link></li>
                        <li><a href="#" className="a mx-4">Log Out</a></li>
                    </div>
                </div>
            </div>

        </>
    )
}

export default NavHome;