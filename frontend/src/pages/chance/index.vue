<template>
  <div id="CHANCEROOT">
    <navbar></navbar>
    <ol class="breadcrumb">
      <li><a href="#">潜在客户</a></li>
      <li class="active">Data</li>
    </ol>
    <div class="erjibtn">
      <button type="button" @click="componentId=editchance" class="btn btn-success">新建</button>
      <!--<button type="button" class="btn btn-danger">删除</button>-->
    </div>
    <component :is="componentId"  :message="mydata" ></component>
  </div>

</template>

<script>
  import navbar from '../../components/navbar/'
  import chancelist from './ChanceList'
  import editchance from './EditChance'
  import checkchance from './CheckChance'

  import axios from 'axios'

  export default {
      name:'chance',
    components:{
      navbar:navbar,
      chancelist:chancelist,
      checkchance:checkchance,
      editchance:editchance
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
      axios.get('http://localhost/crmdata/chance.json')
        .then(function (r) {
          me.listData = res
        })
        .catch(function (r) {
          //var error = JSON.parse(res.responseText);
          me.$alert(r.data);
        })

    },
    methods:{
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

    },
    data: function () {
      return {
        listData:'',
        cdata:'',
        nbType:'',
        componentId:chancelist
      }
    }
  }
</script>
