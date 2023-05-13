import React, { useEffect, useState } from "react";
import { getTrending } from "../../api/trending";
import { Button, Carousel, Container, Image } from "react-bootstrap";
import { IMAGE_POSTER_URL } from "../../helpers/config";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./Banner.module.scss";
const Banner = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [bannerItems, setBannerItems] = useState([]);
  useEffect(() => {
    const fetchTrending = async () => {
      const res = await getTrending();
      setBannerItems(res?.results);
    };
    fetchTrending();
  }, []);
  const handleSelectMovie = (movie) => {
    console.log(movie);
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
                marginTop: "-200px",
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
