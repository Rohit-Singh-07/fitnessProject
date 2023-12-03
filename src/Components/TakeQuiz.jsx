import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function TakeQuiz() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="takeQuiz">
      <h1 className="takeQuizHead">
        FIND YOUR <br /> PERFECT FIT
      </h1>

      <p>
        Before you get started, just answer a few quick questions and we'll
        personalize your Daily Burn experience by finding the perfect program
        for you! We can't wait to welcome you into the Daily Burn family.{" "}
      </p>

      <Button variant="primary" onClick={handleShow}>
        Take Quiz
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>SIGN UP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                autoFocus
              />
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                autoFocus
              />
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />

              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter Phone Number"
                autoFocus
              />

              <Form.Label>Set Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Choose Strong Password"
                autoFocus
              />

              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="" autoFocus />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
      <img
        className="phonePic"
        src="https://d9hhrg4mnvzow.cloudfront.net/try.dailyburn.com/find-your-fit/717954fd-app-screens_115v0go0zo0du02102u028.png"
        alt=""
      />
    </div>
  );
}
