'use strict'

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = async() => {
    const res = await Product.find({
        active: true 
    }, 'title prince slug');
    return res;
};

exports.getBySlug = async(slug) => {
    const res = await Product.findOne({
        slug: slug,
        active: true 
    }, 'title description prince slug tags');
    return res;
};

exports.getByTag = async(tag) => {
    const res = await Product.find({
        tags: tag,
        active: true 
    }, 'title description prince slug tags');
    return res;
};

exports.getById = async(id) => {
    const res = await Product.findById(id);
    return res;
};

exports.post = async(req) => {
    let product = new Product();
    product.title = req.body.title;
    product.slug = req.body.slug;
    product.description = req.body.description;
    product.prince = req.body.prince;
    product.active = req.body.active;
    product.tags = req.body.tags;

    await product.save();
};

exports.put = async(req) => {
    await Product.findByIdAndUpdate(req.params.id, {
        $set: {
            title: req.body.title,
            description: req.body.description,
            prince: req.body.prince,
            slug: req.body.slug
        }
    });
};

exports.delete = async(req) => {
    await Product.findByIdAndDelete(req.params.id);
};