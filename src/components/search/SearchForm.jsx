import React from "react";
import { Card } from "react-bootstrap";
import SearchCard from "../card/SearchCard";
import "./SearchForm.scss";
const SearchForm = (props) => {
  const { keyword, movies, onDetail } = props;
  const handleDetail = (id) => {
    props.onDetail(id);
  };
  return (
    <Card className="SearchForm" id="searchMain">
      <Card.Header className="SearchForm__header">Search a Movie</Card.Header>
      <Card.Body className="SearchForm__body">
        {movies &&
          movies?.map((movie, index) => (
            <SearchCard onDetail={handleDetail} key={index} movie={movie} />
          ))}
        {keyword === "" && <p className="SearchForm__alert">Searching...</p>}
      </Card.Body>
      <Card.Footer className="SearchForm__footer"></Card.Footer>
    </Card>
  );
};

export default SearchForm;
