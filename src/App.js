import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import SignIn from './pages/signIn'
import SignUp from './pages/signUp'
import Home from './pages/home'


function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path="/signin">
          <Navbar />
          <SignIn />
        </Route>
        <Route path="/signup">
          <Navbar />
          <SignUp />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
