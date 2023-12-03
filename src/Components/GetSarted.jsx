import React from "react";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";
import GetStartedButton from "./GetStartedButton";

export default function GetSarted() {
  return (
    <Container className="getStarted">
      <Row>
        <Col>
          <h1>
            SET GOALS. <br />
            PLAN WORKOUT. <br />
            STAY ON TRACK.
          </h1>
          <br />
          <br />
          <p>
            Easily track your Workouts, set Training Plans,
            <br /> and discover new Workout Routines to crush <br /> your goals.
          </p>
        </Col>
        <Col>
          <div className="imgCard">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://d3oorwrq3wx4ad.cloudfront.net/articles/extra/31596275076.jpg"
              />
              <Card.Body>
                <Card.Title>Track it, Achieve it</Card.Title>
                <Card.Text>
                  Now you have the tools to build healthy habits for life.
                </Card.Text>
                <GetStartedButton></GetStartedButton>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
