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

<section id="contact">
    <div class="container">

        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12 text-center">
                <h2 class="section-heading">Contact</h2>
                <h5>Send me a message for any questions</h5>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="row">
                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <div class="form-group">
                            <input type="text" class="form-control"
                                   placeholder="Name"
                                   bind:value={message_data.name}>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control"
                                   placeholder="Email"
                                   bind:value={message_data.email}>
                        </div>
                        <div class="g-recaptcha"
                             data-sitekey="{RECAPTCHA_SITE_KEY}"></div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <div class="form-group">
                            <textarea class="form-control"
                                      placeholder="Message text"
                                      bind:value={message_data.text}></textarea>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <button type="submit" class="btn btn-xl pull-right"
                                on:click={send_message}>
                            <span class="glyphicon glyphicon-send"></span>
                            &nbsp;Send message
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>

<style>

    h5 {
        color: white;
        margin-bottom: 5%;
    }

    .g-recaptcha {
        margin-bottom: 6%;
    }

    textarea {
        height: 250px;
    }

    section {
        background-color: #222;
        background-image: url(../img/map_image.png);
        background-position: center;
        background-repeat: no-repeat;
    }

    @media (min-width: 700px) {

        section {
            padding-top: 10%;
            padding-bottom: 9%;
        }

    }

    .section-heading {
        color: #fff;
    }

    .form-group {
        margin-bottom: 25px;
    }

    input, textarea {
        padding: 20px;
    }

    input.form-control {
        height: auto;
    }

    textarea {
        height: 236px;
    }

    .form-control:focus {
        border-color: #fed136;
        box-shadow: none;
    }

    section::-webkit-input-placeholder {
        text-transform: uppercase;
        font-family: Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-weight: 700;
        color: #bbb;
    }

    section:-moz-placeholder {
        text-transform: uppercase;
        font-family: Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-weight: 700;
        color: #bbb;
    }

    section::-moz-placeholder {
        text-transform: uppercase;
        font-family: Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-weight: 700;
        color: #bbb;
    }

    section:-ms-input-placeholder {
        text-transform: uppercase;
        font-family: Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-weight: 700;
        color: #bbb;
    }

</style>
