<template>
  <div id="CHANCEROOT">
    <navbar></navbar>
    <ol class="breadcrumb">
      <li><a href="#">潜在客户</a></li>
      <li class="active">Data</li>
    </ol>
    <div class="erjibtn">
      <button type="button" @click="gopage" class="btn btn-success">新建</button>
      <!--<button type="button" class="btn btn-danger">删除</button>-->
    </div>
    <router-view></router-view>

  </div>

</template>

<script>
  import navbar from '@/components/navbar/'
  import axios from 'axios'

  export default {
      name:'chance',
    data: function () {
      return {
        listData:'',
        cdata:'',
        nbType:'',
        message:{}
      }
    },
    components:{
      navbar:navbar
    },
    mounted: function () {
          return;
      let me = this;
      axios.get('http://localhost/crm/crmdata/chance.json')
        .then(function (r) {
          me.listData = res
        })
        .catch(function (r) {
          //var error = JSON.parse(res.responseText);
          me.$alert(r.data);
        })

    },
    methods:{
      gopage:function () {
          this.$router.replace({name:'addChance'})
      },
      getCurMessage:function(){
        let me = this;
//        $.ajax({
//          type: 'GET',
//          url: 'http://localhost/crmdata/customerInfo.json',
//          dataType: 'html',
//          headers:{
//            'Cache-control':'no-cache'
//          },
//          success: (res)=>{
//          res = eval('(' + res + ')');
//          me.cdata = res
//        }
//      })
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

    }
  }
</script>
