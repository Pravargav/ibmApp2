import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useContext } from "react";
import { Appcontext } from "../App";
import ReadbyDoctorId from "./Questions/Answers/MydoctorAnsws";
import ReadbyPatientId from "./Questions/MypatientQns";
import Form from "react-bootstrap/Form";
import Offcanvas from "react-bootstrap/Offcanvas";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

function StackExchangeHome() {
  const fields = [
    "Allergist",
    "Allergy",
    "Anesthesiology",
    "Cardiologist",
    "Cardiology",
    "Dermatologist",
    "Dermatology",
    "Emergency",
    "Endocrinology",
    "Family",
    "Gastroenterologist",
    "Gastroenterology",
    "Genetics",
    "Geriatrics",
    "Hematologist",
    "Hematology",
    "Infectious",
    "Internist",
    "Medical",
    "Medicine",
    "Nephrologist",
    "Nephrology",
    "Neurologist",
    "Neurology",
    "Neurosurgeon",
    "Neurosurgery",
    "Obstetrics",
    "Oncologist",
    "Oncology",
    "Ophthalmologist",
    "Ophthalmology",
    "Orthopedics",
    "Otolaryngology",
    "Pain",
    "Pathologist",
    "Pathology",
    "Pediatrician",
    "Pediatrics",
    "Physician",
    "Plastic",
    "Psychiatry",
    "Pulmonology",
    "Radiology",
    "Rehabilitation",
    "Rheumatology",
    "Specialist",
    "Surgeon",
    "Surgery",
    "Thoracic",
    "Urology",
    "Vascular",
  ];
  const { usertype } = useContext(Appcontext);

  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="top"
            >
              <Offcanvas.Header>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Form>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>State</Form.Label>
                      <Form.Select aria-label="Default select example">
                        {fields.map((element, index) => (
                          <option key={index}>{element}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>State</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>State</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>State</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Row>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      {usertype === "patient" ? <ReadbyPatientId /> : <ReadbyDoctorId />}
    </>
  );
}

export default StackExchangeHome;
