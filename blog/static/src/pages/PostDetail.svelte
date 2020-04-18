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
        const modal_selector = "#post_detail";
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

<section id="post_detail">
    <div class="container">
        <div class="row">
            <div class="offset-md-1 col-md-10 col-sm-12">

                {#if $selected_post !== null}

                    <div class="centered">
                        <h2>{$selected_post.name}</h2>
                        <h3><small>{$selected_post.technology}</small></h3>
                        <img class="img-fluid img-centered fixed-size-image center" style="width: 600px" src="{`static/${$selected_post.main_photo_path}`}" alt="Main post image">
                    </div>

                    {@html $selected_post.text}

                    <div class="border-top my-3"></div>

                    <Comments />

                {/if}
            </div>
        </div>
    </div>
</section>

<!-- Text styles are in common.css for Svelte limitations -->
