import React from "react";
import { Card } from "react-bootstrap";
import SearchCard from "../card/SearchCard";
import "./SearchForm.scss";
const SearchForm = (props) => {
  const { keyword, movies } = props;
  const handleDetail = (id) => {
    props.onDetail(id);
  };
  const handleBlur = () => {
    props.onBlurSearch();
  };
  return (
    <Card className="SearchForm" id="searchMain">
      <Card.Header className="SearchForm__header d-flex justify-content-between align-items-center">
        <span>Search a Movie</span>
        <span
          onClick={props.onBlurSearch}
          style={{ cursor: "pointer" }}
          className="Close_button"
        >
          X
        </span>
      </Card.Header>
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
