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
          <td>
            <button @click="checkData(m.serialNum)" type="button"  class="btn btn-default">查看</button>
            <button @click="editData(m.serialNum)"  type="button" class="btn btn-default">编辑</button>
            <button @click="deleteData(m.serialNum)" type="button"  class="btn btn-default">删除</button>
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
          "district": "沙城"
        },
        {
          "serialNum": "12345",
          "childName": "小强",
          "Phone": "15811112222",
          "From": "WebIn",
          "recentTime": "2016-05-09",
          "recentContent": "小朋友今天表现很好",
          "ascription": "Amy",
          "district": "沙城"
        }
      ]
    }
  },
  methods:{
    checkData:function (id) {

    },
    editData:function (id) {

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
