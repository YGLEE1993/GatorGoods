import React, { useState } from "react";
import { Modal, Button, Col, Row, Form } from "react-bootstrap";
import axios from "axios";

function AuthModal(props) {
  const initialInputState = {
    username: "",
    email: "",
    password: "",
    passwordCheck: "",
  };
  const [eachEntry, setEachEntry] = useState(initialInputState);
  const { username, email, password, passwordCheck } = eachEntry;
  const handleInputChange = (e) => {
    setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
  };

  // SIGN UP - TODO:
  // Need to check (password == passwordCheck),
  // email already exist on the databse
  // password validation(8-20 characters..etc)
  // sfsu email validation(does email sfsu?)

  // ****** Sign Up ****** //
  const handleRegister = () => {
    axios
      .post("/api/auth/signup", {
        username: username,
        email: email,
        password: password,
      })
      .then(() => {
        alert("successfully registered.");
      });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        closeButton
        style={{ marginLeft: "2rem", marginRight: "2rem" }}
      >
        <Modal.Title id="contained-modal-title-vcenter">
          Please log in or register to continue!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          marginLeft: "2rem",
          marginRight: "2rem",
          marginBottom: "2rem",
        }}
      >
        <Row>
          {/*   Log In    */}
          <Col className="border-right" style={{ paddingRight: "2.5rem" }}>
            <h4>Need to log in?</h4>
            <Form>
              <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control required type="text" placeholder="Username" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" placeholder="Password" />
                <Form.Text className="text-muted">
                  {/* <a href="#">forgot your password?</a> */}
                </Form.Text>
              </Form.Group>
              <div className="text-right">
                <Button
                  variant="secondary"
                  type="reset"
                  style={{ marginRight: "1rem" }}
                >
                  Cancel
                </Button>
                <Button variant="primary" type="submit">
                  Log in!
                </Button>
              </div>
            </Form>
          </Col>

          {/*   Sign Up    */}
          <Col style={{ paddingLeft: "2.5rem" }}>
            <h4>You can register below!</h4>
            <Form>
              <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={username}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={handleInputChange}
                />
                <small id="passwordHelpBlock" className="form-text text-muted">
                  Your password must be 8-20 characters long, contain letters
                  and numbers, and must not contain spaces, special characters,
                  or emoji.
                </small>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  name="passwordCheck"
                  placeholder="Password"
                  value={passwordCheck}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  required
                  type="checkbox"
                  label="Agree to terms and conditions"
                />
              </Form.Group>
              <div className="text-right">
                <Button
                  variant="secondary"
                  type="reset"
                  style={{ marginRight: "1rem" }}
                >
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={handleRegister}
                >
                  Sign me up!
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default function LazyModal() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Login | Signup
      </Button>

      <AuthModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
