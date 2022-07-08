export async function get({ params }) {
    const id = params.id
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY
        }&language=en-US&query=${id}&page=1&include_adult=false`;
    const res = await fetch(url);
    const data = await res.json();
    if (data) {
        return {
            status: 200,
            headers: {},
            body: { data }
        };
    }

    return {
        status: res.status,
        error: new Error('Could not load movies')
    };
}