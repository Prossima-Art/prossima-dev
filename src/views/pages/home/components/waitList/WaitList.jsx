import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FormComp from "../../../../../components/formComp/FormComp";

export const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
    >
      <path
        d="M9.62017 15.5183L6.50355 12.4017C5.91829 11.8164 4.9717 11.8164 4.38644 12.4017C3.80118 12.987 3.80118 13.9335 4.38644 14.5188L8.56644 18.6988C9.1517 19.2841 10.0983 19.2841 10.6835 18.6988L21.2635 8.1188C21.8488 7.53354 21.8488 6.58695 21.2635 6.00169C20.6783 5.41649 19.7319 5.41643 19.1466 6.00151C19.1466 6.00157 19.1465 6.00163 19.1464 6.00169L9.62017 15.5183Z"
        fill="#0068FF"
        stroke="#0068FF"
      />
    </svg>
  );
};
const WaitListComp = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col className="">
          <h1 className="subtitle d-flex justify-content-center">
            Join the waitlist and apply to be a BETA tester
          </h1>
        </Col>
      </Row>
      <Row className="mt-5 d-flex flex-row justify-content-center">
        <Col className="paragraph d-flex flex-row justify-content-center" md={2}>
          <CheckIcon />
          <p className="px-2">Early access</p>
        </Col>
        <Col className="paragraph d-flex flex-row justify-content-center"  md={2}>
          <CheckIcon />
          <p className="px-2">Special Perks</p>
        </Col>
      </Row>
      <Row >
        <FormComp/>
        
       
        </Row>
    </Container>
  );
};

export default WaitListComp;
