
<template>
  <div id="CheckChance" class="checkchance">
    <div @click="backList" class="gobacktolist">返回列表</div>
    <div class="panel panel-info">
      <div class="panel-heading">潜在客户信息</div>
      <div class="panel-body">
        <div class="inputCont container-fluid">
          <div class="form-horizontal">
            <div class="form-group">
              <label for="fatherName"  class="col-sm-1 control-label">宝爸姓名</label>
              <div class="col-sm-2">
                <p id="fatherName" class="form-control" >{{message.fatherName}}</p>
              </div>

              <label for="fatherPhone" class="col-sm-1 control-label">宝爸电话</label >
              <div class="col-sm-2">
                <p class="form-control" id="fatherPhone">{{message.fatherPhone}}</p>
              </div>
              <label for="fatherAdd" class="col-sm-1 control-label">公司单位</label>
              <div class="col-sm-4">
                <p  id="fatherAdd" >{{message.fatherAdd}}</p>
              </div>

            </div>

            <div class="form-group">
              <label  for="momName" class="col-sm-1 control-label">宝妈姓名</label>
              <div class="col-sm-2">
                <p   id="momName" >{{message.momName}}</p>
              </div>

              <label  for="momPhone" class="col-sm-1 control-label">宝妈电话</label>
              <div class="col-sm-2">
                <p  id="momPhone" >{{message.momPhone}}</p>
              </div>
              <label for="momAdd" class="col-sm-1 control-label">公司单位</label>
              <div class="col-sm-4">
                <p  id="momAdd">{{message.momAdd}}</p>
              </div>

            </div>
            <div class="form-group">
              <label for="homeAdd"  class="col-sm-1 control-label">家庭住址</label>
              <div class="col-sm-5">
                <p  id="homeAdd">{{message.homeAdd}}</p>
              </div>

              <label for="homePhone" class="col-sm-1 control-label">家庭电话</label >
              <div class="col-sm-2">
                <p id="homePhone">{{message.homePhone}}</p>
              </div>
            </div>
            <br>
            <div class="form-group">
              <label   class="col-sm-1 control-label">潜在客户状态</label>
              <div class="col-sm-2">
                <p  id="cusState" >{{message.cusState}}</p>
              </div>
              <label   class="col-sm-1 control-label">潜在客户来源</label>
              <div class="col-sm-2">
                <p   id="cusFrom" >{{message.cusFrom}}</p>
              </div>

            </div>

            <div class="form-group">
              <label for="recoMan"  class="col-sm-1 control-label">推荐人</label>
              <div class="col-sm-2">
                <p  id="recoMan">{{message.recoMan}}</p>
              </div>
              <label for="remindTime" class="col-sm-1 control-label">联系时间提醒</label>
              <div class="col-sm-2">
                <p  id="remindTime">{{message.remindTime}}</p>
              </div>
            </div>

            <div class="form-group">
              <label   class="col-sm-1 control-label">备注</label>
              <div class="col-sm-5">
                <p   id="remarks" >{{message.remarks}}</p>
              </div>
            </div>
          </div>
        </div> <!-- end of <div class="inputCont container-fluid"> -->

      </div>

    </div>

    <div class="panel panel-info">
      <div class="panel-heading">宝宝信息</div>
      <div class="panel-body">
        <div class="inputCont  container-fluid">
          <div class="form-horizontal">
            <div class="form-group">
              <label   class="col-sm-1 control-label">宝宝姓名</label>
              <div class="col-sm-2">
                <p></p>
              </div>
              <label   class="col-sm-1 control-label">宝宝性别</label>
              <div class="col-sm-2">
                <select class="form-control" name="" id="">
                  <option value="">男</option>
                  <option value="">女</option>
                  <option value="">--无--</option>
                </select>
              </div>
              <label   class="col-sm-1 control-label">出生日期</label>
              <div class="col-sm-2">
                <input type="text" class="form-control" placeholder="" >
              </div>
            </div>
            <div class="form-group">
              <label   class="col-sm-1 control-label">现就读学校</label>
              <div class="col-sm-5">
                <input type="text" class="form-control" placeholder="" >
              </div>
              <label   class="col-sm-1 control-label">宝宝性格</label>
              <div class="col-sm-5">
                <input type="text" class="form-control" placeholder="" >
              </div>
            </div>


          </div>

        </div>
      </div>

    </div>

    <div class="panel panel-info">
      <div class="panel-heading">联系记录</div>
      <div class="panel-body"></div>
    </div>
    <div class="panel panel-info">
      <div class="panel-heading">其他信息</div>
      <div class="panel-body">
        <div class="inputCont container-fluid">
          <div class="form-horizontal">

            <div class="form-group">
              <label   class="col-sm-1 control-label">其他信息1</label>
              <div class="col-sm-6">
                <input type="text" class="form-control" placeholder="" >
              </div>
            </div>
            <div class="form-group">
              <label   class="col-sm-1 control-label">其他信息2</label>
              <div class="col-sm-6">
                <input type="text" class="form-control" placeholder="" >
              </div>
            </div>
            <div class="form-group">
              <label   class="col-sm-1 control-label">其他信息3</label>
              <div class="col-sm-6">
                <input type="text" class="form-control" placeholder="" >
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>

  </div>

</template>

<script>

  export default {
    name:'checkchance',
//    components: {
//      isinput
//    },
    methods:{
      editObj:function(){
        return this.pagetype
      },
      backList: function () {
        let o={}
        o.name = ''
        this.$emit('transCID',o)
      }
    },
    props:{
      message:{},
      pagetype:{}
    },
    data: function () {
      return {
      }
    }
  }
</script>
<style scoped>
  .inputCont .input-group{ margin-top: 5px;}
  .gobacktolist:hover{ cursor: pointer}
</style>
