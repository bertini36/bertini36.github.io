<script>
    const instagram_url = 'https://instagram.com/bertini36/';
    const twitter_url = 'https://twitter.com/bertini_36/';
    const linkedin_url = 'https://linkedin.com/in/alberto-pou-quirós-1b7b99b1/';
    const github_url = 'https://github.com/bertini36';
</script>

<svelte:head>
    <title>Alberto Pou</title>
</svelte:head>

<h1 class="text-3xl text-center lg:mt-10 xl:mt-20">Alberto Pou - Dev Blog</h1>
<div class="text-center">
    Powered by
    <a class="hover:text-red-500 hover:underline" href="https://svelte.dev/"
       rel="noreferrer" target="_blank">#svelte</a>,
    <a class="hover:text-red-500 hover:underline"
       href="https://sapper.svelte.dev/" rel="noreferrer" target="_blank">
        #sapper
    </a>,
    <a class="hover:text-red-500 hover:underline"
       href="https://tailwindcss.com/" rel="noreferrer" target="_blank">
        #tailwind
    </a> and
    <a class="hover:text-red-500 hover:underline"
       href="https://www.serverless.com/" rel="noreferrer" target="_blank">
        #serverless
    </a>
</div>

<div class="max-w-sm w-full lg:max-w-full lg:flex mt-10 lg:mt-16 md:max-w-full">
    <div class="h-48 md:h-auto md:mw-auto lg:w-1/3 hidden lg:block flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden ">
        <img class="w-full h-full" src="profile.jpg" alt="">
    </div>
    <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal md:flex md:content-center md:flex-wrap">
        <div>
            <div class="text-gray-900 font-bold text-2xl mb-2">Who I am?</div>
            <p class="text-gray-700 text-xl mb-5">
                Hi, I'm Alberto. I live in Mallorca, a small island in the Mediterranean sea.
                I'm a software engineer working at <a class="text-red-500 hover:underline" href="https://www.roiback.com/" target="_blank">Roiback</a>.
            </p>
            <p class="text-gray-700 text-xl mb-5">
                As a software engineer I focus mostly on the backend. Specifically these last years I've been working with Python
                on tasks ranging from creating new functionalities to refactoring and testing legacy ones. Also I'm interested in other stuff
                such as machine learning, data mining, algorithms and async Python frameworks.
            </p>
            <p class="text-gray-700 text-xl mb-5">
                These last months some modern frontend technologies grabbed my attention and for this reason I decided to
                recode my blog using Svelte, Sapper and Tailwind.
            </p>
            <div class="text-center">
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
