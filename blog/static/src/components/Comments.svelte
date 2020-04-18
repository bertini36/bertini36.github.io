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

    onMount(async() => {
        comments = await requests.get_comments($selected_post.slug);
    });

    async function publish_comment() {
        let comment = await requests.publish_comment_request($selected_post.slug, comment_data);
        if (comment !== undefined) {
            utils.show_notification("success", "Comment published");
            comments = [comment, ...comments];
            reset_comment_form();
        }
    }

    function reset_comment_form() {
        comment_data.name = "";
        comment_data.email = "";
        comment_data.text = "";
    }

</script>

<h4>Comments</h4>

{#each comments as comment}

    <article class="comment">
        <a class="comment-img" href="javascript: void(0)">
            <img src={user_avatar_url} alt="User logo" width="50" height="50">
        </a>
        <div class="comment-body">
            <div class="text" style="text-align: left">
                <strong>{comment.contact_name}</strong>
                <br>
                {comment.text}
            </div>
        </div>
        <p class="attribution">
            {comment.created}
        </p>
    </article>

{/each}

<div class="row">

    <div class="col-md-6 col-sm-6 col-xs-12">

        <div class="form-group">
            <input type="text" class="form-control" placeholder="Name" bind:value={comment_data.name}>
        </div>

        <div class="form-group">
            <input type="email" class="form-control" placeholder="Email" bind:value={comment_data.email}>
        </div>

    </div>

    <div class="col-md-6 col-sm-6 col-xs-12">
        <div class="form-group">
            <textarea class="form-control" placeholder="Comment" bind:value={comment_data.text}></textarea>
        </div>
    </div>

    <div class="col-md-12 col-sm-12 col-xs-12 text-center">
        <button type="submit" class="btn btn-xl" on:click={publish_comment}>
            <i class="fa fa-paper-plane" aria-hidden="true"></i>
            &nbsp;Send comment
        </button>
    </div>

</div>

<style>

    .comment {
        overflow: hidden;
        padding: 0 0 0;
        margin: 0 0 0;
        *zoom: 1;
    }

    .comment-img {
        float: left;
        margin-right: 33px;
        border-radius: 5px;
        overflow: hidden;
    }

    .comment-img img {
        display: block;
    }

    .comment-body {
        overflow: hidden;
    }

    .comment .text {
        padding: 10px;
        border: 1px solid #e5e5e5;
        border-radius: 5px;
        background: #fff;
    }

    .comment .text p:last-child {
        margin: 0;
    }

    .comment .attribution {
        margin: 0.5em 0 0;
        font-size: 14px;
        color: #666;
    }

    /* Decoration */

    .comments,
    .comment {
        position: relative;
    }

    .comments:before,
    .comment:before,
    .comment .text:before {
        content: "";
        position: absolute;
        top: 0;
        left: 65px;
    }

    .comments:before {
        width: 3px;
        top: -20px;
        bottom: -20px;
        background: rgba(0,0,0,0.1);
    }

    .comment:before {
        width: 9px;
        height: 9px;
        border: 3px solid #fff;
        border-radius: 100px;
        margin: 16px 0 0 -6px;
        box-shadow: 0 1px 1px rgba(0,0,0,0.2), inset 0 1px 1px rgba(0,0,0,0.1);
        background: #ccc;
    }

    .comment:hover:before {
        background: orange;
    }

    .comment .text:before {
        top: 18px;
        left: 78px;
        width: 9px;
        height: 9px;
        border-width: 0 0 1px 1px;
        border-style: solid;
        border-color: #e5e5e5;
        background: #fff;
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -o-transform: rotate(45deg)
    }

    .row {
        margin-top: 5%;
    }

    textarea {
        height: 90px;
    }

    h4 {
        margin-bottom: 5%;
    }

    button {
        margin-top: 2%;
    }

</style>
