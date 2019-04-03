'use strict'

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = () => {
    return Product
        .find({
            active: true 
        }, 'title prince slug');
};

exports.getBySlug = (slug) => {
    return Product
        .findOne({
            slug: slug,
            active: true 
        }, 'title description prince slug tags');
};

exports.getByTag = (tag) => {
    return Product
        .find({
            tags: tag,
            active: true 
        }, 'title description prince slug tags');
};

exports.getById = (id) => {
    return Product
        .findById(id);
};

exports.post = (req) => {
    let product = new Product();
    product.title = req.body.title;
    product.slug = req.body.slug;
    product.description = req.body.description;
    product.prince = req.body.prince;
    product.active = req.body.active;
    product.tags = req.body.tags;

    return product
        .save();
};

exports.put = (req) => {
    return Product
        .findByIdAndUpdate(req.params.id, {
            $set: {
                title: req.body.title,
                description: req.body.description,
                prince: req.body.prince,
                slug: req.body.slug
            }
        });
};

exports.delete = (id) => {
    return Product
        .findOneAndDelete(id)
};