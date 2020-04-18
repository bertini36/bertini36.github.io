import { writable } from 'svelte/store';

export let routes = writable([]);
export let active_route = writable(null);

export let posts = writable([]);
export let selected_post = writable(null);

