import Nav from 'react-bootstrap/Nav';
import React from 'react'


export default function Nav1() {
  return (
    <div class="d-flex justify-content-around">
         <Nav
      activeKey="/home"
  
    >
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Login</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Additem</Nav.Link>
      </Nav.Item>
    </Nav>

    </div>
  )
}
