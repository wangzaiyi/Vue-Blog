<template>
  <div id="app" :class="{'apploaded':loaded,'app-to-left':$route.path=='/us'}">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      loaded:false
    }
  },
  mounted(){
    window.onload=()=>{this.loaded=true}
    document.title=this.$route.name
  }
}
</script>

<style>
body{
    transition: background 0.5s;
}
body,html{
  padding: 0;
  margin: 0;
  height: 100%;
  transition: opacity 0.8s linear;
}
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  filter: blur(8px);    
  transition: filter 1.6s linear;
  pointer-events: none;
  transition:margin 1s,visibility 1s;
}
#app,.main,body{
    position: relative;
    z-index: -5;
}
.apploaded{
  filter: none!important;
  pointer-events: inherit!important;
}
.app-to-left{
  margin-left:-100%;
  width:100%;
}
.app-to-left .navi{
  opacity: 0;
  transition: opacity 0.3s;
}
ul{
  padding: 0;
  list-style: none;
}
</style>
