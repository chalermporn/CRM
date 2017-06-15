<template>
  <div class="ListViewRoot">
    <div class="table-responsive cpdding">
      <table class="table table-striped table-bordered table-hover">
        <thead>
        <tr>
          <th>#</th>
          <th>操作</th>
          <th v-for="n in message.cusMessageTitle">{{n}}</th>
        </tr>
        </thead>
        <tbody  @click="caozuo($event)">
        <tr  v-for="(m,index) in message.cusMessageList">
          <td>{{index+1}}</td>
          <td><button v-bind="{'data-id':m.serialNum}" type="button" name="check" class="btn btn-default">查看</button><button  v-bind="{'data-id':m.serialNum}" name="edit" type="button" class="btn btn-default">编辑</button>
            <button  v-bind="{'data-id':m.serialNum}" type="button" name="delete" class="btn btn-default">删除</button></td>
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
export default {
  name:'list_view_com',
  methods:{
    caozuo:function(_e,_m){
      let t = _e.target
      let tid = t.dataset.id
      let o ={}
      o.tid=tid
      if(t.nodeName == 'BUTTON'){
        switch (t.name){
          case 'check':
            o.name='check'

            this.$emit('transCID',o)
                break;
          case 'edit':
            o.name='edit'

            this.$emit('transCID',o)
                break;
          case 'delete':

                break;
        }
      }
      return false
    }
  },
  watch:{
  },
  props: {
    message:{}
  },
  data () {
  return {}
  }
}
</script>

<style>

.cpdding{
  padding:0px 30px;}
</style>
