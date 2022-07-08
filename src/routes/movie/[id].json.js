export async function get({ params }) {
    const id = params.id;
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY
        }&language=en-US&page=1`;

    const res = await fetch(url);
    const movieDetail = await res.json();
    if (movieDetail) {
        return {
            status: 200,
            headers: {},
            body: { movieDetail }
        };
    }

    return {
        status: res.status,
        error: new Error('Could not load movie')
    };
}