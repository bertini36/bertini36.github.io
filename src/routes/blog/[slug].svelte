<script context="module">
	import Comments from "../../components/Comments.svelte";

	export async function preload({ params, query }) {

		const settings_res = await this.fetch("settings.json");
    	const settings = await settings_res.json();

		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data, env: settings.ENV };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let post;
	export let env;
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
	.content :global(.post_code) {
		@apply my-6;
	}

	.content :global(.post_p) {
		@apply text-gray-900 leading-relaxed mt-4;
	}

	.content :global(.post_list) {
		@apply list-disc px-6 text-gray-900 leading-relaxed mt-4;
	}

	.content :global(.post_section_title) {
		@apply mt-8 mb-2 underline;
	}

	.content :global(.post_link) {
		@apply text-red-500;
	}

	.content :global(.post_figure) {
		@apply mx-auto mb-6 mt-6;
	}

	.content :global(.post_image_figcaption) {
		@apply text-center text-gray-900 leading-relaxed text-sm;
	}

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

<h1 class="text-4xl">{post.title}</h1>

<div class='content mb-10'>
	{@html post.html}
	<Comments slug="{post.slug}" env="{env}"/>
</div>