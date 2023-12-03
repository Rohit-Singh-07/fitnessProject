import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import AboutCard from "./AboutCard";

function AboutButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        className="aboutButton"
        onMouseEnter={() => setOpen(!open)}
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        About Us
      </Button>
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
    </>
  );
}

export default AboutButton;
