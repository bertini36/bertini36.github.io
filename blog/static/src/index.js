import App from "./App.svelte";
import jQuery from "jquery";

window.$ = window.jQuery = jQuery;

const app = new App({
	target: document.body,
});

export default app;
