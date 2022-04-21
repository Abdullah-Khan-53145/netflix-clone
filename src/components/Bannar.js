import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "../axios";
import "./Bannar.css";
import requests from "../request";
export default function Bannar() {
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOrignal);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="bannar"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="bannar__contents">
        <h1 className="bannar__title">
          {movie?.title || movie?.name || movie?.orignal_name}
        </h1>
        <div className="bannar__buttons">
          <button className="bannar__button">Play</button>
          <button className="bannar__button">My List</button>
        </div>
        <h1 className="bannar__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="bannar--fadeBottom"/>
    </header>
  );
}
