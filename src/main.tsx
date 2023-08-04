import ReactDOM from "react-dom/client";
import GlobalStyle from "@/styles/global";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@/styles/themes/default";

// Components
import Header from "@/components/Header";
import ScrollTop from "@/components/ScrollTop";

// Home page
import Home from "@/pages/Home";

// Movie pages
import ReleaseMovies from "@/pages/Movies/ReleaseMovies";
import PopularMovies from "@/pages/Movies/PopularMovies";
import TopMovies from "@/pages/Movies/TopMovies";
import MovieDetails from "@/pages/Movies/MovieDetails";

// Tv pages
import ReleaseTv from "@/pages/Tv/ReleaseTv";
import PopularTv from "@/pages/Tv/PopularTv";
import TopTv from "@/pages/Tv/TopTv";
import TvDetails from "@/pages/Tv/TvDetails";

// NotFound page
import NotFound from "@/pages/NotFound";

// React Router
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

// Render
const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <Router>
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <Header />
            <ScrollTop />
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/movies/releases" element={<ReleaseMovies />} />
                <Route path="/movies/popular" element={<PopularMovies />} />
                <Route path="/movies/top" element={<TopMovies />} />

                <Route path="/tv/releases" element={<ReleaseTv />} />
                <Route path="/tv/popular" element={<PopularTv />} />
                <Route path="/tv/top" element={<TopTv />} />

                <Route
                    path="/movies/releases/details/:id"
                    element={<MovieDetails />}
                />
                <Route
                    path="/movies/popular/details/:id"
                    element={<MovieDetails />}
                />
                <Route
                    path="/movies/top/details/:id"
                    element={<MovieDetails />}
                />

                <Route
                    path="/tv/releases/details/:id"
                    element={<TvDetails />}
                />
                <Route path="/tv/popular/details/:id" element={<TvDetails />} />
                <Route path="/tv/top/details/:id" element={<TvDetails />} />

                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
        </ThemeProvider>
    </Router>
);
