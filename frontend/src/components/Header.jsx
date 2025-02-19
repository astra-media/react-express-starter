import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar bg='dark' data-bs-theme='dark'>
      <Container>
        <Navbar.Brand as={Link} to='/'>
          React Express Starter Kit
        </Navbar.Brand>
        <Nav className='ms-auto'>
          <Nav.Link as={Link} to='/'>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to='/features'>
            Features
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header
