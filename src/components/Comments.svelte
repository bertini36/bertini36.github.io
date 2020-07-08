<script>
    export let slug;
    const comments_url = `https://xjdf38glwl.execute-api.eu-west-1.amazonaws.com/prod/comments/${slug}`;
    let fetch_comments = (async () => {
        const response = await fetch(comments_url);
        if (!response.ok) throw new Error(text);
        return await response.json();
    })();

    let name = "";
    let email = "";
    let comment = "";

    function parseDate(date_str) {
        return date_str.split(".")[0];
    }
</script>

<div class="border-t-2 border-red-400 my-10"></div>
<div>

    <h4 class="text-2xl text-black text-center mb-10">Write a comment! 😀</h4>

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

    <form class="w-full mt-10">
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label for="name" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Name</label>
                <input type="text" bind:value={name}
                       class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            </div>
            <div class="w-full md:w-1/2 px-3">
                <label for="email" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Email</label>
                <input type="email" bind:value={email}
                       class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
                <label for="comment" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Comment</label>
                <textarea rows="2" bind:value={comment}
                          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
            </div>
        </div>
        <div class="w-full">
            <button class="w-full bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
                Send!
            </button>
        </div>
    </form>

</div>