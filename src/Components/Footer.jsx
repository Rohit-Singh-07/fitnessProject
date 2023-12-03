import Card from "react-bootstrap/Card";
import AboutButton from "./AboutButton";

function ImgOverlayExample() {
  return (
    <Card className="bg-dark text-white mainFooter">
      <Card.Img
        className="footerImg"
        src="https://us.123rf.com/450wm/rastudio/rastudio1903/rastudio190300149/124734858-fitness-man-doing-workout-with-smart-digital-gadget-for-keeping-fit-exercises-smart-training-smart.jpg?ver=6"
        pg
        alt="Card image"
      />
      <Card.ImgOverlay>
        <Card.Title>
          <AboutButton></AboutButton>
        </Card.Title>
        <Card.Text>
          Achieve your fitness goals through customised coaching and actionable
          tips based on your health and activity history.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImgOverlayExample;
