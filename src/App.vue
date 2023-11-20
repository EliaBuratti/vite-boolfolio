<script>

import HelloWorld from './components/HelloWorld.vue';
export default {
  name: 'App',

  components: {
    HelloWorld,
  },
}
</script>

<template>
  <router-view></router-view>
</template>

<style lang="scss" scoped>
@use './assets/scss/app.scss' as *;
</style>
