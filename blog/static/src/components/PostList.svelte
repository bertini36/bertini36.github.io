<script>

    import {onMount} from "svelte";
    import Post from "../classes/Post.js";
    import * as requests from "../requests.js";
    import {posts, routes, active_route} from "../stores.js";
    import PostCard from "./PostCard.svelte";

    const section_id = "#posts";

    onMount(async () => {
        $posts = await requests.get_posts();
        Post.add_routes($routes, $posts);
        if (location.hash === section_id) {
            var element = document.getElementById(section_id.substr(1));
            element.scrollIntoView();
        }
    });

</script>

<section id="posts" class="px-4 md:px-8 lg:px-8 xl:px-34">

    <div class="flex mt-20 mb-10">
        <div class="w-full">
            <h2 class="text-3xl text-center">Posts</h2>
        </div>
    </div>

    <div class="flex flex-wrap mb-12">

        {#each $posts as post}

            <PostCard post={post}/>

        {/each}

    </div>

</section>
