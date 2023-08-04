const APIKey = import.meta.env.VITE_API_KEY;

export const fetchPopularTv = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/tv/popular?api_key=${APIKey}&language=pt-BR&page=1`
    );

    const data = await response.json();

    return data.results;
};

export const fetchReleaseTv = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/tv/on_the_air?api_key=${APIKey}&language=pt-BR&page=1`
    );

    const data = await response.json();

    return data.results;
};

export const fetchTopTv = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=${APIKey}&language=pt-BR&page=1`
    );

    const data = await response.json();

    return data.results;
};

export const fetchTvDetails = async ({ id }) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${APIKey}&language=pt-BR`
    );

    const data = await response.json();

    return data;
};
