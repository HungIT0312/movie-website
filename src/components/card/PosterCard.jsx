import React from "react";
import { Container, Image } from "react-bootstrap";
import { POSTER_IMAGE } from "../../helpers/config";
import classes from "./MovieCard.module.scss";
const PosterCard = (props) => {
  const handleDetailPage = (id) => {
    props.onClickDetail(id);
  };
  const changeDate = (date = null) => {
    const newDate = new Date(
      props.movie?.release_date || props.movie?.first_air_date
    );
    return newDate.getFullYear();
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
        style={{ borderRadius: "8px" }}
        // height={220}
        // width={150}
      />
      <span className={classes.card__title}>
        {props.movie?.title || props.movie?.name}
      </span>
      <span className={classes.card__date}>{changeDate()}</span>
    </Container>
  );
};

export default PosterCard;
