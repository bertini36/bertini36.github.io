<script>

    import {onMount} from "svelte";
    import Post from "../classes/Post.js";
    import * as requests from "../requests.js";
    import {posts, routes, active_route} from "../stores.js";

    const section_id = "#posts";

    onMount(async() => {
        $posts = await requests.get_posts();
        Post.add_routes($routes, $posts);
        if (location.hash === section_id) {
            var element = document.getElementById(section_id.substr(1));
            element.scrollIntoView();
        }
    });

</script>

<section id="posts">
    <div class="container">

        <div class="row">
            <div class="col text-center">
                <h2>Posts</h2>
            </div>
        </div>

        <div class="row">

            {#each $posts as post, i}

                <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 portfolio-item">
                    <a href="#{post.slug}" class="portfolio-link">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>

                        <img src="static/{post.main_photo_path}" class="img-fluid" alt="{post.name}">
                    </a>
                    <div class="portfolio-caption">
                        <h4>{post.name}</h4>
                        <p class="text-muted">{post.technology}</p>
                    </div>
                </div>

            {/each}

        </div>

    </div>
</section>

<style>

    h2 {
        margin-bottom: 5%;
    }

    .portfolio-item {
        right: 0;
        margin: 0 0 15px;
    }

    .portfolio-item .portfolio-link {
        display: block;
        position: relative;
        margin: 0 auto;
        max-width: 400px;
    }

    .portfolio-item .portfolio-link .portfolio-hover {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        background: rgba(254,209,54,.9);
        -webkit-transition: all ease .5s;
        -moz-transition: all ease .5s;
        transition: all ease .5s;
    }

    .portfolio-item .portfolio-link .portfolio-hover:hover {
        opacity: 1;
    }

    .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content {
        position: absolute;
        top: 50%;
        width: 100%;
        height: 20px;
        margin-top: -12px;
        text-align: center;
        font-size: 20px;
        color: #fff;
    }

    .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content i {
        margin-top: -12px;
    }

    .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content h3,
    .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content h4 {
        margin: 0;
    }

    .portfolio-item .portfolio-caption {
        margin: 0 auto;
        padding: 25px;
        max-width: 400px;
        text-align: center;
        background-color: #fff;
    }

    .portfolio-item .portfolio-caption h4 {
        margin: 0;
        text-transform: none;
    }

    .portfolio-item .portfolio-caption p {
        margin: 0;
        font-family: "Droid Serif","Helvetica Neue",Helvetica,Arial,sans-serif;
        font-size: 16px;
        font-style: italic;
    }

    * {
        z-index: 2;
    }

    @media(min-width:767px) {

        .portfolio-item {
            margin: 0 0 30px;
        }

    }

</style>
