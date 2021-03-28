var express = require('express');
var axios = require('axios');
var comment = require('../model/comment');
var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
  try {
    console.log('--inside');
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
    await comment.insertMany(response.data)
  } catch (err) {
    console.log('---err', err);
  }
  res.render('index', { title: 'Express' });
});

module.exports = router;
