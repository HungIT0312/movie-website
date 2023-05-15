import React, { useEffect } from "react";
import classes from "./SearchForm.module.scss";
import SearchCard from "../card/SearchCard";
import { Card } from "react-bootstrap";
const SearchForm = (props) => {
  const { keyword, movies } = props;

  return (
    <Card className={classes.SearchForm}>
      <Card.Header className={classes.SearchForm__header}>
        Search a Movie
      </Card.Header>
      <Card.Body className={classes.SearchForm__body}>
        {movies &&
          movies?.map((movie, index) => (
            <SearchCard key={index} movie={movie} />
          ))}
        {keyword === "" && <p className={classes.SearchForm__alert}></p>}
      </Card.Body>
      <Card.Footer className={classes.SearchForm__footer}>nonoe</Card.Footer>
    </Card>
  );
};

export default SearchForm;
