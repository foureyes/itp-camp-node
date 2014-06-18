---
layout: slides
title: Nodex, Express and Mongo
---
<section markdown="block" class="title-slide">
# A Tiny Project - Making a Polls App
{% include title-slide-footer.html %}
</section>

<section markdown="block">
## Let's Make a Small App

<aside> Based on [a series of tutorials from cwbuecheler.com](http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/), as well as [this guide](http://www.ibm.com/developerworks/library/wa-nodejs-polling-app/) from IBM Developer Works.
</aside>
</section>


<section markdown="block">
### Installing Modules Locally or Globally

See this article on [global or not](http://blog.nodejs.org/2011/03/23/npm-1-0-global-vs-local-installation/)

* project specific? locally
* commandline tool available everywhere? globally
</section>

<section markdown="block">
### Install Express and Express Generator

* install
* ls

{% highlight bash %}
npm install -g express
npm install -g express-generator
{% endhighlight %}
</section>

<section markdown="block">
### Generate Some Scaffolding

Create an application named hello

{% highlight bash %}
express hello
{% endhighlight %}
</section>

<section markdown="block">
### Get Yr Dependencies Right

Your app automatically comes with deps.  Get 'em installed:

{% highlight bash %}
# make sure you're in hello!
# cd hello
npm install 
{% endhighlight %}
</section>


<section markdown="block">
### Everything Working?

We can now run a test server...

{% highlight bash %}
# again, make sure you're in hello
npm start 
{% endhighlight %}

* your app is served on port 3000
* so open the following url localhost:3000
</section>

<section markdown="block">
## Hello World!
</section>

<section markdown="block">
### app.js

There's a lot of stuff in there already

* module requires...
* requires of routes files (routes.rb, urls.py)
	* which are in turn passed as arguments to use
	* '/' uses routes variable... which is index.js
* create and configure your app (represented as the variable, app, of course!)
* error handling (404's, 500's, etc.)

* module.exports = app;
</section>

<section markdown="block">
### router.get


* ... anonymous function, takes a request and response object
* response object render function... template and context

{% highlight js %}
router.get('/hello', function(req, res) {
  res.render('hello', { message: 'hi there!' });
});
{% endhighlight %}
</section>

<section markdown="block">
### Templating

create views/hello.jade ... use message as a variable

{% highlight js %}
extends layout

block content
  h1= message
  p A new message: #{message}
{% endhighlight %}
</section>

<section markdown="block">
## Working With Data

<aside>Let's create a poll (_you know_, like a survey!)</aside>
</section>

<section markdown="block">
### Mongo

{% highlight bash %}
# install mongodb
brew install mongo

# create a directory for storing data (we can just dump it in our app folder for this example)
mkdir data

# start yr server!
mongod --dbpath /path/to/project/data
{% endhighlight %}
</section>

<section markdown="block">
### Inserting Some Data


{% highlight bash %}
# start a client
mongo

# use your database
# (doesn't exist?  no problem!  it'll create one for you)
use hello
{% endhighlight %}
</section>


<section markdown="block">
### A Document

<aside>This might be what our poll looks like...</aside>

We'll increment the vote count appropriately with a form...

{% highlight json %}
{ "question": "What's your favorite ice cream?",
  "choices": [ 
    { "name":"Vanilla",
      "votes":0
    },
    { "name":"Chocolate",
      "votes":0
    },
    { "name":"Vegan Peanut Butter Chip",
      "votes":0
    },
  ]
}
{% endhighlight %}
</section>

<section markdown="block">
### Database Dependencies

To use Mongo in your app, you'll need some dependencies.  In __package.json__:

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
</section>



<section markdown="block">
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
</section>


<section markdown="block">
### Hooking Up Mongo

In __app.js__

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
</section>


<section markdown="block">
### Retrieving the Poll

* in __index.js__, add another route...
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
</section>

<section markdown="block">
### And Displaying It....

In the __polls.jade__ template...

{% highlight js %}
extends layout

block content
  p #{poll.question}
  ul
    each choice, votes in poll.choices
      li #{choice.name} #{choice.votes}
{% endhighlight %}
</section>


<section markdown="block">
## Now With APIs...
</section>

<section markdown="block">
### API-izing it

Rather than render a template, give back json.  In __index.js__, simply change one line...
{% highlight js %}
router.get('/polls', function(req, res) {
    var db = req.db;
    var collection = db.get('polls');
    collection.find({},{},function(e,docs){
        res.json(docs)
    });
});
{% endhighlight %}
</section>

<section markdown="block">
### How About a Single Poll with a Parameter?

Use __:paramname__ and __req.params__...

{% highlight js %}
router.get('/poll/:id', function(req, res) {
    var db = req.db;
    console.log(req.params.id);
    var collection = db.get('polls');
    collection.find({"_id":req.params.id},{},function(e,docs){
        res.json(docs)
    });
});
{% endhighlight %}
</section>

<section markdown="block">
### Reclaiming Index

We want to include jquery and our own js file so that we can consume the service.  Add the last two lines to __layout.jade__:

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
</section>

<section markdown="block">
### Some Terrible JQuery (Sorryz!)

Fetch some data... (we'll define this function in the next slide
{% highlight js %}
$(document).ready(function() {
    getPolls();
});
{% endhighlight %}

</section>

<section markdown="block">
### More Terrible JQuery (Sorryz!)

{% highlight js %}
function getPolls() {
    $.getJSON( '/poll/53a13140ecffedecb5f18ca0', function( data ) {
        var pollResults = $('#voting-form');
        poll = data[0];
        pollResults.append("<p>" + poll.question + "</p>");
        var voteForm = $('<form action="/poll/vote"><input type="hidden" value=' + poll._id+  '></form>')
        $.each(poll.choices, function(i, choice){
           voteForm.append('<input type="radio" name="name" value="'+ choice.name + '">' + choice.name + ' ' + choice.votes + '<br>');
        });
        var voteButton = $('<input type="button" id="vote-button" value="Vote!">')
        voteButton.click(function(event){
                vote(poll._id, $('input[name=name]:checked').val());
        });
        voteForm.append(voteButton);
        pollResults.append(voteForm);
    });
};
{% endhighlight %}
</section>

<section markdown="block">
## Writing to the Database
</section>

<section markdown="block">
### Actually Run an Update on Mongo

{% highlight bash %}
db.polls.update({"_id":ObjectId("53a13140ecffedecb5f18ca0"), 
	"choices": {$elemMatch:{"name":"Chocolate"}}}, {$set: {"choices.$.votes": 1}})

db.polls.update({"_id":ObjectId("53a13140ecffedecb5f18ca0"), 
	"choices": {$elemMatch:{"name":"Chocolate"}}}, {$inc: {"choices.$.votes": 1}})

db.polls.update({"_id":ObjectId("53a13140ecffedecb5f18ca0"), 
	"choices": {$elemMatch:{"name":"Chocolate"}}}, {$inc: {"choices.$.votes": 1}})
{% endhighlight %}
</section>

<section markdown="block">
### Create a Route That Accepts POSTs

{% highlight js %}
router.post('/poll/vote', function(req, res) {
    var db = req.db;
    var collection = db.get('polls');
    console.log(req.body.id);
    console.log(req.body.name);
    collection.findAndModify({"_id":req.body.id, "choices": 
		{$elemMatch:{"name":req.body.name}}}, 
		{$inc: {"choices.$.votes": 1}}, function(e, docs) {
        res.json({'Error':e});
    });
});
{% endhighlight %}
</section>

<section markdown="block">
### Check Out Our New API!

Try curl to hit it!

{% highlight bash %}
curl -d id=53a13140ecffedecb5f18ca0\&name=Chocolate localhost:3000/poll/vote
{% endhighlight %}
</section>

<section markdown="block">
### And Some More Terrible JQuery

{% highlight js %}
function vote(id, choice) {
    $.ajax({
        type: 'POST',
        data: {'id':id, 'name':choice},
        url: '/poll/vote',
        dataType: 'JSON'
     }).done(function(response) {
        var pollResults = $('#voting-form');
        pollResults.empty();
		getPolls();
	 });
}
{% endhighlight %}
</section>
