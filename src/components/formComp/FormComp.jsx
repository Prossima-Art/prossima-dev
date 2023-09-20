import { Button, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function FormComp() {
  return (
    <Container className="mt-5">
      <Form className="d-flex flex-row justify-content-center ">
        <Form.Group className="col-md-3 mx-2" controlId="form.ControlInputName">
          <Form.Label>Your name</Form.Label>
          <Form.Control
            className="rounded-5"
            as="input"
            placeholder="your name"
            rows={1}
          />
        </Form.Group>
        <Form.Group
          className="col-md-3 mx-2"
          controlId="from.ControlInputEmail"
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className="rounded-5"
            type="email"
            placeholder="name@example.com"
          />
        </Form.Group>
      </Form>
      <Row className="col-md-6 mx-auto m-5">

      <Button className="rounded-5" variant="primary" type="submit">Join The Waitlist!</Button>
      </Row>
    </Container>
  );
}

export default FormComp;
