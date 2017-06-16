<style scoped>
  .inputCont .input-group{ margin-top: 5px;}
  .gobacktolist:hover{ cursor: pointer}
</style>

<template>
  <div class="LoginRoot">
    <div @click="backList" class="gobacktolist">返回列表</div>
    <div class="panel panel-info">
      <div class="panel-heading">潜在客户信息</div>
      <div class="panel-body">
        <div class="inputCont container-fluid">
          <div class="form-horizontal">
            <div class="form-group">
              <label for="fatherName"  class="col-sm-1 control-label">宝爸姓名</label>
              <div class="col-sm-2">
                <isinput  :itype="editObj()"  id="fatherName" v-bind="{'idata':message.fatherName}" ></isinput>
              </div>

              <label for="fatherPhone" class="col-sm-1 control-label">宝爸电话</label >
              <div class="col-sm-2">
                <isinput :itype="editObj()" id="fatherPhone"  v-bind="{'idata':message.fatherPhone}"></isinput>
              </div>
              <label for="fatherAdd" class="col-sm-1 control-label">公司单位</label>
              <div class="col-sm-4">
                <isinput :itype="editObj()" id="fatherAdd" v-bind="{'idata':message.fatherAdd}"></isinput>
              </div>

            </div>

            <div class="form-group">
              <label  for="momName" class="col-sm-1 control-label">宝妈姓名</label>
              <div class="col-sm-2">
                <isinput  :itype="editObj()"  id="momName" v-bind="{'idata':message.momName}"></isinput>
              </div>

              <label  for="momPhone" class="col-sm-1 control-label">宝妈电话</label>
              <div class="col-sm-2">
                <isinput  :itype="editObj()"  id="momPhone" v-bind="{'idata':message.momPhone}"></isinput>
              </div>
              <label for="momAdd" class="col-sm-1 control-label">公司单位</label>
              <div class="col-sm-4">
                <isinput  :itype="editObj()"  id="momAdd" v-bind="{'idata':message.momAdd}"></isinput>
              </div>

            </div>
            <div class="form-group">
              <label for="homeAdd"  class="col-sm-1 control-label">家庭住址</label>
              <div class="col-sm-5">
                <isinput  :itype="editObj()"  id="homeAdd" v-bind="{'idata':message.homeAdd}"></isinput>
              </div>

              <label for="homePhone" class="col-sm-1 control-label">家庭电话</label >
              <div class="col-sm-2">
                <isinput  :itype="editObj()"  id="homePhone" v-bind="{'idata':message.homePhone}"></isinput>
              </div>
            </div>
            <br>
            <div class="form-group">
              <label   class="col-sm-1 control-label">潜在客户状态</label>
              <div class="col-sm-2">
                <isinput  :itype="editObj()"  id="cusState" v-bind="{'idata':message.cusState,'tag':'select'}"></isinput>
              </div>
              <label   class="col-sm-1 control-label">潜在客户来源</label>
              <div class="col-sm-2">
                <isinput  :itype="editObj()"  id="cusFrom" v-bind="{'idata':message.cusFrom,'tag':'select'}"></isinput>
              </div>

            </div>

            <div class="form-group">
              <label for="recoMan"  class="col-sm-1 control-label">推荐人</label>
              <div class="col-sm-2">
                <isinput  :itype="editObj()"  id="recoMan" v-bind="{'idata':message.recoMan}"></isinput>
              </div>
              <label for="remindTime" class="col-sm-1 control-label">联系时间提醒</label>
              <div class="col-sm-2">
                <isinput  :itype="editObj()"  id="remindTime" v-bind="{'idata':message.remindTime}"></isinput>
              </div>
            </div>

            <div class="form-group">
              <label   class="col-sm-1 control-label">备注</label>
              <div class="col-sm-5">
                <isinput  :itype="editObj()"  id="remarks" v-bind="{'idata':message.remarks,'tag':'textarea'}"></isinput>
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
                <isinput  :itype="editObj()"  id="remarks" v-bind="{'idata':message.remarks}"></isinput>
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
  import isinput from './input.vue'

  export default {
    name:'editchance',
    components: {
      isinput
    },
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
