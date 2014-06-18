var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/hello', function(req, res) {
  res.render('hello', { message: 'hi there!' });
});

router.get('/polls', function(req, res) {
    var db = req.db;
    var collection = db.get('polls');
    collection.find({},{},function(e,docs){
        res.json(docs)
    });
});

router.get('/poll/:id', function(req, res) {
    var db = req.db;
    console.log(req.params.id);
    var collection = db.get('polls');
    collection.find({"_id":req.params.id},{},function(e,docs){
        res.json(docs)
    });
});

router.post('/poll/vote', function(req, res) {
    var db = req.db;
    var collection = db.get('polls');
    console.log(req.body.id);
    console.log(req.body.name);
    collection.findAndModify({"_id":req.body.id, "choices": {$elemMatch:{"name":req.body.name}}}, {$inc: {"choices.$.votes": 1}}, function(e, docs) {
        res.json({'Error':e});
    });
});
module.exports = router;

