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

			let comments_url = settings.COMMENTS_URL + data.slug
			return { post: data, comments_url: comments_url };

		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let post;
	export let comments_url;
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<h1 class="title text-4xl font-bold">{post.title}</h1>

<div class="post mb-10">
	{@html post.html}
	<Comments url="{comments_url}"/>
</div>
