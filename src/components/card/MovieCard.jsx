import React from "react";
import { Container, Image } from "react-bootstrap";
import { POSTER_IMAGE } from "../../helpers/config";
import classes from "./MovieCard.module.scss";
const MovieCard = (props) => {
  const handleDetailPage = (id) => {
    props.onClickDetail(id);
  };
  return (
    <Container
      className={classes.card}
      fluid
      onClick={() => handleDetailPage(props.movie?.id)}
    >
      <Image
        className={classes.card__image}
        src={`${POSTER_IMAGE}${props.movie?.poster_path}`}
        style={{ borderRadius: "16px" }}
        height={250}
      />
      <span className={classes.card__title}>
        {props.movie?.title || props.movie?.name}
      </span>
      {/* <span className={classes.card__date}>{props.movie?.release_date}</span> */}
    </Container>
  );
};

export default MovieCard;
