import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function TrackChart() {
  return (
    <Container className="trackChart">
      <Row>
        <Col>
          <div>
            <h1>BUILT TO MAKE YOU BETTER</h1>
            <br />
            <br />

            <h2>Smart Training</h2>
            <br />
            <p>
              Turn your phone or smartwatch into your coach—track your workouts
              and get tons of data and tips to help you run better.
            </p>
            <br />
            <h2>Custom Workouts</h2>
            <br />
            <p>
              No matter where you’re at, get personalized Training Plans built
              just for you and your goals.
            </p>
            <br />
            <h2>Strong Community</h2>
            <br />
            <p>
              Create your own custom challenges to push yourself and your
              friends. For extra motivation, reach out and find support from the
              entire UA MapMyRun™ community.
            </p>
          </div>
        </Col>
        <Col>
          <img
            src="https://mapmy.uastatic.com/d4308213fe83cff0f57a800c9923298a.webp"
            alt=""
            className="trackImg"
          />
        </Col>
      </Row>
    </Container>
  );
}
