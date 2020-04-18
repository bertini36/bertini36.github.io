<script>

    import { createEventDispatcher, onDestroy, onMount } from "svelte";
    import Blog from "../pages/Blog.svelte";
    import {routes, active_route, posts, selected_post} from "../stores.js";
    import Post from "../classes/Post.js";
    import * as requests from "../requests.js";
    import PageNotFound from "../pages/PageNotFound.svelte";

    const logo_img_url = "/static/img/logo.png";
    const dispatcher = createEventDispatcher();
    let page_has_background_image;

    onMount(() => select_page())
    onDestroy(() => window.removeEventListener("hashchange", select_page));

    // Basic routes, post routes are added later from PostList.svelte
    $routes = [
        {route: "", page: Blog},
        {route: "#", page: Blog},
        {route: "#posts", page: Blog},
        {route: "#contact", page: Blog}
    ];

    const select_page = () => {
        let section = location.hash;
        $active_route = $routes.find(route => route.route === section);
        if (section.endsWith("post")) {
            update_selected_post(section);
        }
        dispatcher("routechange", $active_route ? $active_route.page : PageNotFound);
    };

    async function update_selected_post(section) {
        let post_slug = section.substr(1);
        if ($posts.length === 0) {
            $posts = await requests.get_posts().then(data => $posts = data);
            Post.add_routes($routes, $posts);
            select_page();
        }
        $selected_post = Post.search_post($posts, post_slug);
    }

    window.addEventListener("hashchange", select_page);

</script>

<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container">
        <a class="navbar-brand" href="#"><img src={logo_img_url}></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active"><a class="nav-link" href="#"></a></li>
                <li class="nav-item active"><a class="nav-link" href="#posts">Posts</a></li>
                <li class="nav-item active"><a class="nav-link" href="#contact">Contact</a></li>
            </ul>
        </div>
    </div>
</nav>

<style>

    a {
        cursor: pointer;
    }

    .nav-item a {
        color: white;
    }

</style>
