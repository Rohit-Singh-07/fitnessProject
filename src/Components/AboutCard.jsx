import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function AboutCard() {
  return (
    <CardGroup>
      <Card>
        <a href="https://www.linkedin.com/in/rohitsingh77?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <Card.Img
            variant="top"
            src="https://media.licdn.com/dms/image/D4D03AQF4HCFU_C7GdQ/profile-displayphoto-shrink_800_800/0/1673636031397?e=1706745600&v=beta&t=od1PXmlmdVe4TsFsVBy68lmHTMYyNlwtNSji9jZRTAc"
          />
        </a>
        <Card.Body>
          <Card.Title>
            <b>Rohit SIngh</b>
          </Card.Title>
          <Card.Text className="cardTxt">12315321</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <a href="https://www.linkedin.com/in/raj-pada-kon-7186302a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <Card.Img
            variant="top"
            src="https://media.licdn.com/dms/image/D4D03AQG1uDUZEVWKQA/profile-displayphoto-shrink_800_800/0/1701259789480?e=1706745600&v=beta&t=rxFOU3W3pykk9zSSd6FDuxoq6O7cUpK-K8I7klQOPfs"
          />
        </a>
        <Card.Body>
          <Card.Title>
            <b>Raj Panchal</b>
          </Card.Title>
          <Card.Text>12315308</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <a href="https://www.linkedin.com/in/ayush-singh-622951297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
          <Card.Img
            variant="top"
            src="https://media.licdn.com/dms/image/D4E03AQFGHtkiB77Wcg/profile-displayphoto-shrink_800_800/0/1701246965168?e=1706745600&v=beta&t=CLnjmYfbeCYG3Fw1BjWSwQbpxo45QKaW2lvztULYiIY"
          />
        </a>
        <Card.Body>
          <Card.Title>
            <b>Ayush Singh</b>
          </Card.Title>
          <Card.Text>12315271</Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default AboutCard;
