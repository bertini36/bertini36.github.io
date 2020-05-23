<script>

    export let post;

</script>

<div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-5" on:click={location.hash = post.slug}>
    <div class="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer">
        <img class="w-full" src="static/{post.main_photo_path}" alt="{post.name}">
        <div class="px-6 py-4 border-t-2">
            <div class="font-medium text-xl mb-2">{post.name}</div>
            <p class="text-gray-700 text-base">
                {post.technology}
            </p>
        </div>
    </div>
</div>
