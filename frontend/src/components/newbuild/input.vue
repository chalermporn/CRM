<template>
  <div>

    <p v-if="itype == 'check' && tag != 'textarea'"  :id="id" class="form-control" >{{idata}}</p>
    <input v-if="itype == 'edit' && tag == ''" class="form-control" type="text" :value="idata" :id="id">
    <input v-if="itype == '' && tag == ''" class="form-control" type="text" :id="id">

    <select v-if="(itype == '' || itype == 'edit') && tag == 'select'" class="form-control"  :id="id">
      <option value="">--无--</option>
      <option value="">刚分配</option>
      <option value="">尚未接触</option>
      <option value="">需要再次联系</option>
      <option value="">年龄太小</option>
      <option value="">年龄太大</option>
      <option value="">我已放弃</option>
      <option value="">无</option>
      <option value="">无</option></select>

    <p v-if="itype == 'check' && tag == 'textarea'"  :id="id" class="form-control" >{{idata}}</p>
    <textarea v-if="itype == '' && tag == 'textarea'" :id="id" class="form-control" rows="5"></textarea>
    <textarea v-if="itype == 'edit' && tag == 'textarea'" :id="id" class="form-control" rows="5">{{idata}}</textarea>

  </div>

</template>

<script>
export default {
  props:{
    itype:{
    },
    id:{},
    idata:{},
    tag:{
      default:''
    }
  },
  data () {
    return {
      msg: 'Hello Vue!',
      cin:''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
