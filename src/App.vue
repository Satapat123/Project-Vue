<template>
  <div>
    <router-view/>
    <Footer/>
  </div>
  </template>

<script>
import Footer from '@/components/Bottombar.vue'

export default {
  components: { 
    Footer,
},

}
</script>

<style>

</style>