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

<section id="posts">

    <div class="section_header_div">
        <h2 class="section_header_text">Posts</h2>
    </div>

    <div class="container lg:max-w-3/4 mx-auto my-12 px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">

            {#each $posts as post}

                <PostCard post={post}/>

            {/each}

        </div>
    </div>

</section>
