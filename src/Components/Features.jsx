import Accordion from "react-bootstrap/Accordion";

function CollapsibleFeatures() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>FITNESS ASSESSMENT</Accordion.Header>
        <Accordion.Body>
          Your expert coach will take you through an assessment in order to
          create your personal plan for success. Whether you're a beginner or an
          experienced athlete, we have a coach for you
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>NUTRITIONAL SUCCESS</Accordion.Header>
        <Accordion.Body>
          You'll get a personalized nutrition plan built specifically for your
          needs. No more guesswork, no more stress. You'll learn how to eat on
          your own terms while establishing healthy habits.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>WORKOUTS</Accordion.Header>
        <Accordion.Body>
          We build the workouts for you, you follow them and get results. The
          Fitocracy mobile app will take you through each expert-built workout,
          set by set.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>MOTIVATION & ACCOUNTABILITY</Accordion.Header>
        <Accordion.Body>
          Your coach works with you on a daily basis to keep you motivated and
          on track. They're your secret weapon to hit any goal, no matter what
          it is.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default CollapsibleFeatures;
