import React, { useEffect, useState } from "react";
import { Table, Container, Button, ButtonGroup, Modal } from "react-bootstrap";
import { database } from "../api/firebaseConfig";
import { getDocs, doc, deleteDoc } from "firebase/firestore";
import ModalForm from "../components/ModalForm";
import ModalCheck from "../components/ModalCheck";
import trashClean from "../api/trashClean.json";

function Tables({ databaseReference }) {
  const [showModal, setShowModal] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);
  const [editShow, setEditShow] = useState(false);

  const [getDATA, setDATA] = useState();

  const [Data, setData] = useState([]);

  const getData = async () => {
    await getDocs(databaseReference).then((response) => {
      setData(
        response.docs.map((data) => {
          return { ...data.data(), id: data.id };
        })
      );
    });
  };

  useEffect(() => {
    getData();
  });

  const deleteDocument = (id) => {
    let fieldToDelete = doc(
      database,
      "firebase-firestore-softwareengineers collection",
      id
    );
    deleteDoc(fieldToDelete);
    setTimeout(() => {
      setShowModal(false);
    }, 5000);
  };

  

  return (
    <Container className="my-5">
      <Table responsive striped bordered hover size="sm" className="noWrap">
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name </th>
            <th>Email Address</th>
            <th>Skill / Framework</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        {Data.map((data) => {
          return (
            <>
              <tbody>
                <tr>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.skillFramwork}</td>
                  <td className="d-flex justify-content-center">
                    <ButtonGroup className="me-2" aria-label="First group">
                      <Button
                        variant="danger"
                        onClick={() => {
                          setDATA(data);
                          setDeleteShow(true);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-trash"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                          <path
                            fillRule="evenodd"
                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                          />
                        </svg>
                      </Button>{" "}
                    </ButtonGroup>
                    <ButtonGroup className="me-2" aria-label="Second group">
                      <Button
                        variant="warning"
                        onClick={() => {
                          setDATA(data);
                          setEditShow(true);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-pen"
                          viewBox="0 0 16 16"
                        >
                          <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                        </svg>
                      </Button>
                    </ButtonGroup>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </Table>
      {/* Edit Modal */}
      <Modal
        show={editShow}
        onHide={() => setEditShow(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalForm DATA={getDATA} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setEditShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Delete Modal */}
      <Modal
        show={deleteShow}
        onHide={() => setDeleteShow(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>You are about to Delete a data. Continue?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setDeleteShow(false)}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              deleteDocument(getDATA.id);
              setDeleteShow(false);
              setShowModal(true);
            }}
          >
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Check Modal */}
      {showModal && <ModalCheck animationImage={trashClean} />}
    </Container>
  );
}

export default Tables;
