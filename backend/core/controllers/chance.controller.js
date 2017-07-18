var _ = require('lodash');
var categoriesService = require('../services/categories.service');

/**
 * 查询分类
 * @param {Object} req
 *        {Object} req.query
 * @param {Object} res
 */
exports.query = function (req, res) {
  var query = req.query;
};

/**
 * 查询指定分类
 * @param {Object} req
 *        {MongoId} req.params._id
 * @param {Object} res
 */
exports.one = function (req, res) {

};

/**
 * 创建分类
 * @param {Object} req
 *        {String} req.body.type
 *        {String} req.body.name
 *        {Boolean} req.body.isShow
 *        {Number} req.body.sort
 * @param {Object} res
 */
exports.create = function (req, res) {

};

/**
 * 更新分类
 * @param {Object} req
 *        {MongoId} req.params._id
 *        {String} req.body.type
 *        {String} req.body.name
 *        {Boolean} req.body.isShow
 *        {Number} req.body.sort
 * @param {Object} res
 */
exports.update = function (req, res) {

};

/**
 * 删除分类
 * @param {Object} req
 *        {MongoId} req.params._id
 * @param {Object} res
 */
exports.remove = function (req, res) {

};