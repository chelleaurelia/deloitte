import './navbar.css';
import { useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Container, Navbar, NavbarBrand } from 'react-bootstrap';

const Header = (props) => {
    const navigate = useNavigate();
    return (
        <>
        <div className='header'>
            <Navbar>
                <Container className='navbar-container'>
                    <Navbar.Brand className='navbar-item'><b>{props.title}</b></Navbar.Brand>
                    <Navbar.Brand className='navbar-divider'>|</Navbar.Brand>
                    <Nav.Link className='logout-button' onClick={() => navigate('/')}><b>Log Out</b></Nav.Link>
                </Container>
            </Navbar>
        </div>

        </>
    )
}

export default Header