<template>
  <div id="CHANCEROOT">
    <navbar></navbar>
    <ol class="breadcrumb">
      <li><a href="#">潜在客户</a></li>
      <li class="active">Data</li>
    </ol>
    <div class="erjibtn">
      <button type="button" @click="btnAction({name:''})" class="btn btn-success">新建</button>
      <button type="button" class="btn btn-danger">删除</button>
    </div>
    <component :is="componentId" v-bind="{'pagetype':nbType}"  :message="mydata" v-on:transCID="btnAction"></component>
  </div>

</template>

<script>
  import navbar from '../../components/navbar/'
  import listview from '../../components/list_view/'
  import newbuild from '../../components/newbuild/'
  import $ from 'webpack-zepto'

  export default {
    components:{
      navbar:navbar,
      listview:listview,
      newbuild:newbuild
    },
    computed:{
      mydata:function(){
        //点返回列表 会执行一次，点查看的时候会执行两次 why？
        console.log(this.componentId)
        return this.componentId == listview ? this.listData : this.cdata
      }
    },
    mounted: function () {
      let me = this;
      $.ajax({
        type: 'GET',
        url: 'http://localhost/crmdata/chance.json',
        dataType: 'html',
        success: (res)=>{
        res = eval('(' + res + ')');
        me.listData = res
      },
      error: (res)=>{
        var error = JSON.parse(res.responseText);
        this.$alert(error.error_msg);
        return false;
      }
    })

    },
    methods:{
      getCurMessage:function(){
        let me = this;
        $.ajax({
          type: 'GET',
          url: 'http://localhost/crmdata/customerInfo.json',
          dataType: 'html',
          headers:{
            'Cache-control':'no-cache'
          },
          success: (res)=>{
          res = eval('(' + res + ')');
          me.cdata = res
        }
      })
      },
      btnAction:function(_o){
        this.nbType = _o.name
        console.log(_o.name)
        switch (_o.name){
          case 'check':
            this.getCurMessage()
            this.componentId = newbuild
            break;
          case 'edit':
            this.getCurMessage()
            this.componentId = newbuild
            break;
          case 'new':
            this.componentId = newbuild
            break;
          case '':
            this.componentId = listview
            break;
        }

      }

    },
    data: function () {
      return {
        listData:'',
        cdata:'',
        nbType:'',
        componentId:listview
      }
    }
  }
</script>
