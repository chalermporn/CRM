<template>
  <div class="home-root" id="HOMEPAGE">
    <navbar></navbar>
    <div class="home-page">
      <div class="data-report">
        <ul>
          <li>
            <p>今日约谈客户：1111</p>

            <p>同比增长：100%</p>
          </li>
          <li>
            <p>昨天约谈客户：3333</p>

            <p>同比增长：100%</p>
          </li>
          <li>
            <p>第一季度业绩：88888</p>

            <p>同比增长：100%</p>
          </li>
          <li>
            <p>客户满意度：100%</p>

            <p>同比增长：100%</p>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
  import navbar from '../../components/navbar/'
export default {
  components:{
    navbar
  }
}
</script>
<style scoped>
  .home-root{
    height:100%;
  }
.home-page{
  width: 100%;
}
.home-page .data-report li{
  float: left; width:300px;
  height:300px; margin-right: 10px; margin-bottom:10px;
  border:1px solid #0b97c4;
}
</style>
