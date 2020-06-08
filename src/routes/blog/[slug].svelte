<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let post;
</script>

<style>
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
	.content :global(pre) {
		font-family: menlo, inconsolata, monospace;
		font-size: calc(1em - 2px);
		padding: 0.5rem 1rem;
		overflow-x: scroll;
		background-color: #454954;
		color: #FFFFFF;
	}

	.content :global(code) {
		font-family: menlo, inconsolata, monospace;
		font-size: calc(1em - 2px);
		background-color: #454954;
		color: #FFFFFF;
		padding: 0.2em 0.4em;
		border-radius: 2px;
	}
</style>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>

<div class='content'>
	{@html post.html}
</div>
