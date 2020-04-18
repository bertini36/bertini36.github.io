export default class Comment {

    constructor(id, created, text, validated, post_id, contact_id, contact_name) {
        this.id = id;
        this.created = created;
        this.text = text;
        this.validated = validated;
        this.post_id = post_id;
        this.contact_id = contact_id;
        this.contact_name = contact_name;
    }

    static get_comment_objects_from_data(data) {
        let comments = []
        for (let comment_data of data) {
            let comment = new Comment(...Object.values(comment_data));
            comments.push(comment);
        }
        return comments;
    }

}
