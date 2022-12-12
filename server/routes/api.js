const express = require('express');
const router = express.Router();
const blogs = require(`../models/bgs`);

router.get('/blogs', (req, res, next) => {
    blogs.find({}, blogNumber)
         .then((data) => res.json(data))
         .catch(next);
});

router.post('/blogs', (req, res, next) => {
    if (req.body.blogDate)
    {
        blogs.create(req.body)
             .then((data) => res.json(data))
             .catch(next);

        console.log(data);
    }
    else
    {
        res.json({
            error: `Data error!`
        });
    }
});

router.delete('/blogs/del/:id', (req, res, next) => {
    blogs.findOneAndDelete({_id: req.params.id})
         .then((data) => res.json(data))
         .catch(next);
});

module.exports = router;