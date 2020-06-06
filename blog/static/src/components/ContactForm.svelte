<script>

    import {onMount} from "svelte";
    import * as utils from "../utils.js"
    import {RECAPTCHA_SITE_KEY} from "../constants.js";
    import * as requests from "../requests.js";

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
        if ("__all__" in response_errors) {
            utils.show_notification("error", response_errors["__all__"]);
        } else {
            if ("name" in response_errors) errors.name = response_errors["name"];
            if ("email" in response_errors) errors.email = response_errors["email"];
            if ("captcha" in response_errors) errors.captcha = response_errors["captcha"];
            if ("text" in response_errors) errors.text = response_errors["text"];
            utils.show_notification("error", "Some errors have been found");
        }
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
        <h2 class="section_header_text text-white">
            Contact
        </h2>
        <h3 class="text-xl text-center text-white font-hairline mb-10">
            Send me a message for any questions
        </h3>
        <div class="g-recaptcha pb-4" data-sitekey="{RECAPTCHA_SITE_KEY}"></div>
        <button on:click={send_message} class="w-full hover:bg-light_yellow mt-8">Send</button>
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
