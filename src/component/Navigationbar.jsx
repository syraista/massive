import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import '../css/navbarandfooter.css'

export default function Navigationbar(props) {
  // login state 0 and 1
  if (props.log == 0) {
    return (
      <Navbar expand="lg" id="navbarMain" className="bg-body-tertiary">
          <Navbar.Brand id="navbrand" as={Link} to="/"><img className="navlogo" src="Logo.svg"/>work<span>weave</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
  
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav id="navlinks" className="me-auto">
              <hr className="nav-divider" />
              <Nav.Link className="navilink" as={Link} to="/">Beranda</Nav.Link>
              <Nav.Link className="navilink" as={Link} to="/home">Proyek Saya</Nav.Link>
              <Nav.Link className="navilink" as={Link} to="/home">Notifikasi</Nav.Link>
              <Nav.Link className="navilink" as={Link} to="/home">FAQ</Nav.Link>
              <hr className="nav-divider" />
              <Button className="loginbuttons" id='loginbutton2' variant="primary">Masuk</Button>{' '}
            </Nav>
          </Navbar.Collapse>
          <Button className="loginbuttons" id='loginbutton1' variant="primary">Masuk</Button>{' '}
      </Navbar>
    );
  }

  if (props.log == 1) {
    return (
      <Navbar expand="lg" id="navbarMain" className="bg-body-tertiary">
          <Navbar.Brand id="navbrand" as={Link} to="/"><img className="navlogo" src="Logo.svg"/>work<span>weave</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
  
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav id="navlinks" className="me-auto">
              <hr className="nav-divider" />
              <Nav.Link className={`navilink ${props.navn === 1 ? 'navactive' : ''}`} as={Link} to="/">Beranda</Nav.Link>
              <Nav.Link className={`navilink ${props.navn === 2 ? 'navactive' : ''}`} as={Link} to="/home">Proyek Saya</Nav.Link>
              <Nav.Link className={`navilink ${props.navn === 3 ? 'navactive' : ''}`} as={Link} to="/home">Notifikasi</Nav.Link>
              <Nav.Link className={`navilink ${props.navn === 4 ? 'navactive' : ''}`} as={Link} to="/home">FAQ</Nav.Link>
              <hr className="nav-divider" />
              <Button className="loginbuttons" id='loginbutton2' variant="primary">Masuk</Button>{' '}
            </Nav>
          </Navbar.Collapse>
          <Button className="loginbuttons" id='loginbutton1' variant="primary"><Image className="profimg" src="./assets/profile-dummy.png" roundedCircle /> Hi, Raihan!</Button>{' '}
      </Navbar>
    );
  }
}
