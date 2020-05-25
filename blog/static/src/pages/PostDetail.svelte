<script>

    import {onMount} from "svelte";
    import Comments from "../components/Comments.svelte";
    import {selected_post} from "../stores.js";
    import * as requests from "../requests.js";

    onMount(async() => {
        window.scrollTo(0, 0);
        let post_text = await requests.get_post_text($selected_post.slug);
        if (post_text !== undefined) {
            $selected_post.text = post_text;
            setTimeout(() => get_gists());
        }
    });

    function get_gists() {
        const modal_selector = "#post_container";
        let gists = jQuery(modal_selector).find("div[gist^='https://gist.github.com/']");
        if(gists.length) {
            gists.each(function(index, element) {
                jQuery.getJSON(jQuery(element).attr("gist") + "on?callback=?", function(data) {
                    jQuery(element).append(data.div);
                    add_stylesheet_gist(data.stylesheet);
                });
            });
        }
    }

    function add_stylesheet_gist(url) {
        let head = jQuery("head");
        if (head.find("link[rel='stylesheet'][href='" + url + "']").length < 1) {
            head.append('<link rel="stylesheet" href="' + url + '" type="text/css" />');
        }
    }

</script>

<section id="post_container" class="container h-screen mt-32 mx-auto">
    <div class="px-4 md:px-8 lg:px-32">

        {#if $selected_post !== null}

            <h2 class="text-3xl text-center">
                {$selected_post.name}
            </h2>
            <h3 class="text-xl text-center font-hairline mb-8">
                {$selected_post.technology}
            </h3>

            <img class="w-full h-full mb-8 md:px-32 lg:px-64"
                 src="static/{$selected_post.main_photo_path}" alt="{$selected_post.name}">

            {@html $selected_post.text}

            <Comments/>

        {/if}

    </div>
</section>

