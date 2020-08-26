// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
		{
		title: 'Recoding my blog ⛩',
		slug: 'recoding-my-blog',
		tags: ["#svelte", "#sapper", "#serverless", "#python", "#javascript"],
		date: "2020-07-12",
		html: `
			<p class="post_p">
				During quarantine I had more free time than usual so I decided it was time
				to modernize my <a href="https://albertopou.dev/" class="post_link" target="_blank">blog</a>.
				I coded the first version 5 years ago choosing technologies
				simply because I knew them. That resulted in a <a href="https://www.djangoproject.com/" class="post_link" target="_blank">Django</a>
				 app with a <a href="https://www.postgresql.org/" class="post_link" target="_blank">Postgres</a> database 
				 and an outdated design using <a href="https://getbootstrap.com/" class="post_link" target="_blank">Bootstrap</a>.  
				After the years I used to use my blog to test new technologies so I had versions 
				of my blog using <a href="https://jquery.com/" class="post_link" target="_blank">JQuery</a>,
				<a href="https://vuejs.org/" class="post_link" target="_blank">Vue</a>, Django, Django 2.0 
				using a DDD approach, ... and it was deployed on <a href="https://www.digitalocean.com/" class="post_link" target="_blank">Digital Ocean</a>,
				<a href="https://aws.amazon.com/" class="post_link" target="_blank">AWS</a>,
				<a href="https://www.heroku.com/" class="post_link" target="_blank">Heroku</a>, 
				Heroku using <a href="https://www.terraform.io/" class="post_link" target="_blank">Terraform</a>, ... 
				Anyone who saw the code could say that a blog should never be so over-engineer, and I agree. For this 
				reason I decided to check which technologies were being used nowadays to make simple blogs.  
			</p>
			<p class="post_p">
				My goal was to make a simple, fast and modern blog which allows me to write posts easily, 
				deploy them on <a href="https://pages.github.com/" class="post_link" target="_blank">Github Pages</a> 
				and, of course, spend as little time as possible on maintenance. After check several technologies 
				a co-worker told me about <a href="https://svelte.dev/" class="post_link" target="_blank">Svelte</a>
				and I loved it. Svelte and its server-rendering backend <a href="https://sapper.svelte.dev/" class="post_link" target="_blank">Sapper</a>
				were what I was looking for and there were a lot of examples of blogs made with these technologies.  
				After that I just required a new design. I was tired about Bootstrap designs so I was looking 
				for something new, and then I found <a href="https://tailwindcss.com/" class="post_link" target="_blank">Tailwind</a>. 
				Tailwind had all that I needed. A framework which, after memorize some easy classes, allows you not to write CSS. Maybe for 
				you this is not a plus feature but for me, a backend coder, it was perfect. 
			</p>
			<h4 class="post_section_title text-2xl text-bold">The good parts of this architecture</h4>
			<p class="post_p">
				After this introduction I want to list the advantages that I found making my 
				blog with Svelte, Sapper and Tailwind. Remember that this benefits I found exist in 
				the case of study of a simple blog. 
			</p>
			<ul class="post_list">
				<li>
					<strong>Easy installation</strong>. Sapper has a great initial template and several pre-configured commands
					which allows you to focus on the important parts of your project. 
				</li>
				<li>
					<strong>Great development environment</strong>. Live reload! When you modify some file, the navigator
					reloads the page automatically. Maybe I'm overestimating this feature but I work everyday in an outdated
					frontend and this feature drove me crazy!
				</li>
				<li>
					<strong>Static page</strong>. Sapper allows you to export your project as a static site. 
					Then it can be hosted and served as static files, which allows it to be deployed on hosting
					environments such as Github Pages. To serve the page as static files also improves
					the speed notoriously, obtaining better results in web positioning. You can use apps as 
					<a href="https://developers.google.com/web/tools/lighthouse" class="post_link" target="_blank">Lighthouse</a> to check this.
				</li>
				<li>
					<strong>Elegant syntax</strong>. I worked with different frontend technologies such as JQuery, 
					<a href="https://knockoutjs.com/" class="post_link" target="_blank">Knockout</a>, 
					 <a href="https://angular.io/" class="post_link" target="_blank">Angular</a> or Vue 
					and Svelte syntax looks perfect for me. It's easy to understand, simple and elegant. In the following section you'll 
					be able to check it in a easy example I'll show you.  
				</li>
				<li>
					<strong>Component structure</strong>. One thing normally I don't like in a frontend based project is 
					the way how developers structure the code. Last years I was working in projects where component HTML, Javascript and
					specific CSS were in different folders and then developers loose to much time searching the 
					Javascript or de CSS associated to a particular template. Svelte joins all in one file (.svelte) and
					in my opinion is a great solution to improve the components reusability.
				</li>
				<li>
					<strong>Speed</strong>. Svelte is based on reactivity. To understand easily which reasons 
					allows Svelte to get such good results in terms of speed compared to other frameworks you can watch this 
					<a href="https://www.youtube.com/watch?v=gJ2P6hGwcgo" class="post_link" target="_blank">great conference</a>
					of its creator Rich Harris.
				</li>
				<li>
					<strong>No CSS</strong>. With Tailwind you don't need to write CSS code. With its pre-defined classes
					you can make pretty much anything.
				</li>
				<li>
					<strong>Easy personalization</strong>. At Tailwind config file you can configure stuff as main 
					colors, default spacing, text font, ... and using @apply CSS sentence you can create your own classes easily.
				</li>
				<li>
					<strong>0 costs</strong>. With this architecture I was able to have my blog with 0 costs (I just have to pay the domain). 
				</li>
			</ul>
			<p class="post_p">
				Now I'm going to show
				you how I made the comments engine using <a href="https://www.serverless.com/" class="post_link" target="_blank">Serverless</a> and Svelte
				as an example of use of these frameworks.
			</p>
			<h4 class="post_section_title text-2xl text-bold">Persistent storage for comments</h4>
			<p class="post_p">
				A comments engine requires a persistent storage so I needed to add something else to the blog in order to allow users to write comments.
				Serverless is a framework that makes easier to mount a serverless infrastructure with AWS. In this case I decided
				to use <a href="https://aws.amazon.com/dynamodb/" class="post_link" target="_blank">Dynamo DB</a>
				to store post user comments and <a href="https://aws.amazon.com/lambda/" class="post_link" target="_blank">Lambda</a> to get and publish comments.
				This functions are not all time waiting for requests in a server (for this reason is so cheap).
				AWS Lambda deploys them very fast just when they are invoked by different events such as queue events, S3 changes, HTTP requests, .... 
				In this case the event was going to 
				be an HTTP request to the <a href="https://aws.amazon.com/api-gateway/" class="post_link" target="_blank">AWS API Gateway</a>.
			</p>
			<p class="post_p">
				All this could seem very complex but with a framework as Serverless is done with a simple config file. 
				<a href="https://github.com/bertini36/bertini36.github.io/blob/develop/lambdas/serverless.yml" class="post_link" target="_blank">Here</a>
				you have the config file I wrote to have 2 lambda functions (at 2 different endpoints), one for 
				get post comments and another to publish new ones. At this config file you can configure several things, from
				language used and access management till requests rate limits and database resources. In this case the configuration is very simple, 
				the 2 lambda functions are 2 views of a simple <a href="https://flask.palletsprojects.com/en/1.1.x/" class="post_link" target="_blank">Flask</a> application. 
				This views just get the comments or stores a new one in the database (in this case Dynamo DB, you can check the databse repository 
				<a href="https://github.com/bertini36/bertini36.github.io/blob/develop/lambdas/repository.py" class="post_link" target="_blank">here</a>).
			</p>
			<div class="post_code">
				<pre><code>
from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
    
from exceptions import RepositoryException
from repository import comments_repository

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
    
    
@app.route('/comments/<string:post_slug>', methods=['GET'])
@cross_origin()
def get_comments(post_slug):
    try:
        comments = comments_repository.get_comments(post_slug)
        if comments:
            return jsonify(comments), 200
        return jsonify({'error': 'Comments not found'}), 404
    except RepositoryException as e:
        return jsonify({'error': str(e)}), 500

    
@app.route('/comments/<string:post_slug>', methods=['POST'])
@cross_origin()
def add_comment(post_slug):
    try:
        comments_repository.add_comment(post_slug, request.get_json())
        return jsonify({}), 200
    except RepositoryException as e:
        return jsonify({'error': str(e)}), 500
				</code></pre>
			</div>
			<p class="post_p">
				If you need you can check the rest of the 
				<a href="https://github.com/bertini36/bertini36.github.io/tree/develop/lambdas" class="post_link" target="_blank">code</a>.
			</p>
			<p class="post_p">
				Now we need a Svelte component that gets the comments of a post and publish new ones using the endpoints created with Serverless. In the following
				code you can revise the component part required to get and show the comments of a post (.svelte file).
			</p>
			<div class="post_code">
				<pre><code>
&lt;script&gt;
   export let slug;
   const comments_url = \`dummy.com/prod/comments/\$\{slug\}\`;
   let comments = getComments();
    
   async function getComments() {
      const response = await fetch(comments_url);
      if (!response.ok) throw new Error(text);
      return await response.json();
    }
&lt;/script&gt;

{#await comments}
   &lt;figure class="flex justify-center">&lt;img class="w-48" src="loader.gif" alt="Loader"&gt;&lt;/figure&gt;
{:then comments}
   {#each comments as comment}
      &lt;div class="shadow bg-white rounded-md mb-1" role="alert"&gt;
         &lt;div class="p-4 flex"&gt;
            &lt;div class="pl-2"&gt;
               &lt;p class="font-bold text-gray-700"&gt;{comment.text}&lt;/p&gt;
               &lt;p class="text-gray-600"&gt;
                  {comment.name} &lt;span class="text-gray-500 text-sm"&gt;{comment.date}&lt;/span&gt;
                &lt;/p&gt;
            &lt;/div&gt;
         &lt;/div&gt;
      &lt;/div&gt;
   {/each}
{:catch error}
   &lt;p>No comments yet&lt;/p&gt;
{/await}
				</code></pre>
			</div>
			<p class="post_p">
				I'm using {#await} Svelte declarative to wait the fetch promise of the comments request. Svelte
				is going to manage the comments as soon as the promise ends and then comments will be rendered
				using {#each} declarative. All classes used to give styles are Tailwind classes. If you want to see
				the rest of the code to publish new comments 
				<a href="https://github.com/bertini36/bertini36.github.io/blob/develop/src/components/Comments.svelte" class="post_link" target="_blank">here</a> 
				you have the complete component and the result online is just below!
			</p>
			<p class="post_p">
				Feel free to ask anything in the comments section!
			</p>
		`
	},

	{
		title: 'Profiling on social networks 🤹‍♂️',
		slug: 'profiling-on-social-networks',
		tags: ["#python", "#twitter", "#text-mining", "#machine-learning", "#lda"],
		date: "2019-06-22",
		html: `
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
			<figure class="post_figure flex justify-center">
				<img class="md:w-3/4" src="profiling-on-social-networks/profiler1.png" alt="Results">
			</figure>
			<figcaption class="post_image_figcaption">
				Group 1
			</figcaption>
			<figure class="post_figure flex justify-center">
				<img class="md:w-3/4" src="profiling-on-social-networks/profiler2.png" alt="Results">
			</figure>
			<figcaption class="post_image_figcaption">
				Group 4
			</figcaption>
			<p class="post_p">
				Obtained results using tweets are not as good as obtained using posts or article news. This is because tweets
				are short text documents. This reduced length causes a much smaller vocabulary and therefore a difficulty
				for the model to identify differentiated topics. However in this example we can see some interesting groups.
				These results are from Pedro Sánchez timeline (president of Spain). At group 1 we could see that it refers to
				tweets about last campaign and at group 4 we see that refers to the issue of sexist violence.
			</p>
		`
	},

	{
		title: 'Automatic differentiation 📈',
		slug: 'automatic-differentiation',
		tags: ["#python", "#tensorflow", "#autograd", "#linear-regression"],
		date: "2017-05-03",
		html: `
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
					<figure class="post_figure flex justify-center">
						<img class="md:w-1/2" src="automatic-differentiation/derivative_deffinition.png" alt="Derivative deffinition">
					</figure>
					where e<small>i</small> is i<small>th</small> unitary vector and h>0 is the step size for the approximation.
				</li>
				<li>
					<strong>Symbolic differentiation.</strong>
					It consists on automatic manipulation of the mathematical expressions to obtain the derivatives (similar to
					what we did at school). It requires to implement derivative rules. The problem of this kind of derivation is
					that it can produce long symbolic expressions which are difficult to evaluate.
				</li>
				<li>
					<strong>Automatic Differentiation</strong>.
					It is based on the fact that all functions can be decomposed into a finite number of operations which derivative
					is known. Combining these derivatives the derivative of the original function can be computed. Applying the
					chain rule to each elementary operation of the function we obtain the trace for the calculation of the
					real function derivative.
				</li>
			</ul>
			<p class="post_p">
				Next image shows the differences between the three methods.
			</p>
			<figure class="post_figure flex justify-center">
				<img src="automatic-differentiation/derivative_strategies.png"
					 alt="Derivative strategies">
			</figure>
			<figcaption class="post_image_figcaption">
				Methodologies for calculating derivatives.
			</figcaption>
			<p class="post_p">
				There are two types of Automatic Differentiation (AD): forward mode and reverse mode. On the one hand forward mode
				evaluates the different parts of the function forward and then it does the same for each part of the derivative till
				real function derivative is obtained. On the other hand reverse mode evaluates the different parts of the function
				forward but after, from the derivative of the function, it obtains the partial derivatives.
				This is how the backpropagation method works in neural networks, which needs the partial
				derivatives to update the weights of each of the neural network layers. This method avoids to reuse calculus
				already computed and to calculate derivatives in a very efficient way.
			</p>
			<figure class="post_figure flex justify-center">
				<img src="automatic-differentiation/forward_AD.png"
					 alt="Automatic differentiation forward mode">
			</figure>
			<figcaption class="post_image_figcaption">
				AD forward mode schema.
			</figcaption>
			<figure class="post_figure flex justify-center">
				<img src="automatic-differentiation/backward_AD.png"
					 alt="Automatic differentiation reverse mode">
			</figure>
			<figcaption class="post_image_figcaption">
				AD reverse mode schema.
			</figcaption>
			<h4 class="post_section_title text-2xl text-black">Derivatives tools</h4>
			<p class="post_p">
				In this post we will be focus on function parameters optimization using Automatic Differentiation. Here are listed
				some software packages to calculate derivatives and gradients:
			</p>
			<ul class="post_list">
				<li><a href="https://www.tensorflow.org/" class="post_link" target="_blank">Tensorflow</a>: It uses AD reverse mode.</li>
				<li><a href="http://deeplearning.net/software/theano/" class="post_link" target="_blank">Theano</a>: It uses symbolic differentiation.</li>
				<li><a href="https://www.wolfram.com/mathematica/" class="post_link" target="_blank">Mathematica</a>: It uses symbolic differentiation.</li>
				<li><a href="https://github.com/HIPS/autograd" class="post_link" target="_blank">Autograd</a>: It uses AD reverse mode.</li>
			</ul>
			<h4 class="post_section_title text-2xl text-black">Tensorflow</h4>
			<p class="post_p">
				It is an open source library developed by Google for numerical computation using flow graphs. Before to execute
				a program, Tensorflow makes a flow graph where nodes represent mathematical operations and edges represent
				multidimensional data vectors also called tensors. The construction of this graph avoids to obtain the most profit
				of system CPUs and GPUs where the program is executed. Then, completely transparent to the programmer, Tensorflow
				parallels everything it can among the resources it dispose.
			</p>
			<p class="post_p">
				This library was originally designed for <a href="https://en.wikipedia.org/wiki/Deep_learning" class="post_link" target="_blank">deep learning</a>,
				the machine learning branch that studies neural networks. Tensorflow avoids, in a easy way, to implement Deep Neural
				Networks (DNN), Convulational Neural Networks (CNN) and Recurrent Neural Networks (RNN). However last versions
				have focused on satisfying the rest of machine learning community by trying to convert the
			    library in a standard for programming models of all branches. Specifically they have developed a module called
				<a href="https://github.com/tensorflow/tensorflow/blob/master/tensorflow/contrib/learn/python/learn/README.md" class="post_link" target="_blank">TFLearn</a>
				which has a set of models ready to use and also have updated its syntax with the intention to be more close to
				<a href="http://scikit-learn.org/stable/" class="post_link" target="_blank">Scikit-learn</a> syntax which is one of the most popular and important
				machine learning libraries.
			</p>
			<p class="post_p">
				One of the most interesting aspects of this library is that it implements AD reverse model in a very elegant way.
				The coder defines a model indicating its parameters as variables and practically automatically, after specify the
				inference algorithm, Tensorflow is in charge of calculating gradients and apply them in optimization procedures.
			</p>
			<h4 class="post_section_title text-2xl text-black">Usage examples</h4>
			<p class="post_p">
				Below is the code to optimize the parameters of a lineal regression model with Tensorflow and with Autograd (both
				use AD reverse model to get gradients). A lineal regression model is defined by the equation:
			</p>
			<figure class="post_figure flex justify-center">
				<img src="automatic-differentiation/linear_regression.png"
					 alt="Lineal regression equation">
			</figure>
			<p class="post_p">
				Where w represents the weight and b the bias. AD will find values for these parameters and these values
				will minimize Mean Squared Error.
			</p>
			<p class="post_p">
				The model is defined as code in the following way. In Tensorflow parameters to be optimized of a function are
				defined as variables. Later a cost function is defined based on these parameters,
				<a href="https://en.wikipedia.org/wiki/Mean_squared_error" class="post_link" target="_blank">Mean Squared Error</a>. Then optimization
				algorithm is specified, in this case <a href="https://en.wikipedia.org/wiki/Gradient_descent" class="post_link" target="_blank">Gradient Descent</a>.
				And finally we write the code to train the model (last lines). This loop, in each iteration, get a sample from
				the dataset and derive the cost function to obtain the direction (gradient vector) of the local minimum, in
				other words, the direction that reduces Mean Squared Error. With this gradient vector weight and bias parameters
				will be updated (transparently to the programmer). In this way, when a sufficient number of iterations have been
				made, values for the parameters that minimize the cost function will have been obtained (a local minimum will
				have been found).
			</p>
			<div class="post_code">
				<pre><code>import matplotlib.pyplot as plt
import numpy as np
import tensorflow as tf

rng = np.random

# Parameters
learning_rate = 0.01
training_epochs = 100

# Training data
train_X = np.asarray([3.3, 4.4, 5.5, 6.71, 6.93, 4.168, 9.779, 6.182, 7.59,
				  2.167, 7.042, 10.791, 5.313, 7.997, 5.654, 9.27, 3.1])
train_Y = np.asarray([1.7, 2.76, 2.09, 3.19, 1.694, 1.573, 3.366, 2.596, 2.53,
				  1.221, 2.827, 3.465, 1.65, 2.904, 2.42, 2.94, 1.3])
n_samples = train_X.shape[0]

# Graph input data
X = tf.placeholder('float')
Y = tf.placeholder('float')

# Optimizable parameters with random initialization
weight = tf.Variable(rng.randn(), name='weight')
bias = tf.Variable(rng.randn(), name='bias')

# Linear model
predictions = (X * weight) + bias

# Loss function: Mean Squared Error
loss = tf.reduce_sum(tf.pow(predictions-Y, 2))/(2*n_samples)

# Gradient descent optimizer
optimizer = tf.train.GradientDescentOptimizer(learning_rate).minimize(loss)

# Initializing the variables
init = tf.global_variables_initializer()

# Launch the graph
with tf.Session() as sess:
sess.run(init)
for epoch in range(training_epochs):
	for (x, y) in zip(train_X, train_Y):
		sess.run(optimizer, feed_dict={X: x, Y: y})
train_error = sess.run(loss, feed_dict={X: train_X, Y: train_Y})
print('Train error={}'.format(train_error))

# Test error
test_X = np.asarray([6.83, 4.668, 8.9, 7.91, 5.7, 8.7, 3.1, 2.1])
test_Y = np.asarray([1.84, 2.273, 3.2, 2.831, 2.92, 3.24, 1.35, 1.03])
test_error = sess.run(
	tf.reduce_sum(tf.pow(predictions - Y, 2)) / (2 * test_X.shape[0]),
	feed_dict={X: test_X, Y: test_Y})
print('Test error={}'.format(test_error))

print('Weight={} Bias={}'.format(sess.run(weight), sess.run(bias)))

# Graphic display
plt.plot(train_X, train_Y, 'ro', label='Original data')
plt.plot(train_X, sess.run(weight) * train_X
		 + sess.run(bias), label='Fitted line')
plt.legend()
plt.show()</code></pre>
			</div>
			<div class="text-center">
				<small class="text-gray-900 leading-relaxed text-sm">
					Learning weight and bias parameters of a linear regression model with Tensorflow.
				</small>
			</div>
			<figure class="post_figure flex justify-center">
				<img src="automatic-differentiation/linear_regression_tf_results.png"
					 alt="Linear regression with Tensoflow">
			</figure>
			<figcaption class="post_image_figcaption">
				Optimization results of model parameters of a lineal regression using Tensorflow.
			</figcaption>
			<p class="post_p">
				Using Autograd all is more visible than in Tensorflow. A cost function is defined with the model parameters
				and then get gradients in each iteration to update weight and bias parameters.
			</p>
			<div class="post_code">
				<pre><code>import autograd.numpy as np
import matplotlib.pyplot as plt
from autograd import elementwise_grad

rng = np.random

# Parameters
learning_rate = 0.01
training_epochs = 100

# Training data
train_X = np.array([3.3, 4.4, 5.5, 6.71, 6.93, 4.168, 9.779, 6.182, 7.59,
				2.167, 7.042, 10.791, 5.313, 7.997, 5.654, 9.27, 3.1])
train_Y = np.array([1.7, 2.76, 2.09, 3.19, 1.694, 1.573, 3.366, 2.596, 2.53,
				1.221, 2.827, 3.465, 1.65, 2.904, 2.42, 2.94, 1.3])
n_samples = train_X.shape[0]


def loss((weight, bias)):
""" Loss function: Mean Squared Error """
predictions = (train_X * weight) + bias
return np.sum(np.power(predictions - train_Y, 2) / (2 * n_samples))

# Function that returns gradients of loss function
gradient_fun = elementwise_grad(loss)

# Optimizable parameters with random initialization
weight = rng.randn()
bias = rng.randn()

for epoch in range(training_epochs):
gradients = gradient_fun((weight, bias))
weight -= gradients[0] * learning_rate
bias -= gradients[1] * learning_rate
print('Train error={}'.format(loss((weight, bias))))

# Test error
test_X = np.array([6.83, 4.668, 8.9, 7.91, 5.7, 8.7, 3.1, 2.1])
test_Y = np.array([1.84, 2.273, 3.2, 2.831, 2.92, 3.24, 1.35, 1.03])
predictions = (test_X * weight) + bias
print('Test error={}'.format(
np.sum(np.power(predictions - test_Y, 2) / (2 * n_samples))))

print('Weight={} Bias={}'.format(weight, bias))

# Graphic display
plt.plot(train_X, train_Y, 'ro', label='Original data')
plt.plot(train_X, weight * train_X + bias, label='Fitted line')
plt.legend()
plt.show()</code></pre>
			</div>
			<div class="text-center">
				<small class="text-gray-900 leading-relaxed text-sm">
					Learning weight and bias parameters of a linear regression model with Autograd.
				</small>
			</div>
			<figure class="post_figure flex justify-center">
				<img src="automatic-differentiation/linear_regression_ag_results.png"
					 alt="Linear regression with Tensoflow">
			</figure>
			<figcaption class="post_image_figcaption">
				Optimization results of model parameters of a lineal regression using Autograd.
			</figcaption>
			<p class="post_p">
				The main objective of this post was to uncover a bit the black box that involves the optimization of models using
				tools as Tensorflow, Theano, <a href="http://pytorch.org/" class="post_link" target="_blank">Pytorch</a>, ...
			</p>
			<h4 class="post_section_title text-2xl text-black">References</h4>
			<ul class="post_list">
				<li>
					Automatic differentiation in machine learning: a survey <br>
					Atilim Gunes Baydin, Barak A. Pearlmutter, Alexey Andreyevich Radul, Jeffrey Mark Siskind
				</li>
			</ul>
		`
	},

	{
		title: 'Distributed matrix product 🔢',
		slug: 'distributed-matrix-product',
		tags: ["#CUDA", "#MPI", "#C", "#maths"],
		date: "2017-02-02",
		html: `
			<p class="post_p">
				Nowadays one of the main problems of any algorithm is its facility to scale it, in other words, its facility to
				be executed over multiple cores (parallelization) or nodes (distribution). The amount of data that is available
				today has led the world of computing to develop technologies with which to parallelize and distribute processes
				are done more easily and automatically. Actually, each computationally expensive algorithm works in its
				distributed version. In this way tasks as finding prime numbers, complex simulations or statistical prediction
				models, which would spend years to get results, can obtain it in a few hours thanks to the joint work of many
				computers.
			</p>
			<p class="post_p">
				Precisely this is what supercomputing centers like <a href="https://www.bsc.es/" class="post_link" target="_blank">BSC</a> are
				engaged. BSC has a supercomputer, called Marenostrum III, which avoids to its users to run computationally
				expensive algorithms or algorithms that require a huge amount of data in a distributed way. Specifically,
				Marenostrum III has 3108 nodes each with 2 processors of 8 cores (over 49.728 cores).
			</p>
			<figure class="post_figure flex justify-center">
				<img src="distributed-matrix-product/marenostrum.jpg"
					 alt="Marenostrum III supercomputer">
			</figure>
			<figcaption class="post_image_figcaption">Marenostrum III</figcaption>
			<p class="post_p">
				In this post I'm going to show, with a simple example, how to distribute a matrix product over several nodes and
				how to parallelize at each node. Matrix product is a mathematical operation that, when it is taken to the extreme
				using very large matrices it is become in a very computationally expensive operation.
			</p>
			<figure class="post_figure flex justify-center">
				<img src="distributed-matrix-product/matrix_product.png"
					 alt="Matrix product">
			</figure>
			<figcaption class="post_image_figcaption">Matrix product</figcaption>
			<p class="post_p">
				Since each element of the resulting matrix does not depend on any other element of it we can distribute without
				any restriction. For this example I could use 4 nodes, so I decided that each node would be responsible for
				calculating a quarter of the resulting matrix. A and B matrices will be sent to each node to avoid them to
				do its computations. For the distribution I'm using <a href="https://www.open-mpi.org/" class="post_link" target="_blank">MPI</a>
				(Message Passing Interface) technology. Using functions of this library data can be shared over the nodes
				(lines 123 and 124) and to specify, using process id, which part of the result matrix each node has to calculate
				(lines 116, 117 and 118).
			</p>
			<figure class="post_figure flex justify-center">
				<img src="distributed-matrix-product/distributed_matrix_product.png"
					 alt="Distributed matrix product">
			</figure>
			<figcaption class="post_image_figcaption">Matrix product distribution and parallelization</figcaption>
			<p class="post_p">
				Nowadays, for parallel computation, the power of GPUs is being used. In our case each node of Marenostrum III has a
				Nvidia K80 graphic card. This graphic cards can be used for parallel computation using Nvidia
				<a href="https://en.wikipedia.org/wiki/CUDA" class="post_link" target="_blank">CUDA</a> (Compute Unified Device Architecture)
				platform. GPUs are essentially a big number of simple processors that can be used to speed up some parts of the
				code. For this, the program has to be decomposed in a big number of threads which will be executed concurrently.
				In this example, each thread will be responsible for calculating just an element of the resulting matrix. Using
				CUDA it is required to define a block structure (threads group) delimiting each thread data domain using its
				threadId and its blockId. These threads will be executed in one kernel, in other words, a GPU program.
			</p>
			<div class="post_code">
				<pre><code>/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/* MULTI-NODE AND PARALLEL MATRIX-MATRIX PRODUCT WITH MPI AND CUDA           */
/*                                                                           */
/* File:         mmpmpicuda.cu                                               */
/* Author:       Alberto Pou Quirós (Github: bertini36)                      */ 
/* Description:  This program performs a matrix product (A * B = C)          */
/*               distributing the computation between multiple nodes         */
/*               with MPI technology and parallelizing the computation in    */
/*               every node with Nvidia CUDA technology                      */
/* Compilation:  nvcc -I/opt/mpi/bullxmpi/1.2.9.1/include                    */  
/*               -L/opt/mpi/bullxmpi/1.2.9.1/lib -lmpi -ldl -lm -lnuma       */
/*               -lrt -lnsl -lutil -lm -ldl mmpmpicuda.cu -o mmpmpicuda      */
/* Strategy:                                                                 */
/*                  Example 16x16 matrices with 4 nodes:                     */
/*                   _________________16________________                     */
/*                   |                                 |                     */
/*                   |               NODE 1            | 4                   */
/*                   |_________________________________|                     */
/*                   |                                 |                     */
/*                   |               NODE 2            | 4                   */
/*              C =  |_________________________________|    16               */ 
/*                   |                                 |                     */
/*                   |               NODE 3            | 4                   */
/*                   |_________________________________|                     */
/*                   |                                 |                     */ 
/*                   |               NODE 4            | 4                   */
/*                   |_________________________________|                     */
/*                                                                           */
/*                  Node 1 computes 4 rows of result matrix:                 */
/*                   __________________________________                      */
/*                   |                                 |                     */
/*                   |         4x16 CUDA block         |                     */
/*                   |_________________________________|                     */
/*                                                                           */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

#include &lt;sys/time.h&gt;
#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;
#include &lt;assert.h&gt;
#include &lt;mpi.h&gt;

#define N 1024

#define err(format, ...) do { fprintf(stderr, format, ##__VA_ARGS__); exit(1); } while (0)

struct timeval start_time, end_time;

inline void checkCuda(cudaError_t e) {
    if (e != cudaSuccess) {
        err("CUDA Error %d: %s\\n", e, cudaGetErrorString(e));
    }
}

__global__ void matrixProduct(double *matrix_a, double *matrix_b, double *matrix_c, int width, int nrows, int my_rank) {
    int row = threadIdx.y + blockDim.y * blockIdx.y;
    int col = threadIdx.x + blockDim.x * blockIdx.x; 
    matrix_c[row * width + col] = 0;
    for (int k=0; k&lt;width; k++) {
        matrix_c[row * width + col] += matrix_a[(row * width) + (my_rank * nrows * width) + k] * matrix_b[k * width + col];
    }
}

void initializeMatrices(double matrix_a[N][N], double matrix_b[N][N]) {
    int i, j;
    srand(time(NULL));
    for (i=0; i&lt;N; i++) {
        for (j=0; j&lt;N; j++) {
            matrix_a[i][j] = rand();
            matrix_b[i][j] = rand();
        }
    }
}

void showMatrices(double matrix_a[N][N], double matrix_b[N][N], double matrix_c[N][N]) {
    int i, j;
    srand(time(NULL));
    printf("***** MATRIX A ***** \\n");
    for (i=0; i&lt;N; i++) {
        for (j=0; j&lt;N; j++) {
            (j % N == N-1) ? printf("%.1f \\n", matrix_a[i][j]) : printf("%.1f,", matrix_a[i][j]);
        }
    }
    printf("***** MATRIX B ***** \\n");
    for (i=0; i&lt;N; i++) {
        for (j=0; j&lt;N; j++) {
            (j % N == N-1) ? printf("%.1f \\n", matrix_b[i][j]) : printf("%.1f,", matrix_b[i][j]);
        }
    }
    printf("***** RESULT MATRIX ***** \\n");
    for (int i=0; i&lt;N; i++) {
        for (int j=0; j&lt;N; j++) {
            (j % N == N-1) ? printf("%f \\n", matrix_c[i][j]) : printf("%f,", matrix_c[i][j]);
        }
    }
}

int main(int argc, char *argv[]) {

    double A[N][N], B[N][N], C[N][N];
    double *d_a, *d_b, *d_c;
    int my_rank, comm_sz, from, to, nrows;
  
    // MPI initialization
    MPI_Init (&argc, &argv);
    MPI_Comm_rank(MPI_COMM_WORLD, &my_rank);    // Process id 
    MPI_Comm_size(MPI_COMM_WORLD, &comm_sz);    // Number of processors 

    if (N % comm_sz != 0) {
        if (my_rank == 0) printf("Matrix size not divisible by number of processors \\n");
        MPI_Finalize();
        exit(-1);
    }

    // Calculate interval lines to compute per node
    from = my_rank * N / comm_sz;
    to = (my_rank + 1) * N / comm_sz;
    nrows = to - from;

    if (my_rank == 0) { initializeMatrices(A, B); }

    // Send A y B to every node
    MPI_Bcast(A, N*N, MPI_DOUBLE, 0, MPI_COMM_WORLD);
    MPI_Bcast(B, N*N, MPI_DOUBLE, 0, MPI_COMM_WORLD);

    // Allocate memory in the device
    checkCuda(cudaMalloc((void **) &d_a, N*N*sizeof(double)));
    checkCuda(cudaMalloc((void **) &d_b, N*N*sizeof(double)));
    checkCuda(cudaMalloc((void **) &d_c, (N*N/comm_sz)*sizeof(double)));

    // Copy the information in the device
    checkCuda(cudaMemcpy(d_a, A, N*N*sizeof(double), cudaMemcpyHostToDevice));
    checkCuda(cudaMemcpy(d_b, B, N*N*sizeof(double), cudaMemcpyHostToDevice));

    // CUDA threads structure definition
    dim3 dimGrid(1);
    dim3 dimBlock(N, nrows);    

    MPI_Barrier(MPI_COMM_WORLD);
    if (my_rank == 0) { gettimeofday(&start_time, NULL); }

    // Kernel launch
    matrixProduct&lt;&lt;&lt;dimGrid, dimBlock&gt;&gt;&gt;(d_a, d_b, d_c, N, nrows, my_rank);
    checkCuda(cudaDeviceSynchronize());
    checkCuda(cudaGetLastError());

    // Calculate compute time
    MPI_Barrier(MPI_COMM_WORLD);
    if (my_rank == 0) { 
        gettimeofday(&end_time, NULL);
        printf("Compute time: %.1f ms \\n", (float) (end_time.tv_sec - start_time.tv_sec) * 1000 + (end_time.tv_usec - start_time.tv_usec) / 1000);
     }

    // Get results from device
    checkCuda(cudaMemcpy(C[from], d_c, (nrows)*N*sizeof(double), cudaMemcpyDeviceToHost));

    // Unify results from nodes
    MPI_Gather(C[from], N*N/comm_sz, MPI_DOUBLE, C, N*N/comm_sz, MPI_DOUBLE, 0, MPI_COMM_WORLD);

    // if (my_rank == 0)  { showMatrices(A, B, C); }

    checkCuda(cudaFree(d_a));
    checkCuda(cudaFree(d_b));
    checkCuda(cudaFree(d_c));
    
    MPI_Finalize();
    return 0;

}</code></pre>
			</div>
			<p class="post_p">
				One of the main problems of CUDA is that to get the most out of it you have to know the technical specifications
				of the GPU on which it will run the code. Block size (number of threads) or the use of the memory hierarchy
				of the graphic card are aspects that the coder has to take into account when programming with this technology.
			</p>
			<p class="post_p">
				At this <a href="https://github.com/bertini36/distributedMatrixProduct" class="post_link" target="_blank">Github repository</a>
				you will find two versions of matrix product, one just using MPI technology and another just with CUDA. Also,
				at config folder, there are a script to know graphic card specifications and a possible CUDA configuration
				for that card.
			</p>
		`
	},

	{
		title: 'Variational Inference III 📦',
		slug: 'variational-inference-3',
		tags: ["#probabilistic-machine-learning", "#variational-inference", "#statistics"],
		date: "2017-05-11",
		html: `
			<p class="post_p">
				In this post I'm going to continue explaining concepts that I introduced in previous posts
				(<a href="https://albertopou.dev/blog/variational-inference-1/" class="post_link" target="_blank">1</a> and
				<a href="https://albertopou.dev/blog/variational-inference-2/" class="post_link" target="_blank">2</a>) about Variational
				inference (VI). Algorithms presented till now have scalability problems. For each iteration the algorithm
				requires to go through all the data and this, for massive volumes of data, is impracticable. An alternative to
				solve this problem is: Sthocastic Variational Inference. This version is based on using a batch (set of points)
				of data in each iteration. In this way, after more iterations than the conventional solutions, the solution
				will tend to a local optimum. The main advantage of this mechanism is that it doesn't require to keep all dataset in
				memory, solving the bottleneck that could be formed by using VI with very big datasets.
			</p>
			<h4 class="post_section_title text-2xl text-black">Sthocastic Variational Inference</h4>
			<h5 class="post_section_title text-xl text-black">Sthocastic optimization</h5>
			<p class="post_p">
				This technique obtains estimations of the real gradient of an objective function.
				Thus we obtain an algorithm which iterates each batch and adjusts the hidden structure of the model based only
				on that batch of data. Stochastic optimization finds a function relative maximum or minimum using real gradient
				estimations. Estimations expectation  E(∇λC(λ,x)), being x a batch of data, is equivalent to the
				real gradient ∇λC(λ,X), being X the full dataset.
			</p>
			<figure class="post_figure flex justify-center">
				<img class="post_image"
					 src="variational-inference-3/svi.png"
					 alt="Sthocastic Optimization">
			</figure>
			<p class="post_p">
				Under ideal conditions these stochastic algorithms converge to a local optimum of the function
				if ρ meets the Robins-Monro conditions:
			</p>
			<figure class="post_figure flex justify-center">
				<img class="post_image"
					 src="variational-inference-3/robins.png"
					 alt="Robins-Monro">
			</figure>
			<p class="post_p">
				The use of this technique results in the algorithm Stochastic Gradient Ascent Variational Inference (SGAVI)
				and Stochastic Natural Gradient Ascent Variational Inference (SNGAVI) if natural gradients are used to estimate.
				These algorthims, thanks to the real gradient estimations, can avoid saddle points.
			</p>
			<figure class="post_figure flex justify-center">
				<img class="post_image"
					 src="variational-inference-3/saddle-point.png"
					 alt="Saddle point">
			</figure>
			<figcaption class="post_image_figcaption">
				Saddle point. (Source: Wikipedia)
			</figcaption>
			<h5 class="post_section_title text-xl text-black">Algorithm</h5>
			<p class="post_p">
				In VI, the function to be optimized is called ELBO. If variational parameters are updated by closed analytical
				formulas, the algorithm is known as Sthocastic Coordinate Ascent Variational Inference (SCAVI) while if we use
				sthocastic optimization the algorithm is known as SGAVI. This version uses a corrector term using calculations
				from previous iterations. The generic algorithm would be as follows:
			</p>
			<figure class="post_figure flex justify-center">
				<img class="post_image"
					 src="variational-inference-3/svi-algorithm.png"
					 alt="Sthocastic Variational Inference Algorithm">
			</figure>
			<h4 class="post_section_title text-2xl text-black">Black Box Variational Inference</h4>
			<p class="post_p">
				Starting from the ELBO formula that was reached in the
				<a href="https://albertopou.herokuapp.com/#variational_inference_2" class="post_link" target="_blank">previous post</a>:
			</p>
			<figure class="post_figure flex justify-center">
				<img class="post_image"
					 src="variational-inference-3/elbo2.png"
					 alt="ELBO">
			</figure>
			<p class="post_p">
				The main idea of Black Box Variational Inference (BBVI) consists of sampling the variational model q(θ|λ) with
				the purpose of obtain an approach of formula expectations. Such expectations regarding the variational model
				can be computationally expensive and can be a bottleneck at computer memory level.
			</p>
			<h5 class="post_section_title text-xl text-black">Score Gradients</h5>
			<p class="post_p">
				Now we apply gradients and some algebraic transformations into the analytic ELBO formula (complete derivation
				is not shown):
			</p>
			<figure class="post_figure flex justify-center">
				<img class="post_image"
					 src="variational-inference-3/elbo3.png"
					 alt="ELBO">
			</figure>
			<p class="post_p">
				After these transformations you could notice that it is not necesary to obtain gradients of complete ELBO, it
				is enough to derive the variational model (q(θ|λ)).
			</p>
			<h5 class="post_section_title text-xl text-black">Monte-Carlo Integration</h5>
			<p class="post_p">
				Monte-Carlo integration is a mechanism to approximate integrals. It consists of sampling the variable
				with respect to which we are integrating and do a summation of function values given those samples.
				The more samples are taken from the variable more exact will be the approximation. In our case we are going
				to use this mechanism to approximate ELBO integral, which integrates with respect to the q(θ|λ) distribution.
				Then a set of samples (θs) obtained from the q(θ|λ) distribution will allow us to get an approximation of
				the integral. The formula would be as follows:
			</p>
			<figure class="post_figure flex justify-center">
				<img class="post_image"
					 src="variational-inference-3/montecarlo.png"
					 alt="Monte-Carlo Integration">
			</figure>
			<h5 class="post_section_title text-xl text-black">Algorithm</h5>
			<p class="post_p">
				Below is the BBVI algorithm:
			</p>
			<figure class="post_figure flex justify-center">
				<img class="post_image"
					 src="variational-inference-3/bbvi.png"
					 alt="Black Box Variational Inference Algorithm">
			</figure>
			<h4 class="post_section_title text-2xl text-black">Considerations</h4>
			<p class="post_p">
				This algorithm is the result of get some measures that can question the convergence of VI algorithm. Starting by
				supposing q(θ|λ) factorizes (mean field assumption) to approximate ELBO integral using Monte-Carlo.
				All this causes that this algorithm is subjected to a high variance, and depending on the model, slow convergence.
				In order to reduce the variance that this method can cause some mechanisms have appeared:
			</p>
			<ul class="post_list">
				<li>
					<strong>Rao-Blackwellization</strong>. This method reduces the variance of an aleatory variable replacing it
					by its conditional expectation with respect to a subset of variables.
				</li>
				<li>
					<strong>Control variates</strong>. This method replaces Monte-Carlo expectation by another function with
					less variance.
				</li>
			</ul>
			<p class="post_p">
				A positive aspect of this method is that it is not necessary to derive the analytical formulas used to update
				the variational parameters either analytical ELBO. This permits the access to these algorithms to people who have
				less statistical knowledge (as me). It exists another approximation called Automatic Differentiation Variational
				Inference (ADVI). This method also has these advantages and improves the convergence of unconjugated models
				that can be a challenge for the rest of VI variants.
			</p>
			<p class="post_p">
				Formerly with VI only conjugated models could be inferred since the unconjugated models didn't be easily derivable.
				The discovery of algorithms like ADVI and BBVI allowed the inference of this kind of models because they changed
				the analytical calculus for an approximate strategy.
			</p>
			<h4 class="post_section_title text-2xl text-black">Variational inference libraries</h4>
			<p class="post_p">
				Best-known libraries for the use of VI and Markov Chain Monte-Carlo (MCMC):
			</p>
			<ul class="post_list">
				<li>
					<a href="http://edwardlib.org/" class="post_link" target="_blank">Edward</a>: It uses Tensorflow for gradients computations
					and has BBVI, reparameterization BBVI and Metropolis-Hastings implementations.
				</li>
				<li>
					<a href="http://mc-stan.org/" class="post_link" target="_blank">Stan</a>: It uses C++ Automatic Differentiation
					reverse mode for gradients computation and has ADVI and HMC implementations.
				</li>
				<li>
					<a href="https://github.com/pymc-devs/pymc3" class="post_link" target="_blank">PyMC3</a>: It uses Theano for gradient computations
					and has ADVI, Gibbs sampling and Metropolis-Hastings implementations.
				</li>
				<li>
					<a href="https://www.tensorflow.org/versions/r0.12/api_docs/python/contrib.bayesflow.variational_inference/" class="post_link" target="_blank">Bayesflow</a>:
					Young Google module for VI.
				</li>
			</ul>
			<p class="post_p">
				If you want to learn more about Variational Inference and its uses in probabilistic models inference you can take
				a look to my <a href="https://github.com/bertini36/GMM/blob/master/docs/doc.pdf" class="post_link" target="_blank">
				master thesis</a>. It focuses on the use of automatic differentiation tools to apply Variational Inference into a
				Gaussian Mixture Model (GMM). At the <a href="https://github.com/bertini36/GMM" class="post_link" target="_blank">repository</a> you can
				find implementations of Gaussian Mixture Model with different technologies like
				<a href="https://www.tensorflow.org/" class="post_link" target="_blank">Tensorflow</a>, Python,
				<a href="https://github.com/blei-lab/edward" class="post_link" target="_blank">Edward</a>,
				<a href="https://github.com/HIPS/autograd" class="post_link" target="_blank">Autograd</a>, ...
				And also other probabilistic models that helped me to learn.
			</p>
			<h4 class="post_section_title text-2xl text-black">References</h4>
			<ul class="post_list">
				<li>
					Journal of the American Statistical AssociationGeorge
					(E. P. Box)
				</li>
				<li>
					Build, Compute, Critique, Repeat: Data Analysis with Latent Variable Models
					(David M. Blei)
				</li>
				<li>
					Probabilistic graphical models: principles and techniques
					(Koller, Daphne, and Nir Friedman)
				</li>
				<li>
					Model-based Machine Learning
					(Christopher M. Bishop)
				</li>
				<li>
					Machine Learning. A probabilistic perspective
					(Kevin P. Murphy)
				</li>
				<li>
					An overview of gradient descent optimization algorithms
					(Sebastian Rudes)
				</li>
				<li>
					Variational Bayesian inference (slides)
					(Kay H. Brodersen)
				</li>
				<li>
					Variational Inference
					(David M. Blei)
				</li>
				<li>
					Sthocastic Variational Inference
					(Matthew D. Hoffman, David M. Blei, Chong Wang and John Paisley)
				</li>
				<li>
					Black Box Variational Inference
					(Rajesh Ranganath, Sean Gerrish and David M. Blei)
				</li>
				<li>
					The Stan Math Library: Reverse-Mode Automatic Differentiation in C++
					(Bob Carpenter, Matthew D. Hoffman, Marcus Brubaker, Daniel Lee, Peter Li and Michael Betancourt)
				</li>
				<li>
					Automatic Differentiation Variational Inference
					(Alp Kucukelbir, Dustin Tran, Rajesh Ranganath, Andrew Gelman and David M. Blei)
				</li>
			</ul>
		`
	},

	{
		title: 'Variational Inference II ⛰️',
		slug: 'variational-inference-2',
		tags: ["#probabilistic-machine-learning", "#variational-inference", "#statistics"],
		date: "2017-02-25",
		html: `
			<p class="post_p">
			    In this post I'm going to continue explaining concepts that I introduced in my
				<a href="https://albertopou.dev/blog/variational-inference-1" class="post_link" target="_blank">previous post</a> about
				Variational Inference (VI). At first I'm going to show that to find the best posterior approach it's necessary
				to minimize the Kullback-Leibler divergence (KL) between the variational model q(θ|λ) and the probabilistic
				model p(θ|x). Starting from Bayes' rule we have:
			</p>
			<figure class="post_figure flex justify-center">
				<img class="post_image"
					 src="variational-inference-2/ELBO_derivation.png"
					 alt="ELBO derivation">
			</figure>
			<p class="post_p">
				This expression gives us a more affordable way to calculate the evidence of the model where each factor is:
			</p>
			<figure class="post_figure flex justify-center">
				<img class="post_image"
					 src="variational-inference-2/ELBO_explanation.png"
					 alt="ELBO explantation">
			</figure>
			<p class="post_p">
				With this demonstration we get that minimize KL[q(θ|λ)||p(θ|x)] is equivalent to maximize ELBO(q(θ|λ),p(x,θ))
				which is easier to evaluate. An intractable integral has been transformed to an expectation of a known distribution.
			</p>
			<figure class="post_figure flex justify-center">
				<img class="post_image"
					 src="variational-inference-2/kullback_leibler.png"
					 alt="ELBO">
			</figure>
			<figcaption class="post_image_figcaption">
				Maximize ELBO is equivalent to minimize the distance between variational model and probabilistic model.
			</figcaption>
			<p class="post_p">
				Variational inference uses ELBO as algorithm stop condition. When some iterations, where ELBO value does not
				increase, are executed it means that good values for variational model λ params have been found. These are values of
				λ which get closer probabilistic model (the posterior). We can rewrite ELBO as:
			</p>
			<figure class="post_figure flex justify-center">
				<img class="post_image"
					 src="variational-inference-2/ELBO_reescritura.png"
					 alt="Rewrited ELBO">
			</figure>
			<p class="post_p">
				Where each factor is:
			</p>
			<figure class="post_figure flex justify-center">
				<img class="post_image"
					 src="variational-inference-2/ELBO_terminos.png"
					 alt="ELBO factors">
			</figure>
			<p class="post_p">
				And now, if we take into account the Mean-Field assumption commented in the
				<a href="https://albertopou.dev/blog/variational-inference-1" class="post_link" target="_blank">previous post</a>,
				ELBO ends as follows:
			</p>
			<figure class="post_figure flex justify-center">
				<img class="post_image" style="width: 90%"
					 src="variational-inference-2/ELBO_MeanField.png"
					 alt="ELBO taking into account Mean Field assumption">
			</figure>
			<h4 class="post_section_title text-2xl text-black">Variational Inference algorithm</h4>
			<figure class="post_figure flex justify-center">
				<img class="post_image"
					 src="variational-inference-2/VI.png"
					 alt="Variational Inference algorithm">
			</figure>
			<p class="post_p">
				This algorithm represents the basic idea of VI. In practice more things must be taken into account for its correct
				operation. First, variational model could be formed by local and global variables and the updates of these have to be
				done in a concrete way. You also have to choose an inference method: Coordinate Ascent, Gradient Ascent, Sthocastic
				Gradient Descent, ... Chosen inference method doesn't change the basic structure of the VI algorithm just change
				the method of obtaining the λ new values of variational model in each iteration.
			</p>
			<h5 class="post_section_title text-xl text-black">Coordinate Ascent Variational Inference</h5>
			<p class="post_p">
				The most traditional method for the inference of probabilistic models is: Coordinate Ascent Variational Inference
				(CAVI). For the implementation of this kind of inference you require knowledge of Bayesian statistics because
				for the update of each variational model λ parameter and ELBO some analytical closed formulas have to be derived.
				As previously mentioned when the model is completely conjugated (as Dirichlet-Categorical model or Normal Inverse
				Wishart-Normal model) posterior can be analytically calculated, that is, without the need to approximate it.
				However if we have a bast amount of data this analytical calculus is impracticable due to the operations with
				very large matrices in memory. For this reason, in this case and the case of no conjugated models it is a good
				option to approximate the posterior using VI.
			</p>
			<p class="post_p">
				The derivation of the analytical updates for the variational model parameters can be done in two ways: generic
				derivation or using the properties of the
				<a href="https://en.wikipedia.org/wiki/Exponential_family" class="post_link" target="_blank">Exponential Family</a>.
			</p>
			<p class="post_p">
				Generic derivarion is based on the following formula (assuming the Mean-Field assumption):
			</p>
			<figure class="post_figure flex justify-center">
				<img class="post_image"
					 src="variational-inference-2/generic_derivation.png"
					 alt="Generic derivation">
			</figure>
			<p class="post_p">
				This derivation has to be done for each variable of the variational model θ<small>i</small> and after that,
				a statistician could deduce the distribution type of the variational parameter and how to update it.
			</p>
			<p class="post_p">
				Another way to obtain the variational parameters updates is to derive them using the properties of the Exponential
				Family. To this family belong all the distributions that can be written in the form:
			</p>
			<figure class="post_figure flex justify-center">
				<img class="post_image"
					 src="variational-inference-2/exponential_family.png"
					 alt="Exponential family">
			</figure>
			<ul class="post_list">
				<li>h(x): Base measure.</li>
				<li>η(θ): Natural parameters(it just depends on the parameters).</li>
				<li>t(x): Sufficient statistics(it just depends on the data). Lets know the shape of the distribution.
					Describe the possible space for the distribution parameters.</li>
				<li>a(η(θ)): Cumulant. It is a normalizer.</li>
			</ul>
			<p class="post_p">
				This family allows to establish conjugation relations between distributions. When creating the joint
				distribution based on two distributions the natural parameters of one allow some simplification in the
				formulation together with the sufficient statistics of the other one we say that the first distribution is
				conjugated of the second. The conjugated models, as already mentioned, thanks to these simplifications,
				allow to calculate the posterior analytically.
			</p>
			<h5 class="post_section_title text-xl text-black">Coordinate Ascent Variational Inference algorithm</h5>
			<figure class="post_figure flex justify-center">
				<img class="post_image"
					 src="variational-inference-2/CAVI.png"
					 alt="Coordinate Ascent Variational Inference Algorithm">
			</figure>
			<p class="post_p">
				In this version of CAVI algorithm the distinction between updating local and global variables of the model has
				already been taken into accoun.
			</p>
			<h5 class="post_section_title text-xl text-black">Gradient Ascent Variational Inference</h5>
			<p class="post_p">
				A more naive inference alternative is Gradient Ascent Variational Inference (GAVI). The difference is how is
				the variational parameters update. It is not done analytically with derived formulas by a statistician,
				it is an exploratory process. GAVI is based on the Gradient Descent/Ascent algorithm.
			</p>
			<h5 class="post_section_title text-xl text-black">Gradient Ascent</h5>
			<p class="post_p">
				Gradient Ascent aims to maximize a cost function C(λ) parameterized by the model parameters, λ. The algorithm
				optimizes these parameters λ in the gradient direction (in the case of Gradient Descent, in the opposite
				direction of the gradient) of the objective function ∇<small>λ</small>C(λ).
				In our case we need Gradient Ascent because we want to maximize ELBO function. Learning rate η>0  determines the
				size of the step in the direction of the local maximum. Gradient Ascent explores latent variables space of the
				model and moves in the direction of maximum slope (which is indicated by the gradient of the function) until find
				a local maximum. Variational model parameters are updated as follows:
			</p>
			<figure class="post_figure flex justify-center">
				<img class="post_image"
					 src="variational-inference-2/gradient.png"
					 alt="Gradient application">
			</figure>
			<p class="post_p">
				Over the last years optimizations of this algorithm have been appearing: Momentum, Adagrad, Adadelta, RMSprop,
				Adam, ... the improvements they offer are based on aspects such as each parameter λ<small>i</small> has its
			    own learning rate η<small>i</small> or taking into account the value of previous iterations gradients to calculate
				the following.
			</p>
			<h5 class="post_section_title text-xl text-black">Gradient Ascent Variational Inference algorithm</h5>
			<figure class="post_figure flex justify-center">
				<img class="post_image"
					 src="variational-inference-2/GAVI.png"
					 alt="Gradient Ascent Variational Inference algorithm">
			</figure>
			<p class="post_p">
				A problem of this algorithm to approximate the posterior (which causes more inaccurate convergences) is the use of
				the gradient to optimize variational parameters. The gradient supposes that latent variables space is an
				Euclidean space. This fact implies the assumption that distance between the distributions is mesured by the
				Euclidean distance of their parameters. The solution to this problem, to find the real distance between two
				distributions, is to use the natural gradient.
			</p>
			<figure class="post_figure flex justify-center">
				<img class="post_image"
					 src="variational-inference-2/natural_gradient.png"
					 alt="Natural gradient definition">
			</figure>
			<p class="post_p">
				Natural gradient indicates the direction of maximum slope in other space, the Riemman space, where the real
				distance between distributions is taken into account. This distance can be calculated premultiplying the normal
				gradient by the inverse of the matrix Fisher's, G(λ).
			</p>
			<figure class="post_figure flex justify-center">
				<img class="post_image"
					 src="variational-inference-2/natural_gradient2.png"
					 alt="Natural gradient definition">
			</figure>
			<p class="post_p">
				In the case of CAVI, when the analytical updates of each variational parameter are derived, the shape of the
				distributions to measure the distance between them is already taking into account.
			</p>
			<h5 class="post_section_title text-xl text-black">Efficiency problems</h5>
			<p class="post_p">
				Nowadays, in the already known as the information age, algorithms used in machine learning use huge volumes of
				data. This causes programmers to scale algorithms or design alternatives less computationally expensive. CAVI and
				GAVI have to pass through all the data for each iteration. This procedure for massive datasets is intractable. In
				the next post I'm going to explain the measures you can take in this cases and how to solve the scalability problem.
			</p>
			<h4 class="post_section_title text-2xl text-black">References</h4>
			<ul class="post_list">
				<li>
					Journal of the American Statistical AssociationGeorge
					(E. P. Box)
				</li>
				<li>
					Build, Compute, Critique, Repeat: Data Analysis with Latent Variable Models
					(David M. Blei)
				</li>
				<li>
					Probabilistic graphical models: principles and techniques
					(Koller, Daphne, and Nir Friedman)
				</li>
				<li>
					Model-based Machine Learning
					(Christopher M. Bishop)
				</li>
				<li>
					Machine Learning. A probabilistic perspective
					(Kevin P. Murphy)
				</li>
				<li>
					An overview of gradient descent optimization algorithms
					(Sebastian Rudes)
				</li>
				<li>
					Variational Bayesian inference (slides)
					(Kay H. Brodersen)
				</li>
				<li>
					Variational Inference
					(David M. Blei)
				</li>
			</ul>
		`
	},

	{
		title: 'Variational Inference I 🤖',
		slug: 'variational-inference-1',
		tags: ["#probabilistic-machine-learning", "#variational-inference", "#statistics"],
		date: "2017-02-09",
		html: `
			<p class="post_p">
				In next posts I'm going to speak about probabilistic machine learning. Last months I was learning about this
				field, specifically about a type of inference on these models known as Variational Inference, and I reckon can be
				interesting to write a set of posts summarizing my experience about it thanks to my teacher
				<a href="https://twitter.com/CapdevilaPujol" class="post_link" target="_blank">Joan Capdevila</a>.
			</p>
			<h4 class="post_section_title text-2xl text-black">Probabilistic Machine Learning</h4>
			<p class="post_p">
				Last decades studies about machine learning has caused the appearance of a wide variety of algorithms to solve
				a large set of problems covering areas such as driving autonomous vehicles, medical diagnosis, speech recognition
				or user ranking for marketing campaigns. These algorithms are mainly based on aa construction of a model which
				describes data as closely as possible.
			</p>
			<p class="post_p">
				A model is a compact description of a set of data that avoids us to make predictions about future samples. The main
				difference between a conventional machine learning model and a probabilistic one is that the last avoids to model
				uncertainty, in other words, it avoids to know how probably is a prediction to be fulfilled. This aspect can
				be very valuable in areas such as medicine or economy where risk about to take a bad decision can be detrimental to
				a person's health or lead to financial loss.
			</p>
			<figure class="post_figure flex justify-center">
				<img class="post_image"
					 src="variational-inference-1/schema_situation.png"
					 alt="Probabilistic Machine Learning situation">
			</figure>
			<figcaption class="post_image_figcaption">
				Probabilistic machine learning situation at artificial intelligence area
			</figcaption>
			<p class="post_p">
				This kind of models uses the probability theory to model priori information, in this way the algorithm is not
				based just on sample data. These models permit the use of different datasets to learn (this is useful when
				we have a small quantity of data) and to define complex models with a quantity of random variables required.
				They also support online leaning, you don't need to retrain the full model each time you obtain new data, you just
				require to update some probabilities. They are also very useful in decision-making, when a robust explanation of a
				model is required. Finally they are generative models, thanks to the distributions that they infer, they allow
				to generate new data simulating values ​​of any random variable of the model.
			</p>
			<p class="post_p">
				Unlike discriminant models which only model the probability of the variable to be predicted, a generative model is
				a complete model which uses all the variables (observed and latent), allowing multiple questions to be
				answered.
			</p>
			<p class="post_p">
				The construction of this type of models with latent variables is done following Box Loop philosophy. This loop
				was created by the statistician
				<a href="https://en.wikipedia.org/wiki/George_E._P._Box" class="post_link" target="_blank">George E. P. Box</a>. This loop is
				iterated several times during the construction of a probabilistic model.
			</p>
			<figure class="post_figure flex justify-center">
				<img class="post_image"
					 src="variational-inference-1/box_loop.png"
					 alt="Box loop">
			</figure>
			<figcaption class="post_image_figcaption">
				Box loop graphical scheme
			</figcaption>
			<ul class="post_list">
				<li>First, probabilistic model is made based on environment knowledge that we already have.</li>
				<li>After some patterns are discovered using the model previously defined and with an inference method.</li>
				<li>
					Finally the model has to be validated. If it was not good enough we would go back to step 1 unless it would be
					used to describe or predict new data.
				</li>
			</ul>
			<h4 class="post_section_title text-2xl text-black">Bayesian inference</h4>
			<p class="post_p">
				Bayesian inference tries to reveal a hidden structure in data that cannot be directly observed. For
				traditional machine learning methods parameters are values that are determined by optimization algorithms
				minimizing an error function. The bayesian point of view is a little bit different. For a bayesian all the
				unknown parameters are described by probability distributions and observation of evidence avoids to update
				these distrubutions using Bayes rule.
			</p>
			<h5 class="post_section_title text-xl text-black">Bayes rule</h5>
			<p class="post_p">
				The first thing you need to be clear about to understand Bayesian inference is Bayes rule. Bayes rule indicates
				how a priori probability about an event has to be updated after observe evidences about it. From a bayesian point
				of view there are no differences between parameters and observed variables, both are random variables. I'm going to
				use x to reference observed variables and θ to reference latent variables.
			</p>
			<figure class="post_figure flex justify-center">
				<img class="post_image md:w-1/6 sm:w-1/2"
					 src="variational-inference-1/bayes_rule.png"
					 alt="Bayes rule">
			</figure>
			<p class="post_p">
				The following explains what is each term of the formula, being x and &theta; data and model
				parameters respectively:
			</p>
			<ul class="post_list">
				<li>
					<strong>Posterior p(&theta;|x)</strong>: It is the probability of data, the probability that the model with &theta;
					parameters has generated x data.
				</li>
				<li>
					<strong>Likelihood p(x|&theta;)</strong>: It is the probability of data assuming that are modeled by a
					parametrized distribution. The way to calculate it depends on the model. Usually it is used to assess
					the quality of a model.
				</li>
				<li>
					<strong>Prior p(&theta;)</strong>: It is the probability of the parameters. In this factor of the formula
					is where prior knowledge is reflected, information that we have before to observe any data
					observation.
				</li>
				<li>
					<strong>Evidence p(x)</strong>: This is the evidence from data. It is calculated as &int; p(x,&theta;)d&theta;. Usually it
					can't be calculated but, as it is a normalizing constant of the model, it does not affect. When two
					probabilistic models are compared, important factors are the ones which depend on θ because p(x) will be
					the same for each model because it just depends on data.
				</li>
			</ul>
			<p class="post_p">
				Product p(x|θ)p(θ) is also known as joint probability: p(θ,x).
			</p>
			<p class="post_p">
				Use the likelihood to estimate θ parameters is known as Maximum Likelihood Estimation (MLE) while if you take
				the prior into account then is known as Maximum A Posteriori estimation (MAP). MLE and MAP are equivalents if
				there is an uniform prior. However these methods only allow estimating a mean, a median and a mode of the
				posterior and maybe your goal requires to model uncertainty or to generate new data. In theses cases we would need
				to know posterior distribution. As we will see, methods as Variational Inference (VI) or Markov Chain Monte Carlo
				(MCMC) allow to infer this distribution. Taking into account the Bayes normalizer constant p(x) is what allows
				these methods to calculate a posterior distribution.
			</p>
			<p class="post_p">
				A summary of this formula would be: At the beginning we have a belief (prior) about an event θ (p(θ)), for example,
				that the height of Barcelona population is described by a Normal distribution. After we observe evidences (x),
				a sample of the heights of Barcelona population. With this evidence our belief about θ has to be updated, in
				other words, Normal distribution which described the height of Barcelona population has to be updated. This
				change is reflected by the posterior distribution (p(θ|x)). In this example we can appreciate the support to
				online learning that offers this kind of models.
			</p>
			<figure class="post_figure flex justify-center">
				<img class="post_image"
					 src="variational-inference-1/online_learning.png"
					 alt="Online learning">
			</figure>
			<p class="post_p">
				At the end it is an iterative process of updating beliefs (prior) based on evidences (x) where posterior of one
				iteration will be the prior of next one.
			</p>
			<p class="post_p">
				Posterior inference algorithms avoid to analyze information under certain assumptions (priors) discovering a
				hidden structure which best fits with our data. When all relations between model random variable are
				<a href="https://en.wikipedia.org/wiki/Conjugate_prior" class="post_link" target="_blank">conjugated</a>, this is, when joint
				distribution has the same form as the prior, posterior can be calculated analytically. This is the
				case of models like Dirichlet-Categorical o Normal Inverse Wishart-Normal. In the opposite case, the problem of
				this formula resides in the calculation of the evidence (p(x)). For many models of interest (no conjugated) to
				calculate a posterior is computationally intractable because the integral over all latent variables of data
				that requires to calculate the evidence. For these models, another strategy is required to obtain the posterior,
				for that reason the calculation of the posterior becomes an approximation problem.
			</p>
			<h5 class="post_section_title text-xl text-black">Posterior approximation</h5>
			<p class="post_p">
				Probabilistic machine learning uses latent variables to describe data hidden structure, some relations
				between observed and latent variables are modeled using probability distributions and inference algorithms are used
				to estimate the posterior, that is the conditional distribution about latent variables given the observed
				variables. Due to the fact that in most cases we are working in spaces with many dimensions, the calculation of
				posterior expectation, E(p(θ|x)), is impossible to obtain analytically and computationally, for this reason some
				inference methods have been created to approximate this distribution. Bayesian inference concept comes from the
				set of tools which have been developed to approximate this posterior and it is one of the central problems in
				bayesian statistics. Nowadays there are 2 algorithmic branches:
			</p>
			<ul class="post_list">
				<li>
					<a href="https://en.wikipedia.org/wiki/Markov_chain_Monte_Carlo" class="post_link" target="_blank">
						Markov Chain Monte Carlo (MCMC)
					</a>:
					Sampling approximate inference.
				</li>
				<li>
					<a href="https://en.wikipedia.org/wiki/Variational_Bayesian_methods" class="post_link" target="_blank">
						Variational Inference (VI)
					</a>:
					Structural approximate inference.
				</li>
			</ul>
			<p class="post_p">
				On the one hand, MCMC is based on the construction of a Markov chain over all latent variables being the posterior
				its stationary distribution. After the chain is executed till it arrives to its equilibrium point.
				Finally, results obtained sampling the Markov chain in its stationary section, are the posterior samples. The
				best known algorithms of this family are
				<a href="https://en.wikipedia.org/wiki/Metropolis%E2%80%93Hastings_algorithm" class="post_link" target="_blank">Metropolis–Hastings</a>
				, <a href="https://en.wikipedia.org/wiki/Gibbs_sampling" class="post_link" target="_blank">Gibbs sampling</a> and
				<a href="{https://en.wikipedia.org/wiki/Hybrid_Monte_Carlo">Hamiltonian Monte Carlo</a>.
			</p>
			<p class="post_p">
				On the other hand, Variational Inference approximates the posterior creating an analytical approximation, the
				variational model, which is adjusted in order to reduce the distance with the posterior. In this family the
				problem is transformed from an approximation one to an optimization one.
			</p>
			<h5 class="post_section_title text-xl text-black">Probabilistic Graphical Models</h5>
			<p class="post_p">
				In the bayesian field, a model represents a joint probability over all random variables of the problem.
			</p>
			<figure class="post_figure flex justify-center">
				<img class="post_image md:w-1/5 sm:w-4/5"
					 src="variational-inference-1/joint_dist.png"
					 alt="Joint distribution">
			</figure>
			<p class="post_p">
				A very practical way of representing these models is using
				<a href="https://en.wikipedia.org/wiki/Graphical_model" class="post_link" target="_blank">probabilistic graphical models</a>. A
				probabilistic graphical model is a directed graph where nodes are random variables and edges are dependency
				relations between those variables. For example, joint distribution probabilistic graphical model is:
			</p>
			<figure class="post_figure flex justify-center">
				<img class="post_image md:w-1/4 sm:w-64"
					 src="variational-inference-1/joint_dist2.png"
					 alt="Joint distribution">
			</figure>
			<figure class="post_figure flex justify-center">
				<img class="post_image"
					 src="variational-inference-1/graphical_model.png"
					 alt="Joint distribution">
			</figure>
			<p class="post_p">
				At this context, p(x|y) represents the conditional probability in which <i>x</i> variable depends on the
				value of y. At this kind of diagrams also exists another components called plates.
			</p>
			<figure class="post_figure flex justify-center">
				<img class="post_image"
					 src="variational-inference-1/plate.png"
					 alt="Plate">
			</figure>
			<p class="post_p">
				This notation indicates a vector of n random variables <i>x</i>.
			</p>
			<h5 class="post_section_title text-xl text-black">Local and global variables</h5>
			<p class="post_p">
				In a probabilistic model two types of random variables can be distinguished: globals and locals. A global variable
				is the one which is shared between all dataset examples while a local variable is owned by each example. For
				example, the following probabilistic graphical model, <i>y</i> variable is local while <i>z</i> variable is a
				global one. When a node appears obscured it means that it is an observed variable.
			</p>
			<figure class="post_figure flex justify-center">
				<img class="post_image"
					 src="variational-inference-1/global_local_variables.png"
					 alt="Model example">
			</figure>
			<h4 class="post_section_title text-2xl text-black">Variational inference</h4>
			<p class="post_p">
				In next posts we will focus on the different variational strategies for posterior approach.
			</p>
			<h5 class="post_section_title text-xl text-black">Strategy</h5>
			<p class="post_p">
				As already mentioned, Variational Inference consists in defining a distribution, q(&theta;|&lambda;), whose parameters &lambda;
				will be optimized in order to reduce the differences with the posterior p(&theta;|x). This new distribution is known as
				variational model and the posterior as probabilistic model. To summarize, VI goal is to optimize variational model
				&lambda; parameters in order to reduce the distance with probabilistic model p(&theta;|x). &lambda; parameters are known also as
				variational parameters.
			</p>
			<figure class="post_figure flex justify-center">
				<img class="post_image"
					 src="variational-inference-1/variational_inference.jpg"
					 alt="Variational inference">
			</figure>
			<h5 class="post_section_title text-xl text-black">Kullback-Leibler divergence</h5>
			<p class="post_p">
				To calculate Euclidean distance between distribution parameters to establish the similarity between both is an
				imperfect measure since we are comparing distributions and not points. Imagine a Normal distribution with 0 mean
				and 5 variance, N(0, 5), and another one with 5 mean and 5 variance, N(5, 5). These two distributions are very
				similar but they are separated by an Euclidean distance of 5. If now we compare first defined Normal distribution
				N(0, 5) with another Normal distribution with 2 mean and 7 variance, N(2, 7), looks like they are more different
				but Euclidean distance that separates them is 4. For this reason we have to use another measure: Kullback-Leibler
				divergence (KL).
			</p>
			<p class="post_p">
				KL is a divergence, in other words, a non-simmetric distance, it isn't the same to calculate KL[p(θ|x)||q(θ|λ)]
				(forwards KL) than KL[q(θ|λ)||p(θ|x)] (reverse KL). The fact of use one or another rises to different algorithms:
				 <a href="https://tminka.github.io/papers/ep/minka-ep-uai.pdf" class="post_link" target="_blank">Expectation Propagation</a> uses
				forwards KL while VI uses reverse KL. In general terms, Expectation Propagation is more computationally expensive.
				KL quantifies loss information when you approximate one distribution with another. It is based on the concept of
				entropy. Entropy measures the quantity of information that own data and is defined as follows:
			</p>
			<figure class="post_figure flex justify-center">
				<img class="post_image"
					 src="variational-inference-1/entropy.png"
					 alt="Entropy">
			</figure>
			<p class="post_p">
				KL definition consists in modify entropy formula to take q distribution into account.
			</p>
			<figure class="post_figure flex justify-center">
				<img class="post_image"
					 src="variational-inference-1/kl1.png"
					 alt="Kullback-Leibler divergence">
			</figure>
			<p class="post_p">
				If we adapt this form to the VI problem and we apply logarithms properties we have:
			</p>
			<figure class="post_figure flex justify-center">
				<img class="post_image md:w-1/3 sm:4/5"
					 src="variational-inference-1/kl_rule.png"
					 alt="Kullback-Leibler definition">
			</figure>
			<p class="post_p">
				This divergence avoids us to find the real similarity between two probability distributions and it is the measure
				that is minimized at VI algorithm.
			</p>
			<figure class="post_figure flex justify-center">
				<img class="post_image"
					 src="variational-inference-1/kullback-leibler1.png"
					 alt="Kullback-Leibler divergence">
			</figure>
			<figcaption class="post_image_figcaption">
				Forwards and reverse KL comparison to approximate a bimodal distribution. Blue part represents distribution
				to be approximated and red one the approximation. <strong>a</strong> image is an approximation
				with forwards KL and <strong>b</strong> and <strong>c</strong> are approximation with reverse KL.
			</figcaption>
			<figure class="post_figure flex justify-center">
				<img class="post_image"
					 src="variational-inference-1/kullback-leibler2.png"
					 alt="Kullback-Leibler visualization">
			</figure>
			<figcaption class="post_image_figcaption">
				Forwards and reverse KL comparison to approximate a unimodal distribution. Blue part represents distribution
				to be approximated and red one the approximation. <strong>a</strong> image is an approximation
				with forwards KL and <strong>b</strong> is an approximation with reverse KL.
			</figcaption>
			<h5 class="post_section_title text-xl text-black">Mean-Field assumption</h5>
			<p class="post_p">
				In order to define a treatable distribution over all latent variables to approximate the posterior we can
				simplify variational model optimization assuming that it is a factorized model. It is to suppose that q(&theta;|&lambda;) is
				composed by a set of distributions q<sub>i</sub>(&theta;<sub>i</sub>|&lambda;<sub>i</sub>) (of the
				<a href="https://en.wikipedia.org/wiki/Exponential_family" class="post_link" target="_blank">Exponential Family</a>). Each one of
				these distributions has its own parameters &lambda;<sub>i</sub> which could be optimized individually.
			</p>
			<figure class="post_figure flex justify-center">
				<img class="post_image md:w-1/5 sm:w-4/5"
					 src="variational-inference-1/mean_field.png"
					 alt="Mean-Field assumption">
			</figure>
			<p class="post_p">
				Main goal of this post is not more than to present the basic idea of Variational Inference and its main players.
				In following posts we will go deeper into these algorithms and programming tools to code this models will be
				presented.
			</p>
			<h4 class="post_section_title text-2xl text-bold">References</h4>
			<ul class="post_list">
				<li>
					Journal of the American Statistical AssociationGeorge (E. P. Box)
				</li>
				<li>
					Build, Compute, Critique, Repeat: Data Analysis with Latent Variable Models
					(David M. Blei)
				</li>
				<li>
					Probabilistic graphical models: principles and techniques
					(Koller, Daphne, and Nir Friedman)
				</li>
				<li>
					Model-based Machine Learning
					(Christopher M. Bishop)
				</li>
				<li>
					Machine Learning. A probabilistic perspective
					(Kevin P. Murphy)
				</li>
			</ul>
		`
	}

];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
