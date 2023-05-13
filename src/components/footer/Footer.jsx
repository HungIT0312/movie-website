import React from "react";
import classes from "./Footer.module.scss";
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
          display: "flex",
          justifyContent: "center",
          margin: "0px 100px",
          color: "white",
        }}
      >
        <Col
          md={2}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tmdb.new.logo.svg/2560px-Tmdb.new.logo.svg.png"
            alt="user"
            // className={classes.header__logo}
            height={80}
          ></Image>
          <Button
            style={{
              padding: "0px 20px",
              marginTop: 16,
              backgroundColor: "white",
              color: "#01b4e4",
              fontSize: 24,
              fontWeight: 600,
              lineHeight: 1.6,
            }}
          >
            Hi Hung !
          </Button>
        </Col>
        <Col md={2}>
          <h5>THE BASICS</h5>
          <p>Giới thiệu về Website</p>
          <p>Contact Us</p>
          <p>Support Forums</p>
          <p>Api Docs</p>
        </Col>
        <Col md={2}>
          <h5>GET INVOLVED</h5>
          <p>Contribution Bible</p>
          <p>Add New Movie </p>
          <p>Add New TV Show</p>
        </Col>
        <Col md={2}>
          <h5>COMMUNITY</h5>
          <p>Guidelines</p>
          <p>Discussions</p>
          <p>Leaderboard</p>
          <p> Twitter</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
