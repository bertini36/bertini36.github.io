<script>
    export let slug;
    const comments_url = `https://xjdf38glwl.execute-api.eu-west-1.amazonaws.com/prod/comments/${slug}`;
    let fetch_comments = (async () => {
        const response = await fetch(comments_url);
        if (!response.ok) throw new Error(text);
        return await response.json();
    })();

    function parseDate(date_str) {
        return date_str.split(".")[0];
    }
</script>

<div class="border-t-2 border-red-400 my-10"></div>
<div>
    <h4 class="post_section_title text-2xl text-black">Comments</h4>
    {#await fetch_comments}
        <figure class="flex justify-center"><img class="w-48" src="loader.gif" alt="Loader"></figure>
    {:then comments}
        {#each comments as comment}
            <div class="shadow bg-white rounded-md mb-1" role="alert">
                <div class="p-4 flex">
                    <div class="pl-2">
                        <p class="font-bold text-gray-700">{comment.text}</p>
                        <p class="text-gray-600">
                            {comment.name} <span class="text-gray-500 text-sm">{parseDate(comment.date)}</span>
                        </p>
                    </div>
                </div>
            </div>
        {/each}
    {:catch error}
        <p>No comments yet</p>
    {/await}
</div>