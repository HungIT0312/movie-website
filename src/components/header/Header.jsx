import React, { useEffect, useState } from "react";
import classes from "./Header.module.scss";
import { getTrending } from "../../api/trending";
const Header = () => {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    const fetchTrending = async () => {
      const res = await getTrending();
      setTrending(res?.results);
      console.log(res.results);
    };
    fetchTrending();

    return () => {};
  }, []);

  return <div className={classes.header}></div>;
};

export default Header;
