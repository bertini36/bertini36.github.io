// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: 'Profiling on social networks',
		slug: 'profiling-on-social-networks',
		tags: ["#python", "#twitter", "#text-mining", "#machine-learning", "#lda"],
		date: "2019-06-22",
		html: `
			<div class="content">
				<p class="post_p">
					Last weekend I was coding an application for Twitter timelines analysis which I called
					<a href="https://github.com/bertini36/profiler" class="post_link" target="_blank">Profiler</a> (I was just bored). Some years ago I
					was working on probabilistic models and there was one which got my attention:
					<a href="http://www.jmlr.org/papers/volume3/blei03a/blei03a.pdf" class="post_link" target="_blank">Latent Dirichlet Allocation</a>.
				</p>
				<p class="post_p">
					This model was developed by David Blei, Andrew Ng y Michael I. Jordan and tries to find topics in document collections.
					In other words, it groups text documents into topics that the model itself discovers. In this post I'm not going
					to explain the model structure and its inference, for this what better than to read the
					<a href="http://www.jmlr.org/papers/volume3/blei03a/blei03a.pdf" class="post_link" target="_blank">paper</a> itself.
				</p>
				<p class="post_p">
					This model is based on estimating  <a href="https://en.wikipedia.org/wiki/Dirichlet_distribution" class="post_link" target="_blank">
					Dirichlet distributions</a>. This kind of distributions model the probability of membership to a set of classes.
					Specifically the model builds (using an iterative procedure) Dirichlet distributions to model the
					probability of a word referring to a concrete topic and the probability of membership from each document to
					each of the topics. The parameters estimation of these distributions can be done using different types of
					Bayesian inference like <a href="https://albertopou.herokuapp.com/#variational_inference_1" class="post_link" target="_blank">Variational Inference</a>
					or sampling methods as <a href="https://en.wikipedia.org/wiki/Markov_chain_Monte_Carlo" class="post_link" target="_blank">Markov Chain Monte Carlo</a>.
				</p>
				<p class="post_p">
					Profiler uses this probabilistic model to identify, given a Twitter timeline (set of user tweets), several
					topics that this user writes about. From this idea I coded a Python application that downloads all these tweets of
					a user, stores them, preprocesses them and finally looks for its main topics.
				</p>
				<h4 class="post_section_title text-2xl text-black">Technological stack</h4>
				<ul class="post_list">
					<li>
						Twitter data is downloaded using <a href="https://github.com/tweepy/tweepy" class="post_link" target="_blank">Tweepy</a>.
					</li>
					<li>
						To store the timelines I used a <a href="https://www.mongodb.com/" class="post_link" target="_blank">MongoDB</a> database with
						which I interacted using <a href="https://github.com/mongodb/mongo-python-driver" class="post_link" target="_blank">Pymongo</a>.
					</li>
					<li>
						Textual data preprocessing was done using libraries as  <a href="https://github.com/pandas-dev/pandas" class="post_link" target="_blank">Pandas</a>
						and <a href="https://github.com/nltk/nltk" class="post_link" target="_blank">NLTK</a>. This preprocessing consisted on cleaning
						tweets to avoid deviations (delete emoticons, capital letters, symbols, digits, ...)
					</li>
					<li>
						To infer the model I used  <a href="https://github.com/RaRe-Technologies/gensim" class="post_link" target="_blank">Gensim</a>
						library. This library has a concurrent LDA implementation.
					</li>
					<li>
						To plot obtained results I used <a href="https://github.com/bmabey/pyLDAvis" class="post_link" target="_blank">pyLDAvis</a>
						library which generates interactive HTML that avoids to explore the results and check which words
						are the most important in each topic.
					</li>
					<li>
						I coded also a command interface to ease interact with the library. To do this I used Google
						<a href="https://github.com/google/python-fire" class="post_link" target="_blank">Fire</a> library.
					</li>
					<li>
						I configured the development environment using
						<a href="https://www.docker.com/" class="post_link" target="_blank">Docker</a>,
						<a href="https://docs.docker.com/compose/" class="post_link" target="_blank">Docker compose</a> and
						<a href="https://travis-ci.org/" class="post_link" target="_blank">Travis</a> to execute automatic tests.
					</li>
				</ul>
				<h4 class="post_section_title text-2xl text-black">Command interface</h4>
				<p class="post_p">
					Profiler has a command interface. With the next command you could analize some Spain politicians:
				</p>
				<div class="post_code">
					<pre><code>make run_all timelines=Albert_Rivera,sanchezcastejon,Pablo_Iglesias_,pablocasado_ n_topics=5</code></pre>
				</div>
				<p class="post_p">
					You can find Profiler installation steps at the
					<a href="https://github.com/bertini36/profiler/blob/master/README.md" class="post_link" target="_blank">repository</a>.
					In this <a href="https://github.com/bertini36/profiler/blob/master/src/settings.py" class="post_link" target="_blank">file</a> you
					can configure some application behaviours about the data preprocessing and about the model.
				</p>
				<h4 class="post_section_title text-2xl text-black">Example of obtained results</h4>
				<div class="post_image_div md:px-40">
					<figure>
						<img class="post_image" src="profiling-on-social-networks/profiler1.png" alt="Results">
						<figcaption class="post_image_figcaption">
							Group 1
						</figcaption>
					</figure>
				</div>
				<div class="post_image_div md:px-40">
					<figure>
						<img class="post_image" src="profiling-on-social-networks/profiler2.png" alt="Results">
						<figcaption class="post_image_figcaption">
							Group 4
						</figcaption>
					</figure>
				</div>
				<p class="post_p mb-10">
					Obtained results using tweets are not as good as obtained using posts or article news. This is because tweets
					are short text documents. This reduced length causes a much smaller vocabulary and therefore a difficulty
					for the model to identify differentiated topics. However in this example we can see some interesting groups.
					These results are from Pedro Sánchez timeline (president of Spain). At group 1 we could see that it refers to
					tweets about last campaign and at group 4 we see that refers to the issue of sexist violence.
				</p>
			</div>
		`
	},

	{
		title: 'Automatic differentiation',
		slug: 'automatic-differentiation',
		tags: ["#python", "#tensorflow", "#autograd", "#linear-regression"],
		date: "2017-05-03",
		html: `
			<div class="content">
				<p class="post_p">
					Derivatives, specifically gradients (derivatives in more than one dimension spaces) and hesians (second
					derivatives), have become in a fundamental of machine learning. Gradient is a vector which indicates the maximum
					slope direction of a function at the evaluated point. This is important to move around the function space to find
					relative minimums or maximums (to minimize or maximize the function). Hesian gives information about the concavity
					and convexity of the function. Some algorithms use it to improve the exploratory movement over the function space
					and to find minimums and maximums faster. Automatic Differentiation (AD) is a efficiently and accurately
					procedure of derivatives calculation of numerical functions, represented as computer programs. As already mentioned,
					the use of derivatives is very important for model optimization. From a mathematical point of view a model is
					nothing more than a function that you want to minimize or maximize and derivatives are the tool to do it.
				</p>
				<p class="post_p">
					There are several methods of derivative calculation with a computer:
				</p>
				<ul class="post_list">
					<li>
						<strong>Numerical differentiation.</strong>
						This method uses derivative definition to approximate using samples of the original function. In this way
						we can approximate the gradient ∇f as:
						<div class="post_image_div md:px-64">
							<figure>
								<img class="post_image" src="automatic-differentiation/derivative_deffinition.png" alt="Derivative deffinition">
							</figure>
						</div>
						where e<small>i</small> is i<small>th</small> unitary vector and h>0 is the step size for the approximation.
					</li>
				</ul>
			</div>
		`
	},

];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
