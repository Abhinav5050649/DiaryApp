const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    blogNumber: {
        type: String, 
        required: true,
    },
    blogContent: {
        type: String,
        required: true,
    },
});

const blogs = mongoose.model('blogs', blogSchema);

module.exports = blogs;