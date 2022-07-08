<script context="module">
	export async function load({ fetch }) {
		const res = await fetch(`/.json`);
		const { data } = await res.json();
		if (res.ok) {
			return {
				// we pass the data received from the db as a prop 'popular'
				props: { popular: data.results }
			};
		}
		return {
			props: { popular: [] }
		};
	}
</script>

<script>
	import PopularMovies from '../components/PopularMovies.svelte';
	// the prop data is then exported to the component to be consumed via export let declaration below
	export let popular;
	import SearchMovies from '../components/SearchMovies.svelte';
	import { fly } from 'svelte/transition';
</script>

<!-- NB! When fetching data from an external api, we must use the script tag with context="module" attribute  -->

<section in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
	<SearchMovies />
	<PopularMovies {popular} />
</section>
