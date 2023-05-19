import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getCredits, getMovieById, getSimilarMovie } from "../../api/Movie";
import { IMAGE_POSTER_URL } from "../../helpers/config";
import classes from "./DetailPage.module.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import RowItem from "../../components/row/Row";
import { BiLink, BiPlay, BiSearchAlt } from "react-icons/bi";

const DetailPage = () => {
  var { idMovie } = useParams();
  const [movie, setMovie] = useState({});
  const [similarList, setSimilarList] = useState([]);
  const [credits, setCredits] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getMovieDetail = async () => {
      const response = await getMovieById(idMovie);
      console.log(response);
      setMovie(response);
    };
    const getSimilar = async () => {
      const res = await getSimilarMovie(idMovie);
      setSimilarList(res.results);
    };
    const getCreditMovie = async () => {
      const res = await getCredits(idMovie);
      setCredits(res.cast);
      console.log(res.cast);
    };
    getMovieDetail();
    getCreditMovie();
    getSimilar();
  }, [idMovie]);
  const handleDetailClick = (id) => {
    idMovie = id;
    navigate(`/Movie/${id}`);
  };
  const ContentBox = (prop) => {
    return (
      <Container fluid className="d-flex flex-column mb-3">
        <span className={classes.Box_Tittle}>{prop.title}</span>
        <span className={classes.Box_Content}>{prop.content}</span>
      </Container>
    );
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
        <Container className={classes.options} fluid>
          <p
            style={{
              padding: 0,
              margin: "0",
              color: "white",
              fontWeight: 500,
              fontSize: 18,
            }}
            className="ms-2"
          >
            Watching trailer ?
          </p>
          <span
            style={{
              display: "block",
              padding: "0px 12px",
              backgroundColor: "red",
              boxSshadow: "#000000 0px 1px 0px 0px",
              borderRadius: 4,
            }}
            className={classes.youtubeBtn}
          >
            <BiPlay size={32} />
          </span>
        </Container>
      </Container>
      <Container fluid className={`${classes.informationBox}`}>
        <Col md={9} className={classes.informationBox__cast}>
          <RowItem
            title={"Casts"}
            type={"Person"}
            persons={credits}
            numItem={5}
          />
        </Col>
        <Col md={3} className={classes.informationBox__content}>
          <Container fluid className="mb-3">
            <Link
              to={`${movie?.homepage}`}
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <span className={` ${classes.Box_Tittle} `}>Homepage: </span>
              <BiLink size={20} />
            </Link>
          </Container>
          <ContentBox
            title={"Original Title"}
            content={movie?.original_title}
          />
          <ContentBox title={"Status"} content={movie?.status} />
          <ContentBox title={"Budget"} content={`$ ${movie?.budget} `} />
          <ContentBox title={"Revenue"} content={`$ ${movie?.revenue} `} />
        </Col>
      </Container>

      <RowItem
        title={"Similar Movies"}
        type={"Movie"}
        movieList={similarList}
        onDetail={handleDetailClick}
        numItem={8}
      />
      <Footer />
    </>
  );
};

export default DetailPage;
