var mongoose = require('mongoose');

/**
 * 客户模型
 */
var chanceSchema = new mongoose.Schema({

  // 类型 区分是 0 潜在客户还是 1 业务机会
  type: {
    type: Number,
    default: 0,
    required: true
  },
  //是否逻辑删除  false 未删除 true 删除
  // 放入回收站
  deleted: {
    type: Boolean,
    default: false
  },
  // 宝爸姓名
  fatherName: {
    type: String
  },
  // 宝爸电话
  fatherPhone: {
    type: String
  },
  // 公司单位
  fatherAddress: {
    type: String
  },
  // 宝妈姓名
  momName: {
    type: String
  },
  // 宝妈电话
  momPhone: {
    type: String
  },
  // 公司单位
  momAddress: {
    type: String
  },
  // 家庭住址
  homeAddress: {
    type: String
  },
  // 家庭电话
  homePhone: {
    type: String
  },
  // 潜在客户状态
  cusState: {
    type: String
  },
  // 潜在客户来源
  cusFrom: {
    type: String
  },
  // 推荐人
  recoMan: {
    type: String
  },
  // 联系时间提醒
  remindTime: {
    type: Date
  },
  // 备注
  remarks: {
    type: String
  },
  // 宝宝姓名
  childName: {
    type: String
  },
  // 宝宝性别
  childSex: {
    type: String
  },
  // 出生日期
  childBirthday: {
    type: Date
  },
  // 现就读学校
  childSchool: {
    type: String
  },
  // 宝宝性格
  childCharacter: {
    type: String
  },
  // 编号
  serialNum: {
    type: String
  },
  // 所有人
  ascription: {
    type: String
  },
  // 校区
  district: {
    type: String
  }

}, {
  collection: 'chance'
});

module.exports = mongoose.model('Chance', chanceSchema);