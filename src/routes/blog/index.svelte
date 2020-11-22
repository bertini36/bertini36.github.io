<script context='module'>
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	import moment from 'moment';

	export let posts;

	function formatDate(date) {
		return moment(date).fromNow();
	}

    function truncate(str, n) {
        let openTags = [];
        let inTag = false;
        let tagName = '';
        let tagNameComplete = false;
        let tagClosing = false;
        let lastSpace = 0;
        for (let p = 0; p < str.length && p < n; p++) {
            let c = str.charAt(p);
            switch (c) {
                case '<':
                    lastSpace = ((!inTag && p + 3 < n) ? p : lastSpace);
                    inTag = true;
                    tagName = '';
                    tagNameComplete = false;
                    break;
                case '>':
                    if (inTag && !tagNameComplete) {
                        openTags.push({
                            tag: tagName,
                            p: p
                        });
                        tagNameComplete = true;
                    }
                    inTag = false;
                    if (tagClosing) openTags.pop();
                    tagClosing = false;
                    tagName = ''; //may be redundant
                    break;
                case '/':
                    tagClosing = inTag;
                    break;
                case ' ':
                    lastSpace = ((!inTag && p + 3 < n) ? p : lastSpace);
                    if (inTag && !tagNameComplete) {
                        openTags.push({
                            tag: tagName,
                            p: p
                        });
                        tagNameComplete = true;
                    }
                    break;
            }
            if (!tagNameComplete && c !== '<' && c !== '>') tagName += c;
        }
        let small = str.substring(0, lastSpace) + '...';
        for (let i = openTags.length - 1; i >= 0; i--)
            if (openTags[i].p <= lastSpace) small += '</' + openTags[i].tag + '>';
        return small;
    }
</script>

<svelte:head>
	<title>Alberto Pou - Blog</title>
	<meta name="description" content="All blog posts of Alberto Pou" />
</svelte:head>

<div class="posts">
	{#each posts as post}
		<div class="mb-8">
			<div class="mb-4">
				{#each post.tags as tag}
					<span class="text-base text-gray-600 dark:text-white">{tag}</span>&nbsp;
				{/each}
				<h1 class="text-3xl title hover:text-red-500 mb-0 pb-0 font-bold">
					<a rel="prefetch" hreflang='en' href="blog/{post.slug}">{post.title}</a>
				</h1>
				<span class='text-base text-gray-800 dark:text-white'>{formatDate(post.date)}</span>
			</div>
			<p>
				{@html truncate(post.html, 400)}
			</p>
			<div class="mt-3 title font-semibold">
				<a rel="prefetch" class="link" lang="en" href="blog/{post.slug}">Continue reading</a>
			</div>
		</div>
	{/each}
</div>
