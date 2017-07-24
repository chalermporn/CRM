var _ = require('lodash');
var categoriesService = require('../services/chance.service');

/**
 * 查询所有潜在客户
 */
exports.all = function (req, res) {
  categoriesService.all(function(err,all){
    if(err){
      return res.status(500).end();
    }else {
      res.status(200).json(all);
    }
  })
};

/**
 * 创建
 */
exports.create = function (req, res) {
  console.log(req.body)
  categoriesService.create({data:req.body},function(err,content){
    if (err) {
      return res.status(500).end();
    }

    res.status(204).end();
  })
};

/**
 * 更新
 */
exports.update = function (req, res) {

};

/**
 * 删除
 */
exports.delete = function (req, res) {

};
/**
 * 转换状态
 */
exports.transformation = function (req, res) {

};
