---
layout: slides
title: Nodex, Express and Mongo
---
<section markdown="block" class="title-slide">
# Some Introductory Material
{% include title-slide-footer.html %}
</section>

<section markdown="block">
## I don't know what I'm talking about.  (really)
</section>

<section markdown="block">
## This is about node, express, and mongo
</section>

<section markdown="block">
## Is this really called mean?

<aside>There's also Angular in there, but I didn't get to that last night!</aside>
</section>

<section markdown="block">
### Introductions

* __me__ (Hi - I'm Joe!)
	* I'm trying to learn node
	* I've worked with php, ruby/rails, python/django in the past
	* I teach (though, this workshop is probably not a great indication of that)
	* I'm __not a programmer__
* __you__
	* probably know a thing or two about web development (server side, of course)
	* probably know more than me about this stuff
	
</section>
<section markdown="block">
### About This Class / Session / Workshop

* there are going to be _a lot_ of mistakes
* and probably even misinformation

...but we'll have fun:

1. learning a little bit about node
2. writing a tiny web app (Polls - a _classic_)
</section>

<section markdown="block">
### Node?

* js server side framework based on rhino
* [event loop](http://www.stephanimoroni.com/wp-content/uploads/2014/03/node-event-loop.png)
* for web stuff...
	* good for soft real time apps
	* creating apis
* (but more than just for web)
</section>

<section markdown="block">
### npm

* like other package managers  &rarr;
	* gem for Ruby
	* or pip, easy_install, etc. for Python
	* or whatevs (CPAN!?)
* doesn't install globally by default (nice... unlike _other_ package management systems)
* btw, what are some analagous tools that we'd use to avoid installing packages globally for python and ruby? &rarr;
	* rvm
	* virtualenv
* why do we even care?  why is this important?
</section>



<section markdown="block">
### package.json

* it's where you list your dependencies
* what's the equivalent in python or ruby?
	* gemfile - ruby
	* requirements.txt - python
</section>


<section markdown="block">
### node require

like:

* php's include
* ruby's require
* python's import

er... maybe not really.  it actually just returns an object.
</section>

<section markdown="block">
### Some other techs:

* jade

</section>

<section markdown="block">
### Express

* small web framework
* like sinatra or flask
</section>

<section markdown="block">
### Mongo

* __document store__ (json!)
* _nosql_
* node modules... monk (we're using this), mongoose, etc.
</section>
