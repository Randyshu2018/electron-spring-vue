<template>
  <div id="app">
    <!--<router-view />-->
    <!-- router-link 定义点击后导航到哪个路径下 -->
    <!--<p>user data:{{userData}}</p>-->
    <!--<button @click="addUserData">添加用户</button>-->
    <!--<button @click="clearUserData">清除用户</button>-->

    <!--<router-link to="/home">Home</router-link>-->
    <!--<router-link to="/about">About</router-link>-->
    <router-view></router-view>
  </div>
</template>

<script>
//import HomePage from './page/HomePage.vue'
import {  mapState,mapActions } from 'vuex'

export default {
  computed: {
      ...mapState({
          userData: state => state.userData
      }),
//      ...mapGetters('cart', {
//          products: 'cartProducts',
//          total: 'cartTotalPrice'
//      })
  },
    methods: {
        ...mapActions([
           'setUserData'
        ]),
        clearUserData:function () {
            this.$store.dispatch('setUserData',)
            this.$router.push("/login");
        },
        addUserData:function () {
            this.$store.dispatch('setUserData',{"userName":"rrr"})
            this.$router.push("/home");
        }
    },
    created () {
//        this.$store.dispatch('setUserData',{"userName":"randy"})
    },
  name: 'app',
//  components: {
//    HomePage
//  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px;
}
</style>
