<template>
  <div class="main">
    <transition name="fade">
      <!--要改成从上向下滑动-->
      <UglyLoginBox></UglyLoginBox>
    </transition>
    <transition name="fade">
      <videoBackground v-if="$route.path=='/'"></videoBackground>
    </transition>
    <h1 class="site-title" :class="{'site-title-main':$route.path=='/'}"><span v-for="word in msg.split(' ')">{{' '+word+' '}}</span>
    </h1>
    <navi :isBar="$route.path!='/'" :items="naviData" ></navi>
    <div class="component-container">
      <transition name="fade">
        <router-view></router-view>
      </transition>
      <link href="https://fonts.googleapis.com/css?family=Droid+Serif" rel="stylesheet">
    </div>    
  </div>
</template>

<script>
  import navi from 'components/Navi'
  import videoBackground from 'components/VideoBackground'
  import UglyLoginBox from 'components/UglyLoginBox'
  export default {
    name: 'Main',
    components: {
      navi,videoBackground,UglyLoginBox
    },
    data() {
      return {
        naviData: [
          { name: '博文', hoverBackground: 'url(//cn.bing.com/az/hprichbg/rb/Dongdaemun_ZH-CN10736487148_1920x1080.jpg)',hoverColor:"rgba(255,197,100,0.4)",textColor:"rgba(246,210,0,1)", link: '/blog' },
          { name: '我们', hoverBackground: 'url(/static/img/us.jpg)',hoverColor:"rgba(145,42,42,0.6)",textColor:"#FFB140", link: '/us'}
        ],
        msg: 'Wang & Sha'
      }
    },
    computed:{      
        currentRouteItem(){
            for(var item in this.naviData){
                if(this.naviData[item].link==this.$route.matched[1].path){
                    return this.naviData[item]
                }
            }
            return {hoverColor:"#fff"}
        }
    }
  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .main {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .site-title {
    font-family: 'Droid Serif', serif;
    transition: all 1s;
    position: relative;
    top:0;
    /*color:rgba(20, 10, 20, 0.9);*/
    color:rgba(255,250,255,0.85);
    padding-right: 0.5em;
    margin-top: 30px;
  }

  @media (max-width: 500px){
    .site-title-main{
      display: flex;
      flex-direction: column;
      padding: 0;
      margin: 0;
    }
    .main{
      align-items: center;
    }
  }
  .component-container{
    margin-top: 20px;
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    z-index: -1;
    overflow: hidden;
  }
  *::-webkit-scrollbar{
    width: 8px;
    background-color: transparent;
    position: relative;
  }
  /*定义滚动条的轨道，内阴影及圆角*/
  *::-webkit-scrollbar-track{
    border-radius: 8px;
    background-color: #f5f5f5;
    position: relative;
    left: -5px;
    transition: all 0.2s;
  }
  /*定义滑块，内阴影及圆角*/
  *::-webkit-scrollbar-thumb{
    background-color: rgba(120,120,120,0.6) ;
    transition: all 0.2s;
  }
  *::-webkit-scrollbar-track:window-inactive{
    background-color:rgba(0,0,0,0);
  }
  *::-webkit-scrollbar-thumb:window-inactive{
    background-color: rgba(120,120,120,0.1) ;
  }
  .component-container>*{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  .site-title-main{
    color: rgba(223,145,145,0.4);
    font-size: 4em;
    top:15%;
    text-shadow: 0px 0px 6px rgba(212, 166,50,0.6 );
  }


  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
    box-sizing: border-box;
    height:100%;
    overflow: hidden;
  }

</style>
