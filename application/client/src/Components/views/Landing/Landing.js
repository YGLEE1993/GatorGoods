import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  Jumbotron,
  Button,
  InputGroup,
  DropdownButton,
  FormControl,
  Dropdown,
} from "react-bootstrap";
import "./Landing.css";

export default function Landing() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [productListings, setProductListings] = useState([]);
  const { push } = useHistory();

  useEffect(() => {
    const getListings = () => {
      axios
        .post("/api/search/searchProducts", {
          searchTerm: searchTerm,
          category: category,
        })
        .then((response) => {
          // console.log(response.data);
          setProductListings(response.data);
        });
    };
    getListings();
    // console.log(searchTerm);
  }, [searchTerm, category]);

  const handleCategoryChange = (e) => {
    setCategory(e);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // onSearch -> redirect to result page
  const onSearch = () => {
    push("/test", {
      productListings: productListings,
      category: category,
      searchTerm: searchTerm,
    });
  };

  return (
    <>
      <Jumbotron className="landing-banner">
        <h1>Software Engineering class SFSU</h1>
        <h3>Fall 2020</h3>
        <h3>Team 8</h3>

        {/* Search Bar */}
        <InputGroup
          style={{ marginLeft: "25%", marginTop: "50px", width: "800px" }}
          className="mb-3"
        >
          <DropdownButton
            variant="outline-secondary"
            title="Category"
            onSelect={handleCategoryChange}
          >
            <Dropdown.Item eventKey="Book">Book</Dropdown.Item>
            <Dropdown.Item eventKey="Furniture">Furniture</Dropdown.Item>
            <Dropdown.Item eventKey="Electronic">Electronic</Dropdown.Item>
          </DropdownButton>

          <FormControl
            placeholder="Search.."
            value={searchTerm}
            onChange={handleInputChange}
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick={onSearch}>
              Search
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Jumbotron>
    </>
  );
}
