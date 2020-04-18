import PostDetail from "../pages/PostDetail.svelte";

export default class Post {

    constructor(id, name, slug, technology, published, main_photo_path) {
        this.id = id;
        this.name = name;
        this.slug = slug;
        this.technology = technology;
        this.published = published;
        this.main_photo_path = main_photo_path;
        this.text = null;
    }

    static get_post_objects_from_data(data) {
        let posts = []
        for (let post_data of data) {
            let post = new Post(...Object.values(post_data));
            posts.push(post);
        }
        return posts;
    }

    static search_post(posts, post_slug) {
        for (let post of posts) {
            if (post.slug === post_slug) {
                return post;
            }
        }
        return null;
    }

    static add_routes(routes, posts) {
        for (let post of posts) {
            routes.push({route: `#${post.slug}`, page: PostDetail})
        }
    }

}
