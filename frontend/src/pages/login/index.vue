<template>
  <div class="LoginRoot">
    <div class="container">
    <div class="row">
      <div class="inputBox">
        <div class="col-md-4 col-md-offset-4">
          <form role="form" id="myform">
            <div class="form-group"  id="myform1">
              <label for="OrgName">组织机构名称</label>
                <input type="text" class="form-control" name="orgName" id="OrgName"  placeholder="组织机构名称">

            </div>
            <div class="form-group">
              <label for="LoginName">账号</label>
              <input type="text" class="form-control" name="loginName" id="LoginName"  placeholder="请输入账号">
            </div>
            <div class="form-group">
              <label for="LoginPassword">密码</label>
              <input type="password" class="form-control" name="loginPassword" id="LoginPassword"  placeholder="请输入密码">
            </div>
            <button type="button" id="subBtn" @click="tijiao" class="btn btn-default">提交</button>
          </form>
        </div>
      </div>

    </div>
    </div>

  </div>

</template>

<script>
//validtion
  import $ from 'webpack-zepto'
// 登录页面提交数据，密码加密之后传到后台验证，
// 后台验证成功之后，返回状态码,sessionID 等
// 前台拿到正确的返回码等信息之后，做页面跳转。记录登录信息。记录时效可长可短。

var userMap=[ // 模拟后台数据 暂时忽略请求过程
  {'id':1,'name':'admin','password':'admin'},
  {'id':2,'name':'amy','password':'amy'},
  {'id':3,'name':'guest','password':'guest'},
  {'id':4,'name':'f','password':'f'}
]
export default {

  methods:{
    tijiao:function(){
      var oname = $('#OrgName').val(),uname = $('#LoginName').val(),pawd =  $('#LoginPassword').val();
      var r = ''
        userMap.some(function(_a){
        if(_a.name == uname && _a.password == pawd){
          r =  _a.id
          return true
        }

      })
      if(r!=''){
        this.$router.push('home')
        // 需要有是否登录过得逻辑判断
      }
    }
  },
  data:function () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
