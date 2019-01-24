<template>
  <div>
    <router-view></router-view>
  <nav v-show="active==true" class="bottom-nav">
    <router-link to="/msg" tag="div" class="bottom-nav-item">Msg</router-link>
    <router-link to="/con" tag="div" class="bottom-nav-item">Con</router-link>
    <router-link to="/dis" tag="div" class="bottom-nav-item">Dis</router-link>
    <!--这个写法 有名路由更好 路径有变化时改动路由文件即可 不用每个引用的地方都去变动-->
    <router-link :to="{name:'Me'}" tag="div" class="bottom-nav-item">Me</router-link>

    <!--由于单页应用不切换页面所以主页面上的公共组件(例如底部menu)是一直在的，想隐藏需要拿个flag做特殊处理-->
    <!--上面写法无法正常添加v-on事件，得用这种写法，不过就需要处理下a样式了-->
    <router-link class="bottom-nav-item" to="/hid"><div class="bottom-nav-item" @click="click">隐藏</div></router-link>

    <!--这种写法相当于外面套了一层a标签，不好，上面写法更佳 没有多套标签 套的还是div-->
    <!--<router-link to="/con"><div class="bottom-nav-item">Con</div></router-link>-->

    <!--<button @click="click">点击移除bar</button>-->
  </nav>
  </div>
</template>

<script>
  export default {
    name: "BottomNav",
    data:()=>({
      active:true
    }),
    methods: {
      click(){
        this.active = false;
        console.log(this.active);
      }
    }
  }
</script>

<style scoped lang="scss">
  a{
    display: block;
    text-decoration: none;
  }
  .bottom-nav {
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 60px;
    box-shadow: 0 0 5px grey;
    align-items: center;
    .bottom-nav-item {
      flex: 1;
      text-align: center;
      height: 100%;
      line-height: 60px;
      background: grey;
      color: white;
      border-right: 1px solid white;
      cursor: pointer;
    }
  }
</style>
