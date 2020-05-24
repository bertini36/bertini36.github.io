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
        if (response !== undefined) {
            utils.show_notification("success", "Message sent");
            location.hash = "";
            reset_form();
        }
    }

    function reset_form() {
        message_data.name = "";
        message_data.email = "";
        message_data.text = "";
    }

</script>

<section id="contact" class="py-16 md:py-32 lg:py-64">

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
            <TextField label="Name" bind:value={message_data.name}/>
            <TextField label="Email" bind:value={message_data.email}/>
            <div class="g-recaptcha lg:pb-3" data-sitekey="{RECAPTCHA_SITE_KEY}"></div>
            <TextField label="Message text" textarea rows="3" bind:value={message_data.text}/>
            <Button light block on:click={send_message}>Send</Button>
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
