import React, { useState } from "react";
import { Form, Col, Button, Container } from "react-bootstrap";
// import Dropzone from 'react-dropzone';
import axios from "axios";

export default function NewListing(props) {
  const initialInputState = {
    title: "",
    description: "",
    category: "",
    image: "",
    price: "",
  };
  const [eachEntry, setEachEntry] = useState(initialInputState);
  const { title, description, category, image, price } = eachEntry;
  const handleInputChange = (e) => {
    setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
  };

  console.log(image);
  const submitListing = () => {
    axios
      .post("/api/product/createProduct", {
        title: title,
        description: description,
        price: price,
        category: category,
        image: image,
      })
      .then(() => {
        alert("successfully created.");
      });
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <Container style={{ width: "800px" }}>
        <h3>Create Listing</h3>
        <br />
        <Form>
          <Form.Group>
            <Form.File
              id="exampleFormControlFile1"
              label="Image"
              name="image"
              value={image}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="title"
              name="title"
              value={title}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Row>
            <Col>
              <Form.Group>
                <Form.Label>Category</Form.Label>
                <Form.Control
                  as="select"
                  name="category"
                  value={category}
                  onChange={handleInputChange}
                >
                  <option>Choose</option>
                  <option>Book</option>
                  <option>Furniture</option>
                  <option>Electronic</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Label>Price</Form.Label>
              <Form.Control
                placeholder="$10.00"
                name="price"
                value={price}
                onChange={handleInputChange}
              />
            </Col>
          </Form.Row>

          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows="5"
              name="description"
              value={description}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={submitListing}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
