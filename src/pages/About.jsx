import { Container, Row, Col, Image } from "react-bootstrap";
import React from "react";

function About() {
  return (
    <Container className="flex-grow-1 mb-5">
      <Row className="px-4 my-5">
        <Col>
          <Image
            src="/Profile.jpg"
            className="mx-auto d-block"
            style={{ maxWidth: "300px", maxHeight: "300px" }}
            fluid
            roundedCircle
          />
          <h1 className="text-center my-custom-font">Marc Espiritu</h1>
        </Col>
      </Row>
      <Row className="px-4 my-5">
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu
          dolor ut enim lobortis commodo ac vel lorem. Donec in nulla eget leo
          rhoncus venenatis. Nunc id purus sapien. Morbi dignissim, turpis in
          congue eleifend, odio sapien euismod ipsum, vel scelerisque lectus
          dolor a orci.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu
          dolor ut enim lobortis commodo ac vel lorem. Donec in nulla eget leo
          rhoncus venenatis. Nunc id purus sapien. Morbi dignissim, turpis in
          congue eleifend, odio sapien euismod ipsum, vel scelerisque lectus
          dolor a orci.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu
          dolor ut enim lobortis commodo ac vel lorem. Donec in nulla eget leo
          rhoncus venenatis. Nunc id purus sapien. Morbi dignissim, turpis in
          congue eleifend, odio sapien euismod ipsum, vel scelerisque lectus
          dolor a orci.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu
          dolor ut enim lobortis commodo ac vel lorem. Donec in nulla eget leo
          rhoncus venenatis. Nunc id purus sapien. Morbi dignissim, turpis in
          congue eleifend, odio sapien euismod ipsum, vel scelerisque lectus
          dolor a orci.
        </p>
      </Row>
    </Container>
  );
}

export default About;
