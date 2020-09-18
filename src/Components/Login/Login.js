import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import './login.css'
import facebook from '../../Icon/fb.png';
import google from '../../Icon/google.png'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './Authentication';
import { userContext } from '../../App';
import LoginForm from '../LoginFrom/LoginForm';
import SignUp from '../SingUp/SignUp';
import googleSignin from '../SignIn/GoogleSignin';

firebase.initializeApp(firebaseConfig)
const Login = () => {


    const {form} = useParams();
    const location = useLocation();
    const history = useHistory();
    const [error,setError] = useState("");
    const { from } = location.state || { from: { pathname: "/" } };
    const [loggedUser,setLoggedUser] = useContext(userContext);
    let flag=true;

    if (form ==="sign-up") {
        flag=false;
    }
    
    const handleGoogleSigning=()=>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then( result=> {
            setError("")
         const newUser = { ...loggedUser };
           newUser.name=result.user.displayName;
           newUser.email=result.user.email;
           setLoggedUser(newUser);
           
          }).catch( error=> {
             
            
            var errorMessage = error.message;
            setError(errorMessage)
            
          });
             
    }
    const handleFacebookSigning=()=>{

        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(result=> {
            setError("")
            const newUser = { ...loggedUser };
            newUser.name=result.user.displayName;
            newUser.email=result.user.email;
            setLoggedUser(newUser);
          }).catch(error=> {
            var errorMessage = error.message;
            setError(errorMessage)
          });
          

    }
    if (loggedUser.email) {
        history.replace(from)
    }

    return (
        <Container >
           
            <Header fontcolor="black"></Header>
            {
                 flag ?(<LoginForm />) :(<SignUp  error={setError} />)
            } 
                {error && <p className ="sigining-btn" style ={{color:"red"}}>{error}</p> }
                <Button className="sigining-btn" variant="light" onClick = {handleFacebookSigning} > <img className="sigining-logo" src={facebook} alt=""  /> Continue With Facebook </Button>
           
           
                <Button className="sigining-btn" variant="light" onClick = {handleGoogleSigning}><img className="sigining-logo" src={google} alt="" /> Continue With Facebook </Button>
          
        </Container >


    );
};

export default Login;