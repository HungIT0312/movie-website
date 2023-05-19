import React, { useEffect, useState } from "react";
import { Button, Form, Image } from "react-bootstrap";
import { BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { getMoviesByName } from "../../api/Search";
import SearchForm from "../search/SearchForm";
import "./Header.scss";
import logo from "../../assets/image/logoweb.png";
const Header = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [movieList, setMovieList] = useState([]);

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
      const res = await getMoviesByName(params);
      setMovieList(res.results);
    };
    keyword ? getSearchMovie(keyword) : setMovieList([]);
  }, [keyword]);

  const handleFocusInput = () => {
    setIsFocus((prev) => !prev);
  };
  const handleKeyword = (e) => {
    setIsFocus(true);
    setKeyword(e.target.value);
  };
  const handleDetailClick = (id) => {
    navigate(`/Movie/${id}`);
    handleFocusInput();
    setKeyword("");
  };
  return (
    <div className={`${isScroll && "header__black"} header`}>
      <Image
        src={logo}
        alt="user"
        className="header__logo"
        height={90}
        onClick={() => navigate("/")}
      />
      <div className="header__search">
        <Form>
          <Form.Group>
            <Form.Control
              id="inputSearch"
              className={`inputForm ${isScroll && "header__search_inputBlack"}`}
              type="text"
              placeholder="Search ..."
              value={keyword}
              onChange={handleKeyword}
              onFocus={handleFocusInput}
            />
          </Form.Group>
        </Form>
        {isFocus && (
          <SearchForm
            keyword={keyword}
            movies={movieList}
            onDetail={handleDetailClick}
            onBlur={handleFocusInput}
          />
        )}

        <Button className="header__search_btn">
          <BiSearchAlt size={20} />
        </Button>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="user"
          className="header__user"
          height={42}
        />
      </div>
    </div>
  );
};

export default Header;
