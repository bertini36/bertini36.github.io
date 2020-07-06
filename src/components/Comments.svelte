<script>
    import { onMount } from 'svelte';

    export let slug;
    const comments_url = `https://xjdf38glwl.execute-api.eu-west-1.amazonaws.com/prod/comments/${slug}`;
    let fetch_comments = (async () => {
        const response = await fetch(comments_url);
        if (!response.ok) throw new Error(text);
        return await response.json();
    })();
</script>

<div class="border-t-2 border-red-400 my-10"></div>
<div>
    <h4 class="post_section_title text-2xl text-black">Comments</h4>
    {#await fetch_comments}
        <p>Waiting...</p>
    {:then comments}
        {#each comments as comment}
            <p>
                {comment.text}
            </p>
        {/each}
    {:catch error}
        <p>No comments yet</p>
    {/await}
</div>