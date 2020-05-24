<script>

    export let post;
    let hover = false;

</script>

<div class="w-full sm:w-1 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-8 content-center" on:click={location.hash = post.slug}>
    <div class="max-w-md md:max-w-md md:mx-3 lg:max-w-lg rounded overflow-hidden shadow-lg cursor-pointer border-1"
         style="border-color: {hover ? '#feb72b' : 'black'}" class:border-2={hover === true}>
        <img class="w-full h-56" src="static/{post.main_photo_path}" alt="{post.name}" on:mouseover="{() => hover = true}" on:mouseout="{() => hover = false}">
        <div class="px-6 py-4 border-t-2">
            <div class="font-medium text-xl mb-2" style="color: {hover ? '#feb72b' : 'black'}" on:mouseover="{() => hover = true}" on:mouseout="{() => hover = false}">
                {post.name}
            </div>
            <p class="text-gray-700 text-base" on:mouseover="{() => hover = true}" on:mouseout="{() => hover = false}">
                {post.technology}
            </p>
        </div>
    </div>
</div>
