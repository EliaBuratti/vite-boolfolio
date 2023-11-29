<script>
import NavBar from './components/partials/NavBar.vue';
import FooterInfo from './components/partials/FooterInfo.vue';

export default {
  name: 'App',

  components: {
    NavBar,
    FooterInfo,
  },

}
</script>

<template>
  <NavBar />

  <router-view></router-view>

  <FooterInfo />
</template>

<style lang="scss" scoped>
@use './assets/scss/app.scss' as *;
</style>
