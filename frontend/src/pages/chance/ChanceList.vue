<template>
  <div class="ListViewRoot">
    <div class="table-responsive cpdding">
      <table class="table table-striped table-bordered table-hover">
        <thead>
        <tr>
          <th>#</th>
          <th>操作</th>
          <th>编号</th>
          <th>孩子姓名</th>
          <th>电话</th>
          <th>客户来源</th>
          <th>最近联系时间</th>
          <th>联系内容</th>
          <th>学员所有人</th>
          <th>校区</th>
        </tr>
        </thead>
        <tbody>
        <tr  v-for="(m,index) in cusMessageList">
          <td>{{index+1}}</td>
          <td style="width: 250px;">
            <button @click="checkData(m)" type="button"  class="btn btn-default">查看</button>
            <button @click="editData(m)"  type="button" class="btn btn-default">编辑</button>
            <button @click="deleteData(m.serialNum)" type="button"  class="btn btn-default">删除</button>
            <button type="button"  class="btn btn-default">转业务机会</button>
          </td>
          <td>{{m.serialNum}}</td>
          <td>{{m.childName}}</td>
          <td>{{m.Phone}}</td>
          <td>{{m.From}}</td>
          <td>{{m.recentTime}}</td>
          <td>{{m.recentContent}}</td>
          <td>{{m.ascription}}</td>
          <td>{{m.district}}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <nav>
      <ul class="pagination">
        <li><a href="#">&laquo;</a></li>
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li><a href="#">&raquo;</a></li>
      </ul>
    </nav>


  </div>

</template>

<script>
  import api from '@/api.js'
  import axios from 'axios'
export default {
  name:'chancelist',
  data () {
    return {
      cusMessageList:[
        {
          "serialNum": "12345",
          "childName": "小强",
          "Phone": "15811112222",
          "From": "WebIn",
          "recentTime": "2016-05-09",
          "recentContent": "小朋友今天表现很好",
          "ascription": "Amy",
          "district": "沙城",
          fatherName:'牛翼飞',
          fatherPhone:'15810141625',
          fatherAdd:'北京公司',
          momName:'祝建兰',
          momPhone:'13520012637',
          momAdd:'公司公司',
          homeAdd:'富达园',
          homePhone:'03130313',
          cusState:'潜在客户状态',
          cusFrom:'来源',
          recoMan:'推荐人',
          remindTime:'联系时间',
          remarks:'备注备注备注备注备注备注备注备注备注备注备注备注备注备注',
          childName:'牛严青',
          childSex:'男',
          childBirthday:'1989-03-16',
          childSchool:'就读学校',
          childCharacter:'性格性格'
        },
        {
          "serialNum": "12345",
          "childName": "小强",
          "Phone": "15811112222",
          "From": "WebIn",
          "recentTime": "2016-05-09",
          "recentContent": "小朋友今天表现很好",
          "ascription": "Amy",
          "district": "沙城",
          fatherName:'牛翼飞',
          fatherPhone:'15810141625',
          fatherAdd:'北京公司',
          momName:'祝建兰',
          momPhone:'13520012637',
          momAdd:'公司公司',
          homeAdd:'富达园',
          homePhone:'03130313',
          cusState:'潜在客户状态',
          cusFrom:'来源',
          recoMan:'推荐人',
          remindTime:'联系时间',
          remarks:'备注备注备注备注备注备注备注备注备注备注备注备注备注备注',
          childName:'牛严青',
          childSex:'男',
          childBirthday:'1989-03-16',
          childSchool:'就读学校',
          childCharacter:'性格性格'
        },
      ]
    }
  },
  methods:{
    checkData:function (data) {
      this.$router.push({name:'checkChance',params:data})
    },
    editData:function (data) {
      this.$router.push({name:'editChance',params:data})
    },
    deleteData:function (id) {

    }
  },
  watch:{
  },
  props: {
    message:{}
  },
  created:function () {
      var me = this
//    axios.get(api.chanceList)
//      .then(function (res) {
//        me.cusMessageList = res.data
//      })
  }

}
</script>

<style>

.cpdding{
  padding:0px 30px;}
</style>
