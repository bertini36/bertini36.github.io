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
        reset_errors();
        if (grecaptcha) {
            try {
                message_data["captcha"] = grecaptcha.getResponse();
            } catch(e) {message_data["captcha"] = "default";}
        } else message_data["captcha"] = "default";
        let response = await requests.send_message_request(message_data);
        if (response.error) {
            show_errors(response.data);
        } else {
            utils.show_notification("success", "Message sent! I will reply it as soon as possible");
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
        <div class="flex flex-wrap mb-2">
            <div class="w-full">
                <label class="input_label_contact_form">Name</label>
                <input class="input_contact_form focus:outline-none focus:bg-white focus:border-yellow"
                       type="text" placeholder="Name" bind:value={message_data.name}>
                <p class="text-red-600 text-xs mt-2">{errors.name}</p>
            </div>
        </div>
        <div class="flex flex-wrap mb-2">
            <div class="w-full">
                <label class="input_label_contact_form">Email</label>
                <input class="input_contact_form focus:outline-none focus:bg-white focus:border-yellow"
                       type="email" placeholder="Email" bind:value={message_data.email}>
                <p class="text-red-600 text-xs mt-2">{errors.email}</p>
            </div>
        </div>
        <div class="flex flex-wrap mb-3">
            <div class="w-full">
                <label class="input_label_contact_form">Message</label>
                <textarea class="input_contact_form focus:outline-none focus:bg-white focus:border-yellow"
                          placeholder="Message" bind:value={message_data.text} rows="5"></textarea>
                <p class="text-red-600 text-xs mt-2">{errors.text}</p>
            </div>
        </div>
        <div class="g-recaptcha pb-2 mb-3" data-sitekey="{RECAPTCHA_SITE_KEY}"></div>
        <button on:click={send_message} class="w-full hover:bg-light_yellow focus:outline-none">Send</button>
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
