<script>

    import {createEventDispatcher, onDestroy, onMount} from "svelte";
    import Blog from "../pages/Blog.svelte";
    import {routes, active_route, posts, selected_post} from "../stores.js";
    import Post from "../classes/Post.js";
    import * as requests from "../requests.js";
    import PageNotFound from "../pages/PageNotFound.svelte";

    const logo_img_url = "/static/img/logo.png";
    const blog_github_url = "https://github.com/bertini36/blog";
    const github_img_url = "/static/img/github.png";
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

<nav class="fixed top-0 w-screen items-center flex-wrap flex left-0 z-30 p-0 h-16 elevation-3 w-screen items-center flex-wrap flex left-0 z-30 p-0 h-16 elevation-3 bg-dark-500">
    <a class="px-2 md:px-8 flex items-center" href="#">
        <img alt="Smelte logo" src="{logo_img_url}" width="35" height="35">
    </a>
    <div class="flex-grow"></div>
    <div class="y-0 h-full items-center relative mx-auto z-20 hidden md:flex max-w-2xl ">
        <a class="transition-fast relative overflow-hidden text-center h-full p-6 cursor-pointer flex mx-auto items-center text-sm h-full flex text-md text-white hover:bg-white-transLight hover:text-white" href="#posts">
            <div class="flex flex-col items-center content-center text-base">
                Posts
            </div>
        </a>
        <a class="transition-fast relative overflow-hidden text-cente h-full p-6 cursor-pointer flex mx-auto items-center text-sm h-full flex text-md text-white hover:bg-white-transLight hover:text-white" href="#contact">
            <div class="flex flex-col items-center content-center text-base">
                Contact
            </div>
        </a>
    </div>
    <div class="md:hidden">
        <button class=" px-4 uppercase text-sm font-medium relative overflow-hidden bg-transparent border-none px-4 hover:bg-transparent p-4 flex items-center pt-1 pb-1 pl-2 pr-2 text-xs flex items-center justify-center h-8 w-8 rounded-full rounded hover:bg-transparent hover:bg-primary-transLight">
            <i aria-hidden="true" class="material-icons icon text-xl text-white transition svelte-zzky5a text-base" style="color: white">menu</i>
        </button>
    </div>
    <a class="px-4 github svelte-1d0txue mr-5" href="{blog_github_url}" target="_blank">
        <img alt="Blog Github" src="{github_img_url}" width="24" height="24">
    </a>
</nav>
