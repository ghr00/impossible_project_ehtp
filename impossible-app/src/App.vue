<template>
  <div id="app">
    <MainMenu></MainMenu>

    <router-view/>

    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import MainMenu from '@/components/Menu/MainMenu.vue'
import Footer from '@/components/Menu/Footer.vue'

import { EventBus } from '@/services/event-bus.js';

var Documents = [];

export default {
  name: 'App',
  components: {
    MainMenu,
    Footer,
  },
  data() {
    return {
      
    }
  },
  method:{
    moveNext(){
    }
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

body {
  padding-top: 100px
  
}

.maxContainer {
  padding-top: 200px;
  padding-bottom:200px; 
  max-width:1170px;
  max-height:1170px;
}

.maxContainer2 {
  padding-top: 100px;
  padding-bottom:100px;
}


.fullpage-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
