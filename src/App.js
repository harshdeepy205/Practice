import React, { useEffect, createContext, useReducer, useContext } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './components/navbar'
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom'
import SignIn from './pages/signIn'
import SignUp from './pages/signUp'
import Home from './pages/home'
import CreatePost from './components/createPost'
// import { Switch } from '@material-ui/core';
import { reducer, initialiState } from './reducer/userReducer'
import NavHome from './components/navHome';


export const UserContext = createContext()


const Routing = () => {
  const history = useHistory()
  const { state, dispatch } = useContext(UserContext)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    // console.log(typeof (user))
    if (user) {
      dispatch({ type: "USER", payload: user })
      history.push('/')
    }
    else {
      history.push('/signin')
    }
  }, [])
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path="/signin">
          {/* <Navbar /> */}
          <SignIn />
        </Route>
        <Route path="/signup">
          {/* <Navbar /> */}
          <SignUp />
        </Route>
        <Route path="/createPost">
          <CreatePost />
        </Route>
      </Switch>
    </>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialiState)
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <NavHome />
          <Routing />
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
