<script context="module">
	export async function load({ fetch, params }) {
		const id = params.id;
		const url = `/search/${id}.json`;
		const res = await fetch(url);
		const { data } = await res.json();
		if (res.ok) {
			return {
				// we pass the data received from the db as a prop 'popular'
				props: { searchedMovie: data.results }
			};
		}
		return {
			status: res.status,
			redirect: `/`
		};
	}
</script>

<script>
	import MovieCard from '../../components/MovieCard.svelte';
	export let searchedMovie;
	import { fly } from 'svelte/transition';
</script>

<div
	in:fly={{ y: 50, duration: 500, delay: 500 }}
	out:fly={{ duration: 500 }}
	class="searched-movie"
>
	{#each searchedMovie as movie}
		<MovieCard {movie} />
	{/each}
</div>

<style>
	.searched-movie {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
		height: 20vh;
	}
</style>
