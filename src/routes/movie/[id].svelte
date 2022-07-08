<script context="module">
	export async function load({ fetch, params }) {
		const id = params.id;
		const url = `/movie/${id}.json`;
		const res = await fetch(url);
		const { movieDetail } = await res.json();
		if (res.ok) {
			return {
				// we pass the data received from the db as a prop 'popular'
				props: { movieDetail }
			};
		}
	}
</script>

<script>
	export let movieDetail;
	import { fly } from 'svelte/transition';
</script>

<div
	in:fly={{ y: 50, duration: 500, delay: 500 }}
	out:fly={{ duration: 500 }}
	class="movie-details"
>
	<div class="img-container">
		<img
			src={'https://image.tmdb.org/t/p/original' + movieDetail.backdrop_path}
			alt={movieDetail.title}
		/>
	</div>
	<div class="txt-container">
		<h1>{movieDetail.title}</h1>
		<p class="overview">{movieDetail.overview}</p>
		<p>
			<span>Release Date: </span>
			{movieDetail.release_date} <br />
			<span>Rating: </span>
			{movieDetail.vote_average} / 10 <br />
			<span>Runtime:</span>
			{movieDetail.runtime} mins
		</p>
	</div>
</div>

<style>
	h1 {
		padding: 1rem 0rem 2rem;
	}
	p {
		padding: 1rem 0rem;
	}
	img {
		width: 100%;
		border-radius: 1rem;
	}
	.movie-details {
		margin: 2rem 20%;
	}
	span {
		font-weight: bold;
	}
</style>
