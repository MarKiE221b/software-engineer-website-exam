import React, { useEffect, useState, useCallback } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { addDoc } from "firebase/firestore";
import ModalCheck from "../components/ModalCheck";
import checkMarkLottie from "../api/checkMarkLottie.json"

function Forms({ databaseReference }) {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skill: "",
  });

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      setFormData({
        name: "",
        email: "",
        skill: "",
      });

      addDoc(databaseReference, {
        name: formData.name,
        email: formData.email,
        skillFramwork: formData.skill,
      }).then(() => {
        setShowModal(true);
      });
    },
    [formData, databaseReference]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [handleSubmit]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Container>
          <Form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    [event.target.id]: event.target.value,
                  })
                }
                required
                style={{ padding: '12px', fontSize: '16px' }}
              />
              <Form.Text className="text-muted">Your email address</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Fullname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter fullname"
                value={formData.name}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    [event.target.id]: event.target.value,
                  })
                }
                required
                style={{ padding: '12px', fontSize: '16px' }}
              />
              <Form.Text className="text-muted">Your email address</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="skill">
              <Form.Label>Skill / Framework</Form.Label>
              <Form.Control
                type="text"
                placeholder="Skill / Framework"
                value={formData.skill}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    [event.target.id]: event.target.value,
                  })
                }
                required
                style={{ padding: '12px', fontSize: '16px' }}
              />
            </Form.Group>
            <Button variant="primary" type="submit" style={{ width: '100%', padding: '12px', fontSize: '16px', marginTop: '16px' }}>
              Submit
            </Button>
          </Form>
        {showModal && <ModalCheck animationImage={checkMarkLottie}/>}
      </Container>
    </div>
  );
}

export default Forms;
