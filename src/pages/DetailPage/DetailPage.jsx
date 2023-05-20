import movieTrailer from "movie-trailer";
import React, { useEffect, useState } from "react";
import { Col, Container, Image } from "react-bootstrap";
import { BiLink, BiPlay } from "react-icons/bi";
import { Link, useNavigate, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import {
  getCredits,
  getMovieById,
  getMovieTrailer,
  getSimilarMovie,
} from "../../api/Movie";
import {
  getTVCredits,
  getTVDetail,
  getTVSimilar,
  getVideoTV,
} from "../../api/TV";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import RowItem from "../../components/row/Row";
import { IMAGE_POSTER_URL } from "../../helpers/config";
import classes from "./DetailPage.module.scss";
const DetailPage = () => {
  var { idMovie } = useParams();
  const [movie, setMovie] = useState({});
  const [similarList, setSimilarList] = useState([]);
  const [credits, setCredits] = useState([]);
  const [video, setVideo] = useState();
  const [trailerUrl, setTrailerUrl] = useState("");

  const navigate = useNavigate();
  const isTV = window.location.pathname.includes("/TV/");
  useEffect(() => {
    const getMovieDetail = async () => {
      const response = await getMovieById(idMovie);
      setMovie(response);
    };
    const _getTVDetail = async () => {
      const response = await getTVDetail(idMovie);
      setMovie(response);
    };
    const getSimilar = async () => {
      const res = await getSimilarMovie(idMovie);
      setSimilarList(res.results);
    };
    const getSimilarTV = async () => {
      const res = await getTVSimilar(idMovie);
      setSimilarList(res.results);
    };
    const getCreditMovie = async () => {
      const res = await getCredits(idMovie);
      setCredits(res.cast);
    };
    const _getTVCredit = async () => {
      const res = await getTVCredits(idMovie);
      setCredits(res.cast);
    };
    const _getVideoTV = async () => {
      const res = await getVideoTV(idMovie);
      setVideo(res?.results[0]);
    };
    const _getVideoMovie = async () => {
      const res = await getMovieTrailer(idMovie);
      setVideo(res?.results[0]);
    };

    if (isTV) {
      _getTVDetail();
      _getTVCredit();
      getSimilarTV();
      _getVideoTV();
    } else {
      getMovieDetail();
      getCreditMovie();
      getSimilar();
      _getVideoMovie();
    }
  }, [idMovie, isTV]);
  const handleDetailClick = (id) => {
    idMovie = id;
    !isTV ? navigate(`/Movie/${id}`) : navigate(`/TV/${id}`);
  };
  const opts = {
    height: "650",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
    muted: false,
  };
  const handleScrollToView = () => {
    const element = document.getElementById("youtube");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleClickPlay = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || video?.key)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch(() => console.log("Temporary Unavailable"));
      handleScrollToView();
    }
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
              padding: "0px 24px",
              backgroundColor: "red",
              borderRadius: 8,
            }}
            className={classes.youtubeBtn}
            onClick={() => {
              handleClickPlay(movie);
            }}
          >
            <BiPlay size={32} color="white" />
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
      <Container id="youtube" fluid style={{ padding: 0 }}>
        {trailerUrl && (
          <YouTube
            style={{ backgroundColor: "black" }}
            videoId={trailerUrl}
            opts={opts}
          />
        )}
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
