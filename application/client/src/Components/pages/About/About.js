import React from "react";
import { Jumbotron, Container, Row} from "react-bootstrap";
import "./About.css";
import placeholder from "../../assets/placeholder.jpg";
import axios from "axios";
import AboutCard from "../UI/AboutCard/AboutCard";

export default function About() {
  const developers = [
    {
      role: "TEAM MASTER",
      name: "Keith Eastman",
      img: placeholder,
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      url: "/keith",
    },
    {
      role: "Backend Master",
      name: "Yugyeong (YG) Lee",
      img: placeholder,
      description:
        "I am a senior student majoring in Computer Science at San Francisco State University.",
      url: "/yg",
    },
    {
      role: "Frontend Master",
      name: "Zhuozhuo (Joy) Liu",
      img: placeholder,
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      url: "/joy",
    },
    {
      role: "Github Master",
      name: "Trenton Smith",
      img: placeholder,
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      url: "/trenton",
    },
  ];

  // const allDevs = [];

  // React.useEffect(() => {
  //   fetchDevs();
  // }, []);

  // const fetchDevs = () => {
  //   axios.get("/api/developer").then((res) => {
  //     for (let i = 0; i < res.data.length; i++) {
  //       allDevs.push(res.data[i]);
  //     }
  //     console.log(allDevs);
  //   });
  // };

  return (
    <div>
      <Jumbotron className="about-banner">
        <h2>Software Engineering class SFSU</h2>
        <br />
        <h5>Fall 2020</h5>
        <h5>Team 8</h5>
      </Jumbotron>

      <Container>
        <Row>
          {developers.map((dev, i) => (
            <AboutCard
              key={i}
              {...dev}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
}
