import React from 'react';

import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown , NavLink} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Hader = () => {
    const { user , logout} = useAuth()
    // console.log(user)
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Diognestic Center</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to ="/services">Services</Nav.Link>
                            <Nav.Link as={Link} to ="/aboutus">About Us</Nav.Link>  
                            <Nav.Link as={Link} to ="/contact">Contact Us</Nav.Link>
                            <Nav.Link as={Link} to ="/faq">FAQ</Nav.Link>
                                                      
                        </Nav>
                        <Navbar.Text>
                            {user.displayName &&  'Signed in as: '+user.displayName}
                        </Navbar.Text>
                        <Form className="d-flex px-2">
                            {user.email ?  <Button onClick={logout} variant="outline-success">Log Out</Button> : <Link to='/Login'><Button onClick={logout} variant="outline-success">Log in</Button></Link>   }
                        </Form>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Hader;