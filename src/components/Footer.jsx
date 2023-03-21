import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Container fluid className="bg-dark text-light">
      <Row>
        <Col className="text-center py-3">
          &copy; 2023 My Website. All rights reserved.
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
