<script>

    export let url;

    let comment = {name: "", email: "", text: ""};
    let errors = {name: "", email: "", text: ""};
    let comments = getComments();

    async function getComments() {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Get comments url has failed");
        return await response.json();
    }

    function parseDate(date_str) {
        return date_str.split(".")[0];
    }

    async function publish_comment() {
        errors = resetObject(errors);
        if (!formHasErrors()) {
            await fetch(url, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(comment)
            });
            comments = getComments();
            comment = resetObject(comment);
        }
    }

    function formHasErrors() {
        let has_errors = false;
        if (comment.name === "") {
            errors.name = "You have to specify your name";
            has_errors = true;
        }
        if (comment.email === "" || comment.email.indexOf("@") === -1) {
            errors.email = "You have to specify your email";
            has_errors = true;
        }
        if (comment.text === "") {
            errors.text = "You have to specify a comment";
            has_errors = true;
        }
        return has_errors;
    }

    function resetObject(object) {
        for (let key in object) {
            object[key] = "";
        }
        return object;
    }
</script>

<div class="border-t-2 border-red-400 dark:border-white my-10"></div>
<div>

    <h4 class="text-2xl text-black text-center mb-10">Write a comment! 😀</h4>

    {#await comments}
        <figure class="flex justify-center"><img class="w-48" src="loader.gif" alt="Loader"></figure>
    {:then comments}
        {#each comments as comment}
            <div class="shadow bg-white rounded-md mb-1" role="alert">
                <div class="p-4 flex">
                    <div class="pl-2">
                        <p class="font-bold text-gray-700 dark:text-white">{comment.text}</p>
                        <p class="text-gray-600 dark:text-white">
                            {comment.name} <span class="text-gray-500 text-sm dark:text-white">{parseDate(comment.date)}</span>
                        </p>
                    </div>
                </div>
            </div>
        {/each}
    {:catch error}
        <p>No comments yet</p>
    {/await}

    <form onsubmit="return false" class="w-full mt-16">
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label for="name" class="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2">Name</label>
                <input type="text" bind:value={comment.name}
                       class="appearance-none block w-full bg-gray-200 text-gray-700 dark:text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <p class="text-red-600 text-xs dark:text-white">{errors.name}</p>
            </div>
            <div class="w-full md:w-1/2 px-3">
                <label for="email" class="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2">Email</label>
                <input type="text" bind:value={comment.email}
                       class="appearance-none block w-full bg-gray-200 text-gray-700 dark:text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <p class="text-red-600 text-xs dark:text-white">{errors.email}</p>
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
                <label for="comment" class="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2">Comment</label>
                <textarea rows="2" bind:value={comment.text}
                          class="appearance-none block w-full bg-gray-200 text-gray-700 dark:text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
                <p class="text-red-600 text-xs dark:text-white">{errors.text}</p>
            </div>
        </div>
        <div class="w-full">
            <button on:click={publish_comment}
                    class="w-full bg-red-500 dark:bg-red-400 hover:bg-red-400 dark:hover:bg-red-300 text-white font-bold py-2 px-4 border-b-4 border-red-700 dark:border-red-500 hover:border-red-500 dark:hover:border-red-400 rounded">
                Send
            </button>
        </div>
    </form>

</div>
