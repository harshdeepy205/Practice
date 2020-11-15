import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import avatar from '../img/avatar.svg'
import wave from '../img/wave.png'
import bg from '../img/bg.svg'
import { Link } from 'react-router-dom'
function SignUp() {
    return (
        <>
            <img src={wave} className="wave" />
            <div className="container">
                <div className="img">
                    <img src={bg} />
                </div>
                <div className="login-content">
                    <div className="form">
                        <img src={avatar} />
                        <h2 className="title">Welcome</h2>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="div">
                                {/* <h5>Username</h5> */}
                                <input type="text" placeholder="Email" className="input" />
                            </div>
                        </div>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                {/* <h5>Password</h5> */}
                                <input type="text" placeholder="Username" className="input" />
                            </div>
                        </div>
                        <div className="input-div pass">
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                {/* <h5>Password</h5> */}
                                <input type="password" placeholder="Password" className="input" />
                            </div>
                        </div>
                        <center><Link to="/signin">Already have an account?</Link></center>
                        <input type="submit" className="btn" value="SignUp" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;