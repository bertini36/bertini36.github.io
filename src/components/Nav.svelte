<script>
	export let segment;
	const blog_github_url = "https://github.com/bertini36/bertini36.github.io";
	let dark_mode = false;

	function updateDarkMode() {
	    dark_mode = !dark_mode;
	    let root = document.getElementsByTagName("html")[0];
	    if (dark_mode) {
            root.classList.add("dark");
        } else {
	        root.classList.remove("dark");
        }
    }
</script>

<nav class="border-b-2 dark:border-b-4 py-0 px-4 font-light">
	<ul class="m-0 p-0">
		<li class="float-left"><a class="block no-underline py-4 px-3 hover:text-red-500 dark:hover:text-red-400" aria-current="{segment === undefined ? 'page' : undefined}" href=".">Home</a></li>
		<li class="float-left"><a class="block no-underline py-4 px-3 hover:text-red-500 dark:hover:text-red-400" rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">Blog</a></li>

		<li class="float-right"><a class="block no-underline py-4 px-3 hover:text-red-500 dark:hover:text-red-400" href="{blog_github_url}" target="_blank"><i class="fa fa-github"></i></a></li>
        <li class="float-right pt-4">
            <label for="toggle" class="mr-2 text-xs">Dark mode</label>
            <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                <input type="checkbox" on:change="{updateDarkMode}" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
            </div>
        </li>
	</ul>
</nav>

<style>
	nav {
		border-bottom-color: rgba(255, 62, 0, 0.1);
		padding: 0 1em;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255, 62, 0);
		display: block;
		bottom: -2px;
	}

    /* CHECKBOX TOGGLE SWITCH */
    /* @apply rules for documentation, these do not work as inline style */
    .toggle-checkbox:checked {
        @apply right-0 border-red-500;
        right: 0;
        border-color: rgba(248, 113, 113, var(--tw-text-opacity));
    }

    .toggle-checkbox:checked + .toggle-label {
        @apply bg-red-500;
        background-color: rgba(248, 113, 113, var(--tw-text-opacity));
    }
</style>
