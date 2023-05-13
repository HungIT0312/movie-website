import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../api/Movie";
import { IMAGE_POSTER_URL } from "../../helpers/config";
import classes from "./DetailPage.module.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
const DetailPage = () => {
  const { idMovie } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    window.scrollTo({
      behavior: "smooth", // Optional, enables smooth scrolling behavior
    });

    const getMovieDetail = async () => {
      const response = await getMovieById(idMovie);
      console.log(response);
      setMovie(response);
    };
    getMovieDetail();
  }, []);

  return (
    <>
      <Header></Header>
      <Container fluid className={classes.wrapper} style={{ padding: 0 }}>
        <Image
          className=" w-100"
          src={`${IMAGE_POSTER_URL}${movie?.backdrop_path}`}
        />
        <Container fluid></Container>
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
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default DetailPage;
