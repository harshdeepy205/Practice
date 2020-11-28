import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'materialize-css';
import NavHome from '../components/navHome'
import { Link } from 'react-router-dom'
// import { Button, Card, Row, Col } from 'react-materialize';
import CreatePost from '../components/createPost'



function Home() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allposts', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('jwt')
            }
        }).then(res => res.json())
            .then(result => {
                console.log(result)
                setData(result.posts)
            })
    }, [])
    return (
        <>
            {/* <div className="cont-color shadow-lg p-3 mb-5 bg-white rounded">
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
            </div> */}


            <div className="home">
                {
                    data.map(item => {
                        return (
                            <div className="card post-card">
                                <h4 className="card-title">{item.postedBy.name}</h4>
                                <div className="card-image">
                                    <img className="card-imagee" src={item.photo} />
                                </div>
                                <div className="card-action mx-2 my-2">
                                    <a href="#" >This is a link</a>
                                    <a href="#" className="mx-4">This is a link</a>
                                </div>
                                <div className="my-2 mx-2 card-content">
                                    <h6>{item.title}</h6>
                                    <p>{item.body}</p>
                                    <input type="text" className="form-control" placeholder="Add a comment" style={{ border: "none", textDecoration: "none" }} />
                                </div>
                            </div>
                        )
                    })
                }


                {/* <div className="card post-card my-2">
                    <h4 className="card-title">Card Title</h4>
                    <div className="card-image">
                        <img className="card-imagee" src="https://images.unsplash.com/photo-1502759683299-cdcd6974244f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                    </div>
                    <div className="card-action mx-2 my-2">
                        <a href="#" >This is a link</a>
                        <a href="#" className="mx-4">This is a link</a>
                    </div>
                    <div className="my-2 mx-2 card-content">
                        <h6>Title</h6>
                        <p>Nature's Beauty</p>
                        <input type="text" className="form-control" placeholder="Add a comment" style={{ border: "none", textDecoration: "none" }} />
                    </div>
                </div> */}

                {/* <div className="card post-card">
                    <h4 className="card-title">Card Title</h4>
                    <div className="card-image">
                        <img className="card-imagee" src="https://images.unsplash.com/photo-1502759683299-cdcd6974244f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                    </div>
                    <div className="card-action mx-2 my-2">
                        <a href="#" >This is a link</a>
                        <a href="#" className="mx-4">This is a link</a>
                    </div>
                    <div className="my-2 mx-2 card-content">
                        <h6>Title</h6>
                        <p>Nature's Beauty</p>
                        <input type="text" className="form-control" placeholder="Add a comment" style={{ border: "none", textDecoration: "none" }} />
                    </div>
                </div> */}
            </div>

        </>
    )
}

export default Home;
