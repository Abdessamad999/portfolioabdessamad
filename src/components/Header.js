import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/Logo.png';
import Icon1 from "../assets/img/fiverr-circle-svgrepo-com.svg";
import Icon2 from "../assets/img/1929180_upwork_icon.svg";
import Icon3 from "../assets/img/likd.svg";
import {BrowserRouter, Link } from "react-router-dom";
export default function Header() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  return (
   <BrowserRouter>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'compétences' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('compétences')}>compétences</Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>project</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <Link to="https://fr.fiverr.com/elouachanabd189?up_rollout=true"><img src={Icon1} alt="fiverr" /></Link>
                <Link to="https://www.upwork.com/freelancers/~011c3387eae1ebfb0b"><img src={Icon2} alt="upwork" /></Link>
                <Link to="https://www.linkedin.com/in/elouachan-abdessamad-341717209/"><img src={Icon3} alt="linkden" /></Link>
              </div>
              <Link  to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </Link>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </BrowserRouter>
  );
}








