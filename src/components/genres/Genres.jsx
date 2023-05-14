import React, { useState } from "react";

const Genres = (props) => {
  const [genre, setGenre] = useState(props.genre);
  return <div className="content__genre-item">{genre.name}</div>;
};

export default Genres;
