import { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";


function FormComp() {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  function send2DB() {
    console.log(inputName);
    console.log(inputEmail);

    //This will be sent to DB
    // INSERT INTO contacts (Nome, Email)
    // VALUES  (inputName, inputEmail);

  }
  
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
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
        </Form.Group>
        <Form.Group
          className="col-md-3 mx-2"
          controlId="from.ControlInputEmail"
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className="rounded-6"
            type="email"
            placeholder="name@example.com"
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
          />
        </Form.Group>
      </Form>
      <Row className="col-md-6 mx-auto m-5">

      <Button className="rounded-5" variant="primary" type="submit" onClick={send2DB}>Join The Waitlist!</Button>
      </Row>
    </Container>
  );
}



export default FormComp;
