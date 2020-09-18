import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
 import './signup.css'
 
const SignUp = ({error}) => {
    error("");
    const history = useHistory();
    const [userData, setUserData] = useState({
        fname:"",
        lname:"",
        email: "",
        password: "",
        password2:"",
        mgs:""
        
    })

    const handleBlur = event => {
        const data = { ...userData }
        data[event.target.name] = event.target.value;
        setUserData(data)
    }
    const handleSubmit = event => {
         
        event.preventDefault()
        if(userData.password === userData.password2){
            firebase.auth().createUserWithEmailAndPassword(userData.email,userData.password)
            .then(res => {
                const newUser = { ...userData };
                newUser.mgs = "";
                console.log("coming1");
                setUserData(newUser)
                updateprofile(userData)
                history.push('/user/login')
            })
            .catch(err => {
                const newUser = { ...userData };
                console.log(err.message);
                newUser.mgs = err.message;
                setUserData(newUser)
            })

        }
        else{
            const newUser = { ...userData };

                newUser.mgs = " Password Dose not match  ";
                setUserData(newUser)
        }
    }

    const updateprofile = () => {
        var user = firebase.auth().currentUser;
        console.log("coming2");
        user.updateProfile({
                displayName : userData.fname + userData.lname

        }).then(function () {
            console.log("user Added successfully");
        }).catch(function (error) {
            console.log(error);
        });

    }
    return (
        <>
            <Form className="login-form" onSubmit={handleSubmit} >
                <h4 style={{ textAlign: "left", paddingBottom: "10px", fontWeight: "bold" }}>Create Account</h4>
                <p style = {{color:"red"}}> {userData.mgs}</p>
                <Form.Group controlId="formGroupFristName">

                    <Form.Control type="text" name="fname" required placeholder="First Name" onBlur={handleBlur} />
                </Form.Group>
                <Form.Group controlId="formGroupLastName">

                    <Form.Control type="text" name="lname" required placeholder="Last Name" onBlur={handleBlur} />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">

                    <Form.Control type="email" name="email" required placeholder="Enter email" onBlur={handleBlur} />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Control type="password" name="password" required placeholder="Password" onBlur={handleBlur} />
                </Form.Group>
                <Form.Group controlId="formGroupPassword2">
                    <Form.Control type="password" name="password2" required placeholder="confirm Password" onBlur={handleBlur} />
                </Form.Group>
                 


                <Button variant="warning" type="submit" style={{ width: "100%" }}>
                    Create Account
             </Button>


                <h6 style={{ padding: "15px" }}>Already have An Accoun ?
                <Link to="/user/login">
                        <span style={{ color: "red" }}>&nbsp;&nbsp;Login</span>
                    </Link>
                </h6>

            </Form>
        </>
    );
};

export default SignUp;