import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import RowMovie from "../../components/row/RowMovie";
import { getTrending } from "../../api/trending";
import { getPopular, getTopRated } from "../../api/Movie";

const HomePage = (props) => {
  const [trendingList, setTrendingList] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [popularList, setPopularList] = useState([]);
  useEffect(() => {
    const fetchTrending = async () => {
      const res = await getTrending();
      setTrendingList(res?.results);
    };
    const fetchTopRated = async () => {
      const res = await getTopRated();
      setTopRated(res?.results);
    };
    const fetchPopular = async () => {
      const res = await getPopular();
      setPopularList(res?.results);
    };
    fetchTopRated();
    fetchTrending();
    fetchPopular();
    return () => {};
  }, []);
  const handleDetailClick = (id) => {
    // props.history.push(`/movie/${id}`);
    console.log(id);
  };
  return (
    <>
      <Header />
      <Banner />
      <RowMovie
        title={"Trending Now"}
        movieList={trendingList}
        onDetail={handleDetailClick}
      />
      <RowMovie
        title={"Top Rated Movie"}
        movieList={topRated}
        onDetail={handleDetailClick}
      />
      <RowMovie
        title={"Popular Movie"}
        movieList={popularList}
        onDetail={handleDetailClick}
      />
    </>
  );
};

export default HomePage;
