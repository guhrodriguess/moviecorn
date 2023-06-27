// React
import React from "react";
import ReactDOM from "react-dom/client";

// Global Style
import GlobalStyle from "./styles/global";

// Components
import Navbar from "./components/Navbar";
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

// NotFound page
import NotFound from "./pages/NotFound";

// React Router
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// ThemeProvider
import { ThemeProvider } from "styled-components";

// Default Theme
import { defaultTheme } from "./styles/themes/default";

// Main
ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <ThemeProvider theme={defaultTheme}>
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

        {/* Route 404 */}
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </ThemeProvider>
  </Router>
);
