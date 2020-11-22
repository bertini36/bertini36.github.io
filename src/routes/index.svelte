<script>
    const instagram_url = 'https://instagram.com/bertini36/';
    const twitter_url = 'https://twitter.com/bertini_36/';
    const linkedin_url = 'https://linkedin.com/in/alberto-pou-quirós-1b7b99b1/';
    const github_url = 'https://github.com/bertini36';
</script>

<svelte:head>
    <title>Alberto Pou</title>
</svelte:head>

<h1 class="text-3xl text-center lg:mt-10 xl:mt-20 text-gray-800">>&nbsp;albertopou.dev<span class="blinking">_</span></h1>
<div class="text-center text-gray-600 text-xl">
    Powered by
    <a class="hover:text-red-500 hover:underline" href="https://svelte.dev/"
       rel="noreferrer" target="_blank">#svelte
    </a>,
    <a class="hover:text-red-500 hover:underline"
       href="https://tailwindcss.com/" rel="noreferrer" target="_blank">
        #tailwind
    </a> and
    <a class="hover:text-red-500 hover:underline"
       href="https://www.serverless.com/" rel="noreferrer" target="_blank">
        #serverless
    </a>
    🚀
</div>

<div class="mt-20 text-center">
    <div class="w-full flex-none -ml-full rounded-3xl bg-gray-100">
        <div class="w-full flex-none rounded-3xl transform shadow-lg bg-gradient-to-r from-red-500 to-orange-300 -rotate-2 sm:-rotate-2">
            <div class="grid grid-flow-col grid-rows-1 grid-cols-3">
                <div class="hidden md:block row-start-1 col-start-1 col-span-1 pl-4 pt-4">
                    <div class="transform scale-90 -rotate-6">
                        <img class="w-full h-full rounded-2xl shadow-2xl" src="profile.jpg" alt="">
                    </div>
                </div>

                <div class="row-start-1 col-start-1 md:col-start-2 col-span-3 md:col-span-2 transform translate-x-4 md:translate-x-8 translate-y-4 md:translate-y-7 pt-8 px-4 md:px-6 lg:px-12 rounded-3xl text-left bg-white shadow-2xl">
                    <h2 class="text-gray-800 font-bold text-2xl mb-6">Who I am?&nbsp;👨‍💻</h2>
                    <p class="text-gray-600 text-xl mb-5">
                        Hi, I'm Alberto. I live in Mallorca, a small island in the Mediterranean sea.
                        I'm a software engineer working at <a class="text-red-500 hover:underline" href="https://www.skitude.com/"
                                                              target="_blank">Skitude</a>.
                    </p>
                    <p class="text-gray-600 text-xl mb-5">
                        As a software engineer I focus mostly on the backend. Specifically these last years I've been working with Python
                        and Django on tasks ranging from creating new functionalities to refactoring and testing legacy ones. Also I'm
                        interested in
                        other stuff
                        such as machine learning, data mining, algorithms and async Python frameworks.
                    </p>
                    <p class="text-gray-600 text-xl">
                        These last months some modern frontend technologies grabbed my attention and for this reason I decided to
                        recode my blog using Svelte, Vue and Tailwind.
                    </p>
                    <div class="text-center my-6">
                        <a href="{instagram_url}" target="_blank" class="mr-4">
                            <i class="fa fa-instagram text-xl hover:text-red-500"></i>
                        </a>
                        <a href={twitter_url} target="_blank" class="mr-4">
                            <i class="fa fa-twitter text-xl hover:text-red-500"></i>
                        </a>
                        <a href={linkedin_url} target="_blank" class="mr-4">
                            <i class="fa fa-linkedin text-xl hover:text-red-500"></i>
                        </a>
                        <a href={github_url} target="_blank">
                            <i class="fa fa-github text-xl hover:text-red-500"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .blinking {
      animation: blinker 1.5s infinite;
    }
</style>
