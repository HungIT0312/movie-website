import React from "react";
import classes from "./SearchCard.module.scss";
import { Card, Image } from "react-bootstrap";
import { POSTER_IMAGE } from "../../helpers/config";
import { AiOutlineStar } from "react-icons/ai";
const SearchCard = (props) => {
  const changeDate = (date = null) => {
    const newDate = new Date(props.movie?.release_date);
    return newDate.getFullYear();
  };
  return (
    <div className={classes.Card}>
      <Image
        className={classes.Card__image}
        src={`${POSTER_IMAGE}${props.movie?.poster_path}`}
        style={{ borderRadius: "8px" }}
        height={100}
      />
      <div className={classes.Card__content}>
        <p className={classes.Card__content_title}>{props.movie?.title}</p>
        <p className={classes.Card__content_date}>
          <span
            className={classes.vote}
            style={{ display: "flex", alignItems: "center" }}
          >
            <AiOutlineStar color="orange" />
            {props.movie?.vote_average}
          </span>
          <span className={classes.date}>Released: {changeDate()}</span>
        </p>
      </div>
    </div>
  );
};

export default SearchCard;
