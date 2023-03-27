import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { userData, userout } from '../layouts/userSlice';
import img from '../images/endodoncia.png';
import { Link } from 'react-router-dom';
import './NavBar.css'

export const NavBar = () => {
  const credentialsRdx = useSelector(userData);

const dispatch = useDispatch();
const navigate = useNavigate()

  const logout = () => {
    // localStorage.setItem("token", JSON.stringify(null));
    dispatch(userout({ credentials: {}, token: '' }));
    return navigate("/");
  };

  return (
    <>
    <Navbar expand="lg" className='navBar'>
    <Image src={img} className="imgNavBar"/>
    <Navbar.Brand as={Link} to={'/home'} className='titleNavBar'>SHINY TEETH</Navbar.Brand>
        <div className='yo'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    {credentialsRdx.credentials.roleId === 2 ? (
                    <>
                    <Nav.Link as={Link} to='/profile'>Perfil</Nav.Link>
                    <Nav.Link as={Link} to='/appointmentuser'>Appointment</Nav.Link>
                    <Nav.Link as={Link} to='/logout' onClick={() => logout()}>Logout</Nav.Link>
                    </>
                    ) : credentialsRdx.credentials.roleId === 3 ? (
                    <>
                    <Nav.Link as={Link} to='/profile'>Perfil</Nav.Link>
                    <Nav.Link as={Link} to='/logout' onClick={() => logout()}>Logout</Nav.Link>
                    </>
                    ) : credentialsRdx.credentials.roleId === 4 ? (
                    <>
                    <Nav.Link as={Link} to='/profile'>Perfil</Nav.Link>
                    <Nav.Link as={Link} to='/allUsers'>Usuarios</Nav.Link>
                    <Nav.Link as={Link} to='/logout' onClick={() => logout()}>Logout</Nav.Link>
                    </>
                    ) : (
                    <>
                    <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                    <Nav.Link as={Link} to='/register'>Register</Nav.Link>
                    </>
                    )}
                </Nav>
            </Navbar.Collapse>
        </div>
    </Navbar>
    </>

    )
}
