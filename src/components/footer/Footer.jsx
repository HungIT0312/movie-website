import React from "react";
import classes from "./Footer.module.scss";
import logo from "../../assets/image/logoweb.png";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
const Footer = () => {
  return (
    <Container
      fluid
      style={{ padding: 0, backgroundColor: "#03243f", overflow: "hidden" }}
    >
      <Row
        style={{
          paddingTop: 64,
          paddingBottom: 32,
          display: "flex",
          justifyContent: "center",
          margin: "0px 100px",
          color: "white",
        }}
      >
        <Col
          md={2}
          xs={2}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Image src={logo} alt="user" height={150}></Image>
        </Col>
        <Col md={2} xs={2}>
          <h5>DESIGN</h5>
          {/* <p>Giới thiệu về Website</p> */}
          <p>Nguyen Hung</p>
          <p>Netflix</p>
          <p>TheMovieDB</p>
        </Col>
        <Col md={2} xs={2}>
          <h5>CONTACT</h5>
          <a
            style={{
              display: "block",
              color: "white",
              textDecoration: "none",
              paddingBottom: 12,
            }}
            href="https://www.facebook.com/hipgat"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
          <a
            style={{
              display: "block",
              color: "white",
              textDecoration: "none",
              paddingBottom: 12,
            }}
            href="https://github.com/HungIT0312"
            target="_blank"
            rel="noreferrer"
          >
            Github{" "}
          </a>
          <a
            style={{
              display: "block",
              color: "white",
              textDecoration: "none",
              paddingTop: 8,
            }}
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/hungnguyen0312/"
          >
            Linkedin
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
