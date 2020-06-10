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
		title: 'Automatic differentiation',
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
				defined as variables (lines 29 and 30). Later a cost function is defined based on these parameters,
				<a href="https://en.wikipedia.org/wiki/Mean_squared_error" class="post_link" target="_blank">Mean Squared Error</a> (line 36). Then optimization
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
				Using Autograd all is more visible than in Tensorflow. A cost function is defined with the model parameters (lines
				25-31) and then get gradients in each iteration to update weight and bias parameters (lines 37-40).
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

];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
