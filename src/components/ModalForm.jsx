
import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { updateDoc, doc } from "firebase/firestore";
import { database } from "../api/firebaseConfig";


const ModalForm = ({ DATA }) => {

  const [formData, setFormData] = useState(
    { name: "", email: "", skill: "" }
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
      name: "",
      email: "",
      skill: "",
    });
    editDocument()
  };

  const editDocument = () => {
    let fieldToEdit = doc(
      database,
      "firebase-firestore-softwareengineers collection",
      DATA.id
    );
    updateDoc(fieldToEdit, {
      email: formData.email,
      name: formData.name,
      skillFramwork: formData.skill,
    }).then(() => {});
  }

  return (
    <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder={DATA.email}
              value={formData.email}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  [event.target.id]: event.target.value,
                })
              }
              required
            />
            <Form.Text className="text-muted">Your email address</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Fullname</Form.Label>
            <Form.Control
              type="text"
              placeholder={DATA.name}
              value={formData.name}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  [event.target.id]: event.target.value,
                })
              }
              required
            />
            <Form.Text className="text-muted">Your email address</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="skill">
            <Form.Label>Skill / Framework</Form.Label>
            <Form.Control
              type="text"
              placeholder={DATA.skillFramwork}
              value={formData.skill}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  [event.target.id]: event.target.value,
                })
              }
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
    </Container>
  );
};

export default ModalForm;
