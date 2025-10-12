import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar 
      expand="lg" 
      className="shadow-lg py-3 sticky-top"
      style={{
        backgroundColor: '#121212',
      }}
    >
      <Container>
        {

        }
        <Navbar.Brand 
          as={Link} 
          to="/" 
          className="fw-bold text-uppercase d-flex align-items-center"
          style={{ color: '#FFC107', letterSpacing: '1px' }}
        >
          <i className="bi bi-lightning-charge-fill me-2"></i>
          TaskFlow
        </Navbar.Brand>

        {

        }
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          className="border-0"
          style={{
            backgroundColor: '#FFC107',
          }}
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              className="mx-3 fw-semibold text-light"
              style={{ 
                transition: 'color 0.3s, transform 0.3s' 
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#FFC107';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#ffffff';
                e.target.style.transform = 'scale(1)';
              }}
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/add"
              className="mx-3 fw-semibold text-light"
              style={{ 
                transition: 'color 0.3s, transform 0.3s' 
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#FFC107';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#ffffff';
                e.target.style.transform = 'scale(1)';
              }}
            >
              Add Task
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;