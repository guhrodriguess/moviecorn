const APIKey = import.meta.env.VITE_API_KEY;

export const fetchPopularMovies = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=pt-BR&page=1`
    );

    const data = await response.json();

    return data.results;
};

export const fetchReleaseMovies = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKey}&language=pt-BR&page=1`
    );

    const data = await response.json();

    return data.results;
};

export const fetchTopMovies = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKey}&language=pt-BR&page=1`
    );

    const data = await response.json();

    return data.results;
};

export const fetchMovieDetails = async ({ id }) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=pt-BR`
    );

    const data = await response.json();

    return data;
};

export const fetchMovieCredits = async ({ id }) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${APIKey}&language=en-US`
    );

    const data = await response.json();

    return data.cast;
};

export const fetchMovieBackdrops = async ({ id }) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/images?api_key=${APIKey}`
    );

    const data = await response.json();

    return data.backdrops;
};
