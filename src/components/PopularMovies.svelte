<script>
	// here we export the prop 'popular' that we got from the index file that we passed as an attribute in the <PopularMovies> component
	export let popular;
	import MovieCard from './MovieCard.svelte';
</script>

<h3>Popular Movies</h3>
<div class="popular-movies">
	<!-- The {#each fn loops over the array 'popular' and renders each 'movie' on the given element} -->
	{#each popular as movie}
		<!-- This is the MovieCard component that we are passing the data to -->
		<MovieCard {movie} />
	{/each}
</div>

<style>
	h3 {
		padding: 0 1rem;
	}
	.popular-movies {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
	}
</style>
