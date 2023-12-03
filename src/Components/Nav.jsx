import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/esm/Button";
import { useState, useRef } from "react";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import AboutCard from "./AboutCard";
import Offcanvas from "react-bootstrap/Offcanvas";
import SignUp from "./SignUp";
import CollapsibleFeatures from "./Features";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function CollapsibleExample() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showed, setShowed] = useState(false);

  const handleClosed = () => setShowed(false);
  const handleShowed = () => setShowed(true);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="#home">
          <b>Fitness Tracker</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={handleShow}>Features</Nav.Link>
            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Features</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <CollapsibleFeatures></CollapsibleFeatures>
              </Offcanvas.Body>
            </Offcanvas>
            <Nav.Link>Pricing</Nav.Link>

            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item
                className="aboutButton"
                onMouseEnter={() => setOpen(!open)}
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                About Us
              </NavDropdown.Item>
              <div style={{ minHeight: "150px" }}>
                <Collapse in={open} dimension="width">
                  <div id="example-collapse-text">
                    <Card
                      body
                      style={{ width: "400px" }}
                      onMouseLeave={() => setOpen(!open)}
                    >
                      <AboutCard></AboutCard>
                    </Card>
                  </div>
                </Collapse>
              </div>
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" onClick={handleShowed}>
              LOG IN
            </Nav.Link>

            <Modal show={showed} onHide={handleClosed}>
              <Modal.Header closeButton>
                <Modal.Title>Log In</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      autoFocus
                    />
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="password"
                      autoFocus
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClosed}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClosed}>
                  Log In
                </Button>
              </Modal.Footer>
            </Modal>
            <SignUp></SignUp>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
