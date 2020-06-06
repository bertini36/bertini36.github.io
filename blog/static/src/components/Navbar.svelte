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
    let section = "";

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
        section = location.hash;
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

    jQuery(document).on("scroll", function(e) {
        jQuery("section").each(function() {
            if (jQuery(this).offset().top < window.pageYOffset + 10
            &&  jQuery(this).offset().top +
                jQuery(this).height() > window.pageYOffset + 10
            ) {
                let hash = "#" + jQuery(this).attr("id");
                if (hash !== "#undefined" && hash !== "#post_container") {
                    section = hash;
                    if (history.pushState) {
                        history.pushState(null, null, hash);
                    } else {
                        location.hash = section;
                    }
                }
            }
        });
    });

</script>

<nav class="fixed top-0 w-screen items-center flex-wrap flex left-0 z-30 p-0 h-16 elevation-3 bg-black">
    <a class="px-2 md:px-8 flex items-center" href="#">
        <img alt="Blog logo" src="{logo_img_url}" width="35" height="35">
    </a>
    <div class="flex-grow"></div>
    <div class="y-0 h-full items-center relative mx-auto z-20 flex">
        <a class="transition-fast relative text-center h-full p-6 cursor-pointer flex mx-auto items-center text-white hover:bg-white-transLight"
           class:border-b-2="{section === '#posts'}" href="#posts">
            <div class="flex flex-col items-center content-center text-base">
                Posts
            </div>
        </a>
        <a class="transition-fast relative text-center h-full p-6 cursor-pointer flex mx-auto items-center text-white hover:bg-white-transLight"
           class:border-b-2="{section === '#contact'}" href="#contact">
            <div class="flex flex-col items-center content-center text-base">
                Contact
            </div>
        </a>
    </div>
    <a class="px-4 mr-5 py-5 text-white hover:bg-white-transLight h-full" href="{blog_github_url}" target="_blank">
        <i class="fa fa-github text-xl"></i>
    </a>
</nav>

<style>

    a:hover, a:focus, a:active {
        color: #feb72b;
    }

</style>
