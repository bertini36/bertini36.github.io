<script>

    import {onMount} from "svelte";
    import * as utils from "../utils.js";
    import {selected_post} from "../stores.js";
    import * as requests from "../requests.js";
    import TextField from "smelte/src/components/TextField";
    import Button from "smelte/src/components/Button";

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
        let response = await requests.publish_comment_request($selected_post.slug, comment_data);
        if (response.error) {
            show_errors(response.data);
        } else {
            utils.show_notification("success", "Comment published");
            comments = [response, ...comments];
            reset_comment_form();
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

</script>

<div class="h-2 border-t-2"></div>

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

<div class="mt-16 mb-16">
    <div class="m-auto">
        <TextField label="Name" bind:value={comment_data.name} error={errors.name}/>
        <TextField label="Email" bind:value={comment_data.email} error={errors.email}/>
        <TextField label="Message text" textarea rows="3" bind:value={comment_data.text} error={errors.text}/>
        <Button color="primary" dark block on:click={publish_comment}>Send comment</Button>
    </div>
</div>
