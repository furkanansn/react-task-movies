import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import ImageLocal from "../../common/image/ImageLocal";
import Filter from "../Filter/Filter";
import { selectSelectedMovie } from "../../features/movies/moviesSlice";
import { useSelector } from "react-redux";

const Header: React.FC = () => {
  const selectedMovie = useSelector(selectSelectedMovie);
  return (
    <div className="header">
      <Link to="/">
        <ImageLocal src={"logo.png"} />
      </Link>
      {!selectedMovie && <Filter />}
    </div>
  );
};

export default Header;
