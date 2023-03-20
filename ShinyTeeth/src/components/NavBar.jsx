import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import img from '../images/endodoncia.png';
import { Link } from 'react-router-dom';
import './NavBar.css'

export const NavBar = () => {
  return (
    <>
    <Navbar expand="lg" className='navBar'>
        <Image src={img} className="imgNavBar"/>
        <Navbar.Brand as={Link} to={'/home'} className='titleNavBar'>SHINY TEETH</Navbar.Brand>
        <div className='yo'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to='/register'>Registrate</Nav.Link>
                <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </div>
    </Navbar>
    </>
    )
}
