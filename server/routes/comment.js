const express = require('express');
const router = express.Router();
const CommentModel = require('../model/comment')

/* GET Comment listing. */
router.get('/', async (req, res, next) => {
  const { page, limit = 10 } = req.query
  const skipLimitQuery = {
    limit: +limit,
  };
  if (Number(+page) >= 1) {
    skipLimitQuery.skip = skipLimitQuery.limit * page - skipLimitQuery.limit;
  } else {
    skipLimitQuery.skip = 0;
  }
  const getAllComment = await CommentModel.find({})
    .skip(skipLimitQuery.skip)
    .limit(skipLimitQuery.limit)
    .sort({ '_id': -1 })
    .lean().exec()
  res.json(200, { data: getAllComment })
});


module.exports = router;
