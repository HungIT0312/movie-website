import React from "react";
import { Card } from "react-bootstrap";
import SearchCard from "../card/SearchCard";
import classes from "./SearchForm.module.scss";
const SearchForm = (props) => {
  const { keyword, movies, onDetail } = props;
  const handleDetail = (id) => {
    props.onDetail(id);
  };
  return (
    <Card className={classes.SearchForm}>
      <Card.Header className={classes.SearchForm__header}>
        Search a Movie
      </Card.Header>
      <Card.Body className={classes.SearchForm__body}>
        {movies &&
          movies?.map((movie, index) => (
            <SearchCard onDetail={handleDetail} key={index} movie={movie} />
          ))}
        {keyword === "" && <p className={classes.SearchForm__alert}></p>}
      </Card.Body>
      <Card.Footer className={classes.SearchForm__footer}></Card.Footer>
    </Card>
  );
};

export default SearchForm;
