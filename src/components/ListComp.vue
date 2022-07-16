<template>
  <div v-for="(data, num) in blog" :key="num">
    <h5>{{data.title}}</h5>
    <p>{{data.date}}</p>
  </div>
</template>
<script>
export default {
  name :'ListComp',
  props : {
    blog : Array
  }
}
</script>
<style>

</style>