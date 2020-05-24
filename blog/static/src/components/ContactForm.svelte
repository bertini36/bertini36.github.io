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

<section id="contact" class="py-24 md:py-32 lg:py-64">

    <div class="flex mt-20 mb-12">
        <div class="w-full">
            <h2 class="text-center text-3xl text-white">
                Contact
            </h2>
            <h5 class="text-center text-xl text-white">
                Send me a message for any questions
            </h5>
        </div>
    </div>

    <div class="flex flex-wrap px-4 md:px-12 lg:px-64">
        <div class="lg:w-1/3"></div>
        <div class="w-full lg:w-1/3 sm:px:12 text-center">
            <TextField label="Name" bind:value={message_data.name} error={errors.name}/>
            <TextField label="Email" bind:value={message_data.email} error={errors.email}/>
            <div class="g-recaptcha pb-4" data-sitekey="{RECAPTCHA_SITE_KEY}"></div>
            <TextField label="Message text" textarea rows="3" bind:value={message_data.text} error={errors.text}/>
            <Button color="primary" dark block on:click={send_message}>Send</Button>
        </div>
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
