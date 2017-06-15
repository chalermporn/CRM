<template>
  <div class="SeeInfoRoot" @click="changeCID">
    {{message}}
  </div>

</template>

<script>
  export default {
    methods:{
      changeCID:function(_o){
        let o ={
          name:'defult',
          tid:''
        }
        this.$emit('transCID',o)
      }

    },
    props: ['message'],
    data: function () {
      return {
      }
    }
  }
</script>

<style scoped>

</style>
