import React from "react";
import "./App.css";
import Row from "./components/Row";
import requests from "./request";
import Bannar from "./components/Bannar";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="app">
      <Nav />
      <Bannar />
      <Row
        title="NetflixOrignal"
        fetchUrl={requests.fetchNetflixOrignal}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanticMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
