import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import avatar from '../img/avatar.svg'
import wave from '../img/wave.png'
import bg from '../img/bg.svg'

function SignIn() {
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
                                <h5>Username</h5>
                                <input type="text" className="input" />
                            </div>
                        </div>
                        <div className="input-div pass">
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                <h5>Password</h5>
                                <input type="password" className="input" />
                            </div>
                        </div>
                        <a href="#">Forget Password</a>
                        <input type="submit" className="btn" value="Login" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn;