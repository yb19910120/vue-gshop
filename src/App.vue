<template>
  <div id="app">
     <router-view></router-view>
    <footers v-show="$route.meta.showFooter"></footers>
  </div>
</template>

<script>

  import footers from './components/Footer/Footer'


  export default {
  name: 'App',
  components: {
   footers
  },
   mounted(){
     this.$store.dispatch('getAddress')
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>
