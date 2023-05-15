import React, { useEffect, useState } from "react";
import { Button, Form, Image } from "react-bootstrap";
import { BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { getMoviesByName } from "../../api/Search";
import SearchForm from "../search/SearchForm";
import classes from "./Header.module.scss";
const Header = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else setIsScroll(false);
    });
  }, []);
  useEffect(() => {
    const getSearchMovie = async (params) => {
      setLoading(true);
      const res = await getMoviesByName(params);
      setMovieList(res.results);
      setLoading(false);
    };
    keyword ? getSearchMovie(keyword) : setMovieList([]);
  }, [keyword]);

  const handleFocusInput = () => {
    setIsFocus((prev) => !prev);
    setKeyword("");
  };
  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div className={`${isScroll && classes.header__black} ${classes.header}`}>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tmdb.new.logo.svg/2560px-Tmdb.new.logo.svg.png"
        alt="user"
        className={classes.header__logo}
        height={42}
        onClick={() => navigate("/")}
      />
      <div className={classes.header__search}>
        <Form>
          <Form.Group>
            <Form.Control
              id="inputSearch"
              className={`${classes.header__search_inputForm} ${
                isScroll && classes.header__search_inputBlack
              }`}
              type="text"
              placeholder="Search ..."
              value={keyword}
              onChange={handleKeyword}
              onFocus={handleFocusInput}
              onBlur={handleFocusInput}
            />
          </Form.Group>
        </Form>
        {isFocus && !isLoading && (
          <SearchForm keyword={keyword} movies={movieList} />
        )}

        <Button className={`${classes.header__search_btn} `}>
          <BiSearchAlt size={20} />
        </Button>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="user"
          className={classes.header__user}
          height={42}
        />
      </div>
    </div>
  );
};

export default Header;
