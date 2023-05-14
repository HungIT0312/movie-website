import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieById, getSimilarMovie } from "../../api/Movie";
import { IMAGE_POSTER_URL } from "../../helpers/config";
import classes from "./DetailPage.module.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Row from "../../components/row/Row";
const DetailPage = () => {
  var { idMovie } = useParams();
  const [movie, setMovie] = useState({});
  const [similarList, setSimilarList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getMovieDetail = async () => {
      const response = await getMovieById(idMovie);
      setMovie(response);
    };
    const getSimilar = async () => {
      const res = await getSimilarMovie(idMovie);
      setSimilarList(res.results);
    };
    getMovieDetail();
    getSimilar();
  }, [idMovie]);
  const handleDetailClick = (id) => {
    idMovie = id;
    navigate(`/Movie/${id}`);
  };
  return (
    <>
      <Header />
      <Container
        fluid
        className={classes.wrapper}
        style={{ padding: 0, position: "relative" }}
      >
        <Image
          className=" w-100"
          src={`${IMAGE_POSTER_URL}${movie?.backdrop_path}`}
        />
        <Container className={classes.content} fluid>
          <h1 className={classes.content__title}>
            {movie?.title || movie?.name}
          </h1>
          <div className={classes.content__date}>
            <p>{movie?.release_date}</p>
            <p>{movie?.vote_average}+</p>
            <p>{movie?.runtime} ph</p>
          </div>
          <p className={classes.content__overview}>{movie?.overview}</p>
          <div className={classes.content__genres}>
            {movie?.genres?.map((genre) => {
              return (
                <div key={genre.id} className={classes.content__genres_item}>
                  {genre.name}
                </div>
              );
            })}
          </div>
        </Container>
      </Container>
      <Row
        title={"Similar Movies"}
        type={"Movie"}
        movieList={similarList}
        onDetail={handleDetailClick}
      />
      <Footer />
    </>
  );
};

export default DetailPage;
