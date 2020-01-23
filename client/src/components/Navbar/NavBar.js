import React from 'react';
import { render } from 'react-dom';
import { Nav } from 'react-bootstrap';

const Navbar = () => {
    return(
       <>
        
        <Nav className="justify-content-center navColor" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home" className="linkColor">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" className="linkColor">Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" className="linkColor">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
      </>
        
    )
}

export default Navbar;