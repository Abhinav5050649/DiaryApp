const express = require('express');
const { default: mongoose } = require('mongoose');
const { findById } = require('../models/bgs');
const router = express.Router();
const blogs = require('../models/bgs');
import('node-fetch');

router.get('/blogs/gt', (req, res, next) => {
    blogs.find({}, 'blogContent')
         .then((data) => res.json(data))
         .catch(next);
});

router.post('/blogs/pst', (req, res, next) => {
    if (req.body.blogNumber)
    {
        blogs.create(req.body)
             .then((data) => res.json(data))
             .catch(next);

        //console.log(data);
    }
    else
    {
        res.json({
            error: `Data error!`
        });
    }
});

router.put(`/blogs/pt/:id`, (req, res, next) => {
    blogs.findByIdAndUpdate(req.params.id, req.body.blogContent)
         .then((data) => res.json(data))
         .catch((err) => res.json({
            error: `Error!`
         }));

    // const obj = blogs.findById(req.params._id)

    // if (obj)
    // {
    //     blogs.findByIdAndUpdate(req.params._id, req.body)
    //         .then((data) => res.json(data))
    //         .catch(next);
    // }
    // else{
    //     res.json({
    //         error: `Data error!`
    //     });
    // }
});

//To work on
router.delete('/blogs/del/:id', (req, res, next) => {
    blogs.findByIdAndDelete(req.params.id, req.body)
         .then((data) => res.json(data))
         .catch((err) => res.json({
            error: `Error!`
         }));
});

module.exports = router;