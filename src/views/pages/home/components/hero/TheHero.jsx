import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./TheHero.css";
import Painel from "../assets/painel.png";

import { IconData, IconShield, IconLightBulb, IconBuildCircle } from "../assets/IconsHero";

const Hero = () => {
  return (
    <Container className="heroComp mt-5">
      <Row>
        <Col className="col-md-7 mx-auto mt-2">
          <sapn className="greentag">AI & ML Solutions for Business</sapn>
          <h1 className="mt-4">A new era of Innovation for your B2B business success </h1>
        </Col>
      </Row>

      <Row className=" col-md-9  mx-auto mt-5 rowComp">
        <Col className="TagDecoration" >
          {" "}
          <IconLightBulb />
          Artificial Inteligence
        </Col>
        <Col className="TagDecoration">
          <IconShield />
          Sentiment Analysis
        </Col>
        <Col className="TagDecoration">
          <IconBuildCircle />
          Process Optimization
        </Col>
        <Col className="TagDecoration">
          <IconData />
          Forecasting
        </Col>
      </Row>

      <Row>
        <Col className="mx-auto mt-5" sm={12}>
          <img src={Painel} className="imageSize" alt="painel" />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;