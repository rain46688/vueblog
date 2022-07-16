<template>
  <div v-for="(data, num) in blog" :key="num">
    <router-link :to="{ name: 'Detail', params: { number: data.number }}">{{data.title}}</router-link>
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