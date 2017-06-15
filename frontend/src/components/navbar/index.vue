<template>
  <div class="nav-list">

    <ul class="nav nav-tabs" role="tablist">
      <router-link tag="li" active-class="active" role="presentation" to="/home"><a>首页</a></router-link>
      <router-link tag="li" active-class="active" role="presentation" to="/chance"><a>潜在客户</a></router-link>
      <router-link tag="li" active-class="active" role="presentation" to="/intention"><a>业务机会</a></router-link>
      <router-link tag="li" active-class="active" role="presentation" to="/course"><a>课程安排</a></router-link>
      <router-link tag="li" active-class="active" role="presentation" to="/ranking"><a>排行榜</a></router-link>
    </ul>
    <!--
    <div class="erjibtn">
      <button type="button" class="btn btn-success">新建</button>
      <button type="button" class="btn btn-danger">删除</button>
    </div>
    <ol class="breadcrumb">
      <li><a href="#">Home</a></li>
      <li><a href="#">Library</a></li>
      <li class="active">Data</li>
    </ol>
    -->

  </div>
</template>

<script>
  /*
  import {Tabs} from 'element-ui'
  import 'element-ui/lib/theme-default/tabs.css';
  import Vue from 'vue'
  Vue.component(Tabs.name, Tabs)
*/
  export default {
    data: function () {
      return {}
    },
    methods:{
      handleselect:function(){

      }
    }
  }
  // class="active"
</script>
<style>
  .nav-list .breadcrumb{ background-color: #fff;}
</style>
