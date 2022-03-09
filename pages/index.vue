<template>
  <div class="home-page">
    <AppNavbar />
    <div class="body">
      <BodyWrapper />
      <Widget />
    </div>
  </div>
</template>

<script>
import AppNavbar from "../components/AppNavbar.vue";
export default {
  components: { AppNavbar },
  name: "IndexPage",
};
</script>

<style lang="scss">
@import "~/assets/styles/main.scss";
.home-page {
  font-family: "GT America", sans-serif;
  .body {
    display: flex;
    justify-content: space-between;
    padding-bottom: 32px;
    @include mobile {
      @apply flex-col-reverse  p-0 pb-24;
    }
  }
}
</style>
