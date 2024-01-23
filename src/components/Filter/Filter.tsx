import React, { useState, useEffect, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { moviesGet } from "../../features/movies/moviesSlice";
import { AppDispatch } from "../../features/store";
import "./Filter.scss";
import { Genres } from "../../common/genres";

const Filter: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string | undefined>(undefined);
  const [selectedGenre, setSelectedGenre] = useState<string | undefined>(
    undefined
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (searchTerm || selectedGenre) {
      const genre = selectedGenre === "all" ? undefined : selectedGenre;
      void dispatch(moviesGet({ name: searchTerm, genre }));
    }
  }, [searchTerm, selectedGenre]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase().trim());
  };

  const handleGenreChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedGenre(selectedValue);
  };

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="genre-dropdown">
        <select
          id="genreSelect"
          value={selectedGenre || ""}
          onChange={handleGenreChange}
        >
          <option value="" disabled>
            Select a Genre
          </option>
          {Genres.map((genre, index) => (
            <option key={index} value={genre.toLowerCase()}>
              {genre}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Filter;
