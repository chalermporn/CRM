<template>
  <div id="intention-root">
  <navbar></navbar>

    <ol class="breadcrumb">
      <li><a href="#">业务机会</a></li>
    </ol>
    <div class="erjibtn">
      <button type="button" class="btn btn-success">新建</button>
      <button type="button" class="btn btn-danger">删除</button>
    </div>
    <component :is="componentId" :message="cdata" v-on:transCID="btnAction"></component>

    </div>
</template>

<script>
  import navbar from '../../components/navbar/'
  import listview from '../../components/list_view/'
  import newbuild from '../../components/newbuild/'

  import $ from 'webpack-zepto'
  export default {
    components: {
      navbar:navbar,
      listview:listview,
      newbuild:newbuild
    },
    mounted: function () {
      let me = this;
      $.ajax({
        type: 'GET',
        url: 'http://localhost/crmdata/intention.json',
        dataType: 'html',
        success: (res)=>{
        res = eval('(' + res + ')');
        me.cdata = res
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

      },
      btnAction:function(_o){
        switch (_o.name){
          case 'chakan':
            this.cdata = cdata1
            this.componentId = newbuild
            break;
          case 'bianji':
            break;
          case 'shanchu':
            break;
          case 'defult':
            this.componentId = listview
            break;
        }

      }

    },
    data: function () {
      return {
        cdata:'',
        componentId:listview
      }
    }
  }
</script>
