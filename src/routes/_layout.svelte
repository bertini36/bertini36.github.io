<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<Nav {segment}/>

<main>
	<slot></slot>
</main>

<style>
	main {
		position: relative;
        margin: 0 auto;
		max-width: 70em;
		padding: 2em;
		box-sizing: border-box;
	}
</style>
