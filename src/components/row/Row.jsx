import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "../card/MovieCard";
import classes from "./Row.module.scss";
import PersonCard from "../card/PersonCard";
const RowItem = (props) => {
  const { movieList, persons, type, numItem, ...rest } = props;

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: numItem,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  const handleClickDetail = (movie) => {
    props.onDetail(movie);
  };
  const renderCard = (type) => {
    switch (type) {
      case "Movie":
        return movieList?.map(
          (movie) =>
            movie.poster_path && (
              <MovieCard
                key={movie.id}
                movie={movie}
                onClickDetail={handleClickDetail}
              />
            )
        );
      case "Person":
        return persons?.map((person) => {
          return <PersonCard key={person.id} person={person} />;
        });
      case "Film":
        return props?.posterList.map();
      default:
        return <></>;
    }
  };
  return (
    <div className={classes.rowMovie}>
      <h3 className={classes.rowMovie__title}> {props.title}</h3>
      <Carousel
        style={{ zIndex: "-100!important" }}
        className="row-wrapper"
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        swipeable
      >
        {renderCard(type)}
      </Carousel>
    </div>
  );
};

export default RowItem;
