import React from "react";
import { Container, Image } from "react-bootstrap";
import classes from "./PersonCard.module.scss";
import { POSTER_IMAGE } from "../../helpers/config";
const PersonCard = (props) => {
  return (
    <Container className={classes.card} fluid>
      <Image
        className={classes.card__image}
        src={`${POSTER_IMAGE}${props.person?.profile_path}`}
        style={{ borderRadius: 100, objectFit: "cover" }}
        width={150}
        height={150}
      />
      <span className={classes.card__title}>
        {props.person?.original_name || props.person?.name}
      </span>
      {props.character && (
        <span className={classes.card__character}>{props.character}</span>
      )}
    </Container>
  );
};

export default PersonCard;
