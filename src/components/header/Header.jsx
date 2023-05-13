import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import classes from "./Header.module.scss";
const Header = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else setIsScroll(false);
    });
  }, []);

  return (
    <div className={`${isScroll && classes.header__black} ${classes.header}`}>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tmdb.new.logo.svg/2560px-Tmdb.new.logo.svg.png"
        alt="user"
        className={classes.header__logo}
        height={42}
      ></Image>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="user"
        className={classes.header__user}
        height={42}
      ></Image>
    </div>
  );
};

export default Header;
