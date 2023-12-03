import Carousel from "react-bootstrap/Carousel";

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="slideImg"
          src="https://img.freepik.com/free-photo/low-angle-view-unrecognizable-muscular-build-man-preparing-lifting-barbell-health-club_637285-2497.jpg"
          alt=""
        />
        <Carousel.Caption>
          <h3>Push Yourself Past Your Limits</h3>
          <p>
            Hit milestones and PR’s by taking on a new challenge every month.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slideImg"
          src="https://www.eatthis.com/wp-content/uploads/sites/4/2022/07/group-workout-class-rooftop.jpg?quality=82&strip=1"
          alt=""
        />
        <Carousel.Caption>
          <h3>Push Yourself Past Your Limits</h3>
          <p>
            Hit milestones and PR’s by taking on a new challenge every month.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slideImg"
          src="https://sportshub.cbsistatic.com/i/r/2023/08/16/3c0cf9cd-798b-4e47-b9cc-dba61dd1b58f/resize/750x422/53c6f0cc2c4e930bfa04b6da9827d975/gettyimages-1300705534-1.jpg"
          alt=""
        />
        <Carousel.Caption>
          <h3>Push Yourself Past Your Limits</h3>
          <p>
            Hit milestones and PR’s by taking on a new challenge every month.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
