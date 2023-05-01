import React from "react";
import ReactDOM from "react-dom/client";

// Global Style
import GlobalStyle from "./global";

// Navbar
import Navbar from "./components/Navbar";

// ScrollToTop
import ScrollTop from "./components/ScrollTop";

// Home page
import Home from "./pages/Home";

// Movie pages
import ReleaseMovies from "./pages/Movies/ReleaseMovies";
import PopularMovies from "./pages/Movies/PopularMovies";
import TopMovies from "./pages/Movies/TopMovies";
import MovieDetails from "./pages/Movies/MovieDetails";

// Serie pages
import ReleaseSeries from "./pages/Series/ReleaseSeries";
import PopularSeries from "./pages/Series/PopularSeries";
import TopSeries from "./pages/Series/TopSeries";
import SerieDetails from "./pages/Series/SerieDetails";

// React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Loading from "./components/Loading";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Loading />
    <GlobalStyle />
    <Navbar />
    <ScrollTop />
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Movies */}
      <Route path="/movies/releases" element={<ReleaseMovies />} />
      <Route path="/movies/popular" element={<PopularMovies />} />
      <Route path="/movies/top" element={<TopMovies />} />

      {/* Series */}
      <Route path="/series/releases" element={<ReleaseSeries />} />
      <Route path="/series/popular" element={<PopularSeries />} />
      <Route path="/series/top" element={<TopSeries />} />

      {/* Movie Details */}
      <Route path="/movies/releases/details/:id" element={<MovieDetails />} />
      <Route path="/movies/popular/details/:id" element={<MovieDetails />} />
      <Route path="/movies/top/details/:id" element={<MovieDetails />} />

      {/* Serie Details */}
      <Route path="/series/releases/details/:id" element={<SerieDetails />} />
      <Route path="/series/popular/details/:id" element={<SerieDetails />} />
      <Route path="/series/top/details/:id" element={<SerieDetails />} />
    </Routes>
  </Router>
);
