import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getPopular, getTopRated, getUpcomingMovie } from "../../api/Movie";
import { getTVPopular } from "../../api/TV";
import { getTrendingPeople } from "../../api/TrendingPerson";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import RowItem from "../../components/row/Row";
import classes from "./HomePage.scss";
const HomePage = (props) => {
  const [topRated, setTopRated] = useState([]);
  const [popularList, setPopularList] = useState([]);
  const [upcomingList, setUpcomingList] = useState([]);
  const [trendingPeoples, setTrendingPeoples] = useState([]);
  const [tvList, setTvList] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const [isTV, setIsTV] = useState(true);

  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);

    const fetchTopRated = async () => {
      const res = await getTopRated();
      setTopRated(res?.results);
    };
    const fetchPopular = async () => {
      const res = await getPopular();
      setPopularList(res?.results);
    };
    const fetchUpcoming = async () => {
      const res = await getUpcomingMovie();
      setUpcomingList(res?.results);
    };
    const fetchTrendingPeople = async () => {
      const res = await getTrendingPeople();
      setTrendingPeoples(res?.results);
    };
    const fetchTvPopular = async () => {
      const res = await getTVPopular();
      setTvList(res?.results);
    };
    fetchTopRated();
    fetchPopular();
    fetchUpcoming();
    fetchTrendingPeople();
    fetchTvPopular();
    setLoading(false);
  }, []);
  const handleDetailMovieClick = (id) => {
    navigate(`/Movie/${id}`);
  };
  const handleDetailTVClick = (id) => {
    navigate(`/TV/${id}`);
  };
  const handleIsTv = () => {
    setIsTV((prev) => !prev);
  };
  return (
    <>
      <Header />
      <Banner />
      {!isLoading && (
        <>
          <Container fluid style={{ padding: 0, position: "relative" }}>
            <div className="switch">
              <span
                className={`switch__opt1 ${isTV && "switch__active1"}`}
                onClick={() => handleIsTv()}
              >
                On TV
              </span>
              <span
                className={`switch__opt2 ${!isTV && "switch__active2"}`}
                onClick={() => handleIsTv()}
              >
                In Theaters
              </span>
            </div>
            <RowItem
              title={"What's Popular"}
              type={"Movie"}
              movieList={!isTV ? popularList : tvList}
              onDetail={isTV ? handleDetailTVClick : handleDetailMovieClick}
              className={classes.rowPopular}
              numItem={8}
            />
          </Container>
          <RowItem
            title={"Trending People"}
            type={"Person"}
            persons={trendingPeoples}
            onDetail={handleDetailMovieClick}
            numItem={8}
          />
          <RowItem
            title={"Top Rated Movie"}
            type={"Movie"}
            movieList={topRated}
            onDetail={handleDetailMovieClick}
            numItem={8}
          />

          <RowItem
            title={"Upcoming Movie"}
            type={"Movie"}
            movieList={upcomingList}
            onDetail={handleDetailMovieClick}
            numItem={8}
          />
        </>
      )}

      <Footer />
    </>
  );
};

export default HomePage;
