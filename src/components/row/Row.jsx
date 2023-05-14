import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "../card/MovieCard";
import classes from "./Row.module.scss";
import PersonCard from "../card/PersonCard";
const Row = (props) => {
  const [type, setType] = useState(props.type);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
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
  return (
    <div className={classes.rowMovie}>
      <h3 className={classes.rowMovie__title}> {props.title}</h3>
      <Carousel
        className="row-wrapper"
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        swipeable
      >
        {props.type !== "Person"
          ? props.movieList.map(
              (movie) =>
                movie.poster_path && (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    onClickDetail={handleClickDetail}
                  />
                )
            )
          : props.persons.map((person) => {
              return (
                <PersonCard
                  key={person.id}
                  person={person}
                  // onClickDetail={handleClickDetail}
                />
              );
            })}
      </Carousel>
    </div>
  );
};

export default Row;