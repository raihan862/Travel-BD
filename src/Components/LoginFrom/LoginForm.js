import React, { useContext, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import './loginForm.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Login/Authentication';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { userContext } from '../../App';


const LoginForm = () => {
    
    const location = useLocation();
    const history = useHistory();
    const [loggedUser, setLoggedUser] = useContext(userContext);
    const [userData, setUserData] = useState({
        name:"",
        email: "",
        password: "",
        mgs: ""
    })

    const { from } = location.state || { from: { pathname: "/" } };

    const handleBlur = event => {
        const data = { ...userData }
        data[event.target.name] = event.target.value;
        setUserData(data)
    }
    const handleSubmit = event => {

        event.preventDefault()


        firebase.auth().signInWithEmailAndPassword(userData.email, userData.password)
            .then(res => {
                const newUser = { ...userData };
                var user = firebase.auth().currentUser;
                 

                if (user != null) {
                    newUser.name= user.displayName;
                    
                }
               

                newUser.mgs = "";
                setUserData(newUser)
                setLoggedUser(newUser);
                 
            })
            .catch(err => {
                const newUser = { ...userData };

                newUser.mgs = " Wrong UserName or Password ";
                setUserData(newUser)
            })
    }
    return (
        <>
            <Form className="login-form" onSubmit={handleSubmit} >
                <h4 style={{ textAlign: "left", paddingBottom: "20px", fontWeight: "bold" }}>Login</h4>
                <p style={{ color: "red" }}> {userData.mgs}</p>
                <Form.Group controlId="formGroupEmail">

                    <Form.Control type="email" name="email" required placeholder="Enter email" onBlur={handleBlur} />
                </Form.Group>

                <Form.Group controlId="formGroupPassword">
                    <Form.Control type="password" name="password" required placeholder="Password" onBlur={handleBlur} />
                </Form.Group>

                <Row style={{ textAlign: "left", paddingBottom: "20px" }} >
                    <Col>
                        <Form.Check
                            type="checkbox"
                            className="mb-2 mr-sm-2"
                            id="inlineFormCheck"
                            label="Remember me"
                            style={{ textAlign: "left" }}
                        /></Col>

                    <Col>
                        <small>Forgot Password</small>
                    </Col>
                </Row>

                <Button variant="warning" type="submit" style={{ width: "100%" }}>
                    Loggin
                </Button>
                <h6 style={{ padding: "15px" }}>Dont have An Accoun ?
                <Link to="/user/sign-up">
                        <span style={{ color: "red" }}>&nbsp;&nbsp; Create Account</span>
                    </Link>
                </h6>

            </Form>
        </>
    );
};

export default LoginForm;