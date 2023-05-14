import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Carousel, Image } from "react-bootstrap";
import { getTrending } from "../../api/trending";
import { IMAGE_POSTER_URL } from "../../helpers/config";
import classes from "./Banner.module.scss";
import { useNavigate } from "react-router-dom";
const Banner = () => {
  const [bannerItems, setBannerItems] = useState([]);
  const [deviceWidth, setDeviceWidth] = useState(window.screen.width);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchTrending = async () => {
      const res = await getTrending();
      setBannerItems(res?.results);
    };
    fetchTrending();
  }, []);
  useEffect(() => {
    setDeviceWidth(window.screen.width);
    return () => {};
  }, [deviceWidth]);

  const handleSelectMovie = (movie) => {
    navigate(`/Movie/${movie.id}`);
  };

  return (
    <div className={classes.banner__wrapper}>
      <Carousel slide={false} className={classes.banner}>
        {bannerItems.map((item) => (
          <Carousel.Item key={item?.id}>
            <Image
              className=" w-100"
              src={`${IMAGE_POSTER_URL}${item?.backdrop_path}`}
              alt="First slide"
              style={{
                marginTop: `${deviceWidth > 1024 ? "-200px" : "0"}`,
              }}
            />
            <Carousel.Caption style={{ zIndex: 2 }}>
              <h1 className={classes.banner__title}>
                {item?.title || item?.original_title || item?.name}
              </h1>
              <p>{item?.overview}</p>
            </Carousel.Caption>
            <div
              className={classes.banner__blur}
              onClick={() => handleSelectMovie(item)}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
