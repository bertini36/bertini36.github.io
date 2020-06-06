<script>

    import {onMount} from "svelte";
    import * as utils from "../utils.js";
    import {selected_post} from "../stores.js";
    import * as requests from "../requests.js";

    const user_avatar_url = "static/img/user.png";
    const publish_comment_url = "/send/message/";
    let comments = [];
    let comment_data = {
        name: "",
        email: "",
        text: ""
    };
    const errors = {
        name: "",
        email: "",
        text: ""
    }

    onMount(async() => {
        comments = await requests.get_comments($selected_post.slug);
    });

    async function publish_comment() {
        reset_errors();
        let response = await requests.publish_comment_request($selected_post.slug, comment_data);
        if (response.error) {
            show_errors(response.data);
        } else {
            utils.show_notification("success", "Comment published");
            comments = [response, ...comments];
            reset_comment_form();
            reset_errors();
        }
    }

    function show_errors(response_errors) {
        if ("name" in response_errors) errors.name = response_errors["name"];
        if ("email" in response_errors) errors.email = response_errors["email"];
        if ("text" in response_errors) errors.text = response_errors["text"];
        utils.show_notification("error", "Some errors have been found");
    }

    function reset_comment_form() {
        comment_data.name = "";
        comment_data.email = "";
        comment_data.text = "";
    }

    function reset_errors() {
        errors.name = "";
        errors.email = "";
        errors.text = "";
    }

</script>

<div class="h-2 border-t-2"></div>

<section class="max-w-full">

    <div class="justify-start justify-center mt-4 mb-4">
        <div class="w-full">
            <h4 class="text-xl text-center">Comments</h4>
        </div>
    </div>

    {#each comments as comment}

        <div class="bg-grey-lightest rounded shadow-md p-4">

            <div class="flex justify-between mb-1">
                <p class="text-grey-darkest leading-normal text-md">{comment.text}</p>
            </div>

            <div class="text-grey-dark leading-normal text-sm text-gray-900">
                <p>{comment.contact_name} <span class="mx-1 text-xs">&bull;</span> {comment.created}</p>
            </div>

        </div>

    {/each}

    {#if !comments.length }

        <div class="bg-white border border-blue-500 text-blue-500 px-4 py-3 rounded relative my-5">
            <i class="fa fa-info-circle text-blue-500"></i>
            <span class="block sm:inline">Be the first to write a comment!</span>
        </div>

    {/if}

    <div class="mt-8 mb-12 md:px-64">

        <h4 class="text-xl text-center">Write a comment!</h4>

        <div class="flex flex-wrap mb-1">
            <div class="w-full">
                <label class="input_label">Name</label>
                <input class="input border focus:outline-none focus:bg-white focus:border-yellow"
                       type="text" placeholder="Name"
                       bind:value={comment_data.name}>
                <p class="text-red-600 text-xs mt-1">{errors.name}</p>
            </div>
        </div>

        <div class="flex flex-wrap mb-1">
            <div class="w-full">
                <label class="input_label">Email</label>
                <input class="input border focus:outline-none focus:bg-white focus:border-yellow"
                       type="email" placeholder="Email" bind:value={comment_data.email}>
                <p class="text-red-600 text-xs mt-1">{errors.email}</p>
            </div>
        </div>

        <div class="flex flex-wrap mb-1">
            <div class="w-full">
                <label class="input_label">Comment</label>
                <textarea class="input border focus:outline-none focus:bg-white focus:border-yellow"
                          placeholder="Comment" bind:value={comment_data.text} rows="5"></textarea>
                <p class="text-red-600 text-xs mt-1">{errors.text}</p>
            </div>
        </div>

        <button on:click={publish_comment} class="w-full hover:bg-light_yellow focus:outline-none mt-4">Send</button>

    </div>

</section>
