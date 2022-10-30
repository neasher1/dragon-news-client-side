import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {

    const { user, logOutFromGoogle } = useContext(AuthContext);
    // console.log(user);

    const handleLogOutGoogle = () => {
        logOutFromGoogle()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand><Link to='/'>Dragon News</Link> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link>
                                {
                                    user?.uid ?
                                        <>
                                            <span className='me-2'>{user?.displayName}</span>
                                            {
                                                user?.photoURL ?
                                                    <Image
                                                        className='me-2'
                                                        roundedCircle
                                                        style={{ height: '30px' }}
                                                        src={user?.photoURL}
                                                    ></Image> :
                                                    <FaUserAlt></FaUserAlt>
                                            }
                                            <Button onClick={handleLogOutGoogle} variant="light">Logout</Button>
                                        </>
                                        :
                                        <>
                                            <Link className='btn btn-success me-2' to='/login'>Login</Link>
                                            <Link className='btn btn-primary' to='/register'>Register</Link>
                                        </>
                                }

                            </Nav.Link>
                            {/* <Nav.Link>
                                {
                                    user?.photoURL ?
                                        <Image roundedCircle style={{ height: '30px' }} src={user?.photoURL}></Image> :
                                        <FaUserAlt></FaUserAlt>
                                }

                            </Nav.Link> */}
                        </Nav>
                        <div className='d-lg-none d-md-block'>
                            <LeftSideNav></LeftSideNav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;