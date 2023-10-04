import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className='mb-5'>
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/">
                            <Nav.Link as="span">Inicio</Nav.Link>
                        </Link>
                        <Link to="/comidas">
                            <Nav.Link as="span">Comidas</Nav.Link>
                        </Link>
                        <Link to="/recetas">
                            <Nav.Link as="span">Recetas</Nav.Link>
                        </Link>
                        <Link to="/crear">
                            <Nav.Link as="span">Crear comida</Nav.Link>
                        </Link>
                        <Link to="/crear/receta">
                            <Nav.Link as="span">Crear Receta </Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation