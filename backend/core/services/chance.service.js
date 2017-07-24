var async = require('async');
var _ = require('lodash');
var categoriesModel = require('../models/chance.model');
var mongoose = require('mongoose');


exports.all = function (callback) {
    categoriesModel.find({type:0,deleted:false}).exec(function (err, all) {
        callback(err, all);
    });
};



/**
 * 保存
 */
exports.create = function (options, callback) {
    new categoriesModel(options.data).save(function (err, content) {
        callback(err, content);
    })
};

/**
 * 删除
 */
exports.remove = function (options, callback) {

};