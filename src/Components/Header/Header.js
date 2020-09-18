import React, { useContext } from 'react';
import './header.css'
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';

import Logo from '../../Icon/Logo.png'
import { Link } from 'react-router-dom';
import { userContext } from '../../App';

const Header = ({ fontcolor }) => {

  const [loggedUser, setLoggedUser] = useContext(userContext);
  const linkStyle = {
    color: fontcolor
  }

  let brightness;
  if (fontcolor === "white") {
    brightness = 100;
  }
  else {
    brightness = 0
  }
  const logostyle = {
    filter: `brightness(${brightness})`
  }
  const style = {
    background: "rgba(255, 255, 255, 0.2)",
    border: "1px solid #FFFFFF",
    boxSizing: "border-box",
    borderRadius: "5px",
    width: "370px",
    height: "44px",
    color: fontcolor,
    padding: "5px"
  }

  const handleLogout=()=>{
    setLoggedUser({});
  }
  return (
    < >
      <Navbar expand="lg">
        <Navbar.Brand href="#home">
          <img
            src={Logo}
            width="120px"
            height="56px"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
            className="logo"
            style={logostyle}
          />
        </Navbar.Brand>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" style={style} />
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link style={linkStyle} >News</Link>
            <Link    style={linkStyle}>Destination</Link>
            <Link  style={linkStyle}>Blog</Link>
            <Link  style={linkStyle}>Contract</Link>
          </Nav>

          {
            loggedUser.name ? (<>
            <h6 style={{color:"yellowgreen",padding:"10px"}}>{loggedUser.name}</h6>
              <Button variant="warning" style={{ padding: "5px" }} onClick ={handleLogout}>Logout</Button>
          </>
           ) :(
                <Link to="/user/login">
                  <Button variant="warning" style={{ padding: "5px 15px" }}>Login</Button>
                </Link>
              )
          }


        </Navbar.Collapse>
      </Navbar>
    </ >
  );
};

export default Header;