import { Avatar } from 'primereact/avatar';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link } from 'react-router-dom';

function Layout() {
    return (
    <>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
        <Navbar.Brand as={Link} to="/">
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6gne5AdzAvI-bm5Ts1_GVnihMEfGu1Q2PkQ&s"  alt="Image" width="80" height="60" preview="true" />
        </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* 🔄 Usamos `as={Link}` en lugar de `href` para que React Router maneje la navegación sin recargar la página */}
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/cursos">Cursos</Nav.Link>
                <NavDropdown title="Alumno" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/alumnos">Lista Alumnos</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/alumnos/nuevo">Inscribir Alumno</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/cuotas">Cuotas</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/profesores">Profesores</Nav.Link>
                <Nav.Link as={Link} to="/reportes">Reportes</Nav.Link>
                
            </Nav>
            <Avatar label="D" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} />
            </Navbar.Collapse>
        </Container>
        </Navbar>

      {/* 👇 Este es el espacio donde se muestra el contenido de las rutas hijas */}
        <Container className="mt-4">
        <Outlet />
        </Container>
    </>
    );
}

export default Layout;
