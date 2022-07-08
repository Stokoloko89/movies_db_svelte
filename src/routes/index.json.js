/** @type {import('@sveltejs/kit').RequestHandler} */

export async function get() {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY
        }&language=en-US&page=1`
    );
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