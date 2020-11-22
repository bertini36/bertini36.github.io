<script>
	export let segment;
	const blog_github_url = "https://github.com/bertini36/blogv2";
</script>

<style>
	nav {
		border-bottom-color: rgba(255, 62, 0, 0.1);
		padding: 0 1em;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255, 62, 0);
		display: block;
		bottom: -2px;
	}
</style>

<nav class="border-b-2 py-0 px-4 font-light">
	<ul class="m-0 p-0">
		<li class="float-left"><a class="block no-underline py-4 px-3 hover:text-red-500" aria-current="{segment === undefined ? 'page' : undefined}" href=".">Home</a></li>
		<li class="float-left"><a class="block no-underline py-4 px-3 hover:text-red-500" rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">Blog</a></li>
		<li class="float-right"><a class="block no-underline py-4 px-3 hover:text-red-500" href="{blog_github_url}" target="_blank"><i class="fa fa-github"></i></a></li>
	</ul>
</nav>
