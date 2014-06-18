# Nodex, Express, Angular and Mongo 
### (is it really called MEAN?  Unfortunately, yes).

Based on [this guide](http://www.ibm.com/developerworks/library/wa-nodejs-polling-app/)

And [this guide](http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/)

### Installing Modules Locally or Globally

See this article on [global or not](http://blog.nodejs.org/2011/03/23/npm-1-0-global-vs-local-installation/)

* project specific? locally
* commandline tool available everywhere? globally

### Install Express and Express Generator

* install
* ls
{% highlight bash %}
npm install -g express
npm install -g express-generator
{% endhighlight %}

### Generate Some Scaffolding

Create an application named hello

{% highlight bash %}
express hello
{% endhighlight %}

### Get Yr Dependencies Right

Your app automatically comes with deps.  Get 'em installed:

{% highlight bash %}
# make sure you're in hello!
# cd hello
npm install 
{% endhighlight %}


### Everything Working?

We can now run a test server...

{% highlight bash %}
# again, make sure you're in hello
npm start 
{% endhighlight %}

* your app is served on port 3000
* so open the following url localhost:3000

### app.js

There's a lot of stuff in there already

* module requires...
* requires of routes files (routes.rb, urls.py)
	* which are in turn passed as arguments to use
	* '/' uses routes variable... which is index.js
* create and configure your app (represented as the variable, app, of course!)
* error handling (404's, 500's, etc.)

* module.exports = app;

### router.get


* ... anonymous function, takes a request and response object
* response object render function... template and context

{% highlight js %}
router.get('/hello', function(req, res) {
  res.render('hello', { message: 'hi there!' });
});
{% endhighlight %}

### Templating

create views/hello.jade ... use message as a variable

{% highlight js %}
extends layout

block content
  h1= message
  p A new message: #{message}
{% endhighlight %}

### Mongo

{% highlight bash %}
# install mongodb
brew install mongo

# create a directory for storing data (we can just dump it in our app folder for this example)
mkdir data

# start yr server!
mongod --dbpath /path/to/project/data
{% endhighlight %}

### Inserting Some Data


{% highlight bash %}
# start a client
mongo

# use your database
# (doesn't exist?  no problem!  it'll create one for you)
use hello
{% endhighlight %}


### A Document

{% highlight json %}
{
  "question": "What's your favorite ice cream?",
  "choices": [ 
    {
      "name":"Vanilla",
      "votes":0
    },
    {
      "name":"Chocolate",
      "votes":0
    },
    {
      "name":"Vegan Peanut Butter Chip",
      "votes":0
    },
  ]

}
{% endhighlight %}


### Inserting Some Data

* db object is available to us
* polls is a collection 
* collection == table ... or a grouping of documents
* we can name whatever we want... it'll get created if it doesn't exist

{% highlight json %}
db.polls.insert({"question":"What's your favorite ice cream?", choices:[{'name':'Chocolate', 'votes':0},{'name':'Vanilla', 'votes':0}]}
... );
res = db.polls.find()
res = db.polls.find({"_id": ObjectId("53a110a3cd50d7aa40e2263c")})	
db.polls.find().pretty()

{% endhighlight %}
<!--_-->


### Database Dependencies
In package.json, in dependencies, add these two properties:

(any version)
{% highlight bash %}
"mongodb": "*",
"monk": "*"
{% endhighlight %}

Install again
{% highlight bash %}
# in hello dir
npm install
{% endhighlight %}

### Hooking Up Mongo

In app.js

{% highlight js %}
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/hello');
{% endhighlight %}

{% highlight js %}
// before using our route files, make sure db is set up
// every http req gets access to db... probably not right!
app.use(function(req,res,next){
    req.db = db;
    next();
});
{% endhighlight %}

### Retrieving the Poll

* in index.js, add another route...
* render the polls template
* using poll:doc[0] as context
* (there's only one q, soooo...)


{% highlight js %}
router.get('/polls', function(req, res) {
    var db = req.db;
    var collection = db.get('polls');
    // common emitter pattern
    collection.find({},{},function(e,docs){
        res.render('polls', {
            "poll" : docs[0]
        });
    });
});
{% endhighlight %}

### And Displaying It....

In the polls.jade template...

{% highlight js %}
extends layout

block content
  p #{poll.question}
  ul
    each choice, votes in poll.choices
      li #{choice.name} #{choice.votes}
{% endhighlight %}


### API-izing it

Rather than render a template, give back json.  In index.js, simply change one line...
{% highlight js %}
router.get('/polls', function(req, res) {
    var db = req.db;
    var collection = db.get('polls');
    collection.find({},{},function(e,docs){
        res.json(docs)
    });
});
{% endhighlight %}

### Reclaiming Index

We want to include jquery and our own js file.  

Add the last two lines to layout.jade:

{% highlight js %}
doctype html
html
  head
    title= title
    link(rel='stylesheet', href='/stylesheets/style.css')
  body
    block content
    script(src='http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js')
    script(src='/javascripts/global.js')
{% endhighlight %}

### Writing to the Database
Try using your browser to hit it.  Try curl!

{% highlight js %}
db.polls.update({"_id":ObjectId("53a13140ecffedecb5f18ca0"), "choices": {$elemMatch:{"name":"Chocolate"}}}, {$set: {"choices.$.votes": 1}})

db.polls.update({"_id":ObjectId("53a13140ecffedecb5f18ca0"), "choices": {$elemMatch:{"name":"Chocolate"}}}, {$inc: {"choices.$.votes": 1}})

db.polls.update({"_id":ObjectId("53a13140ecffedecb5f18ca0"), "choices": {$elemMatch:{"name":"Chocolate"}}}, {$inc: {"choices.$.votes": 1}})
{% endhighlight %}

curl
curl -d id=53a13140ecffedecb5f18ca0\&name=Chocolate localhost:3000/poll/vote
