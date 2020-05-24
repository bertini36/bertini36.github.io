<script>

    import {onMount} from "svelte";
    import * as utils from "../utils.js"
    import {RECAPTCHA_SITE_KEY} from "../constants.js";
    import * as requests from "../requests.js";
    import TextField from "smelte/src/components/TextField";
    import Button from "smelte/src/components/Button";

    const message_data = {
        name: "",
        email: "",
        text: ""
    };
    const errors = {
        name: "",
        email: "",
        captcha: "",
        text: ""
    }
    const send_message_url = "/send/message/";
    const section_id = "#contact";
    let name_error = "";
    let email_error = "";
    let captcha_error = "";
    let text_error = "";

    onMount(async() => {
        if (location.hash === section_id) {
            var element = document.getElementById(section_id.substr(1));
            element.scrollIntoView();
        }
    });

    async function send_message() {
        if (grecaptcha) {
            try {
                message_data["captcha"] = grecaptcha.getResponse();
            } catch(e) {message_data["captcha"] = "default";}
        } else message_data["captcha"] = "default";
        let response = await requests.send_message_request(message_data);
        if (response.error) {
            show_errors(response.data);
        } else {
            utils.show_notification("success", "Message sent");
            location.hash = "";
            reset_form();
            reset_errors();
        }
    }

    function reset_form() {
        message_data.name = "";
        message_data.email = "";
        message_data.text = "";
    }

    function show_errors(response_errors) {
        if ("name" in response_errors) errors.name = response_errors["name"];
        if ("email" in response_errors) errors.email = response_errors["email"];
        if ("captcha" in response_errors) errors.captcha = response_errors["captcha"];
        if ("text" in response_errors) errors.text = response_errors["text"];
        if ("__all__" in response_errors) utils.show_notification("error", response_errors["__all__"]);
    }

    function reset_errors() {
        errors.name = "";
        errors.email = "";
        errors.captcha = "";
        errors.text = "";
    }

</script>

<section id="contact" class="flex h-screen">
    <div class="m-auto">
        <h2 class="text-3xl text-center text-white font-hairline">
            Contact
        </h2>
        <h3 class="text-xl text-center text-white font-hairline mb-10">
            Send me a message for any questions
        </h3>
        <TextField label="Name" bind:value={message_data.name} error={errors.name}/>
        <TextField label="Email" bind:value={message_data.email} error={errors.email}/>
        <div class="g-recaptcha pb-4" data-sitekey="{RECAPTCHA_SITE_KEY}"></div>
        <TextField label="Message text" textarea rows="3" bind:value={message_data.text} error={errors.text}/>
        <Button color="primary" dark block on:click={send_message}>Send</Button>
    </div>
</section>

<style>

    section {
        background-color: #222;
        background-image: url(../img/map_image.png);
        background-position: center;
        background-repeat: no-repeat;
    }

</style>
