import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/Home/home.css';
import backgroundImg from './Image/home.png';
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Book from './Components/Book/Book';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import SignUp from './Components/SingUp/SignUp';
import Hotels from './Components/Hotel/Hotels';
import PrivateRoute from './Components/PrivetRoute/PrivateRoute';
export const userContext =createContext();
function App() {
    const [loggedUser,setLoggedUser] = useState({
      email:"",
      name:""
    });
  return (
    <userContext.Provider value={[loggedUser,setLoggedUser]}>
      <BrowserRouter>
        
         
        <Switch >
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/home">
          <Home></Home>
          </Route>
           
          <Route path="/book/:place">
            <Book></Book>
          </Route>
          <PrivateRoute  path="/hotel/:place">
            <Hotels></Hotels>
          </PrivateRoute >
          <Route path="/user/:form">
            <Login></Login>
          </Route>
        </Switch>
        

      </BrowserRouter>


    </userContext.Provider>
  );
}

export default App;
