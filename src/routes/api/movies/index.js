export async function get({ params }) {
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/popular?api_key=${
			import.meta.env.VITE_API_KEY
		}&language=en-US&page=1`
	);
	const data = await res.json();
    console.log(data.results)
	if (res.ok) {
		return {
			// we pass the data received from the db as a prop 'popular'
			props: { popular: data.results }
		};
	}
}
