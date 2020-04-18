import App from "./App.svelte";
import jQuery from "jquery";
import Popper from "popper.js";
import * as Bootstrap from "bootstrap";

window.$ = window.jQuery = jQuery;

const app = new App({
	target: document.body,
});

export default app;
