import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./StepComp.css";
import StepImg from "../assets/stepImg.png"



export const ArrowCurveL = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="224"
      height="247"
      viewBox="0 0 224 247"
      fill="none"
    >
      <path
        d="M2.07112 0.00911748C1.03325 -0.0509177 0.143234 0.741766 0.0831989 1.77962C0.0231637 2.81749 0.815848 3.7075 1.8537 3.76754L2.07112 0.00911748ZM208.632 246.043C209.367 246.778 210.558 246.778 211.293 246.043L223.273 234.063C224.008 233.328 224.008 232.137 223.273 231.402C222.537 230.667 221.346 230.667 220.611 231.402L209.962 242.05L199.314 231.402C198.579 230.667 197.387 230.667 196.652 231.402C195.917 232.137 195.917 233.328 196.652 234.063L208.632 246.043ZM1.8537 3.76754C36.1762 5.75293 87.7645 20.1792 130.738 56.996C173.641 93.753 208.08 152.928 208.08 244.712H211.845C211.845 151.862 176.951 91.6309 133.187 54.1371C89.4936 16.7031 37.082 2.03433 2.07112 0.00911748L1.8537 3.76754Z"
        fill="#110E3D"
        fill-opacity="0.1"
      />
    </svg>
  );
};



export const ArrowCurveR = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="224" height="223" viewBox="0 0 224 223" fill="none">
  <path d="M222.043 4.50034C223.023 4.55543 223.862 3.80539 223.917 2.8251C223.972 1.84481 223.222 1.00547 222.242 0.950392L222.043 4.50034ZM12.073 221.508C12.7793 222.19 13.9048 222.17 14.5868 221.464L25.6998 209.953C26.3818 209.247 26.362 208.121 25.6556 207.44C24.9493 206.757 23.8238 206.777 23.1419 207.483L13.2636 217.715L3.03173 207.837C2.32538 207.155 1.19993 207.175 0.517968 207.881C-0.163989 208.587 -0.144207 209.713 0.562152 210.395L12.073 221.508ZM222.242 0.950392C186.458 -1.06023 133.008 7.48179 88.8587 39.7069C44.6084 72.0052 9.90764 127.947 11.5302 220.26L15.0852 220.198C13.4812 128.939 47.7197 74.1362 90.9547 42.5788C134.29 10.9482 186.871 2.52415 222.043 4.50034L222.242 0.950392Z" fill="#110E3D" fill-opacity="0.1"/>
</svg>
  );
};

const StepOne = () => {
  return (
    <Container className="my-5 d-flex justify-content-start stepComp">
      <Row className="d-flex justify-content-center">
        <Col className="col-md-7 mt-2 justify" sx= {3} md={5}>
          <sapn className="greentag">Research & benchmarking</sapn>
          <h4 className="mt-4 textH4">
            Unleashing User-Centric Design: Research, Benchmark and Discover
          </h4>
          <img src={StepImg} alt="test" className="img-fluid"   />
        </Col>
        <Col className="arrowCurve" xs={3}>
          <ArrowCurveL />
        </Col>
      </Row>
      
    </Container>
  );
};

export default StepOne;



export const StepTwo = () => {
  return (
    <Container className="my-5 col-md-7 mt-2 justify stepComp">
      
      <Row className="d-flex justify-content-center">
      <Col className="arrowCurve" >
          <ArrowCurveR />
        </Col>
        <Col className="justify" >
          <sapn className="redtag">USER JOURNERY</sapn>
          <h4 className="mt-4 textH4">
            Unleashing User-Centric Design: Research, Benchmark and Discover
          </h4>
          <img src={StepImg} alt="test" className="img-fluid"   />
        </Col>
        
      </Row>
      
    </Container>
  );
};

 


export const Stepthree = () => {
  return (
    <Container className="my-5 d-flex justify-content-start stepComp">
      <Row className="d-flex justify-content-center">
        <Col className="col-md-7 mt-2  justify" sx= {3} md={5}>
          <sapn className="orangetag">PROTOTYPING</sapn>
          <h4 className="mt-4 textH4">
            Unleashing User-Centric Design: Research, Benchmark and Discover
          </h4>
          <img src={StepImg} alt="test" className="img-fluid"   />
        </Col>
        <Col className="arrowCurve" xs={3}>
          <ArrowCurveL />
        </Col>
      </Row>
      
    </Container>
  );
};



export const StepFour  = () => {
  return (
    <Container className="my-5 col-md-7 mt-2 justify stepComp">
      
      <Row className="d-flex justify-content-end">

        <Col className="justify" >
          <sapn className="bluetag">USER testing</sapn>
          <h4 className="mt-4 textH4">
            Unleashing User-Centric Design: Research, Benchmark and Discover
          </h4>
          <img src={StepImg}  alt="test" className="img-fluid"  />
        </Col>
        
      </Row>
      
    </Container>
  );
};