import axios from "axios";
import * as utils from "./utils.js";
import Post from "./classes/Post.js";
import Comment from "./classes/Comment.js";

const get_posts_url = "/posts/";
const send_message_url = "/send/message/";


export async function get_posts() {
    return await axios.get(get_posts_url).then(function(response) {
        return Post.get_post_objects_from_data(response.data.data);
    }).catch(error => utils.show_notification("error", error.response.data));
}

export async function get_post_text(post_slug) {
    return await axios.get(`${get_posts_url}${post_slug}/text/`).then(function(response) {
        return response.data.data;
    }).catch(error => utils.show_notification("error", error.response.data.data));
}

export async function get_comments(post_slug) {
    let get_comments_url = `${get_posts_url}${post_slug}/comments/`;
    return await axios.get(get_comments_url).then(function(response) {
        return Comment.get_comment_objects_from_data(response.data.data);
    }).catch(error => utils.show_notification("error", error.response.data.data));
}

export async function publish_comment_request(post_slug, comment_data) {
    let publish_comment_url = `${get_posts_url}${post_slug}/comments/publish/`;
    let json_comment_data = JSON.stringify(comment_data);
    return await axios.post(publish_comment_url, json_comment_data).then(function(response) {
        return new Comment(...Object.values(response.data.data));
    }).catch(error => utils.show_notification("error", error.response.data.data));
}

export async function send_message_request(message_data) {
    let message_data_json = JSON.stringify(message_data);
    return await axios.post(send_message_url, message_data_json).then(function(response) {
        return true;
    }).catch(function(error) {
        return error.response.data;
    });
}
