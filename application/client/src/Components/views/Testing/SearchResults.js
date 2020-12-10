import React, { useState, useEffect } from "react";
import {
  Container,
  CardColumns,
  Col,
  Row,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import "../../Category.css";
import Filter from "../../Filter";
import Featured from "../../Featured";
import ListingCard from "../../ListingCard";
import axios from "axios";

export default function SearchResults(props) {
  const [productListings, setProductListings] = useState([]);
  // console.log(props.location.state.productListings)

  useEffect(() => {
    setSearchTerm(props.location.state.searchTerm);
    setCategory(props.location.state.category);
    axios
        .post("/api/search/searchProducts", {
          searchTerm: props.location.state.searchTerm,
          category: props.location.state.category,
        })
        .then((response) => {
          // console.log(response.data);
          setProductListings(response.data);
        });
  }, [props]);

  const [sortOption, setSortOption] = useState()
  const [searchTerm, setSearchTerm] = useState(props.location.state.searchTerm)
  const [category, setCategory] = useState(props.location.state.category);

  const handleSortOption = (sort) => {
    axios
        .post("/api/search/sortProducts", {
          searchTerm: searchTerm,
          category: category,
          // searchTerm: props.location.state.searchTerm,
          // category: props.location.state.category,
          sortOption: sort
        })
        .then((response) => {
          // console.log(response.data);
          setProductListings(response.data);
        });
  }






  function categoryRender() {
    let cat;
    // switch (props.location.state.category) {
    switch (category) {
      case "1":
        cat = "Books";
        break;
      case "2":
        cat = "Furniture";
        break;
      case "3":
        cat = "Electronics";
        break;
      case "4":
        cat = "Other";
    }
    return cat;
  }

  return (
    <div>
      {/*<Featured />*/}
      <Container style={{ marginTop: "2rem" }}>
        <Col>
          <Row>
            <Col>
              <h2>
                <span style={{ color: "#e67a00" }}>
                  {/*{categoryRender()} {props.location.state.searchTerm}{" "}*/}
                  {categoryRender()} {searchTerm}{" "}
                </span>
                Results
              </h2>
            </Col>
            <Col md="auto" style={{paddingTop: "7px"}}>
              <p>{productListings.length} listings found</p>
            </Col>
            <Col xs lg="2" style={{marginRight: "-4.3rem"}}>
              <DropdownButton
                id="dropdown-basic-button"
                variant="secondary"
                title="Sort by"
                key={sortOption}
              >
                <Dropdown.Item eventKey="1" onClick={() => {setSortOption('1');handleSortOption(1)}}>
                  Condition: best to worst
                </Dropdown.Item>
                <Dropdown.Item eventKey="2" onClick={() => {setSortOption('2');handleSortOption(2)}}>
                  Price: low to high
                </Dropdown.Item>
                <Dropdown.Item eventKey="3" onClick={() => {setSortOption('3');handleSortOption(3)}}>
                  Price: high to low
                </Dropdown.Item>
              </DropdownButton>
            </Col>
          </Row>
          <Container>
          <Row>
              <CardColumns className="row" style={{margin: "1.5rem"}}>
                {productListings.map((productListing, i) => (
                  <ListingCard key={i} {...productListing} />
                ))}
              </CardColumns>
          </Row>
          </Container>
        </Col>
      </Container>
    </div>
  );
}
